/**
 * Creates a delay
 * @name wait
 * @param {Number} ms - Number of milliseconds
 * @example wait(1000).then(_ => { ... })
 */
export function wait (ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
