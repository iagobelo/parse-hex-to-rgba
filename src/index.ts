const HEX_COLOR = /^#([0-9a-f]{1,2})([0-9a-f]{1,2})([0-9a-f]{1,2})$/i;

const resolveHexShorthand = (color: string) =>
  color.length === 1 ? color.repeat(2) : color;

const parseToRGB = (color: string) => {
  if (!HEX_COLOR.test(color))
    throw new Error('Cannot parse invalid hex color.');

  return HEX_COLOR.exec(color)!.reduce(
    (colors, color, index) =>
      index === 0
        ? colors
        : [...colors, parseInt(resolveHexShorthand(color), 16)],
    [] as number[]
  );
};

/**
 * Converts a `HEX` color to a `RGBA` color.
 * @param hex - Color in HEX.
 * @param alpha - Alpha range **(float)**.
 *
 * @example
 * color('#005799', 0.22); // rgba(0, 87, 153, 0.22)
 */
const hexAlpha = (hex: string, alpha: number = 1) => {
  const [R, G, B] = parseToRGB(hex);
  return `rgba(${R}, ${G}, ${B}, ${alpha})`;
};

export default hexAlpha;
