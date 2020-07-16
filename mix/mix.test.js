/* eslint-env jest */
import mix from './mix'

test('Merge objects', () => {
  const one = { one: 'one', overwrite: 'nope' }
  const two = { two: 'two', overwrite: 'yes' }
  const three = mix(one, two)

  expect(three).toEqual({
    one: 'one',
    two: 'two',
    overwrite: 'yes'
  })
})

test('Accessors', () => {
  let count = 0
  const one = {}
  const two = {
    get count () { return count },
    set count (value) { count = value }
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

test('Nested accessors', () => {
  let count = 0
  const one = {}
  const two = {
    nested: {
      get count () { return count },
      set count (value) { count = value }
    }
  }

  const three = mix(one, two)
  expect(three).toEqual(two)
  expect(two.nested).not.toBe(three.nested)

  const descriptor = Object.getOwnPropertyDescriptor(three.nested, 'count')
  expect(descriptor.get).toBeFunction()
  expect(descriptor.set).toBeFunction()
})

test('Nested objects', () => {
  const one = {}
  const two = { nested: { value: 'two', deep: { value: 'deep-two' } } }
  const three = mix(one, two)

  expect(three).toEqual(two)
  expect(three.nested.value).toBe('two')
  expect(three.nested.deep.value).toBe('deep-two')

  // Prevents mutation of nested object
  three.nested.value = 'three'
  expect(two.nested.value).toBe('two')

  // Prevents mutation of deeply nested object
  three.nested.deep.value = 'deep-three'
  expect(two.nested.deep.value).toBe('deep-two')
})

test('Nested arrays', () => {
  const one = {}
  const two = { array: [1, 2, 3] }
  const three = mix(one, two)

  expect(three).toEqual(two)
  expect(three.array.push).toBeFunction()

  // Prevent mutation
  three.array.push(4)
  expect(two.array).toBeArrayOfSize(3)
  expect(three.array).toBeArrayOfSize(4)
})

test('Objects in Arrays', () => {
  const one = {}
  const two = {
    array: [1, { value: 2 }, 3, { get count () { return 1 } }]
  }
  const three = mix(one, two)

  expect(three).toEqual(two)
  expect(three.array.push).toBeFunction()
  expect(two.array[1]).not.toBe(three.array[1])

  // Ensures accessors are copied over
  const descriptor = Object.getOwnPropertyDescriptor(three.array[3], 'count')
  expect(descriptor.get).toBeFunction()
})

test('Deep nested arrays', () => {
  const one = {}
  const two = {
    array: [1, [2], 3]
  }
  const three = mix(one, two)

  expect(three).toEqual(two)
  expect(three.array).toBeArrayOfSize(3)
  expect(three.array[1]).toBeArrayOfSize(1)
  expect(two.array[1]).not.toBe(three.array[1])
})

test('Functions (cannot be cloned)', () => {
  const one = {}
  const two = {
    nested: {
      identity (i) { return i },
      deep: {
        identity (i) { return i }
      }
    }
  }

  const three = mix(one, two)
  expect(three).toEqual(two)
  expect(three.nested.identity).toBe(two.nested.identity)
  expect(three.nested.deep.identity).toBe(two.nested.deep.identity)
})

test('Nested Dates', () => {
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

test('Nested Maps', () => {
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

test('Nested Sets', () => {
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
  expect(three.set.has('one')).toBeTrue()
  expect(three.set.has(a)).toBeFalse()

  expect(three.nested.set).not.toBe(two.nested.set)
  expect(three.nested.set).toEqual(two.nested.set)
  expect(three.nested.set.has('nested')).toBeTrue()

  // Note: WeakSet contains objects only... so there's no point creating a deep clone. You won't be able to access them.
  // That's why we're not testing WeakSet
})

// Types we don't need to clone or cannot clone.
// Examples:
// - Primitives don't need to clone
// - Functions cannot clone
