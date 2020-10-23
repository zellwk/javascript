/**
 * Inserts an element before an existing element in the DOM tree
 * @param {HTMLElement} newNode
 * @param {HTMLElement} existingNode
 * @example insertBefore(newElement,existingElement)
 */
function insertBefore(newNode, existingNode) {
  existingNode.parentNode.insertBefore(newNode, existingNode)
}

/**
 * Inserts an element after an existing element in the DOM tree 
 * @param {HTMLElement} newNode
 * @param {HTMLElement} existingNode
 * @example insertAfter(newElement,existingElement)
 */
function insertAfter(newNode, existingNode) {
  existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling)
}
