import { useEffect, useRef, useState, type ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
  delay?: number
}

/**
 * Scroll-avslöjande wrapper. Börjar synlig (SSR + no-JS + reduced-motion
 * ser alltid innehållet) och döljer endast element som inte är i vy när
 * JavaScript väl kör.
 */
export default function Reveal({ children, className = '', delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced || !('IntersectionObserver' in window)) return

    const obs = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting)
        if (entry.isIntersecting) obs.disconnect()
      },
      { threshold: 0.12 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      } ${className}`}
    >
      {children}
    </div>
  )
}
