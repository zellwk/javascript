/**
 * Generates a unique string
 * @param {Number} length Length of string to generate
 * @returns {String}
 */
export function generateUniqueString (length) {
  return Math.random().toString(36).substring(2, 2 + length)
}
