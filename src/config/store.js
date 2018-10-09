import { createStore, combineReducers } from 'redux'

import logEntriesReducer from '../features/log-entries/reducer'

const rootReducer = combineReducers({
  logEntries: logEntriesReducer,
})

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
