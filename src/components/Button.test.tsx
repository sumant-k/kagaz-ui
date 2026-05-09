import { fireEvent, render, screen } from '@testing-library/react'
import { Button } from './Button'

describe('Button', () => {
  it('calls onClick when pressed', () => {
    const onClick = vi.fn()

    render(<Button onClick={onClick}>Review queue</Button>)

    fireEvent.click(screen.getByRole('button', { name: /review queue/i }))

    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('renders an anchor when href is provided', () => {
    render(
      <Button href="#/resume" variant="secondary">
        View resume
      </Button>,
    )

    expect(screen.getByRole('link', { name: /view resume/i })).toHaveAttribute('href', '#/resume')
  })
})
