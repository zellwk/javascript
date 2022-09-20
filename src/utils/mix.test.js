import { expect, it } from 'vitest'
import mix from './mix.js'

it('Merge objects', () => {
  const one = { one: 'one', overwrite: 'nope' }
  const two = { two: 'two', overwrite: 'yes' }
  const three = mix(one, two)

  expect(three).toEqual({
    one: 'one',
    two: 'two',
    overwrite: 'yes'
  })
})

it('Empty + Nested', () => {
  const one = {}
  const two = {
    nested: {
      value: 'nested-two',
      deep: {
        value: 'deep-two'
      }
    }
  }
  const three = mix(one, two)

  expect(three).toEqual(two)
  expect(three.nested.value).toBe('nested-two')
  expect(three.nested.deep.value).toBe('deep-two')

  // Prevents mutation of nested object
  three.nested.value = 'three'
  expect(two.nested.value).toBe('nested-two')

  // Prevents mutation of deeply nested object
  three.nested.deep.value = 'deep-three'
  expect(two.nested.deep.value).toBe('deep-two')
})

it('Double Nested Objects', () => {
  const one = {
    one: 'one',
    nested: {
      one: 'nested-one',
      deep: {
        one: 'deep-one'
      }
    }
  }

  const two = {
    two: 'two',
    nested: {
      two: 'nested-two',
      deep: {
        two: 'deep-two'
      }
    }
  }

  const three = mix(one, two)

  expect(three.one).toBe('one')
  expect(three.two).toBe('two')
  expect(three.nested.one).toBe('nested-one')
  expect(three.nested.two).toBe('nested-two')
  expect(three.nested.deep.one).toBe('deep-one')
  expect(three.nested.deep.two).toBe('deep-two')
})

it('Accessors', () => {
  let count = 0
  const one = {}
  const two = {
    get count () {
      return count
    },
    set count (value) {
      count = value
    }
  }

  const three = mix(one, two)
  expect(three).toEqual(two)

  const propertyDescriptor = Object.getOwnPropertyDescriptor(three, 'count')
  three.count = 3
  expect(three.count).toBe(3)
  expect(typeof propertyDescriptor.get).toBe('function')
  expect(typeof propertyDescriptor.set).toBe('function')
  expect(two.count !== three.count)
})

it('Empty + Nested accessors', () => {
  let count = 0
  const one = {}
  const two = {
    nested: {
      get count () {
        return count
      },
      set count (value) {
        count = value
      }
    }
  }

  const three = mix(one, two)
  expect(three).toEqual(two)
  expect(two.nested).not.toBe(three.nested)

  const descriptor = Object.getOwnPropertyDescriptor(three.nested, 'count')
  expect(typeof descriptor.get).toBe('function')
  expect(typeof descriptor.set).toBe('function')
})

it('Double nested with Accessors', () => {
  let count = 0
  const one = {
    nested: {
      get accessOne () {
        return count
      },
      set accessOne (value) {
        count = value
      }
    }
  }
  const two = {
    nested: {
      get accessTwo () {
        return count
      },
      set accessTwo (value) {
        count = value
      }
    }
  }

  const three = mix(one, two)
  expect(one.nested).not.toBe(three.nested)
  expect(two.nested).not.toBe(three.nested)

  const accessOne = Object.getOwnPropertyDescriptor(three.nested, 'accessOne')
  const accessTwo = Object.getOwnPropertyDescriptor(three.nested, 'accessTwo')

  expect(typeof accessOne.get).toBe('function')
  expect(typeof accessOne.set).toBe('function')
  expect(typeof accessTwo.get).toBe('function')
  expect(typeof accessTwo.set).toBe('function')
})

it('Nested arrays', () => {
  const one = {}
  const two = { array: [1, 2, 3] }
  const three = mix(one, two)

  expect(three).toEqual(two)
  expect(typeof three.array.push).toBe('function')

  // Prevent mutation
  three.array.push(4)
  expect(two.array).toHaveLength(3)
  expect(three.array).toHaveLength(4)
})

