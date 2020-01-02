/**
 * Updates the DOM about a user's connection status
 */
function setConnectionStatus () {
  navigator.onLine
    ? document.body.dataset.connectionStatus = 'online'
    : document.body.dataset.connectionStatus = 'offline'
}

export function updateConnectionStatus () {
  setConnectionStatus()
  window.addEventListener('online', setConnectionStatus)
  window.addEventListener('offline', setConnectionStatus)
}
