import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import App from './App'
import {
  DEFAULT_LANGUAGE,
  LanguageProvider,
  languageFromPath,
  stripLanguagePrefix,
  translations,
  type LanguageCode,
} from './i18n'

/**
 * SSR-ingång för prerendering. Renderar hela appen till statisk HTML för en
 * given URL. `LanguageProvider` läser språket ur URL:en (`/sv/papers` → sv),
 * så ingen extra språkprop behövs — `<html lang>` sätts av prerender-skriptet.
 */
export function render(url: string): { html: string } {
  const html = renderToString(
    <StaticRouter location={url}>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </StaticRouter>,
  )
  return { html }
}

const META_KEYS: Record<string, keyof (typeof translations)['sv']['meta']> = {
  '/': 'home',
  '/checkout': 'checkout',
  '/checkout/extern': 'checkoutExtern',
  '/checkout/intern': 'checkoutIntern',
  '/checkout/ledning': 'checkoutLedning',
  '/success': 'success',
  '/papers': 'papers',
  '/legal': 'legal',
  '/support': 'support',
  '/advisories': 'advisories',
  '/disclosures': 'disclosures',
  '/status': 'status',
}

/**
 * Titel + meta description för en URL, oavsett språkprefix. Används av
 * prerender-skriptet för att ge varje statisk sida rätt <title> och
 * meta description på rätt språk.
 */
export function getPageMeta(url: string): { title: string; description: string; lang: LanguageCode } {
  const lang = languageFromPath(url) ?? DEFAULT_LANGUAGE
  const pagePath = stripLanguagePrefix(url)
  const key = META_KEYS[pagePath] ?? 'notFound'
  const meta = translations[lang].meta[key]
  return { title: meta.title, description: meta.description, lang }
}
