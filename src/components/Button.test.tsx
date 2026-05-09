import { fireEvent, render, screen } from '@testing-library/react'
import { Button } from './Button'

describe('Button', () => {
  it('calls onClick when pressed', () => {
    const onClick = vi.fn()

    render(<Button onClick={onClick}>Review queue</Button>)

    fireEvent.click(screen.getByRole('button', { name: /review queue/i }))

    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
