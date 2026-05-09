import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Checkbox } from './Checkbox'
import { RadioGroup } from './RadioGroup'
import { Switch } from './Switch'

function SelectionControlsPreview() {
  const [checked, setChecked] = useState(true)
  const [priority, setPriority] = useState('high')

  return (
    <div className="kz-app">
      <div className="kz-stack kz-stack--sm">
        <Checkbox label="Include archived work" description="Bring completed work into the current queue view." defaultChecked />
        <Switch
          label="Only priority work"
          description="Limit the working set to high-priority items."
          checked={checked}
          onCheckedChange={setChecked}
        />
        <RadioGroup
          label="Priority lane"
          value={priority}
          onChange={setPriority}
          options={[
            { label: 'High', value: 'high' },
            { label: 'Medium', value: 'medium' },
            { label: 'Low', value: 'low' },
          ]}
        />
      </div>
    </div>
  )
}

const meta = {
  title: 'Primitives/Selection Controls',
  component: SelectionControlsPreview,
} satisfies Meta<typeof SelectionControlsPreview>

export default meta
type Story = StoryObj<typeof meta>

export const Overview: Story = {}
