// ========================
// Stuff that deals with CSS
// ========================
/**
 * Gets computed translate values
 * @param {HTMLElement} element
 * @returns {Object}
 */
export function getTranslateValues (element) {
  const style = window.getComputedStyle(element)
  const matrix = style.transform || style.webkitTransform || style.mozTransform

  // Can either be 2d or 3d transform
  const matrixType = matrix.includes('3d') ? '3d' : '2d'
  const matrixValues = matrix.match(/matrix.*\((.+)\)/)[1].split(', ')

  // 2d Matrixes have 6 values
  // Last 2 values are X and Y
  if (matrixType === '2d') {
    return {
      x: matrixValues[4],
      y: matrixValues[5]
    }
  }

  // 3d Matrixes have 16 values
  // The 13th, 14th, and 15th values are X, Y, and Z
  if (matrixType === '3d') {
    return {
      x: matrixValues[12],
      y: matrixValues[13],
      z: matrixValues[14]
    }
  }
}
