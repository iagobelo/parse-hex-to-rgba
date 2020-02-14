[Parse Hex To RGBA](README.md)

# Parse Hex To RGBA

## Index

### Variables

* [HEX_COLOR](README.md#const-hex_color)

### Functions

* [hexAlpha](README.md#const-hexalpha)
* [parseToRGB](README.md#const-parsetorgb)
* [resolveHexShorthand](README.md#const-resolvehexshorthand)

## Variables

### `Const` HEX_COLOR

• **HEX_COLOR**: *RegExp‹›* =  /^#([0-9a-f]{1,2})([0-9a-f]{1,2})([0-9a-f]{1,2})$/i

*Defined in [index.ts:1](https://github.com/iagobelo/parse-hex-to-rgba/blob/c2981da/src/index.ts#L1)*

## Functions

### `Const` hexAlpha

▸ **hexAlpha**(`hex`: string, `alpha`: number): *string*

*Defined in [index.ts:27](https://github.com/iagobelo/parse-hex-to-rgba/blob/c2981da/src/index.ts#L27)*

Converts a `HEX` color to a `RGBA` color.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`hex` | string | - | Color in HEX. |
`alpha` | number | 1 | Alpha range **(float)**.  |

**Returns:** *string*

___

### `Const` parseToRGB

▸ **parseToRGB**(`color`: string): *number[]*

*Defined in [index.ts:6](https://github.com/iagobelo/parse-hex-to-rgba/blob/c2981da/src/index.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`color` | string |

**Returns:** *number[]*

___

### `Const` resolveHexShorthand

▸ **resolveHexShorthand**(`color`: string): *string*

*Defined in [index.ts:3](https://github.com/iagobelo/parse-hex-to-rgba/blob/c2981da/src/index.ts#L3)*

**Parameters:**

Name | Type |
------ | ------ |
`color` | string |

**Returns:** *string*
