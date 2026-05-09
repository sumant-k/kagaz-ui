import clsx from 'clsx'
import { useRef } from 'react'

export type TabItem = {
  id: string
  label: string
  count?: number
}

export type TabsProps = {
  label: string
  items: TabItem[]
  activeId: string
  onChange: (id: string) => void
}

export function Tabs({ label, items, activeId, onChange }: TabsProps) {
  const refs = useRef<Record<string, HTMLButtonElement | null>>({})

  function moveFocus(nextIndex: number) {
    const nextTab = items[nextIndex]
    refs.current[nextTab.id]?.focus()
    onChange(nextTab.id)
  }

  return (
    <div className="kz-tabs" role="tablist" aria-label={label}>
      {items.map((item, index) => {
        const active = item.id === activeId
        return (
          <button
            key={item.id}
            ref={(element) => {
              refs.current[item.id] = element
            }}
            type="button"
            role="tab"
            aria-selected={active}
            tabIndex={active ? 0 : -1}
            className={clsx('kz-tabs__tab', active && 'kz-tabs__tab--active')}
            onClick={() => onChange(item.id)}
            onKeyDown={(event) => {
              if (event.key === 'ArrowRight') {
                event.preventDefault()
                moveFocus((index + 1) % items.length)
              }
              if (event.key === 'ArrowLeft') {
                event.preventDefault()
                moveFocus((index - 1 + items.length) % items.length)
              }
              if (event.key === 'Home') {
                event.preventDefault()
                moveFocus(0)
              }
              if (event.key === 'End') {
                event.preventDefault()
                moveFocus(items.length - 1)
              }
            }}
          >
            <span>{item.label}</span>
            {typeof item.count === 'number' ? <span className="kz-tabs__count">{item.count}</span> : null}
          </button>
        )
      })}
    </div>
  )
}
