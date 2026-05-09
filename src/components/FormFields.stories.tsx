import type { Meta, StoryObj } from '@storybook/react-vite'
import { Input } from './Input'
import { Select } from './Select'
import { Textarea } from './Textarea'

function FormFieldsPreview() {
  return (
    <div className="kz-app">
      <div className="kz-filter-row">
        <Input label="Search" placeholder="Search work items" helperText="Use work item or owner name." />
        <Select
          label="Status"
          options={[
            { label: 'All statuses', value: 'all' },
            { label: 'Needs review', value: 'review' },
            { label: 'Blocked', value: 'blocked' },
          ]}
        />
        <Textarea label="Release note" helperText="Write a short operational update." />
      </div>
    </div>
  )
}

const meta = {
  title: 'Primitives/Form Fields',
  component: FormFieldsPreview,
} satisfies Meta<typeof FormFieldsPreview>

export default meta
type Story = StoryObj<typeof meta>

export const Overview: Story = {}
