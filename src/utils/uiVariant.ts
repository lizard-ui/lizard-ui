/**
 * Backward-compatible re-exports.
 * The variant logic now lives in focused modules:
 *   Token parsing  → src/utils/tokenParser.ts
 *   Glass surfaces → src/utils/variants/glass.ts
 *   Button         → src/utils/variants/button.ts
 *   Card           → src/utils/variants/card.ts
 */

export {
  camelToKebabVariant,
  canonicalVariantLabel,
  KNOWN_VARIANT_TOKENS,
  parseVariantTokens,
} from './tokenParser';

export {
  BUTTON_BASE,
  BUTTON_SIZE_MAP,
  BUTTON_VARIANT_MAP,
  buttonVariantUsesGlassPill,
  isLegacyButtonVariant,
  LEGACY_BUTTON_VARIANTS,
  resolveButtonVariantClasses,
} from './ui/button';

export { CARD_BASE, CARD_VARIANT_MAP, resolveCardVariantClasses } from './ui/card';

export {
  BADGE_BASE,
  BADGE_VARIANT_MAP,
  resolveBadgeVariantClasses,
} from './ui/badge';

export {
  BACKGROUND_PATTERN_BASE,
  BACKGROUND_PATTERN_PLACEMENT_MAP,
  resolveBackgroundPatternClasses,
} from './ui/background-pattern';

export {
  BUTTON_GLASS_MAP,
  buttonGlassNeutralThick,
  buttonGlassNeutralThin,
  buttonGlassPrimaryThick,
  buttonGlassPrimaryThin,
  buttonGlassSecondaryThick,
  buttonGlassSecondaryThin,
  CARD_GLASS_MAP,
  cardGlassNeutralThick,
  cardGlassNeutralThin,
  cardGlassPrimaryThick,
  cardGlassPrimaryThin,
  cardGlassSecondaryThick,
  cardGlassSecondaryThin,
  GLASS_BLUR_THICK,
  GLASS_BLUR_THIN,
} from './theme/glass';
