// ========================
// Case Conversion Utilities
// Note: All case conversion functions require `toKebab` to work.
// ------------------------
export function toKebab(string) {
  return string
    .split('')
    .map((letter, index) => {
      const previousLetter = string[index - 1] || ''
      const currentLetter = letter

      if (isDigit(currentLetter) && !isDigit(previousLetter)) {
        return `-${currentLetter}`
      }

      if (!isCaps(currentLetter)) return currentLetter

      if (previousLetter === '') {
        return `${currentLetter.toLowerCase()}`
      }

      if (isCaps(previousLetter)) {
        return `${currentLetter.toLowerCase()}`
      }

      return `-${currentLetter.toLowerCase()}`
    })
    .join('')
    .trim()
    .replace(/[-_\s]+/g, '-')
}

export function toCamel(string) {
  return toKebab(string)
    .split('-')
    .map((word, index) => {
      if (index === 0) return word
      return word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase()
    })
    .join('')
}

export function toTitle(string) {
  return toKebab(string)
    .split('-')
    .map(word => {
      return word.slice(0, 1).toUpperCase() + word.slice(1)
    })
    .join(' ')
}

export function toSentence(string) {
  const interim = toKebab(string).replace(/-/g, ' ')
  return interim.slice(0, 1).toUpperCase() + interim.slice(1)
}

// Checks whether character is Uppercase.
// Crude version. Checks only A-Z.
function isCaps(char) {
  return /\p{Lu}/u.test(char);
}

// Checks whether character is digit.
function isDigit(char) {
  return /[0-9]/.test(char);
}
