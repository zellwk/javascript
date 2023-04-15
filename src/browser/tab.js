/**
 * Event is Tab (without shift)
 * @param {Object} event - The event object
 * @returns {Boolean}
 */
export function isTab (event) {
  return !event.shiftKey && event.key === 'Tab'
}

/**
 * Event is shift + Tab
 * @param {Object} event - The event object
 * @returns {Boolean}
 */
export function isShiftTab (event) {
  return event.shiftKey && event.key === 'Tab'
}
