import clsx from 'clsx'
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

type ButtonBaseProps = {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md'
}

type ButtonElementProps = ButtonBaseProps & ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: undefined
}

type AnchorElementProps = ButtonBaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string
}

export type ButtonProps = ButtonElementProps | AnchorElementProps

export function Button({
  className,
  variant = 'primary',
  size = 'md',
  ...props
}: ButtonProps) {
  const classes = clsx('kz-button', `kz-button--${variant}`, `kz-button--${size}`, className)

  if ('href' in props && props.href) {
    return (
      <a
        className={classes}
        {...props}
      />
    )
  }

  const { type = 'button', ...buttonProps } = props as ButtonElementProps

  return (
    <button
      type={type}
      className={classes}
      {...buttonProps}
    />
  )
}
