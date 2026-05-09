import clsx from 'clsx'
import { useId } from 'react'
import type { TextareaHTMLAttributes } from 'react'

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string
  helperText?: string
}

export function Textarea({ label, helperText, className, id, rows = 4, ...props }: TextareaProps) {
  const fallbackId = useId()
  const textareaId = id ?? fallbackId

  return (
    <label className="kz-field" htmlFor={textareaId}>
      <span className="kz-field__label">{label}</span>
      <textarea id={textareaId} rows={rows} className={clsx('kz-textarea', className)} {...props} />
      {helperText ? <span className="kz-field__helper">{helperText}</span> : null}
    </label>
  )
}
