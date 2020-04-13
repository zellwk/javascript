/**
 * Checks if element is hidden
 * @param {HTMLElement} element
 */
export function isHidden (element) {
  element.hasAttribute('hidden')
}

/**
 * Shows element
 * @param {HTMLElement} element
 */
export function showElement (element) {
  element.removeAttribute('hidden')
}

/**
 * Hides element
 * @param {HTMLElement} element
 */
export function hideElement (element) {
  element.setAttribute('hidden', true)
}
