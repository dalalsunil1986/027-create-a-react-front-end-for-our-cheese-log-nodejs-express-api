import React from 'react'
import { Switch, Route } from 'react-router-dom'

import LogEntries from '../features/log-entries'
import CreateLogEntry from '../features/log-entries/create'

const Router = () => (
  <Switch>
    <Route exact path='/' component={LogEntries} />
    <Route exact path='/log-entries/new' component={CreateLogEntry} />
  </Switch>
)

export default Router