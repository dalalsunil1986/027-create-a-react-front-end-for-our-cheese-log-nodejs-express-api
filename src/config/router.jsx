import React from 'react'
import { Switch, Route } from 'react-router-dom'

import LogEntries from '../features/log-entries'
import CreateLogEntry from '../features/log-entries/create'
import ShowLogEntry from '../features/log-entries/show'
import EditLogEntry from '../features/log-entries/edit'

const Router = () => (
  <Switch>
    <Route exact path='/' component={LogEntries} />
    <Route exact path='/log-entries/new' component={CreateLogEntry} />
    <Route exact path='/log-entries/:id' component={ShowLogEntry} />
    <Route exact path='/log-entries/:id/edit' component={EditLogEntry} />
  </Switch>
)

export default Router