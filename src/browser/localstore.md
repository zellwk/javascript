# localStore

Helpers to make local storage easier to use.

## Usage

```js
import localStore from '@zellwk/javascript/browser/localStore'
```

## Methods

- `set` — Add item to local storage.
- `get` — Get item from local storage
- `remove` — Removes item from local storage.

### Set

Sets an item in local storage. If the item is an object or an array, it will be converted into JSON.

```js
set(key, value)
```

- `key` - The key of the item to set.
- `value` - The value to set. If this value is an object, it will be converted into JSON automatically.

### Get

Get an item from local storage. If the item is JSON, it will be converted back into an object.

```js
get(key)
```

- `key` — The key of the item to get.

### Remove

```js
remove(key)
```

- `key` — The key of the item to remove.
