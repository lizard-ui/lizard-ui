---
type: Reference
title: lizard-ui package
description: React component library with theme tokens and glass variants.
resource: https://www.npmjs.com/package/lizard-ui
tags: [react, ui, npm, tailwind, design-system]
status: stable
---

# lizard-ui

Published as **`lizard-ui`** on npm (unscoped). The package exposes:

- **Components** — primitives, forms, overlays, calendar, and layout shells (see [Component catalog](./components.md)).
- **Theme** — `ThemeProvider`, `useTheme`, and `lizard-ui/styles/themes.css` (see [Theming](./theming.md)).
- **Utilities** — `cn`, variant resolvers, glass maps, calendar helpers, `highlightTsxTheme`.

## Install and styles

```ts
import 'lizard-ui/styles/themes.css';
import { ThemeProvider, Button } from 'lizard-ui';
```

`react`, `react-dom`, and `lucide-react` are **peer dependencies**. `tailwindcss` is an optional peer for consumers using Tailwind in their app.

## Build outputs

Rollup + esbuild produce:

- `dist/index.esm.js` (ESM)
- `dist/index.cjs` (CommonJS)
- `dist/index.d.ts` (TypeScript declarations via `tsc --emitDeclarationOnly`)
- `dist/styles/themes.css` (copied from `src/styles/themes.css`)

Subpath export: **`lizard-ui/styles/themes.css`**.

## Versioning

Semantic versioning. Changes are documented in [`../CHANGELOG.md`](../CHANGELOG.md).
