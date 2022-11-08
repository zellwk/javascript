/**
 * Converts entries in form.elements into an object
 * @param {FormElements} elements form.elements
 * @returns
 */
export function convertFormElementsToObject(elements) {
  const ret = {}
  for (const element of elements) {
    ret[element.name] = element.value.trim()
  }
  return ret
}
