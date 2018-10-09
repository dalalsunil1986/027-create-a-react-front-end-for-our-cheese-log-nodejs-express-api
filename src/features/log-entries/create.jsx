import React from 'react'
import { connect } from 'react-redux'

import { createLogEntry } from '../../api/log-entries'
import LogEntryForm from './form'

function submitForm(values, props) {
  const { persistLogEntry } = props
  createLogEntry(values).then(json => {
    persistLogEntry({ entry: json })
    props.history.push(`/log-entries/${json.id}`)
  })
}

function CreateLogEntry(props) {
  return <div>
    <h1>Create Cheese Log Entry</h1>

    <LogEntryForm
      onSubmit={(values) => submitForm(values, props)}
      {...props.logEntry}
    />
  </div>
}

function mapStateToProps(state) {
  return {
    logEntry: state.logEntries.logEntry,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    persistLogEntry: (payload) => {
      dispatch({ type: "LOAD", payload})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateLogEntry)