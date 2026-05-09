import clsx from 'clsx'
import { useId } from 'react'
import type { InputHTMLAttributes } from 'react'

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  helperText?: string
  error?: string
}

export function Input({ label, helperText, error, className, id, ...props }: InputProps) {
  const fallbackId = useId()
  const inputId = id ?? fallbackId

  return (
    <label className="kz-field" htmlFor={inputId}>
      <span className="kz-field__label">{label}</span>
      <input
        id={inputId}
        className={clsx('kz-input', error && 'kz-input--error', className)}
        {...props}
      />
      {error ? <span className="kz-field__error">{error}</span> : helperText ? <span className="kz-field__helper">{helperText}</span> : null}
    </label>
  )
}
