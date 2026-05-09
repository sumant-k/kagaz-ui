import { fireEvent, render, screen } from '@testing-library/react'
import { Tabs } from './Tabs'

describe('Tabs', () => {
  it('changes selection with keyboard navigation', () => {
    const onChange = vi.fn()

    render(
      <Tabs
        label="Queue views"
        activeId="all"
        onChange={onChange}
        items={[
          { id: 'all', label: 'All work' },
          { id: 'review', label: 'Needs review' },
        ]}
      />,
    )

    fireEvent.keyDown(screen.getByRole('tab', { name: /all work/i }), { key: 'ArrowRight' })

    expect(onChange).toHaveBeenCalledWith('review')
  })
})
