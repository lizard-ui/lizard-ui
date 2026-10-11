---
type: Reference
title: Variants and glass
description: Token parser and LIST_MAP class constructors.
tags: [variants, tailwind, glass]
status: stable
---

# Variants and glass

## Token parser

[`../src/utils/tokenParser.ts`](../src/utils/tokenParser.ts):

- `parseVariantTokens` — splits hyphen or camelCase variant strings
- `canonicalVariantLabel` — order-independent label for comparisons
- `KNOWN_VARIANT_TOKENS` — allowed token vocabulary

[`../src/utils/uiVariant.ts`](../src/utils/uiVariant.ts) re-exports parser helpers for backward compatibility.

## LIST_MAP pattern

Per-component modules under [`../src/utils/ui/`](../src/utils/ui/):

| Module | Exports |
| --- | --- |
| `button.ts` | `BUTTON_VARIANT_MAP`, `BUTTON_SIZE_MAP`, `resolveButtonVariantClasses` |
| `card.ts` | `CARD_VARIANT_MAP`, `resolveCardVariantClasses` |
| `badge.ts` | `BADGE_VARIANT_MAP`, `resolveBadgeVariantClasses` |
| `background-pattern.ts` | `BACKGROUND_PATTERN_PLACEMENT_MAP`, … |

Every value in a LIST_MAP must be a **complete static string** present in source so Tailwind can detect classes at build time.

## Glass maps

[`../src/utils/theme/glass.ts`](../src/utils/theme/glass.ts) defines `BUTTON_GLASS_MAP`, `CARD_GLASS_MAP`, and standalone helpers such as `cardGlassPrimaryThin`. Keys combine **tint** (`neutral`, `primary`, `secondary`) and **weight** (`thin`, `thick`).

## Types

Variant unions and props: [`../src/types/ui/`](../src/types/ui/). Barrel: [`../src/types/index.ts`](../src/types/index.ts).
