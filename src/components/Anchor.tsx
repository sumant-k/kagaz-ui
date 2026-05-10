import clsx from 'clsx'
import type { AnchorHTMLAttributes } from 'react'

export type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string
  variant?: 'nav' | 'subtle' | 'cta'
}

export function Anchor({
  className,
  href,
  variant = 'nav',
  ...props
}: AnchorProps) {
  return (
    <a
      href={href}
      className={clsx('kz-anchor', `kz-anchor--${variant}`, className)}
      {...props}
    />
  )
}
