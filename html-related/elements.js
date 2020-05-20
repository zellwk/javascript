/**
 * Gets siblings of the specified element
 * @param {HTMLElement} element
 * @example getElementSiblings(element)
 */
export function getElementSiblings (element) {
  return [...element.parentElement.children]
    .filter(el => el !== element)
}
