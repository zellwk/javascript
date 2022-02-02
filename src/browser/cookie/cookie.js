/**
 * Gets a cookie by name
 * Thanks to https://stackoverflow.com/a/21125098
 * @param {string} name Cookie name
 * @returns string Cookie value
 */
export function getCookie (name) {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'))
  if (match) return match[2]
}
