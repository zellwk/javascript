/**
 * Gets siblings of the specified element
 * @param {HTMLElement} element
 */
export function siblings(element) {
  return [...element.parentElement.children].filter(el => el !== element)
}

/**
 * Gets the Bounding box with information about
 * horizontal and vertical centers of the box
 * @param {HTMLElement} element
 */
export function boundingBox(element) {
  const box = element.getBoundingClientRect()
  const style = window.getComputedStyle(element)

  const ret = {}
  const padding = {
    top: parseFloat(style.paddingTop),
    right: parseFloat(style.paddingRight),
    bottom: parseFloat(style.paddingBottom),
    left: parseFloat(style.paddingLeft),
  }

  for (const prop in box) {
    ret[prop] = box[prop]
  }

  ret.xCenter = (box.left + box.right) / 2
  ret.yCenter = (box.top + box.bottom) / 2
  ret.padding = padding

  // Return accurate width and height measurements for use with animations
  const boxSizing = style.boxSizing
  if (boxSizing === 'content-box') {
    ret.width = box.width - padding.left - padding.right
    ret.height = box.height - padding.top - padding.bottom
  } else if (boxSizing === 'border-box') {
    ret.contentWidth = box.width - padding.left - padding.right
    ret.contentHeight = box.height - padding.top - padding.bottom
  }

  return ret
}

export default {
  /**
   * Gets siblings of the specified element
   * @deprecated
   * @param {HTMLElement} element
   */
  siblings(element) {
    console.warn('Default export is deprecated. Use named export instead.')
    siblings(element)
  },

  /**
   * Gets the Bounding box with information about
   * horizontal and vertical centers of the box
   * @deprecated
   * @param {HTMLElement} element
   */
  boundingBox(element) {},
}
