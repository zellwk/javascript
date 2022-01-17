# Localstore

Helpers to make `localstorage` easier to use.

## Usage

Import the library and use it.

```js
import localstore from '@zellwk/javascript/localstore'
```

## Methods

- `get` — Get item from localstorage
- `set` — Add item to localstorage.
- `remove` — Removes item from localstorage.

### Get

Get an item from localstorage. If the item is JSON, it will be converted back into an object.

If an `expiry` is set and the item has expired, `get` deletes the item from localstorage and returns nothing.

```js
get(key)
```

- `key` — The key of the item to get.

### Set

Sets an item in localstorage. If the item is an object or an array, it will be converted into JSON.

```js
set(key, value, expiry)
```

- `key` - The key of the item to set.
- `value` - The value to set. This value will be converted into JSON automatically.
- `expiry` - Time to expiry in milliseconds. Defaults to 0 which means it will never expire.

### Remove

```js
remove(key)
```

- `key` — The key of the item to remove.
