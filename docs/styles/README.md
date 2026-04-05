# Styles

> Source: `src/styles/themes.css`  
> Published as: `lizard-ui/styles/themes.css`

---

## Importing

Add one import to your app's entry point (CSS or JS):

```ts
// in main.ts / main.tsx
import 'lizard-ui/styles/themes.css';
```

```css
/* in your global CSS */
@import 'lizard-ui/styles/themes.css';
```

---

## Theme tokens

Each palette sets these CSS custom properties (shadcn-style — no `hsl()` wrapper, so Tailwind can use them with its opacity modifier syntax):

| Token | Usage |
|---|---|
| `--background` | Page / panel background |
| `--foreground` | Default text |
| `--muted` | Subtle fills, dividers |
| `--muted-foreground` | De-emphasized text |
| `--primary` | Primary action color |
| `--primary-foreground` | Text on primary |
| `--secondary` | Secondary action color |
| `--secondary-foreground` | Text on secondary |
| `--border` | Default border |
| `--input` | Input border |
| `--ring` | Focus ring |
| `--accent` | Hover/active accent (dark mode only) |
| `--accent-foreground` | Text on accent (dark mode only) |

---

## Activating a palette

Set `data-theme` on `<html>` (the `ThemeProvider` does this automatically):

```html
<html data-theme="lime">
```

Available values — 23 palettes:

`slate` · `gray` · `zinc` · `neutral` · `stone` · `brown` · `red` · `orange` · `amber` · `yellow` · `lime` · `green` · `emerald` · `teal` · `cyan` · `sky` · `blue` · `indigo` · `violet` · `purple` · `fuchsia` · `pink` · `rose`

---

## Dark mode

Add the `dark` class to `<html>` alongside `data-theme` (the `ThemeProvider` does this too):

```html
<html class="dark" data-theme="lime">
```

The stylesheet uses **same-element selectors** (`.dark[data-theme='lime']`, not a descendant) so both attributes must be on the same element.

Set `document.documentElement.style.colorScheme` to `'dark'` or `'light'` for native form controls and scrollbars to respect the mode.

---

## Tailwind integration

Mirror the token names in your `tailwind.config`:

```ts
// tailwind.config.ts
export default {
  darkMode: ['class'],
  theme: {
    extend: {
      colors: {
        background:  'hsl(var(--background) / <alpha-value>)',
        foreground:  'hsl(var(--foreground) / <alpha-value>)',
        primary:     { DEFAULT: 'hsl(var(--primary) / <alpha-value>)', foreground: 'hsl(var(--primary-foreground) / <alpha-value>)' },
        secondary:   { DEFAULT: 'hsl(var(--secondary) / <alpha-value>)', foreground: 'hsl(var(--secondary-foreground) / <alpha-value>)' },
        muted:       { DEFAULT: 'hsl(var(--muted) / <alpha-value>)', foreground: 'hsl(var(--muted-foreground) / <alpha-value>)' },
        accent:      { DEFAULT: 'hsl(var(--accent) / <alpha-value>)', foreground: 'hsl(var(--accent-foreground) / <alpha-value>)' },
        border:      'hsl(var(--border) / <alpha-value>)',
        input:       'hsl(var(--input) / <alpha-value>)',
        ring:        'hsl(var(--ring) / <alpha-value>)',
        destructive: { DEFAULT: 'hsl(var(--destructive) / <alpha-value>)', foreground: 'hsl(var(--destructive-foreground) / <alpha-value>)' },
      },
    },
  },
};
```

Also add the library to Tailwind's `content` array so it scans lizard-ui's class strings:

```ts
content: ['./src/**/*.{ts,tsx}', './node_modules/lizard-ui/dist/**/*.js'],
```

---

## Custom themes

Add your own `[data-theme='my-brand']` block using the same token names. Place it after the `lizard-ui/styles/themes.css` import so it takes precedence:

```css
@import 'lizard-ui/styles/themes.css';

[data-theme='my-brand'] {
  --background: 220 30% 98%;
  --foreground: 220 30% 10%;
  --primary: 220 80% 50%;
  --primary-foreground: 0 0% 100%;
  /* … */
}

.dark[data-theme='my-brand'] {
  --background: 220 30% 8%;
  --foreground: 220 20% 96%;
  /* … */
}
```

Then register the name in your own theme config and pass it to `ThemeProvider`'s initial theme, or call `setTheme('my-brand')`.

---

[Documentation](../README.md) · [Types](../types/README.md) · [Utils](../utils/README.md) · [Components](../components/README.md) · [Components / UI](../components/ui/README.md) · [Contexts](../contexts/README.md) · **Styles** · [Examples](../examples/README.md)

[← Contexts](../contexts/README.md) — [Examples →](../examples/README.md)
