/*!
 * parse-hex-to-rgba v0.0.0
 * (c) Iago Belo
 * Released under the MIT License.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global['[libraryCammelCaseName]'] = factory());
}(this, (function () { 'use strict';

  var HEX_COLOR = /^#([0-9a-f]{1,2})([0-9a-f]{1,2})([0-9a-f]{1,2})$/i;

  var resolveHexShorthand = function (color) { return color.length === 1 ? color.repeat(2) : color; };

  var parseToRGB = function (color) {
    if (!HEX_COLOR.test(color)) { throw new Error('Cannot parse invalid hex color.'); }
    return HEX_COLOR.exec(color).reduce(function (colors, color, index) { return index === 0 ? colors : colors.concat( [parseInt(resolveHexShorthand(color), 16)]); }, []);
  };
  /**
   * Converts a `HEX` color to a `RGBA` color.
   * @param hex - Color in HEX.
   * @param alpha - Alpha range **(float)**.
   *
   * @example
   * color('#005799', 0.22); // rgba(0, 87, 153, 0.22)
   */


  var hexAlpha = function (hex, alpha) {
    if ( alpha === void 0 ) alpha = 1;

    var ref = parseToRGB(hex);
    var R = ref[0];
    var G = ref[1];
    var B = ref[2];
    return ("rgba(" + R + ", " + G + ", " + B + ", " + alpha + ")");
  };

  return hexAlpha;

})));
//# sourceMappingURL=index.umd.js.map
