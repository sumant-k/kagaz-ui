import type { Meta, StoryObj } from '@storybook/react-vite'
import { Badge } from '../components/Badge'
import { Button } from '../components/Button'
import { DetailPane } from './DetailPane'
import { EmptyState } from './EmptyState'
import { ErrorState } from './ErrorState'
import { FilterBar } from './FilterBar'
import { LoadingState } from './LoadingState'
import { PageHeader } from './PageHeader'
import { StatCard } from './StatCard'

function PatternsPreview() {
  return (
    <div className="kz-app">
      <div className="kz-stack">
        <PageHeader
          eyebrow="Pattern"
          title="Queue review"
          description="A page header built for dense dashboard views."
          actions={<Button size="sm">Open queue</Button>}
        />
        <div className="kz-stat-grid">
          <StatCard label="Blocked" value="02" meta="Escalate before noon" />
          <StatCard label="Healthy" value="07" tone="accent" />
        </div>
        <FilterBar title="Filters" aside={<Badge tone="accent">Live view</Badge>}>
          <div className="kz-inline-actions kz-inline-actions--wrap">
            <Button variant="ghost" size="sm">Search</Button>
            <Button variant="ghost" size="sm">Status</Button>
            <Button variant="ghost" size="sm">Owner</Button>
          </div>
        </FilterBar>
        <div className="kz-dashboard__content">
          <EmptyState title="No matching work" description="Filters can yield empty states without implying an error." />
          <DetailPane title="Selected work item" subtitle="Anya - 10 min ago">
            <p>Use the detail pane for persistent row context while the table remains visible.</p>
          </DetailPane>
        </div>
        <LoadingState title="Loading queue data" description="Use this pattern for short-lived wait states." />
        <ErrorState title="Queue request failed" description="Use this when a fetch fails and a retry is available." action={<Button>Retry</Button>} />
      </div>
    </div>
  )
}

const meta = {
  title: 'Patterns/Layout & States',
  component: PatternsPreview,
} satisfies Meta<typeof PatternsPreview>

export default meta
type Story = StoryObj<typeof meta>

export const Overview: Story = {}
