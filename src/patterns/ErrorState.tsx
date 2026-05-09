import type { ReactNode } from 'react'

export type ErrorStateProps = {
  title: string
  description: string
  action?: ReactNode
}

export function ErrorState({ title, description, action }: ErrorStateProps) {
  return (
    <section className="kz-state-card kz-state-card--error" role="alert">
      <p className="kz-state-card__eyebrow">Error state</p>
      <h3 className="kz-state-card__title">{title}</h3>
      <p className="kz-state-card__description">{description}</p>
      {action ? <div className="kz-state-card__action">{action}</div> : null}
    </section>
  )
}
