# Utils

> Source: `src/utils/`  
> All utilities are re-exported from the library root (`lizard-ui`).

---

## `cn` — class name helper

```ts
import { cn } from 'lizard-ui';

cn('px-4 py-2', condition && 'bg-primary', 'text-sm');
```

Wraps `clsx` + `tailwind-merge`. Accepts any number of class values, falsy values are filtered out, conflicting Tailwind classes are resolved (last wins).

---

## `tokenParser` — variant token parsing

```ts
import {
  camelToKebabVariant,
  parseVariantTokens,
  canonicalVariantLabel,
  KNOWN_VARIANT_TOKENS,
} from 'lizard-ui';
```

Variant strings are **order-independent**: `'glass-thin-secondary'` and `'secondary-glass-thin'` parse to the same token set. CamelCase is also normalized (`'glassPrimary'` → `glass` + `primary`).

| Export | Description |
|---|---|
| `KNOWN_VARIANT_TOKENS` | `Set` of recognised tokens: `solid`, `glass`, `thick`, `thin`, `primary`, `secondary` |
| `camelToKebabVariant(s)` | `'glassPrimary'` → `'glass-primary'` |
| `parseVariantTokens(s)` | Returns `Set<string>` of known tokens found in `s` |
| `canonicalVariantLabel(s)` | Sorted token join — `'glass-thin-secondary'` → `'glass-secondary-thin'` (stable key) |

---

## `variants/glass` — standalone glass surface functions

```ts
import {
  // Card glass
  cardGlassNeutralThick,
  cardGlassNeutralThin,
  cardGlassPrimaryThick,
  cardGlassPrimaryThin,
  cardGlassSecondaryThick,
  cardGlassSecondaryThin,
  CARD_GLASS_MAP,
  // Button glass
  buttonGlassNeutralThick,
  buttonGlassNeutralThin,
  buttonGlassPrimaryThick,
  buttonGlassPrimaryThin,
  buttonGlassSecondaryThick,
  buttonGlassSecondaryThin,
  BUTTON_GLASS_MAP,
  // Blur constants
  GLASS_BLUR_THICK,
  GLASS_BLUR_THIN,
  type GlassTint,
  type GlassWeight,
  type GlassMapKey,
} from 'lizard-ui';
```

Each function returns a complete, Tailwind-safe class string. All values are statically present in source so Tailwind's content scanner picks them up.

**`CARD_GLASS_MAP`** / **`BUTTON_GLASS_MAP`** — pre-computed `Record<'neutral-thick' | 'neutral-thin' | 'primary-thick' | 'primary-thin' | 'secondary-thick' | 'secondary-thin', string>` for direct key lookup.

Use these to build custom components with glass surfaces that match lizard-ui's glass system:

```ts
import { cn } from 'lizard-ui';
import { cardGlassPrimaryThick } from 'lizard-ui';

function MyPanel({ className }: { className?: string }) {
  return (
    <div className={cn('rounded-xl border text-foreground', cardGlassPrimaryThick(), className)} />
  );
}
```

---

## `variants/button` — button class constructors

```ts
import {
  BUTTON_VARIANT_MAP,   // Record<ButtonVariantPreset, string>
  BUTTON_SIZE_MAP,      // Record<ButtonSize, string>
  BUTTON_BASE,          // base class string shared by all buttons
  LEGACY_BUTTON_VARIANTS,
  isLegacyButtonVariant,
  resolveButtonVariantClasses,
  buttonVariantUsesGlassPill,
} from 'lizard-ui';
```

**`BUTTON_VARIANT_MAP`** — every named preset mapped to its full Tailwind class string. Use this to apply button styles to non-`<button>` elements:

```ts
import { cn, BUTTON_BASE, BUTTON_VARIANT_MAP, BUTTON_SIZE_MAP } from 'lizard-ui';

const cls = cn(BUTTON_BASE, BUTTON_VARIANT_MAP['glassPrimary'], BUTTON_SIZE_MAP['glass']);
```

**`resolveButtonVariantClasses(variant)`** — resolves any preset name or token string to a class string, falling back to `solid` for unknown tokens.

---

## `variants/card` — card class constructors

```ts
import { CARD_VARIANT_MAP, CARD_BASE, resolveCardVariantClasses } from 'lizard-ui';
```

---

## `variants/badge` — badge class constructors

```ts
import { BADGE_VARIANT_MAP, BADGE_BASE, resolveBadgeVariantClasses } from 'lizard-ui';
```

---

## `variants/background-pattern` — placement constructors

```ts
import {
  BACKGROUND_PATTERN_PLACEMENT_MAP,
  BACKGROUND_PATTERN_BASE,
  resolveBackgroundPatternClasses,
} from 'lizard-ui';
```

---

## `uiVariant` — backward-compat barrel

`src/utils/uiVariant.ts` re-exports everything from the modules above. Existing imports that referenced `uiVariant` continue to work. Prefer importing from the library root directly.

---

[Documentation](../README.md) · [Types](../types/README.md) · **Utils** · [Components](../components/README.md) · [Components / UI](../components/ui/README.md) · [Contexts](../contexts/README.md) · [Styles](../styles/README.md) · [Examples](../examples/README.md)

[← Types](../types/README.md) — [Components →](../components/README.md)
