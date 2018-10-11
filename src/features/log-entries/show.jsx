import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { getLogEntry, deleteLogEntry } from '../../api/log-entries'

class ShowLogEntry extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params
    getLogEntry(id).then(json => {
      this.props.persistLogEntry({ entry: json })
    })
  }

  renderEntry() {
    const { logEntry: { _id, no, type, ingredients, process }, history } = this.props
    return <div>
      <div>
        <Link to={`/log-entries/${_id}/edit`}>Edit</Link> | 
        <a href="#delete" onClick={() => {
          if (window.confirm(`Are you sure you want to delete this log entry? (${_id})`)) {
            deleteLogEntry(_id)
            history.push(`/`)
          }
        }}>Delete</a>
      </div>
      <div><strong>No.</strong> { no }</div>
      <div><strong>Type</strong> { type }</div>
      <div>
        <label>Ingredients</label>
        <ol>
        {
          ingredients.split("\n").map(ingredient => <li>{ ingredient }</li>)
        }
        </ol>
      </div>
      <div>
        <label>Process</label>
        <ol>
        {
          process.split("\n").map(step => <li>{ step }</li>)
        }
        </ol>
      </div>
    </div>
  }

  render() {
    const { logEntry } = this.props
    return <div>
      <h1>Cheese Log Entry</h1>

      { logEntry ? this.renderEntry() : 'Loading..'}
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

export default connect(mapStateToProps, mapDispatchToProps)(ShowLogEntry)