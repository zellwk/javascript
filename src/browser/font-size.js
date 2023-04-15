/* globals getComputedStyle */
export function em(element = document.body, multiple = 1) {
  const unit = parseInt(getComputedStyle(element)['font-size'])
  return unit * multiple
}

export function rem(multiple = 1) {
  const unit = parseInt(getComputedStyle(document.body)['font-size'])
  return unit * multiple
}
