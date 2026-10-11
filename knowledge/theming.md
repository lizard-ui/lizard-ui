---
type: Reference
title: Theming
description: CSS variables, ThemeProvider, and dark mode.
tags: [theme, css, tailwind]
status: stable
---

# Theming

## Stylesheet

Source: [`../src/styles/themes.css`](../src/styles/themes.css).  
Published import:

```ts
import 'lizard-ui/styles/themes.css';
```

Each palette is selected with `data-theme` on `<html>` (for example `data-theme="lime"`). Tokens follow the shadcn-style HSL variable pattern (`--background`, `--primary`, `--border`, `--ring`, …). Dark mode uses the `dark` class on `<html>`.

## React API

- **`ThemeProvider`** — sets `data-theme`, color scheme, and `dark` class; persists to `localStorage`.
- **`useTheme`** — read/update theme name and light/dark/system preference.
- Constants: `THEMES`, `COLOR_SCHEMES`, `THEME_LABELS`, `COLOR_SCHEME_LABELS` from [`../src/types/theme.ts`](../src/types/theme.ts).

Consumers using Tailwind should map tokens in `tailwind.config` (see [`../docs/styles/README.md`](../docs/styles/README.md) and playground `tailwind.config.ts`).

## Glass surfaces

Glass appearance is implemented with static Tailwind classes in [`../src/utils/theme/glass.ts`](../src/utils/theme/glass.ts) and wired into `Button` / `Card` via LIST_MAPs. Glass tints use theme `primary` and `secondary` tokens.
