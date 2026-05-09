export type LoadingStateProps = {
  title: string
  description: string
}

export function LoadingState({ title, description }: LoadingStateProps) {
  return (
    <section className="kz-state-card kz-state-card--loading" aria-live="polite">
      <div className="kz-loading-pulse" />
      <h3 className="kz-state-card__title">{title}</h3>
      <p className="kz-state-card__description">{description}</p>
    </section>
  )
}
