# Mix

- Merges objects. Like `Object.assign`, but performs a deep merge so won't be any mutation.
- [Why I created `mix`](https://zellwk.com/blog/copy-properties-of-one-object-to-another-object)

## Usage

Import the module and use it.

```js
import mix from '@zellwk/javascript/mix'
mix(target, source)
```

## Example

Pass objects into mix to combine them. Mix creates a new object for you automatically. Nothing will get mutated.

```js
let count = 0
const one = { one: 'one' }
const two = { two: 'two' }
const mixed = mix(one, two)

// Output
// {
//   one: 'one',
//   two: 'two',
// }
```

## Features

1. It copies accessors.
2. It performs a deep merge so no mutation can happen

### Copying accessors

Mix copies accessors along with other properties. Most other deep merging libraries don't do this. `Object.assign` doesn't do this either.

```js
let count = 0
const one = { one: 'one' }
const two = { two: 'two' }
const three = {
  get count () {
    return count
  },
  set count (value) {
    count = value
  }
}
const mixed = mix({}, one, two, three)

// Output
// {
//   one: 'one',
//   two: 'two',
//   get count () { return count } ,
//   set count (value) { count = value }
// }
```

### Deep Merging

`mix` copies nested objects and arrays so you don't have to worry about mutation.

```js
const one = {}
const two = { nested: { value: 'two' } }
const three = mix(one, two)

// Nested values do not get mutated
three.nested.value = 'three'
console.log(two.nested.value) // 'two'
```

That's it!
