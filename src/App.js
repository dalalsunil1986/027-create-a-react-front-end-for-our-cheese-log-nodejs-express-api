import React from 'react'

import LogEntries from './features/log-entries'

class App extends React.Component {
  render() {
    return <div className="content">
      <h1>The Great Cheese Log</h1>

      <LogEntries />
    </div>
  }
}

export default App
