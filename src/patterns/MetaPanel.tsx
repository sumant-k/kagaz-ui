import clsx from 'clsx'
import type { HTMLAttributes, ReactNode } from 'react'

export type MetaPanelItem = {
  label: string
  value: ReactNode
}

export type MetaPanelProps = HTMLAttributes<HTMLElement> & {
  intro?: ReactNode
  items: MetaPanelItem[]
}

export function MetaPanel({ intro, items, className, ...props }: MetaPanelProps) {
  return (
    <aside className={clsx('kz-meta-panel', className)} {...props}>
      {intro ? <p className="kz-meta-panel__intro">{intro}</p> : null}
      <dl className="kz-meta-panel__list">
        {items.map((item) => (
          <div key={item.label} className="kz-meta-panel__row">
            <dt>{item.label}</dt>
            <dd>{item.value}</dd>
          </div>
        ))}
      </dl>
    </aside>
  )
}
