import clsx from 'clsx'
import type { HTMLAttributes, ReactNode } from 'react'

export type ChipItem = {
  id: string
  label: ReactNode
}

export type ChipsProps = HTMLAttributes<HTMLUListElement> & {
  items: ChipItem[]
}

export function Chips({ className, items, ...props }: ChipsProps) {
  return (
    <ul className={clsx('kz-chips', className)} {...props}>
      {items.map((item) => (
        <li key={item.id} className="kz-chip">
          {item.label}
        </li>
      ))}
    </ul>
  )
}
