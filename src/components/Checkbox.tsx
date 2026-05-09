import type { InputHTMLAttributes } from 'react'

export type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & {
  label: string
  description?: string
}

export function Checkbox({ label, description, ...props }: CheckboxProps) {
  return (
    <label className="kz-check-control">
      <input type="checkbox" className="kz-checkbox" {...props} />
      <span className="kz-check-control__content">
        <span className="kz-check-control__label">{label}</span>
        {description ? <span className="kz-check-control__description">{description}</span> : null}
      </span>
    </label>
  )
}
