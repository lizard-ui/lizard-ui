# Types

> Source: `src/types/`  
> All types are re-exported from the library root (`lizard-ui`).

Lizard UI ships one TypeScript file per component plus a shared theme module. Import directly from `lizard-ui` — no deep path required.

---

## `theme.ts`

Theme names, color scheme options, storage keys, and the context value shape.

```ts
import {
  THEMES,           // readonly string[] of 23 palette names
  THEME_LABELS,     // Record<ThemeName, string> — display labels
  COLOR_SCHEMES,    // ['light', 'dark', 'system']
  COLOR_SCHEME_LABELS,
  STORAGE_THEME,    // 'lizard-ui-theme'
  STORAGE_COLOR_SCHEME,
  type ThemeName,
  type ColorScheme,
  type ThemeContextValue,
} from 'lizard-ui';
```

**`ThemeName`** — union of all 23 palette keys:  
`'slate' | 'gray' | 'zinc' | 'neutral' | 'stone' | 'brown' | 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'emerald' | 'teal' | 'cyan' | 'sky' | 'blue' | 'indigo' | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose'`

**`ColorScheme`** — `'light' | 'dark' | 'system'`

**`ThemeContextValue`** — shape of the object returned by `useTheme()`:

```ts
type ThemeContextValue = {
  theme: ThemeName;
  setTheme: (t: ThemeName) => void;
  colorScheme: ColorScheme;
  setColorScheme: (s: ColorScheme) => void;
  resolvedAppearance: 'light' | 'dark';
};
```

---

## `button.ts`

```ts
import type { ButtonVariant, ButtonVariantPreset, ButtonSize, ButtonProps } from 'lizard-ui';
```

**`ButtonVariantPreset`** — all named presets:  
`'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link' | 'solid' | 'glass' | 'glassPrimary' | 'glassSecondary' | 'glass-thin' | 'glass-thick' | 'glass-primary' | 'glass-primary-thin' | 'glass-primary-thick' | 'glass-secondary' | 'glass-secondary-thin' | 'glass-secondary-thick'`

**`ButtonVariant`** — `ButtonVariantPreset | (string & {})` — also accepts open token strings like `'glass-thin-secondary'`.

**`ButtonSize`** — `'default' | 'sm' | 'lg' | 'icon' | 'glass'`

**`ButtonProps`** — `React.ButtonHTMLAttributes` extended with `variant`, `size`, `asChild`, `loading`.

---

## `card.ts`

```ts
import type { CardVariant, CardVariantPreset, CardProps } from 'lizard-ui';
```

Same preset pattern as `ButtonVariantPreset` but for card surfaces (`'solid' | 'glass' | 'glassPrimary' | ...`).

---

## `badge.ts`

```ts
import type { BadgeVariant, BadgeProps } from 'lizard-ui';
```

**`BadgeVariant`** — `'default' | 'secondary' | 'destructive' | 'outline' | 'muted'`

---

## `background-pattern.ts`

```ts
import type {
  BackgroundPatternVariant,
  BackgroundPatternPlacement,
  BackgroundPatternProps,
} from 'lizard-ui';
```

**`BackgroundPatternVariant`** — `'mesh' | 'grid' | 'meshGrid' | 'aurora'`  
**`BackgroundPatternPlacement`** — `'fixed' | 'absolute'`

---

[Documentation](../README.md) · **Types** · [Utils](../utils/README.md) · [Components](../components/README.md) · [Components / UI](../components/ui/README.md) · [Contexts](../contexts/README.md) · [Styles](../styles/README.md) · [Examples](../examples/README.md)

[← Documentation](../README.md) — [Utils →](../utils/README.md)
