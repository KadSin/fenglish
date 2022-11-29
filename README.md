# Fenglish

<a href="https://www.npmjs.com/package/fenglish"><img src="https://img.shields.io/npm/v/fenglish?label=version" alt="Version"></a>
<a href="https://www.npmjs.com/package/fenglish?minimal=true"><img src="https://img.shields.io/npm/dm/fenglish" alt="Downloads"></a>
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

**Notes:**

-   Vowels are effective in the output of this function
-   _This function works correctly for "Alef", "Ayn", "Hamza", "Vaav" and "Ye" letters and not work correctly for other letters yet._ (**Work in progress...**)

#### Example

```js
import { toFenglish } from 'fenglish'

const persian = 'آرامَم مَن!'
console.log(toFenglish(persian)) // prints `aramam man!`
```
