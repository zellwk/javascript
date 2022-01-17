/* globals getComputedStyle */
export function em (element, multiple) {
  const unit = parseInt(getComputedStyle(element)['font-size'])
  return unit * multiple
}

export function rem (multiple) {
  const unit = parseInt(getComputedStyle(document.body)['font-size'])
  return unit * multiple
}
