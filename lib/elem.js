export default {
  get status () {
    const hidden = element.hasAttribute('hidden')
    if (hidden) return 'hidden'
    return 'displayed'
  },

  hide (element) {
    element.setAttribute('hidden', true)
  },

  show (element) {
    element.removeAttribute('hidden')
  },

  /**
   * Gets siblings of the specified element
   * @param {HTMLElement} element
   * @example siblings(element)
   */
  get siblings (element) {
    return [...element.parentElement.children].filter(el => el !== element)
  },

  /**
   * Gets the Bounding box with information about
   * horizontal and vertical centers of the box
   * @see https://zellwk.com/blog/get-bounding-box
   * @param {HTMLElement} element
   */
  get boundingBox (element) {
    const box = element.getBoundingClientRect()
    const ret = {}

    for (const prop in box) {
      ret[prop] = box[prop]
    }

    ret.xCenter = (box.left + box.right) / 2
    ret.yCenter = (box.top + box.bottom) / 2

    return ret
  }
}
