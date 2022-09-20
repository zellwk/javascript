export default {
  get status () {
    return navigator.onLine
  },

  // Sets online / offline to body.dataset.connectionStatus
  setStatus () {
    this.status
      ? (document.body.dataset.networkStatus = 'online')
      : (document.body.dataset.networkStatus = 'offline')
  },

  /**
   * Updates status to <body> automatically when network changes
   * @param {function} callback — Callback function to be called when network status changes
   */
  updateStatus (callback) {
    this.setStatus()

    window.addEventListener('online', _ => {
      this.setStatus()
      callback()
    })

    window.addEventListener('offline', _ => {
      this.setStatus()
      callback()
    })
  }
}
