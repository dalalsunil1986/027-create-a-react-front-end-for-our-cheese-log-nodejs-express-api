import React from 'react'

function renderNone(loaded) {
  return <tr>
    <td colSpan={3}>
      { loaded
        ? "There are no log entries to display"
        : "Loading..."
      }
    </td>
  </tr>
}

function renderEntries(entries) {
  return entries.map(entry => <tr cellSpacing={0} key={entry.id}>
    <td>{ entry.no }</td>
    <td>{ entry.type }</td>
    <td>{ entry.createdAt }</td>
  </tr>)
}

export default function LogEntryTable({ entries, loaded }) {
  return <table width="100%">
    <thead>
      <tr>
        <th>No.</th>
        <th>Type</th>
        <th>Created at</th>
      </tr>
    </thead>

    <tbody>
      {
        entries.length > 0 ? renderEntries(entries) : renderNone(loaded)
      }
    </tbody>
  </table>

}