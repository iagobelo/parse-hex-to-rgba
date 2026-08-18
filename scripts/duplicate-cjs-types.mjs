// The CJS build needs its own `.d.cts` declaration so that TypeScript resolves
// types under `require`. The entry point has no import-vs-require differences,
// so the ESM declaration is copied verbatim.
import { copyFileSync } from 'node:fs';

copyFileSync('dist/index.d.ts', 'dist/index.d.cts');
