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
    'a, button, input, textarea, select, details, [tabindex]'
  )]
    .filter(el => !el.hasAttribute('disabled'))
    .filter(el => !el.hasAttribute('tabindex') || el.getAttribute('tabindex') >= 0)
}
