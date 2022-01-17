import Focusable from './focusable.js'

export default function trapFocus (element, event) {
  const focusables = Focusable(element)
  const { firstFocusable, lastFocusable } = focusables

  // Directs to first focusable
  if (
    document.activeElement === lastFocusable &&
    event.key === 'Tab' &&
    !event.shiftKey
  ) {
    event.preventDefault()
    firstFocusable.focus()
  }

  // Directs to last focusable
  if (
    document.activeElement === firstFocusable &&
    event.key === 'Tab' &&
    event.shiftKey
  ) {
    event.preventDefault()
    lastFocusable.focus()
  }
}
