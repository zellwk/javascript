/**
 * Checks if event is Tab key (without shift)
 * @param {Object} event - The event object
 * @returns {Boolean}
 */
export function isNormalTab (event) {
  return !event.shiftKey && event.key === 'Tab'
}

/**
 * Checks if event is shift key + Tab key
 * @param {Object} event - The event object
 * @returns {Boolean}
 */
export function isShiftTab (event) {
  return event.shiftKey && event.key === 'Tab'
}
