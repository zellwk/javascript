# JavaScript

I put together a collection of JavaScript stuff I use. Hope you find them useful!

## Installation and usage

You can install everything in this library with this:

```bash
npm install @zellwk/javascript
```

Then import whatever utilities you need. Replace `<file-name>` with the file of the utility you want to import.

```bash
import utility from '@zellwk/javascript/<file-name>.js'
```

You can use these libraries in the frontend even if you don't use a bundler. Please read [this article](https://zellwk.com/blog/node-modules-in-frontend-without-bundlers/) for more info.

In this case, you would import the utility from the `lib` folder.

```js
import utility from './node_modules/@zellwk/javascript/lib/<file-name>.js'
```

## What's here?

Feel free to explore the `src` folder to find what's available.

- `browser` — Browser utilities
- `node` — Node only utilities
- `utils` — Utilities for both browser and Node

You will find documentations for each utility in their respective `readme` files. (I'm still in the process of writing these reade files. Help is appreciated!).

## WIP Warning

This repository is always a Work in Progress. I may change anything anytime!

## Notes

- This package is ESM only. It does not support Common JS modules.
- You can copy-paste most of these utilities into your project if you don't want to import the entire library.

## Changelog

Detailed changes for each release are documented in [the release notes](https://github.com/zellwk/javascript/releases).
