import type { Meta, StoryObj } from '@storybook/react-vite'
import { Chips } from './Chips'

const meta = {
  title: 'Primitives/Chips',
  component: Chips,
  args: {
    items: [
      { id: 'react', label: 'React' },
      { id: 'design-systems', label: 'Design Systems' },
      { id: 'reusable-components', label: 'Reusable Components' },
    ],
  },
} satisfies Meta<typeof Chips>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
