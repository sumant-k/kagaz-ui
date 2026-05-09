import { render, screen } from '@testing-library/react'
import { ThemeProvider } from '../theme/ThemeProvider'
import { Article } from './Article'

describe('Article', () => {
  it('renders the main content and chips', () => {
    render(
      <ThemeProvider>
        <Article
          eyebrow="Web application"
          title="Developers Portal"
          summary={<p>Summary copy</p>}
          sections={[
            { label: 'Contribution', content: <p>Contribution details</p> },
            { label: 'Result', content: <p>Result details</p> },
          ]}
          chips={[
            { id: 'react', label: 'React' },
            { id: 'oauth', label: 'OAuth' },
          ]}
          cta={<a href="#case-study">View case study</a>}
        />
      </ThemeProvider>,
    )

    expect(screen.getByText('Developers Portal')).toBeInTheDocument()
    expect(screen.getByText('Contribution')).toBeInTheDocument()
    expect(screen.getByText('Result')).toBeInTheDocument()
    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /view case study/i })).toBeInTheDocument()
  })
})
