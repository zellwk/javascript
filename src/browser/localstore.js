/* eslint-env browser */

export default {
  get,
  set,
  remove
}

/**
 * Gets item from localStorage
 * @param {string} key
 */
export function get (key) {
  const value = localStorage.getItem(key)
  if (!value) return

  try {
    // Returns an object if stored value is JSON
    return JSON.parse(value)
  } catch (error) {
    // Returns plain string if stored value is not JSON
    return value
  }
}

/**
 * Adds item to local storage.
 * Converts values into JSON before storing.
 * @param {string} key
 * @param {string | object} value - The value to save
 */
export function set (key, value) {
  const ret = {}

  if (typeof value === 'string') {
    localStorage.setItem(key, value)
  } else {
    localStorage.setItem(key, JSON.stringify(value))
  }
}

/**
 * Removes item from localstorage
 * @param {string} key
 */
export function remove (key) {
  localStorage.removeItem(key)
}
