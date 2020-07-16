// ========================
// Case Conversion Utilities
// ========================
/**
 * kebab-case -> Title Case
 * @param {String} string
 */
export function kebabToTitle (string) {
  return string.split('-')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}

/**
 * kebab-case -> Sentence case
 * @param {String} string
 */
export function kebabToSentence (string) {
  const sentence = string.split('-').join(' ')
  return sentence.charAt(0).toUpperCase() + sentence.slice(1)
}
