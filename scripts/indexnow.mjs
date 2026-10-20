#!/usr/bin/env node
/**
 * IndexNow — säger till Bing, Yandex, Seznam och Naver att URL:erna finns.
 *
 * Ingen inloggning, inget konto, ingen avgift. Google använder INTE IndexNow
 * (Google sköter sig via sitemap + Search Console); men Bing-indexet är det som
 * DuckDuckGo, Qwant och ChatGPT-sök läser, så en ping räcker långt.
 *
 * Så funkar det:
 *   1. Nyckelfilen `public/<nyckel>.txt` ligger redan på sajten och innehåller
 *      exakt nyckeln. Den måste svara 200 på https://<host>/<nyckel>.txt.
 *   2. Skriptet hämtar sitemap.xml, plockar ut alla <loc> och POSTar dem till
 *      api.indexnow.org. Tjänsten vidarebefordrar till alla deltagande motorer.
 *
 * Kör:
 *   node scripts/indexnow.mjs --dry-run     # visa vad som skulle skickas
 *   node scripts/indexnow.mjs               # skicka på riktigt
 *   node scripts/indexnow.mjs --urls https://.../sv,https://.../en
 *
 * Kör EFTER att deployen är klar — nyckelfilen måste vara live först.
 */

import { readdir, readFile } from 'node:fs/promises';

const HOST = 'entropicdefence.com';
const ORIGIN = `https://${HOST}`;
const ENDPOINT = 'https://api.indexnow.org/indexnow';
const MAX_PER_REQUEST = 10_000; // IndexNow-gräns per anrop

const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');
const customUrls = (() => {
  const i = args.indexOf('--urls');
  if (i === -1) return null;
  return (args[i + 1] ?? '')
    .split(',')
    .map((u) => u.trim())
    .filter(Boolean);
})();

/** Hittar nyckelfilen i public/ och kontrollerar att innehållet matchar filnamnet. */
async function findKey() {
  const dir = new URL('../public/', import.meta.url);
  let names;
  try {
    names = await readdir(dir);
  } catch {
    throw new Error(`Hittar inte public/-mappen (${dir.pathname}).`);
  }

  for (const name of names) {
    const match = /^([0-9a-f]{8,128})\.txt$/i.exec(name);
    if (!match) continue;
    const content = (await readFile(new URL(name, dir), 'utf8')).trim();
    if (content.toLowerCase() === match[1].toLowerCase()) {
      return { key: content.toLowerCase(), file: name };
    }
  }

  throw new Error(
    'Ingen giltig IndexNow-nyckelfil i public/. Förväntar en fil som heter <nyckel>.txt ' +
      'där innehållet är exakt samma nyckel (8–128 tecken, hex).',
  );
}

/** Nyckelfilen måste vara live innan vi pingar — annars avvisar motorerna anropet. */
async function assertKeyIsLive(key) {
  const url = `${ORIGIN}/${key}.txt`;
  const res = await fetch(url, { redirect: 'follow' });
  if (!res.ok) {
    throw new Error(
      `Nyckelfilen svarar ${res.status} på ${url}. Deploya först, kör sedan skriptet igen.`,
    );
  }
  const body = (await res.text()).trim().toLowerCase();
  if (body !== key) {
    throw new Error(`Nyckelfilen på ${url} innehåller inte nyckeln. Kontrollera public/${key}.txt.`);
  }
  return url;
}

/** Alla URL:er från sitemap.xml (endast samma värd). */
async function fetchSitemapUrls() {
  const sitemapUrl = `${ORIGIN}/sitemap.xml`;
  const res = await fetch(sitemapUrl);
  if (!res.ok) throw new Error(`sitemap.xml svarar ${res.status} (${sitemapUrl}).`);
  const xml = await res.text();

  const urls = [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map((m) => m[1]);
  const own = urls.filter((u) => u.startsWith(`${ORIGIN}/`));
  const rejected = urls.length - own.length;

  if (own.length === 0) throw new Error('Sitemapen innehöll inga URL:er för rätt värd.');
  if (rejected > 0) {
    console.warn(`Varning: hoppade över ${rejected} URL:er som inte tillhör ${HOST}.`);
  }
  return [...new Set(own)];
}

function chunk(list, size) {
  const out = [];
  for (let i = 0; i < list.length; i += size) out.push(list.slice(i, i + size));
  return out;
}

async function main() {
  const { key, file } = await findKey();
  console.log(`IndexNow-nyckel: ${key}  (public/${file})`);
  console.log(`Värd: ${HOST}\n`);

  const urls = customUrls ?? (await fetchSitemapUrls());
  console.log(`${urls.length} URL:er att meddela.`);

  if (dryRun) {
    for (const u of urls.slice(0, 10)) console.log(`  · ${u}`);
    if (urls.length > 10) console.log(`  … och ${urls.length - 10} till`);
    console.log('\n--dry-run: inget skickades.');
    return;
  }

  const keyLocation = await assertKeyIsLive(key);
  console.log(`Nyckelfil live: ${keyLocation}\n`);

  let ok = 0;
  const batches = chunk(urls, MAX_PER_REQUEST);

  for (const [i, batch] of batches.entries()) {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'content-type': 'application/json; charset=utf-8' },
      body: JSON.stringify({ host: HOST, key, keyLocation, urlList: batch }),
    });

    const label = `Omgång ${i + 1}/${batches.length} (${batch.length} URL:er)`;
    // 200 = mottaget, 202 = mottaget (nyckeln verifieras asynkront).
    if (res.ok) {
      ok += batch.length;
      console.log(`${label}: ${res.status} OK`);
    } else {
      const text = (await res.text().catch(() => '')).slice(0, 300);
      console.error(`${label}: ${res.status} ${res.statusText} ${text}`);
    }
  }

  console.log(
    `\nKlart: ${ok}/${urls.length} URL:er skickade till IndexNow ` +
      `(Bing, Yandex, Seznam, Naver). Google berörs inte — där gäller sitemap + GSC.`,
  );
  if (ok !== urls.length) process.exitCode = 1;
}

main().catch((error) => {
  console.error(`Fel: ${error.message}`);
  process.exitCode = 1;
});
