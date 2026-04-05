/**
 * Order-independent UI variant token parser.
 * Examples: `glass-thin-secondary` and `glass-secondary-thin` parse to the same token set.
 */

/** Known tokens we interpret; unknown segments are ignored. */
export const KNOWN_VARIANT_TOKENS = new Set([
  'solid',
  'glass',
  'thick',
  'thin',
  'primary',
  'secondary',
]);

export function camelToKebabVariant(input: string): string {
  return input
    .trim()
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .toLowerCase();
}

export function parseVariantTokens(variant: string): Set<string> {
  const kebab = camelToKebabVariant(variant);
  const parts = kebab.split('-').filter(Boolean);
  const out = new Set<string>();
  for (const p of parts) {
    if (KNOWN_VARIANT_TOKENS.has(p)) out.add(p);
  }
  return out;
}

/** Sorted token join — same label for any order of the same tokens. */
export function canonicalVariantLabel(variant: string): string {
  return [...parseVariantTokens(variant)].sort().join('-');
}
