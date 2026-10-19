import { LANGUAGES, type LanguageCode } from '@/i18n/languages'
import { readingMinutes, renderMarkdown } from '@/blog/markdown'

/**
 * Blogginnehållet ligger som markdown-filer i `content/blog/<språk>/<slug>.md`.
 * Filerna bakas in i bygget via `import.meta.glob`, så både klienten och
 * prerendern läser exakt samma text — ingen filsystemsläsning i webbläsaren.
 *
 * Lägg till en artikel = skapa en fil. Den dyker upp i listan, i sitemapen och
 * får egen statisk HTML automatiskt.
 */

type RawModule = string

const rawFiles = import.meta.glob<RawModule>('../../content/blog/*/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
})

export type BlogPost = {
  slug: string
  /** Grupperar översättningar av samma artikel. Default: slug. */
  translationKey: string
  lang: LanguageCode
  title: string
  description: string
  /** ISO-datum, t.ex. 2026-10-20 */
  date: string
  updated?: string
  tags: string[]
  minutes: number
  /** Renderad HTML (säker — allt escapas i markdown.ts) */
  html: string
}

const LANGUAGE_CODES = LANGUAGES.map((l) => l.code)

function parseFrontmatter(source: string): { data: Record<string, string>; body: string } {
  const normalized = source.replace(/\r\n/g, '\n')
  if (!normalized.startsWith('---\n')) {
    return { data: {}, body: normalized }
  }
  const end = normalized.indexOf('\n---', 4)
  if (end === -1) {
    return { data: {}, body: normalized }
  }
  const block = normalized.slice(4, end)
  const body = normalized.slice(end + 4).replace(/^\n+/, '')

  const data: Record<string, string> = {}
  for (const line of block.split('\n')) {
    if (!line.trim() || line.trim().startsWith('#')) continue
    const colon = line.indexOf(':')
    if (colon === -1) continue
    const key = line.slice(0, colon).trim()
    const value = line.slice(colon + 1).trim().replace(/^["']|["']$/g, '')
    data[key] = value
  }
  return { data, body }
}

function parseTags(value: string | undefined): string[] {
  if (!value) return []
  return value
    .replace(/^\[|\]$/g, '')
    .split(',')
    .map((tag) => tag.trim())
    .filter(Boolean)
}

function buildIndex(): Map<string, BlogPost> {
  const posts = new Map<string, BlogPost>()

  for (const [filePath, source] of Object.entries(rawFiles)) {
    // ../../content/blog/sv/min-slug.md
    const match = filePath.match(/content\/blog\/([a-z]{2})\/([a-z0-9-]+)\.md$/)
    if (!match) continue
    const [, lang, slug] = match
    if (!LANGUAGE_CODES.includes(lang as LanguageCode)) continue

    const { data, body } = parseFrontmatter(source)
    if (data.draft === 'true') continue
    if (!data.title || !data.description || !data.date) {
      throw new Error(`Blogginlägget ${filePath} saknar title/description/date i frontmatter`)
    }

    posts.set(`${lang}/${slug}`, {
      slug,
      translationKey: data.key ?? slug,
      lang: lang as LanguageCode,
      title: data.title,
      description: data.description,
      date: data.date,
      updated: data.updated,
      tags: parseTags(data.tags),
      minutes: readingMinutes(body),
      html: renderMarkdown(body),
    })
  }

  return posts
}

const index = buildIndex()

/** Alla publicerade inlägg på ett språk, nyast först. */
export function getPosts(lang: LanguageCode): BlogPost[] {
  return [...index.values()]
    .filter((post) => post.lang === lang)
    .sort((a, b) => b.date.localeCompare(a.date))
}

export function getPost(lang: LanguageCode, slug: string): BlogPost | undefined {
  return index.get(`${lang}/${slug}`)
}

/**
 * Översättningarna av en artikel, med rätt slug per språk.
 * Styr hreflang så vi aldrig länkar till en sida som inte finns.
 */
export function getPostTranslations(translationKey: string): { lang: LanguageCode; slug: string }[] {
  return LANGUAGE_CODES.flatMap((code) => {
    const post = [...index.values()].find(
      (entry) => entry.lang === code && entry.translationKey === translationKey,
    )
    return post ? [{ lang: code, slug: post.slug }] : []
  })
}

/** Alla publicerade inlägg, alla språk. */
export function getAllPosts(): BlogPost[] {
  return [...index.values()]
}

export function getRelatedPosts(post: BlogPost, limit = 3): BlogPost[] {
  return getPosts(post.lang)
    .filter((candidate) => candidate.slug !== post.slug)
    .sort((a, b) => {
      const sharedA = a.tags.filter((tag) => post.tags.includes(tag)).length
      const sharedB = b.tags.filter((tag) => post.tags.includes(tag)).length
      return sharedB - sharedA
    })
    .slice(0, limit)
}
