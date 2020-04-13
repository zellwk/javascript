// ========================
// Stuff that makes localStorage easier to use
// ========================
/**
 * Gets item from localStorage
 * @param {string} item
 */
export function get (item) {
  const raw = window.localStorage.getItem(item)
  // If is JSON, return JS object.
  // Otherwise return raw text
  try {
    return JSON.parse(raw)
  } catch (e) {
    return raw
  }
}

/**
 * Saves item to local storage.
 * If body is an object, converts object into JSON before saving.
 * @param {string} item
 * @param {*} body
 */
export function save (item, body) {
  body = typeof body === 'object'
    ? JSON.stringify(body)
    : body
  window.localStorage.setItem(item, body)
}

/**
 * Removes item from localstorage
 * @param {string} item
 */
export function remove (item) {
  window.localStorage.removeItem(item)
}

export default {
  get,
  save,
  remove
}
