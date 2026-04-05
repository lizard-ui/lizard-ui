# Contexts

> Source: `src/contexts/`

---

## ThemeProvider

```tsx
import { ThemeProvider } from 'lizard-ui';
```

Wrap your application root with `ThemeProvider` to enable managed theme switching. It:

- Reads the initial theme from `localStorage` (key `lizard-ui-theme`) and the `data-theme` attribute on `<html>`, defaulting to `'lime'`.
- Reads the initial color scheme from `localStorage` (key `lizard-ui-color-scheme`), defaulting to `'system'`.
- Writes `data-theme` on `<html>` and persists both values to `localStorage` on change.
- Toggles `class="dark"` and sets `document.documentElement.style.colorScheme` when the effective appearance changes.
- Subscribes to `prefers-color-scheme` changes when color scheme is `'system'`.

```tsx
import { ThemeProvider } from 'lizard-ui';

export default function Root() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}
```

---

## useTheme

```tsx
import { useTheme } from 'lizard-ui';
```

Returns the current `ThemeContextValue`. Must be called inside a `ThemeProvider`.

```tsx
function ThemeSwitcher() {
  const { theme, setTheme, colorScheme, setColorScheme, resolvedAppearance } = useTheme();

  return (
    <select value={theme} onChange={(e) => setTheme(e.target.value as ThemeName)}>
      {THEMES.map((t) => (
        <option key={t} value={t}>{THEME_LABELS[t]}</option>
      ))}
    </select>
  );
}
```

### Return value

| Field | Type | Description |
|---|---|---|
| `theme` | `ThemeName` | Active palette (e.g. `'lime'`) |
| `setTheme` | `(t: ThemeName) => void` | Change the active palette |
| `colorScheme` | `ColorScheme` | `'light' \| 'dark' \| 'system'` |
| `setColorScheme` | `(s: ColorScheme) => void` | Change the color scheme |
| `resolvedAppearance` | `'light' \| 'dark'` | Effective mode after resolving `'system'` |

---

## ThemeContext

```ts
import { ThemeContext } from 'lizard-ui';
```

The raw React context object. Use `useTheme()` unless you need the context reference itself (e.g. for testing or external context consumers).

---

[Documentation](../README.md) · [Types](../types/README.md) · [Utils](../utils/README.md) · [Components](../components/README.md) · [Components / UI](../components/ui/README.md) · **Contexts** · [Styles](../styles/README.md) · [Examples](../examples/README.md)

[← Components / UI](../components/ui/README.md) — [Styles →](../styles/README.md)
