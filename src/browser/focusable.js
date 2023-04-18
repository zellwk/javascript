export default function Focusable(element = document) {
  return {
    get length() {
      return this.keyboardOnly.length
    },

    get all() {
      return [
        ...element.querySelectorAll(
          `a, 
            button, 
            input, 
            textarea, 
            select, 
            details, 
            iframe, 
            embed, 
            object, 
            summary, 
            dialog, 
            audio[controls], 
            video[controls], 
            [contenteditable], 
            [tabindex]
          `
        ),
      ].filter(el => {
        if (el.hasAttribute('disabled')) return false
        if (el.hasAttribute('hidden')) return false
        if (window.getComputedStyle(el).display === 'none') return false

        return true
      })
    },

    get keyboardOnly() {
      return this.all.filter(el => el.tabIndex > -1)
    },

    get firstFocusable() {
      return this.keyboardOnly[0]
    },

    get lastFocusable() {
      return this.keyboardOnly[this.length - 1]
    },
  }
}
