import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Badge } from './Badge'
import { Button } from './Button'
import { Drawer } from './Drawer'
import { Tabs } from './Tabs'
import { Tooltip } from './Tooltip'

function FeedbackAndOverlaysPreview() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('all')

  return (
    <div className="kz-app">
      <div className="kz-stack kz-stack--sm">
        <div className="kz-inline-actions kz-inline-actions--wrap">
          <Badge>Neutral</Badge>
          <Badge tone="accent">Accent</Badge>
          <Badge tone="warning">Needs review</Badge>
          <Badge tone="critical">Blocked</Badge>
          <Badge tone="success">Healthy</Badge>
        </div>
        <Tabs
          label="Queue tabs"
          activeId={activeTab}
          onChange={setActiveTab}
          items={[
            { id: 'all', label: 'All work', count: 12 },
            { id: 'review', label: 'Needs review', count: 4 },
            { id: 'blocked', label: 'Blocked', count: 2 },
          ]}
        />
        <Tooltip label="Overlay note" content="Use tooltips for brief clarifying context, not operational content.">
          <Button variant="ghost">Hover for note</Button>
        </Tooltip>
        <Button variant="secondary" onClick={() => setDrawerOpen(true)}>Open drawer</Button>
      </div>
      <Drawer open={drawerOpen} title="Drawer example" onClose={() => setDrawerOpen(false)}>
        <p>This overlay is intended for secondary workflow guidance, not primary review context.</p>
      </Drawer>
    </div>
  )
}

const meta = {
  title: 'Primitives/Feedback & Overlays',
  component: FeedbackAndOverlaysPreview,
} satisfies Meta<typeof FeedbackAndOverlaysPreview>

export default meta
type Story = StoryObj<typeof meta>

export const Overview: Story = {}
