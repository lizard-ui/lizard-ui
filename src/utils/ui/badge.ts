import type { BadgeVariant } from '../../types/ui/badge';

export const BADGE_BASE =
  'inline-flex items-center justify-center gap-1 rounded-md border px-2.5 py-0.5 text-xs font-semibold leading-none transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 [&_svg]:pointer-events-none [&_svg]:size-3 [&_svg]:shrink-0';

/**
 * Complete class strings for every named badge variant.
 * Tailwind-safe LIST_MAP — all values are statically present in source.
 */
export const BADGE_VARIANT_MAP: Record<BadgeVariant, string> = {
  default: 'border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/90',
  secondary: 'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
  destructive:
    'border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/90',
  outline: 'border-border bg-background text-foreground hover:bg-accent hover:text-accent-foreground',
  /** Muted label (sidebar tags, version chips). */
  muted: 'border-transparent bg-muted text-muted-foreground',
};

/** Resolves a badge variant to its full Tailwind class string. */
export function resolveBadgeVariantClasses(variant: BadgeVariant | undefined): string {
  return BADGE_VARIANT_MAP[variant ?? 'default'] ?? BADGE_VARIANT_MAP.default;
}
