import type { ReactNode } from 'react'

export type EmptyStateProps = {
  title: string
  description: string
  action?: ReactNode
}

export function EmptyState({ title, description, action }: EmptyStateProps) {
  return (
    <section className="kz-state-card kz-state-card--empty">
      <p className="kz-state-card__eyebrow">Empty state</p>
      <h3 className="kz-state-card__title">{title}</h3>
      <p className="kz-state-card__description">{description}</p>
      {action ? <div className="kz-state-card__action">{action}</div> : null}
    </section>
  )
}
