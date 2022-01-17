/**
 * Use by importing this file
 * Resolve browser inconsistences when clicking on buttons
 * @see https://zellwk.com/blog/inconsistent-button-behavior/
 */
document.addEventListener('click', event => {
  if (event.target.matches('button')) {
    event.target.focus()
  }
})
