/* eslint-env jest */
import { describe, expect, it } from 'vitest'
import { toKebab, toCamel, toSentence, toTitle } from './convert-case'

const cases = {
  kebab: 'case-with-long-name100',
  snake: 'case_with_long_name100',
  camel: 'caseWithLongName100',
  pascal: 'CaseWithLongName100',
  sentence: 'Case with long name100',
  title: 'Case With Long Name100',
  constant: 'CASE_WITH_LONG_NAME100',
  mixCases: 'case_WITH-Long name100',
}

describe('To Kebab', _ => {
  Object.entries(cases).forEach(c => {
    it(`From ${c[0]}`, () => {
      const result = toKebab(c[1])
      expect(result, c[0]).toBe('case-with-long-name-100')
    })
  })
})

describe('To Camel', _ => {
  Object.entries(cases).forEach(c => {
    it(`From ${c[0]}`, () => {
      const result = toCamel(c[1])
      expect(result, c[0]).toBe('caseWithLongName100')
    })
  })
})

describe('To Sentence', _ => {
  Object.entries(cases).forEach(c => {
    it(`From ${c[0]}`, () => {
      const result = toSentence(c[1])
      expect(result, c[0]).toBe('Case with long name 100')
    })
  })
})

describe('To Title', _ => {
  Object.entries(cases).forEach(c => {
    it(`From ${c[0]}`, () => {
      const result = toTitle(c[1])
      expect(result, c[0]).toBe('Case With Long Name 100')
    })
  })
})
