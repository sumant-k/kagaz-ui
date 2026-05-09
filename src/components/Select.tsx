import clsx from 'clsx'
import { useId } from 'react'
import type { SelectHTMLAttributes } from 'react'

export type SelectOption = {
  label: string
  value: string
}

export type SelectProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, 'children'> & {
  label: string
  options: SelectOption[]
  helperText?: string
}

export function Select({ label, options, helperText, className, id, ...props }: SelectProps) {
  const fallbackId = useId()
  const selectId = id ?? fallbackId

  return (
    <label className="kz-field" htmlFor={selectId}>
      <span className="kz-field__label">{label}</span>
      <select id={selectId} className={clsx('kz-select', className)} {...props}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {helperText ? <span className="kz-field__helper">{helperText}</span> : null}
    </label>
  )
}
