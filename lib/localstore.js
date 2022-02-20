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
  const retrieved = localStorage.getItem(key)
  if (!retrieved) return

  let parsed
  try {
    parsed = JSON.parse(retrieved)
  } catch (error) {
    // Returns plain string if stored value is not JSON
    return retrieved
  }

  // If there is no expiry date, return the object
  if (!parsed.expiry) return parsed

  // Returns the object if it is not expired
  if (parsed.expiry > Date.now()) return parsed

  // Removes the item if it is expired.
  // Useful for cleaning up expired items.
  if (parsed.deleteWhenExpired) {
    remove(key)
    return
  }

  // Returns the expired value if user wants to keep it.
  // Useful for storing expiry and non-expiry data in the same key.
  return { ...parsed, expired: true }
}

/**
 * Adds item to local storage.
 * Converts values into JSON before storing.
 * @param {string} key
 * @param {string | object} value - The value to save
 * @param {number} expiry - Milliseconds until expiry. Defaults to 0, which means no expiry
 */
export function set (key, value, { expiry = 0, deleteWhenExpired = true }) {
  if (!expiry) {
    localStorage.setItem(key, stringify(value))
    return
  }

  value = {
    ...value,
    expiry: Date.now() + expiry,
    deleteWhenExpired
  }

  localStorage.setItem(key, stringify(value))
}

// Converts value into a JSON string before storing
function stringify (value) {
  if (typeof value === 'string') return value
  return JSON.stringify(value)
}

/**
 * Removes item from localstorage
 * @param {string} item
 */
export function remove (item) {
  localStorage.removeItem(item)
}
