import React from 'react'
import { connect } from 'react-redux'

import { updateLogEntry, getLogEntry } from '../../api/log-entries'
import LogEntryForm from './form'

function submitForm(values, props) {
  const { persistLogEntry } = props
  updateLogEntry(props.match.params.id, values).then(json => {
    persistLogEntry({ entry: json })
    props.history.push(`/log-entries/${json.id}`)
  })
}

class EditLogEntry extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params
    getLogEntry(id).then(json => {
      this.props.persistLogEntry({ entry: json })
    })
  }

  render() {
    return <div>
      <h1>Edit Cheese Log Entry</h1>

      <LogEntryForm
        onSubmit={(values) => submitForm(values, this.props)}
      />
    </div>
  }
}


function mapStateToProps(state) {
  return {
    logEntry: state.logEntries.entry,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    persistLogEntry: (payload) => {
      dispatch({ type: "LOAD", payload})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditLogEntry)