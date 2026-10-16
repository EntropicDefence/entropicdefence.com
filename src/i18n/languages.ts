export type LanguageCode =
  | 'sv'
  | 'en'
  | 'fi'
  | 'da'
  | 'no'
  | 'lt'
  | 'et'
  | 'lv'
  | 'pl'
  | 'sl'
  | 'fr'
  | 'es'
  | 'th'

export interface LanguageMeta {
  code: LanguageCode
  /** Endonym — språkets namn på sitt eget språk */
  name: string
  /** Prefix som matchas mot navigator.language (t.ex. "nb-NO" → "no") */
  match: string[]
}

export const LANGUAGES: LanguageMeta[] = [
  { code: 'sv', name: 'Svenska', match: ['sv'] },
  { code: 'en', name: 'English', match: ['en'] },
  { code: 'fi', name: 'Suomi', match: ['fi'] },
  { code: 'da', name: 'Dansk', match: ['da'] },
  { code: 'no', name: 'Norsk', match: ['no', 'nb', 'nn'] },
  { code: 'lt', name: 'Lietuvių', match: ['lt'] },
  { code: 'et', name: 'Eesti', match: ['et'] },
  { code: 'lv', name: 'Latviešu', match: ['lv'] },
  { code: 'pl', name: 'Polski', match: ['pl'] },
  { code: 'sl', name: 'Slovenščina', match: ['sl'] },
  { code: 'fr', name: 'Français', match: ['fr'] },
  { code: 'es', name: 'Español', match: ['es'] },
  { code: 'th', name: 'ไทย', match: ['th'] },
]

export const DEFAULT_LANGUAGE: LanguageCode = 'en'

export function languageFromNavigator(value: string | undefined): LanguageCode {
  if (!value) return DEFAULT_LANGUAGE
  const v = value.toLowerCase()
  for (const lang of LANGUAGES) {
    if (lang.match.some((prefix) => v === prefix || v.startsWith(`${prefix}-`))) {
      return lang.code
    }
  }
  return DEFAULT_LANGUAGE
}

export function isLanguageCode(value: string | null | undefined): value is LanguageCode {
  return LANGUAGES.some((lang) => lang.code === value)
}

/**
 * Plockar ut språkkoden ur första URL-segmentet: `/sv/papers` → `sv`,
 * `/papers` eller `/` → `undefined`.
 */
export function languageFromPath(pathname: string): LanguageCode | undefined {
  const segment = pathname.split('/')[1]
  return isLanguageCode(segment) ? segment : undefined
}

/**
 * Tar bort språkprefixet ur en sökväg: `/sv/papers` → `/papers`, `/sv` → `/`,
 * `/papers` → `/papers`. Används för att slå upp rätt meta/rutt oavsett språk.
 */
export function stripLanguagePrefix(pathname: string): string {
  const segments = pathname.split('/')
  if (segments[1] && isLanguageCode(segments[1])) {
    segments.splice(1, 1)
    return segments.join('/') || '/'
  }
  return pathname || '/'
}
