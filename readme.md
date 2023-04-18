# JavaScript

I put together a collection of JavaScript functions I use. I found them exceptionally useful and I hope you will too.

Note: This collection is ESM only and cannot be used with CommonJS.

## Installation and usage with npm

You can install the library with npm:

```bash
npm install @zellwk/javascript
```

All files are found within there folders:

- `browser` — usable only in browsers
- `node` — usable only in Node
- `utils` — usable in both browsers and node

Just import whatever file you need from these folders. When importing, you can skip the `src` path because that is already handled for you in the `package.json` file.

Example for using Local Store:

```js
import * as localStore from '@zellwk/javascript/browser/local-store.js'
```

## Installation and usage without npm

You can use these libraries in the frontend even if you don't use a bundler. All you need to do is retrieve the library from a CDN like JsDelivr.

When you use this method, you need to include the `src` folder in your path.

Here's an example:

```js
import localStore from 'https://cdn.jsdelivr.net/npm/@zellwk/javascript@3.0.0/src/browser/localstore.js'
```

See [this article](https://zellwk.com/blog/node-modules-in-frontend-without-bundlers/) to make this nicer for your project.

## WIP Warning

This repository is always a Work in Progress. I may change anything anytime!

## Changelog

Detailed changes for each release are documented in [the release notes](https://github.com/zellwk/javascript/releases).
