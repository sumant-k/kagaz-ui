import { render, screen } from '@testing-library/react'
import { EmptyState } from './EmptyState'
import { ErrorState } from './ErrorState'
import { LoadingState } from './LoadingState'

describe('state patterns', () => {
  it('renders loading, empty, and error states with visible copy', () => {
    render(
      <div>
        <LoadingState title="Loading queue snapshot" description="Refreshing current work." />
        <EmptyState title="No matching work" description="Try a different filter." />
        <ErrorState title="Queue request failed" description="Retry once the service stabilizes." />
      </div>,
    )

    expect(screen.getByText(/loading queue snapshot/i)).toBeInTheDocument()
    expect(screen.getByText(/no matching work/i)).toBeInTheDocument()
    expect(screen.getByText(/queue request failed/i)).toBeInTheDocument()
  })
})
