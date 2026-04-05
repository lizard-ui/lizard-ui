import type { ButtonSize, ButtonVariantPreset } from '../../types/ui/button';
import { parseVariantTokens } from '../tokenParser';
import { BUTTON_GLASS_MAP } from '../theme/glass';

export const BUTTON_BASE =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0';

/** Outline variant: frosted fill + theme gradient border. */
const BTN_OUTLINE = [
  'rounded-md border border-transparent text-foreground backdrop-blur-sm',
  '[background-origin:border-box] [background-clip:padding-box,border-box]',
  'bg-[linear-gradient(hsl(var(--background)/0.92),hsl(var(--background)/0.92))_padding-box,linear-gradient(to_bottom_right,hsl(var(--primary)/0.45),hsl(var(--secondary)/0.3))_border-box]',
  'hover:text-accent-foreground',
  'hover:bg-[linear-gradient(hsl(var(--accent)/0.1),hsl(var(--accent)/0.1))_padding-box,linear-gradient(to_bottom_right,hsl(var(--primary)/0.55),hsl(var(--secondary)/0.38))_border-box]',
].join(' ');

/**
 * Complete class strings for every named button variant preset.
 * Tailwind-safe LIST_MAP — all values are statically present in source.
 */
export const BUTTON_VARIANT_MAP: Record<ButtonVariantPreset, string> = {
  default: 'rounded-md bg-primary text-primary-foreground hover:bg-primary/90',
  destructive: 'rounded-md bg-destructive text-destructive-foreground hover:bg-destructive/90',
  outline: BTN_OUTLINE,
  secondary: 'rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/80',
  ghost: 'rounded-md hover:bg-accent hover:text-accent-foreground',
  link: 'rounded-md text-primary underline-offset-4 hover:underline',
  solid: 'rounded-md bg-primary text-primary-foreground hover:bg-primary/90',
  glass: BUTTON_GLASS_MAP['neutral-thick'],
  glassPrimary: BUTTON_GLASS_MAP['primary-thick'],
  glassSecondary: BUTTON_GLASS_MAP['secondary-thick'],
  'glass-thin': BUTTON_GLASS_MAP['neutral-thin'],
  'glass-thick': BUTTON_GLASS_MAP['neutral-thick'],
  'glass-primary': BUTTON_GLASS_MAP['primary-thick'],
  'glass-primary-thin': BUTTON_GLASS_MAP['primary-thin'],
  'glass-primary-thick': BUTTON_GLASS_MAP['primary-thick'],
  'glass-secondary': BUTTON_GLASS_MAP['secondary-thick'],
  'glass-secondary-thin': BUTTON_GLASS_MAP['secondary-thin'],
  'glass-secondary-thick': BUTTON_GLASS_MAP['secondary-thick'],
};

/**
 * Complete class strings for every button size.
 * Tailwind-safe LIST_MAP — all values are statically present in source.
 */
export const BUTTON_SIZE_MAP: Record<ButtonSize, string> = {
  default: 'h-10 rounded-md px-4 py-2',
  sm: 'h-9 rounded-md px-3',
  lg: 'h-11 rounded-md px-8',
  icon: 'h-10 w-10 shrink-0',
  /** Pill padding for glass button variants. */
  glass: 'h-10 min-w-[2.5rem] rounded-full px-5 py-2',
};

/** Legacy shadcn-style variant names routed through the CVA path. */
export const LEGACY_BUTTON_VARIANTS = new Set<string>([
  'default',
  'destructive',
  'outline',
  'secondary',
  'ghost',
  'link',
]);

export function isLegacyButtonVariant(variant: string | undefined): boolean {
  return LEGACY_BUTTON_VARIANTS.has(variant ?? 'default');
}

/**
 * Resolves any variant string (preset name or token string) to Tailwind classes.
 * Preset names hit the LIST_MAP directly; unknown token strings are parsed
 * order-independently and mapped to the closest glass surface.
 */
export function resolveButtonVariantClasses(variant: string | undefined): string {
  const v = variant ?? 'solid';

  if (Object.prototype.hasOwnProperty.call(BUTTON_VARIANT_MAP, v)) {
    return BUTTON_VARIANT_MAP[v as ButtonVariantPreset];
  }

  const tokens = parseVariantTokens(v);

  if (tokens.has('solid') && !tokens.has('glass')) return BUTTON_VARIANT_MAP.solid;
  if (!tokens.has('glass')) return BUTTON_VARIANT_MAP.solid;

  const thin = tokens.has('thin');
  const primary = tokens.has('primary');
  const secondary = tokens.has('secondary');

  if (primary && !secondary) {
    return thin ? BUTTON_GLASS_MAP['primary-thin'] : BUTTON_GLASS_MAP['primary-thick'];
  }
  if (secondary && !primary) {
    return thin ? BUTTON_GLASS_MAP['secondary-thin'] : BUTTON_GLASS_MAP['secondary-thick'];
  }
  return thin ? BUTTON_GLASS_MAP['neutral-thin'] : BUTTON_GLASS_MAP['neutral-thick'];
}

/** Returns `true` when this variant renders as a pill-shaped glass button. */
export function buttonVariantUsesGlassPill(variant: string | undefined): boolean {
  const v = variant ?? 'solid';
  if (v === 'glass' || v === 'glassPrimary' || v === 'glassSecondary') return true;
  if (v.startsWith('glass-')) return true;
  const tokens = parseVariantTokens(v);
  return tokens.has('glass') && !tokens.has('solid');
}
