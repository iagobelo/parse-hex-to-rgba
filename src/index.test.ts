import { describe, expect, test } from 'vitest';
import parseHexToRgba, * as mod from './index';

describe('6-digit notation', () => {
  test('converts a 6-digit hex to rgba with a default alpha of 1', () => {
    expect(parseHexToRgba('#005799')).toBe('rgba(0, 87, 153, 1)');
  });

  test('applies the alpha argument', () => {
    expect(parseHexToRgba('#005799', 0.22)).toBe('rgba(0, 87, 153, 0.22)');
  });

  test('is case-insensitive', () => {
    expect(parseHexToRgba('#AABBCC')).toBe(parseHexToRgba('#aabbcc'));
  });
});

describe('3-digit shorthand', () => {
  test('expands each digit to a full channel', () => {
    expect(parseHexToRgba('#abc')).toBe('rgba(170, 187, 204, 1)');
  });

  test('expands #fff to white', () => {
    expect(parseHexToRgba('#fff')).toBe('rgba(255, 255, 255, 1)');
  });
});

describe('8-digit notation', () => {
  test('reads the alpha channel from the hex', () => {
    expect(parseHexToRgba('#00579980')).toBe('rgba(0, 87, 153, 0.502)');
  });

  test('treats a trailing ff as fully opaque', () => {
    expect(parseHexToRgba('#005799ff')).toBe('rgba(0, 87, 153, 1)');
  });

  test('treats a trailing 00 as fully transparent', () => {
    expect(parseHexToRgba('#00579900')).toBe('rgba(0, 87, 153, 0)');
  });
});

describe('4-digit shorthand', () => {
  test('expands the alpha digit alongside the colour digits', () => {
    expect(parseHexToRgba('#abcd')).toBe('rgba(170, 187, 204, 0.867)');
  });
});

describe('alpha precedence', () => {
  test('the alpha argument overrides the alpha encoded in the hex', () => {
    expect(parseHexToRgba('#00579900', 0.5)).toBe('rgba(0, 87, 153, 0.5)');
  });
});

describe('invalid hex input', () => {
  test('rejects a 5-digit hex instead of silently mis-parsing it', () => {
    expect(() => parseHexToRgba('#abcde')).toThrow(/invalid hex/i);
  });

  test('rejects a 7-digit hex', () => {
    expect(() => parseHexToRgba('#abcdefa')).toThrow(/invalid hex/i);
  });

  test('rejects a 2-digit hex', () => {
    expect(() => parseHexToRgba('#ab')).toThrow(/invalid hex/i);
  });

  test('rejects non-hex characters', () => {
    expect(() => parseHexToRgba('#gggggg')).toThrow(/invalid hex/i);
  });

  test('rejects a hex without the leading hash', () => {
    expect(() => parseHexToRgba('005799')).toThrow(/invalid hex/i);
  });

  test('rejects an empty string', () => {
    expect(() => parseHexToRgba('')).toThrow(/invalid hex/i);
  });
});

describe('invalid alpha input', () => {
  test('rejects an alpha above 1', () => {
    expect(() => parseHexToRgba('#fff', 5)).toThrow(/alpha/i);
  });

  test('rejects a negative alpha', () => {
    expect(() => parseHexToRgba('#fff', -1)).toThrow(/alpha/i);
  });

  test('rejects NaN', () => {
    expect(() => parseHexToRgba('#fff', Number.NaN)).toThrow(/alpha/i);
  });

  test('accepts the boundary values 0 and 1', () => {
    expect(parseHexToRgba('#fff', 0)).toBe('rgba(255, 255, 255, 0)');
    expect(parseHexToRgba('#fff', 1)).toBe('rgba(255, 255, 255, 1)');
  });
});

describe('module exports', () => {
  test('exposes a named export pointing at the same function', () => {
    expect(mod.parseHexToRgba).toBe(mod.default);
  });
});
