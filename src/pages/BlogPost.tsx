import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import Button from '@/components/Button'
import Reveal from '@/components/Reveal'
import NotFound from '@/pages/NotFound'
import { useI18n } from '@/i18n'
import { getPost, getRelatedPosts } from '@/blog/posts'
import { blogUi, formatPostDate } from '@/blog/ui'

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const { lang } = useI18n()
  const ui = blogUi[lang]
  const post = slug ? getPost(lang, slug) : undefined

  if (!post) {
    return <NotFound />
  }

  const related = getRelatedPosts(post)

  return (
    <article className="mx-auto max-w-3xl px-5 pb-24 pt-32 lg:pt-40">
      <Link
        to={`/${lang}/blog`}
        className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-fog transition-colors hover:text-frost"
      >
        <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
        {ui.allArticles}
      </Link>

      <header className="mt-8">
        {post.tags.length > 0 && (
          <p className="mb-4 flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-signal">
            <span className="h-px w-10 bg-signal/60" aria-hidden="true" />
            {post.tags.join(' · ')}
          </p>
        )}
        <h1 className="font-display text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
          {post.title}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-fog">{post.description}</p>
        <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[10px] uppercase tracking-[0.2em] text-fog">
          <span>
            {ui.published} <time dateTime={post.date}>{formatPostDate(post.date, lang)}</time>
          </span>
          <span aria-hidden="true">·</span>
          <span>
            {post.minutes} {ui.minutesSuffix}
          </span>
          {post.updated && post.updated !== post.date && (
            <>
              <span aria-hidden="true">·</span>
              <span>
                {ui.updated} <time dateTime={post.updated}>{formatPostDate(post.updated, lang)}</time>
              </span>
            </>
          )}
        </p>
      </header>

      <div className="mt-10 border-t border-line pt-4" dangerouslySetInnerHTML={{ __html: post.html }} />

      <Reveal>
        <div className="panel mt-14 flex flex-col items-start justify-between gap-6 p-7 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-display text-lg font-semibold">{ui.ctaTitle}</h2>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-fog">{ui.ctaText}</p>
          </div>
          <Button to={`/${lang}/#contact`}>{ui.ctaButton}</Button>
        </div>
      </Reveal>

      {related.length > 0 && (
        <section aria-labelledby="related-heading" className="mt-14">
          <h2 id="related-heading" className="font-display text-lg font-semibold">
            {ui.related}
          </h2>
          <ul className="mt-5 space-y-3">
            {related.map((item) => (
              <li key={item.slug}>
                <Link
                  to={`/${lang}/blog/${item.slug}`}
                  className="flex items-start justify-between gap-4 rounded-lg border border-line/70 px-4 py-3 transition-colors hover:border-signal/50"
                >
                  <span className="text-sm leading-relaxed text-frost">{item.title}</span>
                  <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.2em] text-fog">
                    {item.minutes} {ui.minutesSuffix}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  )
}
