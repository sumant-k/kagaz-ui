import { render, screen } from '@testing-library/react'
import { ThemeProvider } from '../theme/ThemeProvider'
import { MetaPanel } from './MetaPanel'

describe('MetaPanel', () => {
  it('renders the intro and each label/value row', () => {
    render(
      <ThemeProvider>
        <MetaPanel
          intro="Building product-facing interfaces with system thinking."
          items={[
            { label: 'Role', value: 'Senior Engineer' },
            { label: 'Location', value: 'Pune, Maharashtra' },
          ]}
        />
      </ThemeProvider>,
    )

    expect(screen.getByText('Building product-facing interfaces with system thinking.')).toBeInTheDocument()
    expect(screen.getByText('Role')).toBeInTheDocument()
    expect(screen.getByText('Senior Engineer')).toBeInTheDocument()
    expect(screen.getByText('Location')).toBeInTheDocument()
    expect(screen.getByText('Pune, Maharashtra')).toBeInTheDocument()
  })

  it('omits the intro paragraph when none is provided', () => {
    const { container } = render(
      <ThemeProvider>
        <MetaPanel items={[{ label: 'Role', value: 'Senior Engineer' }]} />
      </ThemeProvider>,
    )

    expect(container.querySelector('.kz-meta-panel__intro')).not.toBeInTheDocument()
  })
})
