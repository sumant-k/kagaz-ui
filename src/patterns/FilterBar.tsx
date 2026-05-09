import clsx from 'clsx'
import type { ReactNode } from 'react'

export type FilterBarProps = {
  title?: string
  className?: string
  children: ReactNode
  aside?: ReactNode
}

export function FilterBar({ title, className, children, aside }: FilterBarProps) {
  return (
    <section className={clsx('kz-filter-bar', className)}>
      {title ? <p className="kz-filter-bar__title">{title}</p> : null}
      <div className="kz-filter-bar__controls">{children}</div>
      {aside ? <div className="kz-filter-bar__aside">{aside}</div> : null}
    </section>
  )
}
