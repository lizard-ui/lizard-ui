import type { CardVariantPreset } from '../../types/ui/card';
import { parseVariantTokens } from '../tokenParser';
import { CARD_GLASS_MAP } from '../theme/glass';

export const CARD_BASE = 'rounded-xl border text-foreground shadow-sm transition-shadow';

const CARD_SOLID = `${CARD_BASE} border-border bg-background`;

/**
 * Complete class strings for every named card variant preset.
 * Tailwind-safe LIST_MAP — all values are statically present in source.
 */
export const CARD_VARIANT_MAP: Record<CardVariantPreset, string> = {
  default: CARD_SOLID,
  solid: CARD_SOLID,
  glass: `${CARD_BASE} ${CARD_GLASS_MAP['neutral-thick']}`,
  glassPrimary: `${CARD_BASE} ${CARD_GLASS_MAP['primary-thick']}`,
  glassSecondary: `${CARD_BASE} ${CARD_GLASS_MAP['secondary-thick']}`,
  'glass-thin': `${CARD_BASE} ${CARD_GLASS_MAP['neutral-thin']}`,
  'glass-thick': `${CARD_BASE} ${CARD_GLASS_MAP['neutral-thick']}`,
  'glass-primary': `${CARD_BASE} ${CARD_GLASS_MAP['primary-thick']}`,
  'glass-primary-thin': `${CARD_BASE} ${CARD_GLASS_MAP['primary-thin']}`,
  'glass-primary-thick': `${CARD_BASE} ${CARD_GLASS_MAP['primary-thick']}`,
  'glass-secondary': `${CARD_BASE} ${CARD_GLASS_MAP['secondary-thick']}`,
  'glass-secondary-thin': `${CARD_BASE} ${CARD_GLASS_MAP['secondary-thin']}`,
  'glass-secondary-thick': `${CARD_BASE} ${CARD_GLASS_MAP['secondary-thick']}`,
};

/**
 * Resolves any variant string (preset name or token string) to Tailwind classes.
 * Preset names hit the LIST_MAP directly; unknown token strings are parsed
 * order-independently and mapped to the closest glass surface.
 */
export function resolveCardVariantClasses(variant: string | undefined): string {
  const v = (variant ?? 'solid').trim();

  if (Object.prototype.hasOwnProperty.call(CARD_VARIANT_MAP, v)) {
    return CARD_VARIANT_MAP[v as CardVariantPreset];
  }

  const tokens = parseVariantTokens(v);

  if (tokens.has('solid') || !tokens.has('glass')) return CARD_SOLID;

  const thin = tokens.has('thin');
  const primary = tokens.has('primary');
  const secondary = tokens.has('secondary');

  if (primary && !secondary) {
    return `${CARD_BASE} ${thin ? CARD_GLASS_MAP['primary-thin'] : CARD_GLASS_MAP['primary-thick']}`;
  }
  if (secondary && !primary) {
    return `${CARD_BASE} ${thin ? CARD_GLASS_MAP['secondary-thin'] : CARD_GLASS_MAP['secondary-thick']}`;
  }
  return `${CARD_BASE} ${thin ? CARD_GLASS_MAP['neutral-thin'] : CARD_GLASS_MAP['neutral-thick']}`;
}
