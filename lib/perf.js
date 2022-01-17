/**
 * Performance measurement
 * @see https://zellwk.com/blog/performance-now
 * @param {String} message - Test message
 * @param {Function} callback – Callback to run
 * @param {Number} loops - Number of iterations
 */
export function perf (message, callback, loops = 1) {
  const performance = typeof process === 'object'
    ? require('perf_hooks').performance
    : window.performance

  const startTime = performance.now()
  while (loops) {
    callback()
    loops = loops - 1
  }
  const endTime = performance.now()
  const elapsed = endTime - startTime
  console.log(message + ':', elapsed)
}
