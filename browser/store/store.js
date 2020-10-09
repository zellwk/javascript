/* eslint-env browser */

/**
 * Gets item from localStorage
 * @param {string} key
 */
export function get (key) {
  const raw = localStorage.getItem(key)
  if (!raw) return

  try {
    return JSON.parse(raw)
  } catch (e) {
    return raw
  }
}

export function getWithExpiry (key) {
  const result = get(key)
  if (!result) return

  // Expired. Delete from localstorage
  if (result.expiry < Date.now()) {
    remove(key)
    return
  }

  return result.value
}

/**
 * Add item to local storage.
 * If body is an object, converts object into JSON before saving.
 * @param {string} key
 * @param {*} value
 */
export function set (key, value) {
  value = typeof value === 'object'
    ? JSON.stringify(value)
    : value
  localStorage.setItem(key, value)
}

export function setWithExpiry (key, value, timeToExpiry) {
  set(key, {
    value: value,
    expiry: Date.now() + timeToExpiry
  })
}

/**
 * Removes item from localstorage
 * @param {string} item
 */
export function remove (item) {
  localStorage.removeItem(item)
}
