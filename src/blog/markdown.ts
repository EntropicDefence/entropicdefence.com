/**
 * Liten markdown-renderare för bloggartiklar.
 *
 * Varför inte ett bibliotek: artiklarna skrivs av oss, vi behöver bara en
 * förutsägbar delmängd (rubriker, stycken, listor, citat, fet/kursiv, kod,
 * länkar), och allt HTML-escapas innan något sätts in. Ingen rå HTML tillåts —
 * då kan inget i en artikel bli en XSS-väg.
 *
 * Stöds:
 *   ## / ### rubriker · stycken · - lista · 1. lista · > citat · --- linje
 *   **fet** · *kursiv* · `kod` · [text](länk)
 */

const ESCAPES: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (c) => ESCAPES[c])
}

/** Bara säkra länkar får bli klickbara. Allt annat renderas som text. */
function safeHref(href: string): string | undefined {
  const url = href.trim()
  if (/^(https?:\/\/|\/|#|mailto:)/i.test(url)) {
    return escapeHtml(url)
  }
  return undefined
}

function renderInline(raw: string): string {
  const tokens: string[] = []
  const token = (html: string): string => {
    tokens.push(html)
    return `\u0000${tokens.length - 1}\u0000`
  }

  let text = raw

  // 1. Inline-kod först, så att markering inuti kod inte tolkas.
  text = text.replace(/`([^`]+)`/g, (_m, code: string) => token(`<code>${code}</code>`))

  // 2. Länkar. Etiketten får fet/kursiv men inte nya länkar.
  text = text.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (match, label: string, href: string) => {
    const safe = safeHref(href)
    if (!safe) return match
    return token(`<a href="${safe}" class="text-signal underline decoration-signal/40 underline-offset-4 hover:decoration-signal">${label}</a>`)
  })

  // 3. Betoning.
  text = text.replace(/\*\*([^*]+)\*\*/g, '<strong class="text-frost">$1</strong>')
  text = text.replace(/(^|[^*])\*([^*]+)\*/g, '$1<em>$2</em>')

  // 4. Tillbaka med kod och länkar.
  return text.replace(/\u0000(\d+)\u0000/g, (_m, i: string) => tokens[Number(i)] ?? '')
}

function inline(raw: string): string {
  return renderInline(escapeHtml(raw))
}

const isListItem = (line: string) => /^[-*]\s+/.test(line)
const isOrderedItem = (line: string) => /^\d+\.\s+/.test(line)

export function renderMarkdown(markdown: string): string {
  const lines = markdown.replace(/\r\n/g, '\n').split('\n')
  const out: string[] = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i]

    if (line.trim() === '') {
      i += 1
      continue
    }

    // Horisontell linje
    if (/^---+$/.test(line.trim())) {
      out.push('<hr class="my-10 border-line" />')
      i += 1
      continue
    }

    // Rubriker (h1 används aldrig i brödtext — titeln är h1)
    const heading = line.match(/^(#{2,4})\s+(.*)$/)
    if (heading) {
      const level = heading[1].length
      const cls =
        level === 2
          ? 'mt-12 mb-4 font-display text-2xl font-semibold tracking-tight text-frost'
          : level === 3
            ? 'mt-8 mb-3 font-display text-lg font-semibold text-frost'
            : 'mt-6 mb-2 font-display text-base font-semibold text-frost'
      out.push(`<h${level} class="${cls}">${inline(heading[2])}</h${level}>`)
      i += 1
      continue
    }

    // Citat
    if (line.startsWith('> ')) {
      const quote: string[] = []
      while (i < lines.length && lines[i].startsWith('> ')) {
        quote.push(lines[i].slice(2))
        i += 1
      }
      out.push(
        `<blockquote class="my-6 border-l-2 border-signal/50 pl-5 text-lg leading-relaxed text-frost">${inline(quote.join(' '))}</blockquote>`,
      )
      continue
    }

    // Punktlista
    if (isListItem(line)) {
      const items: string[] = []
      while (i < lines.length && isListItem(lines[i])) {
        items.push(lines[i].replace(/^[-*]\s+/, ''))
        i += 1
      }
      out.push(
        `<ul class="my-5 space-y-2.5 pl-1">${items
          .map(
            (item) =>
              `<li class="relative pl-6 leading-relaxed text-fog before:absolute before:left-0 before:top-[0.62em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-signal/70">${inline(item)}</li>`,
          )
          .join('')}</ul>`,
      )
      continue
    }

    // Numrerad lista
    if (isOrderedItem(line)) {
      const items: string[] = []
      while (i < lines.length && isOrderedItem(lines[i])) {
        items.push(lines[i].replace(/^\d+\.\s+/, ''))
        i += 1
      }
      out.push(
        `<ol class="my-5 list-decimal space-y-2.5 pl-6 leading-relaxed text-fog">${items
          .map((item) => `<li class="pl-1">${inline(item)}</li>`)
          .join('')}</ol>`,
      )
      continue
    }

    // Stycke — samla rader till en tom rad
    const para: string[] = []
    while (
      i < lines.length &&
      lines[i].trim() !== '' &&
      !lines[i].startsWith('#') &&
      !lines[i].startsWith('> ') &&
      !isListItem(lines[i]) &&
      !isOrderedItem(lines[i]) &&
      !/^---+$/.test(lines[i].trim())
    ) {
      para.push(lines[i])
      i += 1
    }
    out.push(`<p class="my-5 leading-relaxed text-fog">${inline(para.join(' '))}</p>`)
  }

  return out.join('\n')
}

/** Grov ordräkning för lästid (ord/min). */
export function readingMinutes(markdown: string): number {
  const words = markdown.trim().split(/\s+/).length
  return Math.max(1, Math.round(words / 220))
}
