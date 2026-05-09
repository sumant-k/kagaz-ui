import { useId, useState, type ReactNode } from 'react'

export type TooltipProps = {
  label: string
  content: ReactNode
  children: ReactNode
}

export function Tooltip({ label, content, children }: TooltipProps) {
  const tooltipId = useId()
  const [open, setOpen] = useState(false)

  return (
    <span
      className="kz-tooltip"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
    >
      <span aria-label={label} aria-describedby={open ? tooltipId : undefined} className="kz-tooltip__trigger" tabIndex={0}>
        {children}
      </span>
      {open ? (
        <span id={tooltipId} role="tooltip" className="kz-tooltip__bubble">
          {content}
        </span>
      ) : null}
    </span>
  )
}
