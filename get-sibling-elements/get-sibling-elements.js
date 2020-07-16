/**
 * Gets siblings of the specified element
 * @param {HTMLElement} element
 * @example getSiblingElements(element)
 */
export function getSiblingElements (element) {
  return [...element.parentElement.children]
    .filter(el => el !== element)
}
