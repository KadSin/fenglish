# Fenglish
<a href="https://www.npmjs.com/package/fenglish"><img src="https://img.shields.io/npm/v/fenglish?label=version" alt="Version"></a>
<a href="https://www.npmjs.com/package/fenglish?minimal=true"><img src="https://img.shields.io/npm/dt/fenglish" alt="Downloads"></a>
<img src="https://img.shields.io/github/workflow/status/kadsin/fenglish/Test?label=tests" alt="Tests">
<img src="https://img.shields.io/github/license/kadsin/fenglish" alt="License">

Includes utilities which play with persian texts for Fenglish purposes.

## Install

```bash
npm i fenglish
```

## Usages

### `toFenglish`

This function takes a `Persian` text and returns its `Fenglish` text.

```js
import { toFenglish } from 'fenglish'

const persian = 'آرامَم مَن!'
console.log(toFenglish(persian)) // prints `aramam man!`
```

_Note that this function works correctly for the letter "Alef" and not work correctly for other letters yet._ (**Work in progress...**)
