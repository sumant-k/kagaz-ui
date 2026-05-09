import type { Meta, StoryObj } from '@storybook/react-vite'
import { defaultTheme } from './theme'

function formatThemeValue(value: unknown): string {
  if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
    return String(value)
  }

  if (Array.isArray(value)) {
    return value.map(formatThemeValue).join(', ')
  }

  if (value && typeof value === 'object') {
    return Object.entries(value)
      .map(([key, nestedValue]) => `${key}: ${formatThemeValue(nestedValue)}`)
      .join(' | ')
  }

  return ''
}

function FoundationsPreview() {
  return (
    <div className="kz-app">
      <div className="kz-stack">
        <header className="kz-page-header">
          <div>
            <p className="kz-page-header__eyebrow">Foundations</p>
            <h2 className="kz-page-header__title">Token snapshot</h2>
            <p className="kz-page-header__description">Kagaz UI starts with readable paper surfaces, restrained contrast, and editorial hierarchy for dense product interfaces.</p>
          </div>
        </header>
        <div className="kz-foundation-grid">
          {Object.entries(defaultTheme).map(([group, values]) => (
            <article key={group} className="kz-foundation-card">
              <p className="kz-foundation-card__label">{group}</p>
              <ul className="kz-list">
                {Object.entries(values).map(([token, value]) => (
                  <li key={token}><strong>{token}</strong>: {formatThemeValue(value)}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

const meta = {
  title: 'Foundations/Theme Tokens',
  component: FoundationsPreview,
} satisfies Meta<typeof FoundationsPreview>

export default meta
type Story = StoryObj<typeof meta>

export const Overview: Story = {}
