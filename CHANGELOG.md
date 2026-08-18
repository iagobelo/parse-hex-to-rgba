# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/).

## [1.0.0]

### Added

- Support for `#RRGGBBAA` and `#RGBA` notation, with the alpha channel read
  from the hex itself.
- Named export `parseHexToRgba` alongside the existing default export.
- Validation of the `alpha` argument, which now throws a `RangeError` when
  outside the `0`–`1` range.
- Test suite (Vitest) at 100% coverage, plus CI across Node 20, 22 and 24.

### Fixed

- Malformed hex colors are no longer silently mis-parsed. The pattern accepted
  any 3–6 digit sequence, so `#abcd` returned `rgba(171, 204, 221, 1)` and
  `#abcde` returned `rgba(171, 205, 238, 1)`. Both now throw.

### Changed

- An invalid hex throws a `SyntaxError` instead of a generic `Error`.
- Package now ships proper `exports` for dual ESM/CJS resolution, and a `files`
  allowlist so only `dist/` is published.
- Toolchain moved from bili/Jest/Prettier/Travis to tsup/Vitest/Biome/GitHub
  Actions.

## [0.0.2]

- Initial published release.
