# Components / UI

> Source: `src/components/ui/`

---

## Button

```tsx
import { Button, buttonVariants } from 'lizard-ui';
import type { ButtonProps, ButtonVariant, ButtonSize } from 'lizard-ui';
```

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `ButtonVariant` | `'default'` | Named preset or token string |
| `size` | `ButtonSize` | `'default'` | `'default' \| 'sm' \| 'lg' \| 'icon' \| 'glass'` |
| `asChild` | `boolean` | `false` | Renders as the child element via Radix `Slot` |
| `loading` | `boolean` | `false` | Shows a spinner; disables interaction |

### Variant presets

| Variant | Style |
|---|---|
| `default` | Solid primary fill |
| `destructive` | Solid destructive fill |
| `outline` | Frosted fill + gradient border |
| `secondary` | Solid secondary fill |
| `ghost` | Transparent, hover accent |
| `link` | Underline text |
| `solid` | Alias for `default` |
| `glass` | Neutral glass pill (thick) |
| `glassPrimary` | Primary-tinted glass pill |
| `glassSecondary` | Secondary-tinted glass pill |
| `glass-thin` / `glass-thick` | Neutral glass with weight control |
| `glass-primary-thin` / `glass-primary-thick` | Primary glass with weight |
| `glass-secondary-thin` / `glass-secondary-thick` | Secondary glass with weight |

Token strings like `'glass-thin-secondary'` are also accepted (order-independent).

### `buttonVariants` helper

```ts
buttonVariants({ variant: 'glassPrimary', size: 'glass', className: 'mt-2' })
// → full class string
```

---

## Card

```tsx
import {
  Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter,
  cardVariants,
} from 'lizard-ui';
import type { CardProps, CardVariant } from 'lizard-ui';
```

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `CardVariant` | `'solid'` | Surface style |

### Variant presets

Same token system as `Button` glass variants, plus `'default'` / `'solid'` for the opaque border+background surface.

```tsx
<Card variant="glassPrimary">
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Subtitle</CardDescription>
  </CardHeader>
  <CardContent>Body</CardContent>
  <CardFooter>Footer</CardFooter>
</Card>
```

---

## Badge

```tsx
import { Badge, badgeVariants } from 'lizard-ui';
import type { BadgeProps, BadgeVariant } from 'lizard-ui';
```

### Props

| Prop | Type | Default |
|---|---|---|
| `variant` | `BadgeVariant` | `'default'` |
| `asChild` | `boolean` | `false` |

### Variant presets

`'default'` · `'secondary'` · `'destructive'` · `'outline'` · `'muted'`

---

## BackgroundPattern

```tsx
import { BackgroundPattern, backgroundPatternVariants } from 'lizard-ui';
import type { BackgroundPatternProps } from 'lizard-ui';
```

Renders a decorative full-bleed layer behind page content using CSS gradients and masks tied to theme tokens.

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `BackgroundPatternVariant` | `'meshGrid'` | Pattern style |
| `placement` | `BackgroundPatternPlacement` | `'fixed'` | `'fixed'` or `'absolute'` |

### Variant presets

| Variant | Style |
|---|---|
| `mesh` | Soft radial mesh + vertical wash |
| `grid` | Masked circuit grid |
| `meshGrid` | Mesh then grid layered (default) |
| `aurora` | Dual soft color blobs |

```tsx
<BackgroundPattern variant="meshGrid" placement="fixed" />
```

---

## Header

```tsx
import { Header } from 'lizard-ui';
import type { HeaderProps } from 'lizard-ui';
```

Sticky top navigation bar with `children` slot.

---

## Footer

```tsx
import { Footer } from 'lizard-ui';
import type { FooterProps } from 'lizard-ui';
```

Standard `<footer>` wrapper.

---

## GitHubFooter

```tsx
import { GitHubFooter } from 'lizard-ui';
import type { GitHubFooterProps } from 'lizard-ui';
```

Displays a GitHub repo link with optional live star count. Fetches via the GitHub API with a Shields.io JSON fallback. Set `asFooter={false}` when nested inside a `Footer` to avoid `<footer>` inside `<footer>`.

---

## Sidebar

```tsx
import { Sidebar } from 'lizard-ui';
import type { SidebarProps } from 'lizard-ui';
```

---

## VerticalMenu

```tsx
import { VerticalMenu } from 'lizard-ui';
import type { VerticalMenuProps, VerticalMenuItem } from 'lizard-ui';
```

Renders a vertical navigation list from a `items: VerticalMenuItem[]` prop.

---

[Documentation](../../README.md) · [Types](../../types/README.md) · [Utils](../../utils/README.md) · [Components](../README.md) · **Components / UI** · [Contexts](../../contexts/README.md) · [Styles](../../styles/README.md) · [Examples](../../examples/README.md)

[← Components](../README.md) — [Contexts →](../../contexts/README.md)
