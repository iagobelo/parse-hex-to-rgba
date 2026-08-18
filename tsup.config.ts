import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs', 'iife'],
  globalName: 'parseHexToRgba',
  // Declarations are emitted by `tsc` instead: tsup's dts pipeline pins its own
  // TypeScript through rollup-plugin-dts, which lags behind the compiler.
  dts: false,
  clean: true,
  minify: false,
  sourcemap: true,
  target: 'es2022',
  // esbuild wraps the IIFE in a CommonJS-style namespace object, so the browser
  // global would not be callable. Flatten it back onto the function, keeping
  // `.default` and `.parseHexToRgba` reachable as properties.
  footer: ({ format }) =>
    format === 'iife'
      ? {
          js: 'parseHexToRgba = Object.assign(parseHexToRgba.default, parseHexToRgba);'
        }
      : {}
});
