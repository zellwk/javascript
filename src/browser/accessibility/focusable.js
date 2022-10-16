// TODO: Make focusable elements list more complete.
//  - See #2 and #7 for info.
export default function Focusable (element = document) {
  return {
    get length () {
      return this.keyboardOnly.length
    },

    get all () {
      return [
        ...element.querySelectorAll(
          'a, button, input, textarea, select, details, iframe, embed, object, summary dialog, audio[controls], video[controls], [contenteditable], [tabindex]'
        )
      ].filter(el => {
        return (
          !el.hasAttribute('disabled') &&
          !el.hasAttribute('hidden') &&
          el.computedStyleMap().get('display').value !== 'none'
        )
      })
    },

    get keyboardOnly () {
      return this.all.filter(el => el.tabIndex > -1)
    },

    get firstFocusable () {
      return this.keyboardOnly[0]
    },

    get lastFocusable () {
      return this.keyboardOnly[this.length - 1]
    }
  }
}
