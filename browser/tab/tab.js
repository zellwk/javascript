/**
 * Event is Tab (without shift)
 * @param {Object} event - The event object
 * @returns {Boolean}
 */
export function tab (event) {
  return !event.shiftKey && event.key === 'Tab'
}

/**
 * Event is shift + Tab
 * @param {Object} event - The event object
 * @returns {Boolean}
 */
export function shiftTab (event) {
  return event.shiftKey && event.key === 'Tab'
}
