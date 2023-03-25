export default {
  /**
   * Gets siblings of the specified element
   * @param {HTMLElement} element
   */
  siblings(element) {
    return [...element.parentElement.children].filter(el => el !== element)
  },

  /**
   * Gets the Bounding box with information about
   * horizontal and vertical centers of the box
   * @param {HTMLElement} element
   */
  boundingBox(element) {
    const box = element.getBoundingClientRect()
    const style = window.getComputedStyle(box)

    const ret = {}

    for (const prop in box) {
      ret[prop] = box[prop]
    }

    ret.xCenter = (box.left + box.right) / 2
    ret.yCenter = (box.top + box.bottom) / 2

    // Adjust Width and Height if Box Sizing is content-box, which shouldn't be the case for most sites... but just in case when working with other people's code.
    const boxSizing = style.boxSizing

    if (boxSizing === 'content-box') {
      const padding = {
        top: parseInt(style.paddingTop),
        right: parseInt(style.paddingRight),
        bottom: parseInt(style.paddingBottom),
        left: parseInt(style.paddingLeft),
      }

      ret.width = box.width - padding.left - padding.right
      ret.height = box.height - padding.top - padding.bottom
    }

    return ret
  },
}
