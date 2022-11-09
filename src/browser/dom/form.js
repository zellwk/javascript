/**
 * Converts entries in form.elements into an object for use in an application/json request.
 * Only elements with a 'name' attribute will be added to the object.
 * @param {Element} form The form element
 */
export function formElementsToObject(form) {
  const ret = {}
  const elements = form.elements
  for (const element of elements) {
    if (element.name) continue
    ret[element.name] = element.value.trim()
  }
  return ret
}

/**
 * Converts entries in form.elements into a query string for use in x-www-form-urlencoded requests.
 * Only elements with a 'name' attribute will be added to the query string.
 * @param {Element} form The form element
 */
export function formElementsToQueryString(form) {
  const searchParams = new URLSearchParams()
  return searchParams(new FormData(form))
}
