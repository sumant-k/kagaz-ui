import clsx from 'clsx'
import type { HTMLAttributes, ReactNode } from 'react'
import { Chips, type ChipItem } from '../components/Chips'

export type ArticleSection = {
  label: string
  content: ReactNode
}

export type ArticleProps = HTMLAttributes<HTMLElement> & {
  eyebrow?: string
  title: string
  summary?: ReactNode
  sections?: ArticleSection[]
  chips?: ChipItem[]
  cta?: ReactNode
}

export function Article({
  className,
  eyebrow,
  title,
  summary,
  sections = [],
  chips,
  cta,
  ...props
}: ArticleProps) {
  return (
    <article className={clsx('kz-article', className)} {...props}>
      {eyebrow ? <p className="kz-article__eyebrow">{eyebrow}</p> : null}
      <h3 className="kz-article__title">{title}</h3>
      {summary ? <div className="kz-article__summary">{summary}</div> : null}

      {sections.length > 0 ? (
        <div className="kz-article__sections">
          {sections.map((section) => (
            <section key={section.label} className="kz-article__section">
              <p className="kz-article__section-label">{section.label}</p>
              <div className="kz-article__section-content">{section.content}</div>
            </section>
          ))}
        </div>
      ) : null}

      {chips?.length ? <Chips items={chips} className="kz-article__chips" /> : null}
      {cta ? <div className="kz-article__cta">{cta}</div> : null}
    </article>
  )
}
