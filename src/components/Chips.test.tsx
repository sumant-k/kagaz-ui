import { render, screen } from '@testing-library/react'
import { Chips } from './Chips'
import { ThemeProvider } from '../theme/ThemeProvider'

describe('Chips', () => {
  it('renders all chip labels', () => {
    render(
      <ThemeProvider>
        <Chips
          items={[
            { id: 'react', label: 'React' },
            { id: 'design-systems', label: 'Design Systems' },
            { id: 'reusable-components', label: 'Reusable Components' },
          ]}
        />
      </ThemeProvider>,
    )

    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('Design Systems')).toBeInTheDocument()
    expect(screen.getByText('Reusable Components')).toBeInTheDocument()
  })
})
