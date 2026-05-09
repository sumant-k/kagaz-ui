import { useEffect, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { Button } from './Button'
import { useThemePortalHost } from '../theme/themeContext'

export type DrawerProps = {
  open: boolean
  title: string
  description?: string
  onClose: () => void
  children: ReactNode
  footer?: ReactNode
}

export function Drawer({ open, title, description, onClose, children, footer }: DrawerProps) {
  const portalHost = useThemePortalHost()

  useEffect(() => {
    if (!open) {
      return
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [open, onClose])

  if (!open) {
    return null
  }

  const portalTarget = portalHost ?? document.body

  return createPortal(
    <div className="kz-drawer">
      <button type="button" className="kz-drawer__backdrop" aria-label="Close drawer" onClick={onClose} />
      <section className="kz-drawer__panel" aria-labelledby="kz-drawer-title">
        <header className="kz-drawer__header">
          <div>
            <h2 id="kz-drawer-title" className="kz-drawer__title">{title}</h2>
            {description ? <p className="kz-drawer__description">{description}</p> : null}
          </div>
          <Button variant="ghost" size="sm" onClick={onClose}>
            Close
          </Button>
        </header>
        <div className="kz-drawer__body">{children}</div>
        {footer ? <footer className="kz-drawer__footer">{footer}</footer> : null}
      </section>
    </div>,
    portalTarget,
  )
}
