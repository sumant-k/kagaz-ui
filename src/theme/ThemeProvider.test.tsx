import { render, screen } from '@testing-library/react'
import { ThemeProvider } from './ThemeProvider'
import { defaultTheme } from '../tokens/theme'

describe('ThemeProvider', () => {
  it('applies default light theme tokens to the scoped root', () => {
    const { container } = render(
      <ThemeProvider>
        <div>Child</div>
      </ThemeProvider>,
    )

    const root = container.querySelector('.kz-theme-root')

    expect(root).not.toBeNull()
    expect(root).toHaveStyle(`--kz-bg: ${defaultTheme.light.color.bg}`)
    expect(root).toHaveStyle(`--kz-font-size-base: ${defaultTheme.shared.baseFontSize}`)
    expect(root).toHaveStyle(`--kz-radius: ${defaultTheme.shared.radius}`)
    expect(root).toHaveStyle(`--kz-type-heading-line-height: ${defaultTheme.shared.typography.headings.common.lineHeight}`)
    expect(root).toHaveStyle(`--kz-type-h1-size: ${defaultTheme.shared.typography.headings.h1.fontSize}`)
    expect(root).toHaveStyle(`--kz-type-body-size: ${defaultTheme.shared.typography.body.fontSize}`)
    expect(root).toHaveAttribute('data-kz-theme-mode', 'light')
    expect(document.body.getAttribute('style')).toBeNull()
  })

  it('switches to dark mode tokens when requested', () => {
    const { container } = render(
      <ThemeProvider mode="dark">
        <div>Child</div>
      </ThemeProvider>,
    )

    const root = container.querySelector('.kz-theme-root')

    expect(root).toHaveStyle('--kz-bg: #111315')
    expect(root).toHaveAttribute('data-kz-theme-mode', 'dark')
  })

  it('deep merges custom theme overrides with the default theme', () => {
    const { container } = render(
      <ThemeProvider
        theme={{
          light: {
            color: {
              bg: '#faf2e0',
            },
          },
        }}
      >
        <button>Review queue</button>
      </ThemeProvider>,
    )

    const root = container.querySelector('.kz-theme-root')

    expect(root).toHaveStyle('--kz-bg: #faf2e0')
    expect(root).toHaveStyle("--kz-font-serif: 'Crimson Pro', Georgia, serif")
    expect(screen.getByRole('button', { name: /review queue/i })).toBeInTheDocument()
  })

  it('allows overriding shared sizing tokens', () => {
    const { container } = render(
      <ThemeProvider
        theme={{
          shared: {
            baseFontSize: '18px',
            radius: '6px',
            typography: {
              headings: {
                common: {
                  lineHeight: '1.05',
                },
                h1: {
                  fontSize: '3rem',
                },
              },
            },
          },
        }}
      >
        <div>Child</div>
      </ThemeProvider>,
    )

    const root = container.querySelector('.kz-theme-root')

    expect(root).toHaveStyle('--kz-font-size-base: 18px')
    expect(root).toHaveStyle('--kz-radius: 6px')
    expect(root).toHaveStyle('--kz-type-heading-line-height: 1.05')
    expect(root).toHaveStyle('--kz-type-h1-size: 3rem')
  })
})
