/**
 * Standalone glass surface utilities.
 * Each function returns a complete Tailwind class string — safe to tree-shake individually.
 * The LIST_MAPs (CARD_GLASS_MAP, BUTTON_GLASS_MAP) are pre-computed for direct lookup.
 *
 * Glass surfaces are always tinted with theme hues (primary / secondary / background)
 * via CSS variables; blur + low alpha keep them frosted.
 *   Thick = stronger chroma (higher alpha on tint stops).
 *   Thin  = lighter wash (same hue family, lower alpha).
 */

export const GLASS_BLUR_THICK = 'backdrop-blur-[11px] backdrop-saturate-[1.42]';
export const GLASS_BLUR_THIN = 'backdrop-blur-[9px] backdrop-saturate-[1.28]';

// ---------------------------------------------------------------------------
// Card glass surface functions
// ---------------------------------------------------------------------------

/** Neutral glass: primary → background → secondary gradient, thick weight. */
export function cardGlassNeutralThick(): string {
  return [
    'border-primary/38 bg-gradient-to-br from-primary/24 via-background/34 to-secondary/30',
    'shadow-[inset_0_1px_0_hsl(var(--primary)/0.2)]',
    GLASS_BLUR_THICK,
  ].join(' ');
}

/** Neutral glass: primary → background → secondary gradient, thin weight. */
export function cardGlassNeutralThin(): string {
  return [
    'border-primary/28 bg-gradient-to-br from-primary/14 via-background/26 to-secondary/20',
    'shadow-[inset_0_1px_0_hsl(var(--primary)/0.12)]',
    GLASS_BLUR_THIN,
  ].join(' ');
}

/** Primary-tinted glass card, thick weight. */
export function cardGlassPrimaryThick(): string {
  return [
    'border-primary/42 bg-gradient-to-br from-primary/32 via-primary/18 to-secondary/34',
    'shadow-[inset_0_1px_0_hsl(var(--primary)/0.22)]',
    GLASS_BLUR_THICK,
  ].join(' ');
}

/** Primary-tinted glass card, thin weight. */
export function cardGlassPrimaryThin(): string {
  return [
    'border-primary/32 bg-gradient-to-br from-primary/18 via-primary/10 to-secondary/22',
    'shadow-[inset_0_1px_0_hsl(var(--primary)/0.14)]',
    GLASS_BLUR_THIN,
  ].join(' ');
}

/** Secondary-tinted glass card, thick weight. */
export function cardGlassSecondaryThick(): string {
  return [
    'border-secondary/42 bg-gradient-to-br from-secondary/32 via-secondary/18 to-primary/34',
    'shadow-[inset_0_1px_0_hsl(var(--secondary)/0.22)]',
    GLASS_BLUR_THICK,
  ].join(' ');
}

/** Secondary-tinted glass card, thin weight. */
export function cardGlassSecondaryThin(): string {
  return [
    'border-secondary/32 bg-gradient-to-br from-secondary/18 via-secondary/10 to-primary/22',
    'shadow-[inset_0_1px_0_hsl(var(--secondary)/0.14)]',
    GLASS_BLUR_THIN,
  ].join(' ');
}

// ---------------------------------------------------------------------------
// Button glass surface functions
// ---------------------------------------------------------------------------

/** Neutral glass button pill, thick weight. */
export function buttonGlassNeutralThick(): string {
  return [
    'rounded-full border border-primary/36 text-foreground',
    'bg-gradient-to-br from-primary/22 via-background/32 to-secondary/28',
    'shadow-[inset_0_1px_0_hsl(var(--primary)/0.2)]',
    GLASS_BLUR_THICK,
    'hover:from-primary/28 hover:via-background/38 hover:to-secondary/34',
  ].join(' ');
}

/** Neutral glass button pill, thin weight. */
export function buttonGlassNeutralThin(): string {
  return [
    'rounded-full border border-primary/28 text-foreground',
    'bg-gradient-to-br from-primary/14 via-background/24 to-secondary/20',
    'shadow-[inset_0_1px_0_hsl(var(--primary)/0.12)]',
    GLASS_BLUR_THIN,
    'hover:from-primary/20 hover:via-background/30 hover:to-secondary/26',
  ].join(' ');
}

/** Primary-tinted glass button pill, thick weight. */
export function buttonGlassPrimaryThick(): string {
  return [
    'rounded-full border border-primary/40 text-foreground',
    'bg-gradient-to-br from-primary/30 via-primary/16 to-secondary/32',
    'shadow-[inset_0_1px_0_hsl(var(--primary)/0.22)]',
    GLASS_BLUR_THICK,
    'hover:from-primary/36 hover:via-primary/20 hover:to-secondary/38',
  ].join(' ');
}

/** Primary-tinted glass button pill, thin weight. */
export function buttonGlassPrimaryThin(): string {
  return [
    'rounded-full border border-primary/32 text-foreground',
    'bg-gradient-to-br from-primary/18 via-primary/10 to-secondary/22',
    'shadow-[inset_0_1px_0_hsl(var(--primary)/0.14)]',
    GLASS_BLUR_THIN,
    'hover:from-primary/24 hover:via-primary/14 hover:to-secondary/28',
  ].join(' ');
}

/** Secondary-tinted glass button pill, thick weight. */
export function buttonGlassSecondaryThick(): string {
  return [
    'rounded-full border border-secondary/40 text-foreground',
    'bg-gradient-to-br from-secondary/30 via-secondary/16 to-primary/32',
    'shadow-[inset_0_1px_0_hsl(var(--secondary)/0.22)]',
    GLASS_BLUR_THICK,
    'hover:from-secondary/36 hover:via-secondary/20 hover:to-primary/38',
  ].join(' ');
}

/** Secondary-tinted glass button pill, thin weight. */
export function buttonGlassSecondaryThin(): string {
  return [
    'rounded-full border border-secondary/32 text-foreground',
    'bg-gradient-to-br from-secondary/18 via-secondary/10 to-primary/22',
    'shadow-[inset_0_1px_0_hsl(var(--secondary)/0.14)]',
    GLASS_BLUR_THIN,
    'hover:from-secondary/24 hover:via-secondary/14 hover:to-primary/28',
  ].join(' ');
}

// ---------------------------------------------------------------------------
// LIST_MAPs — pre-computed strings, Tailwind-safe (all values statically present)
// ---------------------------------------------------------------------------

/** Card glass surface LIST_MAP. Keys are `tint-weight` canonical form. */
export const CARD_GLASS_MAP = {
  'neutral-thick': cardGlassNeutralThick(),
  'neutral-thin': cardGlassNeutralThin(),
  'primary-thick': cardGlassPrimaryThick(),
  'primary-thin': cardGlassPrimaryThin(),
  'secondary-thick': cardGlassSecondaryThick(),
  'secondary-thin': cardGlassSecondaryThin(),
} as const satisfies Record<string, string>;

/** Button glass surface LIST_MAP. Keys are `tint-weight` canonical form. */
export const BUTTON_GLASS_MAP = {
  'neutral-thick': buttonGlassNeutralThick(),
  'neutral-thin': buttonGlassNeutralThin(),
  'primary-thick': buttonGlassPrimaryThick(),
  'primary-thin': buttonGlassPrimaryThin(),
  'secondary-thick': buttonGlassSecondaryThick(),
  'secondary-thin': buttonGlassSecondaryThin(),
} as const satisfies Record<string, string>;

export type GlassTint = 'neutral' | 'primary' | 'secondary';
export type GlassWeight = 'thick' | 'thin';
export type GlassMapKey = `${GlassTint}-${GlassWeight}`;
