# Focusable

Finds focusable elements within a specified element. [More info](https://zellwk.com/blog/keyboard-focusable-elements/)

## Usage

Import the module and run it.

```js
import Focusable from '@zellwk/javascript/focusable'
const focusables = Focusable(element)
```

- `element`: The element to search for focusable elements. Defaults to `document`.

### Properties

Focusable has the following properties:

1. `all` - Array of focusable elements
2. `keyboardOnly` - Array of keyboard focusable elements
3. `length` - Number of keyboard focusable elements
4. `firstFocusable` - First keyboard focusable element
5. `lastFocusable` - Last keyboard focusable element

```js
const focusables = Focusable(element)
focusables.all // Array of focusable elements
```
