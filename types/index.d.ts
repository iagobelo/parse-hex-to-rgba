/**
 * Converts a `HEX` color to a `RGBA` color.
 * @param hex - Color in HEX.
 * @param alpha - Alpha range **(float)**.
 *
 * @example
 * color('#005799', 0.22); // rgba(0, 87, 153, 0.22)
 */
declare const hexAlpha: (hex: string, alpha?: number) => string;
export default hexAlpha;