it('Double objects with nested same array', () => {
  const one = {
    array: [1, 2, 3]
  }
  const two = {
    array: [4, 5, 6]
  }

  const three = mix(one, two)
  expect(typeof three.array.push).toBe('function')
  expect(three.array).toHaveLength(6)
})

it('Objects in Arrays', () => {
  const one = {}
  const two = {
    array: [
      1,
      { value: 2 },
      3,
      {
        get count () {
          return 1
        }
      }
    ]
  }
  const three = mix(one, two)

  expect(three).toEqual(two)
  expect(typeof three.array.push).toBe('function')
  expect(two.array[1]).not.toBe(three.array[1])

  // Ensures accessors are copied over
  const descriptor = Object.getOwnPropertyDescriptor(three.array[3], 'count')
  expect(typeof descriptor.get).toBe('function')
})

it('Deep nested arrays', () => {
  const one = {}
  const two = {
    array: [1, [2], 3]
  }
  const three = mix(one, two)

  expect(three).toEqual(two)
  expect(three.array).toHaveLength(3)
  expect(three.array[1]).toHaveLength(1)
  expect(two.array[1]).not.toBe(three.array[1])
})

it('Functions (cannot be cloned)', () => {
  const one = {}
  const two = {
    nested: {
      identity (i) {
        return i
      },
      deep: {
        identity (i) {
          return i
        }
      }
    }
  }

  const three = mix(one, two)
  expect(three).toEqual(two)
  expect(three.nested.identity).toBe(two.nested.identity)
  expect(three.nested.deep.identity).toBe(two.nested.deep.identity)
})

it('Nested Dates', () => {
  const one = {}
  const two = {
    date: new Date(),
    nested: {
      date: new Date()
    }
  }
  const three = mix(one, two)

  expect(three.date).not.toBe(two.date)
  expect(three.date.getTime()).toBe(two.date.getTime())
  expect(three.nested.date).not.toBe(two.nested.date)
})

it('Nested Maps', () => {
  const one = {}
  const two = {
    map: new Map(),
    nested: {
      map: new Map()
    }
  }
  const a = { one: 1 }
  const b = { two: 2 }
  two.map.set('item', { one: 1 })
  two.map.set(a, b)
  two.nested.map.set('item', { one: 1 })

  const three = mix(one, two)

  expect(three.map).not.toBe(two.map)
  expect(three.map).toEqual(two.map)
  expect(three.map.get('item')).toEqual({ one: 1 })
  expect(three.map.get('item')).not.toBe(two.map.get('item'))

  expect(three.nested.map).toEqual(two.nested.map)
  expect(three.nested.map).not.toBe(two.nested.map)

  expect(three.map.get(a)).toEqual(b)
  expect(three.map.get(a)).not.toBe(two.map.get(a))

  // Note: WeakMap keys are not enumerable... so they cannot be cloned.
  // That's why we're not testing WeakMap
})

it('Nested Sets', () => {
  const one = {}
  const two = {
    set: new Set(),
    nested: {
      set: new Set()
    }
  }
  const a = { object: 'test' }
  two.set.add('one')
  two.set.add(a)
  two.nested.set.add('nested')

  const three = mix(one, two)

  expect(three.set).not.toBe(two.set)
  expect(three.set).toEqual(two.set)
  expect(three.set.has('one')).toBe(true)
  expect(three.set.has(a)).toBe(false)

  expect(three.nested.set).not.toBe(two.nested.set)
  expect(three.nested.set).toEqual(two.nested.set)
  expect(three.nested.set.has('nested')).toBe(true)

  // Note: WeakSet contains objects only... so there's no point creating a deep clone. You won't be able to access them.
  // That's why we're not testing WeakSet
})

// Prevents Prototype Pollution
// https://codeburst.io/what-is-prototype-pollution-49482fc4b638
it('Safe Merge', () => {
  const polluted = JSON.parse('{"__proto__": {"admin": true}}')
  const mixed = mix(polluted)

  /* eslint-disable */
  expect(mixed.__proto__).toEqual({})
  /* eslint-enable */
})
