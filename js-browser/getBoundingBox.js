/**
 * Gets the Bounding box with information about
 * horizontal and vertical centers of the box
 * @see https://zellwk.com/blog/get-bounding-box
 * @param {HTMLElement} element
 */
export function getBoundingBox (element) {
  const box = element.getBoundingClientRect()
  const ret = {}

  for (const prop in box) {
    ret[prop] = box[prop]
  }

  ret.xCenter = (box.left + box.right) / 2
  ret.yCenter = (box.top + box.bottom) / 2

  return ret
}
