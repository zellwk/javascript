import { getKeyboardFocusableElements } from '../html-related/focusables'

export function trapFocus (element, event) {
  const focusables = getKeyboardFocusableElements(element)
  const firstFocusable = focusables[0]
  const lastFocusable = focusables[focusables.length - 1]

  // Directs to first focusable
  if (document.activeElement === lastFocusable && event.key === 'Tab' && !event.shiftKey) {
    event.preventDefault()
    firstFocusable.focus()
  }

  // Directs to last focusable
  if (document.activeElement === firstFocusable && event.key === 'Tab' && event.shiftKey) {
    event.preventDefault()
    lastFocusable.focus()
  }
}
