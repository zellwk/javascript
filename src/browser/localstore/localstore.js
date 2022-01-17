/* eslint-env browser */

/**
 * Gets item from localStorage
 * @param {string} key
 */
export function get (key) {
  const retrieved = localStorage.getItem(key)
  if (!retrieved) return

  try {
    // Parses JSON back to Objects
    const result = JSON.parse(retrieved)

    // If key is expried, delete from localstorage and return nothing
    if (result.expiry < Date.now()) {
      remove(key)
      return
    }

    // Otherwise return the value
    return result.value
  } catch (e) {
    // Returns plain string if not JSON
    return retrieved
  }
}

/**
 * Adds item to local storage.
 * Converts values into JSON before storing.
 * @param {string} key
 * @param {*} value
 * @param {number} [expiry] - Milliseconds until expiry. Defaults to 0, which means no expiry
 */
export function set (key, value, expiry = 0) {
  // Converts objects into JSON
  value = typeof value === 'object' ? JSON.stringify(value) : value

  //
  if (!expiry) {
    localStorage.setItem(key, value)
    return
  }

  set(key, {
    value: value,
    expiry: Date.now() + expiry
  })
}

/**
 * Removes item from localstorage
 * @param {string} item
 */
export function remove (item) {
  localStorage.removeItem(item)
}
