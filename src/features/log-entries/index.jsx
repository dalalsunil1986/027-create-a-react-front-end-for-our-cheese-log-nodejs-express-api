import React from 'react'
import { connect } from 'react-redux'

import { getLogEntries } from '../../api/log-entries'

import LogEntryTable from './table'

class LogEntries extends React.Component {
  componentDidMount() {
    const { persistLogEntries } = this.props
    getLogEntries().then(json => persistLogEntries({ entries: json, loaded: true }))
  }

  render() {
    const { entries, loaded } = this.props
    return <LogEntryTable entries={entries} loaded={loaded} />
  }
}

function mapStateToProps(state) {
  return {
    entries: state.logEntries.entries
  }
}

function mapDispatchToProps(dispatch) {
  return {
    persistLogEntries: (payload) => {
      dispatch({ type: 'LOAD', payload })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogEntries)
