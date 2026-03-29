# Lizard UI

[![npm version](https://badge.fury.io/js/lizard-ui.svg)](https://www.npmjs.com/package/lizard-ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![Production Deployment](https://github.com/lizard-ui/lizard-ui/actions/workflows/deploy.yml/badge.svg?branch=main)](https://github.com/lizard-ui/lizard-ui/actions/workflows/deploy.yml)
[![Coverage](https://codecov.io/gh/lizard-ui/lizard-ui/branch/main/graph/badge.svg)](https://codecov.io/gh/lizard-ui/lizard-ui)

**Lizard UI** (`lizard-ui`) is a React component library with **shadcn-style** primitives (`Button`, `Card`, `Badge`, layout) and a **Tailwind-native glass** look: gradients, blur, and saturation use your theme tokens — **no** extra WebGL glass runtime.

---

## Features

- **Light and dark UI** — Tailwind `darkMode: 'class'`; toggle `dark` on `<html>` (see [Themes](#tailwind-css-themes-and-appearance) below). Optional **system** appearance follows `prefers-color-scheme`.
- **Glass variants** on `Card` (`glass`, `glassPrimary`, `glassSecondary`) and `Button` (`outline` with gradient border + frosted fill, plus `glassPrimary` / `glassSecondary` pills)
- **23 color themes** via `data-theme` on `<html>` — Tailwind one-word palettes plus extras like `brown`; see `playground/theme-config.ts`; HSL tokens in `playground/themes.css` (light + `.dark` overrides)
- Tree-shakeable ESM + CJS build, TypeScript types
- Peer: **React**; **Tailwind** optional but recommended for glass utilities

---

## Tailwind CSS, themes, and appearance

### Hue themes (`data-theme`)

Set **`data-theme`** on `<html>` to pick a palette. This repo includes every Tailwind **single-word** color name, plus **`brown`** (not in default Tailwind): `slate`, `gray`, `zinc`, `neutral`, `stone`, `brown`, `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `emerald`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `fuchsia`, `pink`, `rose`. Each maps to HSL CSS variables (`--background`, `--foreground`, `--primary`, …) in `playground/themes.css`.

Mirror the same token names in your app’s `tailwind.config` (see `tailwind.config.ts`: `primary`, `secondary`, `muted`, `border`, `background`, `foreground`, etc.).

### Light and dark (`class="dark"`)

This repo’s Tailwind config uses **`darkMode: ['class']`**. **Light** is the default (no `dark` class on `<html>`). **Dark** adds **`class="dark"`** on the root element (`<html class="dark">`). Dark palettes use **`.dark[data-theme='…']`** (same element as `<html class="dark" data-theme="…">` — not a descendant selector), so each hue gets dark surfaces and keeps its primary tint.

Set **`color-scheme`** for form controls and scrollbars: `document.documentElement.style.colorScheme = 'dark'` or `'light'` (the playground `ThemeProvider` does this).

### System preference

To follow the OS/browser theme, resolve once and on `prefers-color-scheme` changes, then toggle `dark` on `<html>` (see `playground/ThemeProvider.tsx` and the small script in `playground/index.html` that avoids a flash on load).

### Scanning classes

Add **`tailwindcss`** and include **`node_modules/lizard-ui`** (or your monorepo path) in **`content`** so Tailwind scans the library’s classes.

---

## Installation

```bash
bun add lizard-ui react react-dom
# or
npm install lizard-ui react react-dom
# or
pnpm add lizard-ui react react-dom
```

React 18+ is required.

---

## Usage with Vite

```tsx
import { Button, Card, CardContent } from 'lizard-ui';

export function Demo() {
  return (
    <Card variant="glassPrimary">
      <CardContent className="p-5">
        <p className="text-foreground">Frosted panel</p>
        <Button type="button" variant="glassSecondary">
          Action
        </Button>
      </CardContent>
    </Card>
  );
}
```

Vite resolves the published `exports` map. Install `react` and `react-dom` in your app. Use Tailwind with **`data-theme`** for hue and **`class="dark"`** (or not) for light vs dark so `outline` and `glass*` variants pick up `primary` / `secondary` correctly.

---

## Usage with Bun

```bash
bun install
bun dev
```

---

## Developing this library

| Script        | Description                                      |
| ------------- | ------------------------------------------------ |
| `bun dev`     | Local showcase (eco-tech UI, hero art in `playground/assets/`) |
| `bun run build:site` | Vite static build to `playground-dist/` |
| `bun run build` | Rollup build to `dist/` (ESM + CJS + `.d.ts`) |
| `bun run test` | Jest tests                                      |
| `bun run lint` | ESLint                                          |
| `bun run typecheck` | `tsc --noEmit`                            |

---

## Contributing

We welcome contributions. See [`CONTRIBUTING.md`](CONTRIBUTING.md) for guidelines.

1. Fork the repository  
2. Create a feature branch  
3. Make your changes  
4. Add or update tests where it makes sense  
5. Open a pull request  

---

## License

This project is licensed under the MIT License — see [`LICENSE`](LICENSE).

---

Made with care by [xarlizard](https://www.github.com/xarlizard)
