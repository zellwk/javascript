// ========================
// Stuff that deals with HTML Elements
// ========================
/**
 * Checks if element has `hidden` attribute
 * @param {HTMLElement} element
 */
export function isHidden (element) {
  element.hasAttribute('hidden')
}

/**
 * Removes `hidden` attribute on an element
 * @param {HTMLElement} element
 */
export function showElement (element) {
  element.removeAttribute('hidden')
}

/**
 * Adds `hidden` attribute to element
 * @param {HTMLElement} element
 */
export function hideElement (element) {
  element.setAttribute('hidden', true)
}

/**
 * Gets focusable elements within a specified element
 * @param {HTMLElement} [element=document] element
 */
export function getFocusableElements (element = document) {
  return [...element.querySelectorAll(
    'a, button, input, textarea, select,  details, [tabindex]'
  )]
    .filter(el => !el.hasAttribute('disabled'))
}

/**
 * Gets keyboard-focusable elements within a specified element
 * @param {HTMLElement} [element=document] element
 * @returns {Array}
 */
export function getKeyboardFocusableElements (element = document) {
  return [...element.querySelectorAll(
    'a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])'
  )]
    .filter(el => !el.hasAttribute('disabled'))
}
