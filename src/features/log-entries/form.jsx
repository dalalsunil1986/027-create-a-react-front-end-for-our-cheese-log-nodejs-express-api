import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'

function validate(values) {
  const errors = {}
  const { no, type, process, ingredients } = values
  if (!no) errors.no = 'required'
  if (!type) errors.type = 'required'
  if (!process) errors.process = 'required'
  if (!ingredients) errors.ingredients = 'required'
  return errors
}

function renderInput({input, label, type, meta: { touched, error }}) {
  return <div>
    <label>{label}{touched && ((error && <span className="error">({error})</span>))}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      
    </div>
  </div>
}

function renderTextArea({input, label, type, rows, meta: { touched, error }}) {
  return <div>
    <label>{label}{touched && ((error && <span className="error">({error})</span>))}</label>
    <div>
      <textarea {...input} placeholder={label} rows={rows} />
    </div>
  </div>
}

function LogEntryForm(props) {
  const { handleSubmit, submitting, valid } = props

  return <form onSubmit={handleSubmit}>
    <Field name="no" component={renderInput} type="text" label="No." />
    <Field name="type" component={renderInput} type="text" label="Type" />
    <Field name="ingredients" component={renderTextArea} label="Ingredients" rows={20} />
    <Field name="process" component={renderTextArea} label="Process" rows={20} />

    <div>
      <button
        type="submit"
        className="primary"
        disabled={!valid || submitting}
      >Create</button>
      <button
        type="button"
        className="secondary"
        onClick={() => props.history.push('/')}
      >Cancel</button>
    </div>
  </form>
}

const withForm = reduxForm({ form: 'logEntry', validate })(LogEntryForm)
const withRedux = connect(
  state => ({
    initialValues: state.logEntries.entry
  })
)(withForm)

export default withRouter(withRedux)