import { useMemo, useState } from 'react'
import { Badge } from '../components/Badge'
import { Button } from '../components/Button'
import { Drawer } from '../components/Drawer'
import { Input } from '../components/Input'
import { Select } from '../components/Select'
import { Switch } from '../components/Switch'
import { Tabs } from '../components/Tabs'
import { Tooltip } from '../components/Tooltip'
import { DataTable, type DataTableColumn } from '../patterns/DataTable'
import { DetailPane } from '../patterns/DetailPane'
import { EmptyState } from '../patterns/EmptyState'
import { ErrorState } from '../patterns/ErrorState'
import { FilterBar } from '../patterns/FilterBar'
import { LoadingState } from '../patterns/LoadingState'
import { PageHeader } from '../patterns/PageHeader'
import { StatCard } from '../patterns/StatCard'
import { operations, type OperationItem } from './operationsData'

type ViewMode = 'live' | 'loading' | 'empty' | 'error'

const tabItems = [
  { id: 'all', label: 'All work' },
  { id: 'review', label: 'Needs review' },
  { id: 'blocked', label: 'Blocked' },
  { id: 'healthy', label: 'Healthy' },
]

function badgeTone(status: OperationItem['status']) {
  if (status === 'Needs review') return 'warning'
  if (status === 'Blocked') return 'critical'
  if (status === 'Healthy') return 'success'
  return 'neutral'
}

