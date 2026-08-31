import type { Meta, StoryObj } from '@storybook/react-vite'
import { MetaPanel } from './MetaPanel'

const meta = {
  title: 'Patterns/MetaPanel',
  component: MetaPanel,
  args: {
    intro: 'Building product-facing interfaces with system thinking and a bias toward maintainable frontend foundations.',
    items: [
      { label: 'Role', value: 'Senior Frontend Engineer' },
      { label: 'Focus', value: 'UI systems & design systems' },
      { label: 'Location', value: 'Pune, Maharashtra' },
    ],
  },
} satisfies Meta<typeof MetaPanel>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
