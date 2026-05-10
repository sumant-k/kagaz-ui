import { render, screen } from '@testing-library/react'
import { Anchor } from './Anchor'

describe('Anchor', () => {
  it('renders a link with the provided href', () => {
    render(<Anchor href="#/resume">View resume</Anchor>)

    expect(screen.getByRole('link', { name: /view resume/i })).toHaveAttribute('href', '#/resume')
  })

  it('applies the requested variant class', () => {
    render(
      <Anchor href="https://example.com" variant="cta">
        Open example
      </Anchor>,
    )

    expect(screen.getByRole('link', { name: /open example/i })).toHaveClass('kz-anchor--cta')
  })
})
