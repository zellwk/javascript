/**
 * Creates a delay
 * @name sleep
 * @param {Number} ms - Number of milliseconds
 * @example sleep(1000).then(_ => { ... })
 */
export function sleep (ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

/**
 *
 * @alias sleep
 */
export function delay (ms) {
  return sleep(ms)
}
