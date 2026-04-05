# Lizard UI — Documentation

[![npm version](https://badge.fury.io/js/lizard-ui.svg)](https://www.npmjs.com/package/lizard-ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)

> Full reference documentation for **lizard-ui `0.0.2`**.  
> For a quick-start see the [root README](../README.md).

---

## Sections

| Section | What's inside |
|---|---|
| [types](./types/README.md) | TypeScript types and variant unions for every component and the theme system |
| [utils](./utils/README.md) | `cn`, token parser, variant class constructors (LIST_MAPs), standalone glass functions |
| [components](./components/README.md) | Top-level component overview |
| [components/ui](./components/ui/README.md) | `Button`, `Card`, `Badge`, `BackgroundPattern`, layout components |
| [contexts](./contexts/README.md) | `ThemeProvider`, `useTheme`, `ThemeContext` |
| [styles](./styles/README.md) | `lizard-ui/styles/themes.css` — theme tokens, dark mode, custom themes |
| [examples](./examples/README.md) | Copy-paste snippets for common patterns |

---

## Package structure

```
lizard-ui
├── dist/
│   ├── index.esm.js      ESM build
│   ├── index.cjs         CJS build
│   ├── index.d.ts        TypeScript declarations
│   └── styles/
│       └── themes.css    Publishable theme stylesheet
└── src/
    ├── components/ui/    React components
    ├── contexts/         ThemeProvider + useTheme
    ├── styles/           themes.css source
    ├── types/            Per-component TypeScript types
    └── utils/
        ├── cn.ts
        ├── tokenParser.ts
        ├── uiVariant.ts  (backward-compat barrel)
        └── variants/     Per-component class constructors + glass functions
```

---

## Quick install

```bash
npm install lizard-ui
# or
bun add lizard-ui
# or
pnpm add lizard-ui
```

Then import the theme stylesheet once in your app entry:

```ts
import 'lizard-ui/styles/themes.css';
```

Set `data-theme` on `<html>` and optionally wrap your app with `ThemeProvider`:

```tsx
import { ThemeProvider } from 'lizard-ui';

export default function App() {
  return <ThemeProvider>{/* your app */}</ThemeProvider>;
}
```

---

**Documentation** · [Types](./types/README.md) · [Utils](./utils/README.md) · [Components](./components/README.md) · [Components / UI](./components/ui/README.md) · [Contexts](./contexts/README.md) · [Styles](./styles/README.md) · [Examples](./examples/README.md)

[← Root README](../README.md) — [Types →](./types/README.md)
