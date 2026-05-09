import { useMemo, useState } from 'react'
import { Badge } from './components/Badge'
import { Button } from './components/Button'
import { Drawer } from './components/Drawer'
import { OperationsDashboard } from './demo/OperationsDashboard'
import { ThemeProvider } from './theme/ThemeProvider'
import { defaultTheme, type KagazThemeMode } from './tokens/theme'

function App() {
  const [foundationsOpen, setFoundationsOpen] = useState(false)
  const [theme, setTheme] = useState<KagazThemeMode>('light')
  const colorModeLabel = useMemo(() => theme === 'light' ? 'Dark' : 'Light', [theme])

  return (
    <ThemeProvider mode={theme} theme={defaultTheme}>
      <div className="kz-app">
        <header className="kz-app__masthead">
          <div className="kz-app__brand">
            <p className="kz-app__eyebrow">Kagaz UI</p>
            <p className="kz-app__microcopy">Design system workbench</p>
          </div>
          <button
            type="button"
            className="kz-theme-toggle"
            aria-label="Toggle theme"
            aria-pressed={theme === 'dark'}
            onClick={() => setTheme((currentTheme) => currentTheme === 'light' ? 'dark' : 'light')}
          >
            <span className="kz-theme-toggle__label">{colorModeLabel}</span>
          </button>
        </header>

        <header className="kz-app__header">
          <div className="kz-app__intro">
            <p className="kz-app__greeting">A system lab for calmer dashboard interfaces.</p>
            <h1 className="kz-app__title">Components and patterns shaped by the exact paper-first language used in the portfolio.</h1>
            <p className="kz-app__summary">
              Built for internal tools, operations interfaces, and product surfaces that need
              restrained hierarchy, readable controls, and durable UI structure instead of glossy noise.
            </p>
            <div className="kz-app__proof-list" aria-label="Workbench focus areas">
              <Badge tone="accent">Shared dashboard patterns</Badge>
              <Badge>Portfolio-matched paper tokens</Badge>
              <Badge>Accessible interaction states</Badge>
            </div>
          </div>
          <aside className="kz-app__sidebar" aria-label="Foundation summary">
            <p className="kz-app__sidebar-intro">
              The workbench uses the same warm paper palette, serif hierarchy, and restrained panel treatment as the portfolio, then applies it to product-facing component patterns.
            </p>
            <dl className="kz-app__sidebar-list">
              <div className="kz-app__sidebar-row">
                <dt>Canvas</dt>
                <dd>{defaultTheme.light.color.bg}</dd>
              </div>
              <div className="kz-app__sidebar-row">
                <dt>Typography</dt>
                <dd>{defaultTheme.shared.typography.fontSerif}</dd>
              </div>
              <div className="kz-app__sidebar-row">
                <dt>Spacing</dt>
                <dd>{defaultTheme.shared.spacing.space5}</dd>
              </div>
            </dl>
            <div className="kz-app__actions">
              <Button variant="secondary" onClick={() => setFoundationsOpen(true)}>
                View foundations
              </Button>
            </div>
          </aside>
        </header>

        <main className="kz-app__main">
          <OperationsDashboard />
        </main>

        <Drawer
          open={foundationsOpen}
          title="Foundation snapshot"
          description="The first version of Kagaz UI is built around the same warm paper tokens and component language used in the portfolio, then extended into dashboard patterns."
          onClose={() => setFoundationsOpen(false)}
          footer={(
            <Button variant="secondary" onClick={() => setFoundationsOpen(false)}>
              Close
            </Button>
          )}
        >
          <div className="kz-stack kz-stack--sm">
            <div className="kz-foundation-grid">
              <article className="kz-foundation-card">
                <p className="kz-foundation-card__label">Color roles</p>
                <p>{defaultTheme.light.color.bg}, {defaultTheme.light.color.panelStrong}, {defaultTheme.light.color.ink}</p>
              </article>
              <article className="kz-foundation-card">
                <p className="kz-foundation-card__label">Typography</p>
                <p>{defaultTheme.shared.typography.fontSerif}, {defaultTheme.shared.typography.fontSans}</p>
              </article>
              <article className="kz-foundation-card">
                <p className="kz-foundation-card__label">Spacing</p>
                <p>{defaultTheme.shared.spacing.space4} to {defaultTheme.shared.spacing.space7}</p>
              </article>
              <article className="kz-foundation-card">
                <p className="kz-foundation-card__label">Motion</p>
                <p>{defaultTheme.shared.motion.quick}</p>
              </article>
            </div>
          </div>
        </Drawer>
      </div>
    </ThemeProvider>
  )
}

export default App
