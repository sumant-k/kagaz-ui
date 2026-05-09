import { fireEvent, render, screen } from '@testing-library/react'
import { Switch } from './Switch'

describe('Switch', () => {
  it('toggles checked state through callback', () => {
    const onCheckedChange = vi.fn()

    render(
      <Switch
        label="Only priority work"
        checked={false}
        onCheckedChange={onCheckedChange}
      />,
    )

    fireEvent.click(screen.getByRole('switch', { name: /only priority work/i }))

    expect(onCheckedChange).toHaveBeenCalledWith(true)
  })
})
