import type { Meta, StoryObj } from '@storybook/react-vite'
import { OperationsDashboard } from './OperationsDashboard'

const meta = {
  title: 'Demo/Operations Dashboard',
  component: OperationsDashboard,
  render: () => (
    <div className="kz-app">
      <OperationsDashboard />
    </div>
  ),
} satisfies Meta<typeof OperationsDashboard>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {}

export const Dark: Story = {
  parameters: {
    themeMode: 'dark',
  },
  render: () => (
    <div className="kz-app">
      <OperationsDashboard />
    </div>
  ),
}
