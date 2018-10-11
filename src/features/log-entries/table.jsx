import React from 'react'
import { withRouter } from 'react-router-dom'

import { deleteLogEntry } from '../../api/log-entries'

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

function renderEntries(entries, history, persistLogEntries) {
  return entries.map(entry => <tr cellSpacing={0} key={entry.id}>
    <td>{ entry.no }</td>
    <td>{ entry.type }</td>
    <td>{ entry.createdAt }</td>
    <td>
      <button
        onClick={() => history.push(`/log-entries/${entry.id}/edit`)}
      >Edit</button>
      <button
        onClick={() => {
          if (window.confirm(`Are you sure you want to delete this log entry? (${entry.id})`)) {
            deleteLogEntry(entry.id)
            persistLogEntries({ entries: entries.filter(_entry => _entry.id !== entry.id) })
          }
        }}
      >Delete</button>
    </td>
  </tr>)
}

function LogEntryTable({ persistLogEntries, entries, loaded, history }) {
  return <table width="100%">
    <thead>
      <tr>
        <th>No.</th>
        <th>Type</th>
        <th>Created at</th>
        <th />
      </tr>
    </thead>

    <tbody>
      {
        entries && entries.length > 0
          ? renderEntries(entries, history, persistLogEntries)
          : renderNone(loaded)
      }
    </tbody>
  </table>

}

export default withRouter(LogEntryTable)
