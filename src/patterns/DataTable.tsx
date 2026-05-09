import clsx from 'clsx'
import type { ReactNode } from 'react'

export type DataTableColumn<T> = {
  id: string
  header: string
  render: (row: T) => ReactNode
}

export type DataTableProps<T> = {
  caption?: string
  columns: DataTableColumn<T>[]
  rows: T[]
  getRowKey: (row: T) => string
  onRowClick?: (row: T) => void
  selectedRowKey?: string
}

export function DataTable<T>({
  caption,
  columns,
  rows,
  getRowKey,
  onRowClick,
  selectedRowKey,
}: DataTableProps<T>) {
  return (
    <div className="kz-table-shell">
      <table className="kz-data-table">
        {caption ? <caption className="kz-data-table__caption">{caption}</caption> : null}
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.id} scope="col">{column.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => {
            const rowKey = getRowKey(row)
            return (
              <tr
                key={rowKey}
                className={clsx(onRowClick && 'kz-data-table__row--interactive', selectedRowKey === rowKey && 'kz-data-table__row--selected')}
                onClick={() => onRowClick?.(row)}
              >
                {columns.map((column) => (
                  <td key={column.id}>{column.render(row)}</td>
                ))}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
