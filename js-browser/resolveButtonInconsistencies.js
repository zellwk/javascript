/**
 * Resolve browser inconsistences when clicking on buttons
 * @see https://zellwk.com/blog/inconsistent-button-behavior/
 */
export function resolveButtonInconsistencies () {
  document.addEventListener('click', event => {
    if (event.target.matches('button')) {
      event.target.focus()
    }
  })
}
