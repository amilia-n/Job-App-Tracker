import React from 'react';
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  createColumnHelper,
} from '@tanstack/react-table';
import './SpreadSheet.css'

const columnHelper = createColumnHelper();

const defaultColumns = [
  columnHelper.accessor('companyName', {
    header: 'Company Name',
    cell: info => info.getValue(),
  }),
  columnHelper.accessor('jobTitle', {
    header: 'Job Title',
    cell: info => info.getValue(),
  }),
  columnHelper.accessor('dateApplied', {
    header: 'Date Applied',
    cell: info => info.getValue(),
  }),
  columnHelper.accessor('status', {
    header: 'Status',
    cell: info => info.getValue(),
  }),
  columnHelper.accessor('jobLink', {
    header: 'Job Link',
    cell: info => {
      const url = info.getValue();
      return (
        url ? (
          <a href={url} target="_blank" rel="noopener noreferrer" title="Open Job Posting">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                 strokeWidth={1.5} stroke="currentColor" className="hyperlink">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
            </svg>
          </a>
        ) : null
      );
    },
  }),
  columnHelper.accessor('followUpDate', {
    header: 'Follow Up Date',
    cell: info => info.getValue(),
  }),
  columnHelper.accessor('notes', {
    header: 'Notes',
    cell: info => info.getValue(),
  }),
];

export default function MyTable({ data }) {
    const table = useReactTable({
      data,
      columns: defaultColumns,
      getCoreRowModel: getCoreRowModel(),
    });

  return (
    <table>
      <thead>
        {table.getHeaderGroups().map(headerGroup => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map(header => (
              <th key={header.id}>
                {flexRender(header.column.columnDef.header, header.getContext())}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map(row => (
          <tr key={row.id}>
            {row.getVisibleCells().map(cell => (
              <td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
