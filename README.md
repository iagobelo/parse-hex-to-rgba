# Parse Hex To RGBA

[![CI](https://github.com/iagobelo/parse-hex-to-rgba/actions/workflows/ci.yml/badge.svg)](https://github.com/iagobelo/parse-hex-to-rgba/actions/workflows/ci.yml)
[![npm version](https://img.shields.io/npm/v/parse-hex-to-rgba)](https://www.npmjs.com/package/parse-hex-to-rgba)
[![Bundle size](https://img.shields.io/bundlejs/size/parse-hex-to-rgba)](https://bundlejs.com/?q=parse-hex-to-rgba)
[![Downloads](https://img.shields.io/npm/dm/parse-hex-to-rgba)](https://www.npmjs.com/package/parse-hex-to-rgba)
[![License](https://img.shields.io/npm/l/parse-hex-to-rgba)](./LICENSE)

Converts a `HEX` color to a `RGBA` color. Zero dependencies, ships ESM, CJS and
UMD builds with TypeScript types.

## Installation

```sh
npm install parse-hex-to-rgba
```

### Installation from CDN

This module has a UMD bundle available through JSDelivr and Unpkg.

```html
<!-- For UNPKG use the code below. -->
<script src="https://unpkg.com/parse-hex-to-rgba"></script>

<!-- For JSDelivr use the code below. -->
<script src="https://cdn.jsdelivr.net/npm/parse-hex-to-rgba"></script>

<script>
  // The UMD bundle is exposed through the "parseHexToRgba" global variable.
  console.log(parseHexToRgba('#005799', 0.22));
</script>
```

## Usage

```js
import { parseHexToRgba } from 'parse-hex-to-rgba';
// A default export is also available:
// import parseHexToRgba from 'parse-hex-to-rgba';

parseHexToRgba('#005799');       // 'rgba(0, 87, 153, 1)'
parseHexToRgba('#005799', 0.22); // 'rgba(0, 87, 153, 0.22)'

// Shorthand notation is expanded.
parseHexToRgba('#abc');          // 'rgba(170, 187, 204, 1)'

// The alpha channel can be encoded in the hex itself.
parseHexToRgba('#00579980');     // 'rgba(0, 87, 153, 0.502)'
parseHexToRgba('#abcd');         // 'rgba(170, 187, 204, 0.867)'

// An explicit alpha argument always wins over the one in the hex.
parseHexToRgba('#00579900', 0.5); // 'rgba(0, 87, 153, 0.5)'
```

## API

### `parseHexToRgba(hex, alpha?)`

| Parameter | Type     | Description                                             |
| --------- | -------- | ------------------------------------------------------- |
| `hex`     | `string` | `#RGB`, `#RGBA`, `#RRGGBB` or `#RRGGBBAA`. `#` required. |
| `alpha`   | `number` | Optional opacity between `0` and `1`.                    |

Returns a `rgba(r, g, b, a)` string.

Throws a `SyntaxError` if `hex` is not one of the four accepted notations, and a
`RangeError` if `alpha` falls outside the `0`–`1` range.

```js
parseHexToRgba('#abcde');    // SyntaxError: Cannot parse invalid hex color: #abcde.
parseHexToRgba('#fff', 5);   // RangeError: Alpha must be a number between 0 and 1, got: 5.
```

## Migrating from `0.0.x`

Version `1.0.0` is a maintenance rewrite. Behaviour changes worth knowing:

- **Malformed hex is now rejected.** `0.0.x` accepted any 3–6 digit string and
  silently returned a wrong colour — `#abcd` parsed as `rgba(171, 204, 221, 1)`.
  Those inputs now either throw or parse per the CSS spec.
- **`#RRGGBBAA` and `#RGBA` are supported** instead of throwing.
- **An out-of-range `alpha` throws** rather than emitting `rgba(…, 5)`.
- **A named export was added.** `require('parse-hex-to-rgba').parseHexToRgba`
  now works alongside the existing `.default`.
- The error thrown for a bad hex is a `SyntaxError`, not a plain `Error`.

## License

Released under [MIT License](./LICENSE).
