import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from './Button'

const meta = {
  title: 'Primitives/Button',
  component: Button,
  args: {
    children: 'Review queue',
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
export const Secondary: Story = { args: { variant: 'secondary', children: 'Open playbook' } }
export const Ghost: Story = { args: { variant: 'ghost', children: 'Dismiss' } }
export const Link: Story = { args: { href: '#/resume', variant: 'secondary', children: 'View resume' } }
