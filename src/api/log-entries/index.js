import api from '../'

export function getLogEntries() {
  return api('get', 'log-entries')
}