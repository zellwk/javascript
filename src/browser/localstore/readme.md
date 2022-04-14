# Localstore

Helpers to make local storage easier to use.

## Usage

Import the library and use it.

```js
import * as localStore from '@zellwk/javascript/localstore'
```

## Methods

- `set` — Add item to local storage.
- `get` — Get item from local storage
- `remove` — Removes item from local storage.

### Set

Sets an item in local storage. If the item is an object or an array, it will be converted into JSON.

```js
set(key, value, options)
```

- `key` - The key of the item to set.
- `value` - The value to set. This value will be converted into JSON automatically.

#### Set Options

Here are the available options:

- `expiresIn` - Time to expiry in seconds. Defaults to 0 which means it will never expire.
- `deleteWhenExpired`
  - If `true`, the item will be deleted from the local storage when it expires. This deletion happens as you check local storage with `get`.
  - If `false`, an `expired` property set to `true` will be added to the item when the item has expired.

```js
set(key, value, {
  expiry: 1000 // Defaults to 0
  deleteWhenExpired: true // Defaults to true
})
```

Note: We use seconds for `expiresIn` because the `expires_in` value (from OAuth tokens) is usually set in seconds. localStore converts this value into milliseconds as it sets the expiry date.

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
