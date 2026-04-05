# Examples

Common copy-paste patterns for lizard-ui.

---

## Basic setup

```tsx
// main.tsx
import 'lizard-ui/styles/themes.css';
import { ThemeProvider } from 'lizard-ui';
import { createRoot } from 'react-dom/client';
import { App } from './App';

createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
);
```

---

## Theme switcher

```tsx
import { useTheme, THEMES, THEME_LABELS, COLOR_SCHEMES, COLOR_SCHEME_LABELS } from 'lizard-ui';
import type { ThemeName, ColorScheme } from 'lizard-ui';

export function ThemeControls() {
  const { theme, setTheme, colorScheme, setColorScheme } = useTheme();

  return (
    <div className="flex gap-3">
      <select value={theme} onChange={(e) => setTheme(e.target.value as ThemeName)}>
        {THEMES.map((t) => (
          <option key={t} value={t}>{THEME_LABELS[t]}</option>
        ))}
      </select>

      <select value={colorScheme} onChange={(e) => setColorScheme(e.target.value as ColorScheme)}>
        {COLOR_SCHEMES.map((s) => (
          <option key={s} value={s}>{COLOR_SCHEME_LABELS[s]}</option>
        ))}
      </select>
    </div>
  );
}
```

---

## Glass card with button

```tsx
import { Card, CardContent, CardHeader, CardTitle, Button } from 'lizard-ui';

export function GlassDemo() {
  return (
    <Card variant="glassPrimary">
      <CardHeader>
        <CardTitle>Frosted panel</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">Content here.</p>
        <Button variant="glassSecondary">Action</Button>
      </CardContent>
    </Card>
  );
}
```

---

## Token-string glass variants

Order-independent token strings are also accepted on `Button` and `Card`:

```tsx
<Button variant="glass-thin-secondary">Thin secondary</Button>
<Card variant="glass-thick-primary">…</Card>
```

---

## Background pattern

```tsx
import { BackgroundPattern } from 'lizard-ui';

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen">
      <BackgroundPattern variant="meshGrid" placement="fixed" />
      <main className="relative z-0">{children}</main>
    </div>
  );
}
```

---

## Custom component using glass utilities directly

```tsx
import { cn, cardGlassPrimaryThick, CARD_BASE } from 'lizard-ui';

export function MyPanel({ className, children }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn(CARD_BASE, cardGlassPrimaryThick(), 'p-6', className)}>
      {children}
    </div>
  );
}
```

---

## Badge usage

```tsx
import { Badge } from 'lizard-ui';

<Badge variant="default">New</Badge>
<Badge variant="muted">Beta</Badge>
<Badge variant="destructive">Error</Badge>
```

---

## Avoiding flash of wrong theme

Add this inline script in `<head>` before any CSS loads (identical to what the playground does):

```html
<script>
  (function () {
    var theme = localStorage.getItem('lizard-ui-theme') || 'lime';
    var scheme = localStorage.getItem('lizard-ui-color-scheme') || 'system';
    document.documentElement.setAttribute('data-theme', theme);
    var dark =
      scheme === 'dark' ||
      (scheme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    if (dark) {
      document.documentElement.classList.add('dark');
      document.documentElement.style.colorScheme = 'dark';
    }
  })();
</script>
```

---

[Documentation](../README.md) · [Types](../types/README.md) · [Utils](../utils/README.md) · [Components](../components/README.md) · [Components / UI](../components/ui/README.md) · [Contexts](../contexts/README.md) · [Styles](../styles/README.md) · **Examples**

[← Styles](../styles/README.md) — [Root README →](../README.md)
