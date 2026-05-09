import clsx from 'clsx'
import { useId } from 'react'

export type SwitchProps = {
  label: string
  checked: boolean
  onCheckedChange: (checked: boolean) => void
  description?: string
}

export function Switch({ label, checked, onCheckedChange, description }: SwitchProps) {
  const labelId = useId()
  const descriptionId = useId()

  return (
    <div className="kz-switch-field">
      <div>
        <p id={labelId} className="kz-check-control__label">{label}</p>
        {description ? <p id={descriptionId} className="kz-check-control__description">{description}</p> : null}
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-labelledby={labelId}
        aria-describedby={description ? descriptionId : undefined}
        className={clsx('kz-switch', checked && 'kz-switch--checked')}
        onClick={() => onCheckedChange(!checked)}
      >
        <span className="kz-switch__thumb" />
      </button>
    </div>
  )
}
