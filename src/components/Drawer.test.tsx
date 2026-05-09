import { fireEvent, render, screen } from '@testing-library/react'
import { Drawer } from './Drawer'
import { ThemeProvider } from '../theme/ThemeProvider'

describe('Drawer', () => {
  it('closes on Escape', () => {
    const onClose = vi.fn()

    render(
      <ThemeProvider>
        <Drawer open title="Queue playbook" onClose={onClose}>
          <p>Content</p>
        </Drawer>
      </ThemeProvider>,
    )

    fireEvent.keyDown(window, { key: 'Escape' })

    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('renders inside the provider portal host', () => {
    render(
      <ThemeProvider>
        <Drawer open title="Queue playbook" onClose={() => {}}>
          <p>Content</p>
        </Drawer>
      </ThemeProvider>,
    )

    const drawerTitle = screen.getByRole('heading', { name: /queue playbook/i })
    const portalHost = document.querySelector('.kz-theme-root__portal-host')

    expect(portalHost).not.toBeNull()
    expect(portalHost?.contains(drawerTitle)).toBe(true)
  })
})
