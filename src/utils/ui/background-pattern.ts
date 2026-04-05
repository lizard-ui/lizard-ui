import type { BackgroundPatternPlacement } from '../../types/ui/background-pattern';

export const BACKGROUND_PATTERN_BASE = 'pointer-events-none overflow-hidden';

/**
 * Complete class strings for background pattern placement.
 * Tailwind-safe LIST_MAP — all values are statically present in source.
 */
export const BACKGROUND_PATTERN_PLACEMENT_MAP: Record<BackgroundPatternPlacement, string> = {
  fixed: 'fixed inset-0 -z-10',
  absolute: 'absolute inset-0 -z-10',
};

/** Resolves placement to the full wrapper class string including base. */
export function resolveBackgroundPatternClasses(
  placement: BackgroundPatternPlacement | undefined,
): string {
  return `${BACKGROUND_PATTERN_BASE} ${BACKGROUND_PATTERN_PLACEMENT_MAP[placement ?? 'fixed']}`;
}
