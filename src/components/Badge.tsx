import clsx from 'clsx'
import type { ReactNode } from 'react'

export type BadgeProps = {
  children: ReactNode
  tone?: 'neutral' | 'accent' | 'success' | 'warning' | 'critical'
}

export function Badge({ children, tone = 'neutral' }: BadgeProps) {
  return <span className={clsx('kz-badge', `kz-badge--${tone}`)}>{children}</span>
}
