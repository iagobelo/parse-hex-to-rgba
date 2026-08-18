/** Matches `#RGB`, `#RGBA`, `#RRGGBB` and `#RRGGBBAA` notation. */
const HEX_COLOR = /^#(?:[0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/i;

/** Decimal places kept when converting an 8-bit alpha channel to a float. */
const ALPHA_PRECISION = 1000;

const parseChannels = (hex: string) => {
  const digits = hex.slice(1);
  const size = digits.length <= 4 ? 1 : 2;

  // Shorthand digits are doubled: `a` becomes `aa`.
  const channelAt = (index: number) => {
    const digit = digits.slice(index * size, (index + 1) * size);
    return Number.parseInt(size === 1 ? digit.repeat(2) : digit, 16);
  };

  const hasAlpha = digits.length === 4 || digits.length === 8;

  return {
    red: channelAt(0),
    green: channelAt(1),
    blue: channelAt(2),
    alpha: hasAlpha ? channelAt(3) / 255 : undefined
  };
};

const round = (value: number) =>
  Math.round(value * ALPHA_PRECISION) / ALPHA_PRECISION;

/**
 * Converts a `HEX` color to a `RGBA` color.
 *
 * Accepts `#RGB`, `#RGBA`, `#RRGGBB` and `#RRGGBBAA` notation. When the hex
 * carries an alpha channel and the `alpha` argument is also given, the
 * argument wins.
 *
 * @param hex - Color in HEX, including the leading `#`.
 * @param alpha - Opacity between `0` and `1`.
 * @throws {SyntaxError} If `hex` is not a valid hex color.
 * @throws {RangeError} If `alpha` is outside the `0`–`1` range.
 *
 * @example
 * parseHexToRgba('#005799', 0.22); // 'rgba(0, 87, 153, 0.22)'
 * parseHexToRgba('#00579980'); // 'rgba(0, 87, 153, 0.502)'
 */
export const parseHexToRgba = (hex: string, alpha?: number): string => {
  if (!HEX_COLOR.test(hex))
    throw new SyntaxError(`Cannot parse invalid hex color: ${String(hex)}.`);

  if (
    alpha !== undefined &&
    (!Number.isFinite(alpha) || alpha < 0 || alpha > 1)
  )
    throw new RangeError(
      `Alpha must be a number between 0 and 1, got: ${String(alpha)}.`
    );

  const { red, green, blue, alpha: hexAlpha } = parseChannels(hex);
  const opacity = alpha ?? (hexAlpha === undefined ? 1 : round(hexAlpha));

  return `rgba(${red}, ${green}, ${blue}, ${opacity})`;
};

export default parseHexToRgba;
