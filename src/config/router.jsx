import React from 'react'
import { Switch, Route } from 'react-router-dom'

import LogEntries from '../features/log-entries'

const Router = () => (
  <Switch>
    <Route exact path='/' component={LogEntries} />
  </Switch>
)

export default Router