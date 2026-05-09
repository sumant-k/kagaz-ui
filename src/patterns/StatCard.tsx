import clsx from 'clsx'

export type StatCardProps = {
  label: string
  value: string
  meta?: string
  tone?: 'neutral' | 'accent'
}

export function StatCard({ label, value, meta, tone = 'neutral' }: StatCardProps) {
  return (
    <article className={clsx('kz-stat-card', `kz-stat-card--${tone}`)}>
      <p className="kz-stat-card__label">{label}</p>
      <p className="kz-stat-card__value">{value}</p>
      {meta ? <p className="kz-stat-card__meta">{meta}</p> : null}
    </article>
  )
}
