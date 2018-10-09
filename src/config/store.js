import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import logEntriesReducer from '../features/log-entries/reducer'

const rootReducer = combineReducers({
  logEntries: logEntriesReducer,
  form: formReducer,
})

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
