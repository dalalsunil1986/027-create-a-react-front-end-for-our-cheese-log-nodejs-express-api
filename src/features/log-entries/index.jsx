import React from 'react'

import { getLogEntries } from '../../api/log-entries'

import LogEntryTable from './table'

class LogEntries extends React.Component {
  state = {
    entries: [],
    loaded: false,
  }

  componentDidMount() {
    getLogEntries().then(json => this.setState({
        entries: json,
        loaded: true
      }))
  }

  render() {
    const { entries, loaded } = this.state
    return <LogEntryTable entries={entries} loaded={loaded} />
  }
}

export default LogEntries
