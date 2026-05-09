import type { ReactNode } from 'react'

export type PageHeaderProps = {
  eyebrow?: string
  title: string
  description?: string
  actions?: ReactNode
}

export function PageHeader({ eyebrow, title, description, actions }: PageHeaderProps) {
  return (
    <header className="kz-page-header">
      <div className="kz-page-header__content">
        {eyebrow ? <p className="kz-page-header__eyebrow">{eyebrow}</p> : null}
        <h2 className="kz-page-header__title">{title}</h2>
        {description ? <p className="kz-page-header__description">{description}</p> : null}
      </div>
      {actions ? <div className="kz-page-header__actions">{actions}</div> : null}
    </header>
  )
}
