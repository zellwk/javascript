// ========================
// Case Conversion Utilities
// Note: All case conversion functions require `toKebab` to work.
// ------------------------
export function toKebab (string) {
  // Complex and complete regex string thanks to https://github.com/zellwk/javascript/issues/14
  return string
    .replace(
      /([^\p{L}\d]+|(?<=\p{L})(?=\d)|(?<=\d)(?=\p{L})|(?<=[\p{Ll}\d])(?=\p{Lu})|(?<=\p{Lu})(?=\p{Lu}\p{Ll})|(?<=[\p{L}\d])(?=\p{Lu}\p{Ll}))/gu,
      '-'
    )
    .toLowerCase()
}

export function toCamel (string) {
  return toKebab(string)
    .split('-')
    .map((word, index) => {
      if (index === 0) return word
      return word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase()
    })
    .join('')
}

export function toTitle (string) {
  return toKebab(string)
    .split('-')
    .map(word => {
      return word.slice(0, 1).toUpperCase() + word.slice(1)
    })
    .join(' ')
}

export function toSentence (string) {
  const interim = toKebab(string).replace(/-/g, ' ')
  return interim.slice(0, 1).toUpperCase() + interim.slice(1)
}
