import { useEffect, useState } from 'react'
import { ShieldCheck } from 'lucide-react'
import { useI18n } from '@/i18n'

/**
 * Diskret statusruta som bekräftar att inga cookies sparas.
 * Ingen localStorage/persistens — en kort information per sidladdning,
 * alltid i sidans eget språk via useI18n().
 */
export default function CookieToast() {
  const { t } = useI18n()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const show = window.setTimeout(() => setVisible(true), 1400)
    const hide = window.setTimeout(() => setVisible(false), 6500)
    return () => {
      window.clearTimeout(show)
      window.clearTimeout(hide)
    }
  }, [])

  if (!visible) return null

  return (
    <div
      role="status"
      className="pointer-events-none fixed inset-x-0 bottom-6 z-50 flex justify-center px-5"
    >
      <button
        type="button"
        onClick={() => setVisible(false)}
        className="pointer-events-auto flex max-w-[92vw] items-start gap-2 rounded-full border border-line bg-void/95 px-4 py-2 text-left text-xs leading-relaxed text-fog shadow-lg shadow-black/40 backdrop-blur transition-colors hover:text-frost focus-visible:outline-2 focus-visible:outline-signal sm:items-center"
      >
        <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-signal sm:mt-0" aria-hidden="true" />
        {t.cookie.noCookies}
      </button>
    </div>
  )
}
