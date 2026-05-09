export type OperationStatus = 'Needs review' | 'Healthy' | 'Blocked' | 'Done'
export type OperationPriority = 'High' | 'Medium' | 'Low'

export type OperationItem = {
  id: string
  name: string
  owner: string
  status: OperationStatus
  priority: OperationPriority
  lastUpdated: string
  summary: string
  notes: string[]
}

export const operations: OperationItem[] = [
  {
    id: 'op-102',
    name: 'Payment retry queue',
    owner: 'Anya',
    status: 'Needs review',
    priority: 'High',
    lastUpdated: '10 min ago',
    summary: 'Retries are succeeding, but the queue needs review because two merchants remain above the threshold.',
    notes: ['Validate threshold exceptions', 'Confirm merchant-level messaging', 'Prepare support handoff'],
  },
  {
    id: 'op-118',
    name: 'Activation approvals',
    owner: 'Rishi',
    status: 'Healthy',
    priority: 'Medium',
    lastUpdated: '24 min ago',
    summary: 'Approvals are flowing normally after the morning routing update.',
    notes: ['No blocking items', 'Observe for the next 2 hours'],
  },
  {
    id: 'op-121',
    name: 'Partner launch readiness',
    owner: 'Mina',
    status: 'Blocked',
    priority: 'High',
    lastUpdated: '5 min ago',
    summary: 'The launch checklist is blocked on final content approval and region-level fallback confirmation.',
    notes: ['Await legal approval', 'Review fallback copy', 'Re-open checklist once content lands'],
  },
  {
    id: 'op-129',
    name: 'Template migration',
    owner: 'Joel',
    status: 'Done',
    priority: 'Low',
    lastUpdated: '1 hr ago',
    summary: 'Migration completed with only one manual correction.',
    notes: ['Archive validation notes', 'Close migration ticket'],
  },
  {
    id: 'op-132',
    name: 'Insights digest',
    owner: 'Sara',
    status: 'Needs review',
    priority: 'Medium',
    lastUpdated: '18 min ago',
    summary: 'The digest pipeline completed, but the anomaly summary needs analyst review before sending.',
    notes: ['Review anomaly grouping', 'Approve recipient list'],
  },
]
