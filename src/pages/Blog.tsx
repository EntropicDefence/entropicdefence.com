import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'
import Button from '@/components/Button'
import { useI18n } from '@/i18n'
import { getPosts } from '@/blog/posts'
import { blogUi, formatPostDate } from '@/blog/ui'

export default function Blog() {
  const { lang } = useI18n()
  const ui = blogUi[lang]
  const posts = getPosts(lang)

  return (
    <>
      <PageHero eyebrow={ui.eyebrow} title={ui.title} description={ui.lead} />

      <section className="mx-auto max-w-7xl px-5 pb-24 lg:px-8">
        {posts.length === 0 ? (
          <p className="panel p-7 text-sm text-fog">{ui.empty}</p>
        ) : (
          <>
            <h2 className="sr-only">{ui.latest}</h2>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post, index) => (
                <Reveal key={post.slug} delay={index * 80} className="h-full">
                  <Link
                    to={`/${lang}/blog/${post.slug}`}
                    className="panel group flex h-full flex-col p-7 transition-colors hover:border-signal/50"
                  >
                    <p className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[10px] uppercase tracking-[0.2em] text-fog">
                      <time dateTime={post.date}>{formatPostDate(post.date, lang)}</time>
                      <span aria-hidden="true">·</span>
                      <span>
                        {post.minutes} {ui.minutesSuffix}
                      </span>
                    </p>
                    <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-frost">
                      {post.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-fog">
                      {post.description}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm text-signal">
                      {ui.readArticle}
                      <ArrowUpRight
                        className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </>
        )}

        <Reveal delay={160}>
          <div className="panel mt-10 flex flex-col items-start justify-between gap-6 p-7 sm:flex-row sm:items-center">
            <div>
              <h2 className="font-display text-lg font-semibold">{ui.ctaTitle}</h2>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-fog">{ui.ctaText}</p>
            </div>
            <Button to={`/${lang}/#contact`}>{ui.ctaButton}</Button>
          </div>
        </Reveal>
      </section>
    </>
  )
}
