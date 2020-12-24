# Case Conversion Utilities

This file contains utilities to convert any string into the following cases:

1. `kebab-case`
2. `camelCase`
3. `Title Case`
4. `Sentence case`

[See my process for creating these case-conversion utilties](https://zellwk.com/blog/case-conversion)

## Examples

```javascript
toKebab('caseWithSomeWords') // case-with-some-words
toKebab('CaseWithSomeWords') // case-with-some-words
toKebab('case_with_some_words') // case-with-some-words
toKebab('Case with some words') // case-with-some-words
toKebab('Case With Some Words') // case-with-some-words
toKebab('Case_with SomeWords') // case-with-some-words
```

## Installation

Manual installation:

- Copy and paste the entire file into your javascript file. 😉
- If you use ES5 Modules, you can import them into your file

```js
import { toKebab } from "./convert-case.js"
toKebab('someString')
```

NPM:

- Run `npm install -D @zellwk/javascript`
- Import the `convert-case.js`

```js
import { toKebab } from "@zellwk/javascript/convert-case"
toKebab('someString')
```

