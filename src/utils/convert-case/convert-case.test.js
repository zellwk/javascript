/* eslint-env jest */
import { toKebab, toCamel, toSentence, toTitle } from './convert-case'

const cases = {
  pascal: 'CaseWithLongName',
  camel: 'caseWithLongName',
  snake: 'case_with_long_name',
  kebab: 'case-with-long-name',
  sentence: 'Case with long name',
  title: 'Case With Long Name',
  mix: 'case_With-long name'
}

test('toKebab', () => {
  Object.entries(cases).forEach(c => {
    const result = toKebab(c[1])
    expect(result, c[0]).toMatch(/case-with-long-name/i)
  })
})

test('toCamel', () => {
  Object.entries(cases).forEach(c => {
    const result = toCamel(c[1])
    expect(result, c[0]).toBe('caseWithLongName')
  })
})

test('toSentence', () => {
  Object.entries(cases).forEach(c => {
    const result = toSentence(c[1])
    expect(result, c[0]).toBe('Case with long name')
  })
})

test('toTitle', () => {
  Object.entries(cases).forEach(c => {
    const result = toTitle(c[1])
    expect(result, c[0]).toBe('Case With Long Name')
  })
})

test('Complex Edge Case', () => {
  const string = 'ICannotBelieve300_got cancelled. DAMN IT'
  const test = toKebab(string)
  expect(test).toMatch(/i-cannot-believe-300-got-cancelled-damn-it/)
})
