# Fenglish

Includes utilities which play with persian texts for Fenglish purposes.

## Install

---

```bash
npm i fenglish
```

## Usages

---

### `toFenglish`

This function takes a `Persian` text and returns its `Fenglish` text.

```js
import { toFenglish } from 'fenglish'

const persian = 'آرامَم مَن!'
console.log(toFenglish(persian)) // prints `aramam man!`
```

_Note that this function works correctly for the letter "Alef" and not work correctly for other letters yet._ (**Work in progress...**)
