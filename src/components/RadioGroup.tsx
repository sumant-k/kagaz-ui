import { useId } from 'react'

export type RadioOption = {
  label: string
  value: string
  description?: string
}

export type RadioGroupProps = {
  label: string
  value: string
  options: RadioOption[]
  onChange: (value: string) => void
}

export function RadioGroup({ label, value, options, onChange }: RadioGroupProps) {
  const name = useId()

  return (
    <fieldset className="kz-radio-group">
      <legend className="kz-field__label">{label}</legend>
      <div className="kz-radio-group__items">
        {options.map((option) => (
          <label key={option.value} className="kz-check-control">
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={() => onChange(option.value)}
            />
            <span className="kz-check-control__content">
              <span className="kz-check-control__label">{option.label}</span>
              {option.description ? <span className="kz-check-control__description">{option.description}</span> : null}
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  )
}
