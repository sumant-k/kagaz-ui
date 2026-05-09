import type { Meta, StoryObj } from '@storybook/react-vite'
import { Badge } from '../components/Badge'
import { DataTable, type DataTableColumn } from './DataTable'

type Row = {
  id: string
  name: string
  owner: string
  status: string
}

const rows: Row[] = [
  { id: '1', name: 'Payment retry queue', owner: 'Anya', status: 'Needs review' },
  { id: '2', name: 'Partner launch readiness', owner: 'Mina', status: 'Blocked' },
]

const columns: DataTableColumn<Row>[] = [
  { id: 'name', header: 'Work item', render: (row) => row.name },
  { id: 'owner', header: 'Owner', render: (row) => row.owner },
  { id: 'status', header: 'Status', render: (row) => <Badge tone={row.status === 'Blocked' ? 'critical' : 'warning'}>{row.status}</Badge> },
]

function DataTablePreview() {
  return (
    <div className="kz-app">
      <DataTable caption="Queue" columns={columns} rows={rows} getRowKey={(row) => row.id} />
    </div>
  )
}

const meta = {
  title: 'Patterns/Data Table',
  component: DataTablePreview,
} satisfies Meta<typeof DataTablePreview>

export default meta
type Story = StoryObj<typeof meta>

export const Overview: Story = {}
