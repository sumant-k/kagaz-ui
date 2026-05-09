import type { ReactNode } from 'react'

export type DetailPaneProps = {
  title: string
  subtitle?: string
  children: ReactNode
  footer?: ReactNode
}

export function DetailPane({ title, subtitle, children, footer }: DetailPaneProps) {
  return (
    <aside className="kz-detail-pane">
      <header className="kz-detail-pane__header">
        <h3 className="kz-detail-pane__title">{title}</h3>
        {subtitle ? <p className="kz-detail-pane__subtitle">{subtitle}</p> : null}
      </header>
      <div className="kz-detail-pane__body">{children}</div>
      {footer ? <footer className="kz-detail-pane__footer">{footer}</footer> : null}
    </aside>
  )
}
