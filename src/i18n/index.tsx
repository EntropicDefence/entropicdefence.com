import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { sv, type Dictionary } from './sv'
import { en } from './en'
import { fi } from './fi'
import { da } from './da'
import { no } from './no'
import { lt } from './lt'
import { et } from './et'
import { lv } from './lv'
import { pl } from './pl'
import { sl } from './sl'
import { fr } from './fr'
import { es } from './es'
import { th } from './th'
import {
  DEFAULT_LANGUAGE,
  isLanguageCode,
  languageFromNavigator,
  languageFromPath,
  stripLanguagePrefix,
  LANGUAGES,
  type LanguageCode,
} from './languages'

export {
  LANGUAGES,
  DEFAULT_LANGUAGE,
  isLanguageCode,
  languageFromNavigator,
  languageFromPath,
  stripLanguagePrefix,
}
export type { LanguageCode, Dictionary }

export const translations: Record<LanguageCode, Dictionary> = {
  sv,
  en,
  fi,
  da,
  no,
  lt,
  et,
  lv,
  pl,
  sl,
  fr,
  es,
  th,
}

interface I18nContextValue {
  lang: LanguageCode
  setLang: (lang: LanguageCode) => void
  t: Dictionary
}

const I18nContext = createContext<I18nContextValue | null>(null)

/**
 * Språkstyrd via URL: `/sv/papers` → svenska, `/fi` → finska.
 * URL är källa till sanning (indexerbart + delbart). Ingen localStorage.
 */
export function LanguageProvider({ children }: { children: ReactNode }) {
  const location = useLocation()
  const navigate = useNavigate()
  const urlLang = languageFromPath(location.pathname)

  const [lang, setLangState] = useState<LanguageCode>(urlLang ?? DEFAULT_LANGUAGE)

  // Håll tillståndet synkat när URL:en ändras (bakåt/framåt, direktlänk).
  useEffect(() => {
    if (urlLang && urlLang !== lang) setLangState(urlLang)
  }, [urlLang, lang])

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const setLang = useCallback(
    (next: LanguageCode) => {
      setLangState(next)
      if (next === urlLang) return
      const rest = stripLanguagePrefix(location.pathname)
      navigate(`/${next}${rest === '/' ? '' : rest}`)
    },
    [location.pathname, navigate, urlLang],
  )

  const value = useMemo<I18nContextValue>(() => ({ lang, setLang, t: translations[lang] }), [
    lang,
    setLang,
  ])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext)
  if (!ctx) {
    throw new Error('useI18n måste användas innanför <LanguageProvider>')
  }
  return ctx
}
