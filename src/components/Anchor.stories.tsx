import type { Meta, StoryObj } from '@storybook/react-vite'
import { Anchor } from './Anchor'

const meta = {
  title: 'Primitives/Anchor',
  component: Anchor,
  args: {
    href: '#/resume',
    children: 'View resume',
  },
} satisfies Meta<typeof Anchor>

export default meta
type Story = StoryObj<typeof meta>

export const Nav: Story = {}
export const Subtle: Story = { args: { variant: 'subtle', children: 'Browse updates' } }
export const Cta: Story = { args: { variant: 'cta', children: 'Read case study' } }