export function OperationsDashboard() {
  const [activeTab, setActiveTab] = useState('all')
  const [query, setQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [priorityOnly, setPriorityOnly] = useState(false)
  const [viewMode, setViewMode] = useState<ViewMode>('live')
  const [selectedId, setSelectedId] = useState<string>('op-102')
  const [playbookOpen, setPlaybookOpen] = useState(false)

  const filteredRows = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    return operations.filter((item) => {
      const matchesTab =
        activeTab === 'all' ||
        (activeTab === 'review' && item.status === 'Needs review') ||
        (activeTab === 'blocked' && item.status === 'Blocked') ||
        (activeTab === 'healthy' && item.status === 'Healthy')

      const matchesFilter = statusFilter === 'all' || item.status === statusFilter
      const matchesPriority = !priorityOnly || item.priority === 'High'
      const matchesQuery =
        normalizedQuery.length === 0 ||
        item.name.toLowerCase().includes(normalizedQuery) ||
        item.owner.toLowerCase().includes(normalizedQuery)

      return matchesTab && matchesFilter && matchesPriority && matchesQuery
    })
  }, [activeTab, priorityOnly, query, statusFilter])

  const activeSelectedId = filteredRows.some((item) => item.id === selectedId)
    ? selectedId
    : (filteredRows[0]?.id ?? '')

  const selectedItem = filteredRows.find((item) => item.id === activeSelectedId) ?? null

  const columns: DataTableColumn<OperationItem>[] = [
    {
      id: 'name',
      header: 'Work item',
      render: (row) => (
        <div className="kz-table-primary">
          <strong>{row.name}</strong>
          <span>{row.summary}</span>
        </div>
      ),
    },
    {
      id: 'owner',
      header: 'Owner',
      render: (row) => row.owner,
    },
    {
      id: 'status',
      header: 'Status',
      render: (row) => <Badge tone={badgeTone(row.status)}>{row.status}</Badge>,
    },
    {
      id: 'priority',
      header: 'Priority',
      render: (row) => row.priority,
    },
    {
      id: 'updated',
      header: 'Updated',
      render: (row) => row.lastUpdated,
    },
  ]

  return (
    <section className="kz-dashboard kz-stack">
      <PageHeader
        eyebrow="Workflow demo"
        title="Operations queue"
        description="A small internal-tools-style surface that exercises filtering, tabs, states, reusable data patterns, and detail review."
        actions={(
          <div className="kz-inline-actions">
            <Tooltip
              label="Demo note"
              content="This drawer demonstrates overlay behavior alongside the persistent detail pane pattern."
            >
              <Button variant="ghost" size="sm">
                Why a drawer?
              </Button>
            </Tooltip>
            <Button variant="secondary" size="sm" onClick={() => setPlaybookOpen(true)}>
              Open playbook
            </Button>
          </div>
        )}
      />

      <div className="kz-stat-grid">
        <StatCard
          label="Open items"
          value={`${operations.length}`}
          meta="Current queue size"
          tone="accent"
        />
        <StatCard
          label="Needs review"
          value={`${operations.filter((item) => item.status === 'Needs review').length}`}
          meta="Requires human review"
        />
        <StatCard
          label="Blocked"
          value={`${operations.filter((item) => item.status === 'Blocked').length}`}
          meta="Escalate today"
        />
      </div>

      <FilterBar
        title="Working set"
        aside={(
          <Select
            label="Surface mode"
            value={viewMode}
            onChange={(event) => setViewMode(event.target.value as ViewMode)}
            options={[
              { label: 'Live data', value: 'live' },
              { label: 'Loading state', value: 'loading' },
              { label: 'Empty state', value: 'empty' },
              { label: 'Error state', value: 'error' },
            ]}
          />
        )}
      >
        <Tabs
          label="Queue views"
          items={tabItems.map((item) => ({
            ...item,
            count: item.id === 'all'
              ? operations.length
              : operations.filter((row) => (
                item.id === 'review' ? row.status === 'Needs review'
                  : item.id === 'blocked' ? row.status === 'Blocked'
                    : item.id === 'healthy' ? row.status === 'Healthy'
                      : true
              )).length,
          }))}
          activeId={activeTab}
          onChange={setActiveTab}
        />
        <div className="kz-filter-row">
          <Input
            label="Search"
            placeholder="Search by work item or owner"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <Select
            label="Status filter"
            value={statusFilter}
            onChange={(event) => setStatusFilter(event.target.value)}
            options={[
              { label: 'All statuses', value: 'all' },
              { label: 'Needs review', value: 'Needs review' },
              { label: 'Healthy', value: 'Healthy' },
              { label: 'Blocked', value: 'Blocked' },
              { label: 'Done', value: 'Done' },
            ]}
          />
          <Switch
            label="Only priority work"
            description="Limit results to high-priority items."
            checked={priorityOnly}
            onCheckedChange={setPriorityOnly}
          />
        </div>
      </FilterBar>

      {viewMode === 'loading' ? (
        <LoadingState
          title="Loading queue snapshot"
          description="Refreshing the operations queue and matching filters."
        />
      ) : viewMode === 'empty' ? (
        <EmptyState
          title="No work items match this view"
          description="Try clearing one filter or switching back to the live dataset."
          action={(
            <Button
              variant="secondary"
              onClick={() => {
                setQuery('')
                setStatusFilter('all')
                setPriorityOnly(false)
                setViewMode('live')
              }}
            >
              Reset filters
            </Button>
          )}
        />
      ) : viewMode === 'error' ? (
        <ErrorState
          title="Queue data could not be loaded"
          description="A request failed while refreshing the workbench view. Retry once the upstream service stabilizes."
          action={<Button onClick={() => setViewMode('live')}>Retry</Button>}
        />
      ) : (
        <div className="kz-dashboard__content">
          <div className="kz-dashboard__table">
            <DataTable
              caption="Operations queue"
              columns={columns}
              rows={filteredRows}
              getRowKey={(row) => row.id}
              onRowClick={(row) => setSelectedId(row.id)}
              selectedRowKey={activeSelectedId}
            />
          </div>
          <DetailPane
            title={selectedItem?.name ?? 'Nothing selected'}
            subtitle={selectedItem ? `${selectedItem.owner} - ${selectedItem.lastUpdated}` : 'Select a row from the queue'}
            footer={selectedItem ? (
              <div className="kz-inline-actions">
                <Button size="sm">Mark reviewed</Button>
                <Button variant="secondary" size="sm">Request update</Button>
              </div>
            ) : null}
          >
            {selectedItem ? (
              <div className="kz-stack kz-stack--sm">
                <div className="kz-inline-actions kz-inline-actions--wrap">
                  <Badge tone={badgeTone(selectedItem.status)}>{selectedItem.status}</Badge>
                  <Badge>{selectedItem.priority} priority</Badge>
                </div>
                <p>{selectedItem.summary}</p>
                <div>
                  <p className="kz-detail-pane__section-label">Checklist</p>
                  <ul className="kz-list">
                    {selectedItem.notes.map((note) => (
                      <li key={note}>{note}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <EmptyState
                title="Select an item"
                description="Choose a row from the table to inspect current queue context."
              />
            )}
          </DetailPane>
        </div>
      )}

      <Drawer
        open={playbookOpen}
        onClose={() => setPlaybookOpen(false)}
        title="Queue review playbook"
        description="A supporting overlay for procedural guidance and temporary task context."
        footer={(
          <Button variant="secondary" onClick={() => setPlaybookOpen(false)}>
            Done
          </Button>
        )}
      >
        <div className="kz-stack kz-stack--sm">
          <p>
            Use the side detail pane for the active work item and the drawer for temporary
            guidance that should not displace queue context.
          </p>
          <ul className="kz-list">
            <li>Check status before changing owner or priority.</li>
            <li>Review the note checklist before marking an item as done.</li>
            <li>Escalate blocked work within the same review pass.</li>
          </ul>
        </div>
      </Drawer>
    </section>
  )
}
