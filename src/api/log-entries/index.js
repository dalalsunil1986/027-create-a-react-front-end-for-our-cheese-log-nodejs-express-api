import api from '../'

export function getLogEntries() {
  return api('get', 'log-entries')
}

export function createLogEntry(values) {
  const { no, type, ingredients, process } = values
  return api('post', 'log-entries', { no, type, ingredients, process })
}

export function getLogEntry(id) {
  return api('get', `log-entries/${id}`)
}
