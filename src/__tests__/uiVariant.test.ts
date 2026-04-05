import { describe, expect, it } from '@jest/globals';
import {
  canonicalVariantLabel,
  parseVariantTokens,
  resolveCardVariantClasses,
  resolveButtonVariantClasses,
} from '../utils/uiVariant';

describe('parseVariantTokens', () => {
  it('parses hyphen tokens', () => {
    expect([...parseVariantTokens('glass-thin-secondary')].sort()).toEqual(
      ['glass', 'secondary', 'thin'].sort(),
    );
  });

  it('is order-independent for canonical label', () => {
    expect(canonicalVariantLabel('glass-thin-secondary')).toBe(
      canonicalVariantLabel('secondary-glass-thin'),
    );
    expect(canonicalVariantLabel('glass-secondary-thin')).toBe(
      canonicalVariantLabel('thin-glass-secondary'),
    );
  });

  it('normalizes camelCase to tokens', () => {
    expect([...parseVariantTokens('glassPrimary')].sort()).toEqual(['glass', 'primary'].sort());
  });

  it('ignores unknown segments', () => {
    expect([...parseVariantTokens('glass-thin-foo')].sort()).toEqual(['glass', 'thin'].sort());
  });
});

describe('resolveCardVariantClasses', () => {
  it('solid is opaque', () => {
    expect(resolveCardVariantClasses('solid')).toContain('border-border');
    expect(resolveCardVariantClasses('solid')).toContain('bg-background');
  });

  it('glass-thin-secondary uses thin blur + secondary tint', () => {
    const c = resolveCardVariantClasses('glass-thin-secondary');
    expect(c).toContain('backdrop-blur-[9px]');
    expect(c).toContain('border-secondary/');
  });
});

describe('resolveButtonVariantClasses', () => {
  it('solid is primary fill', () => {
    expect(resolveButtonVariantClasses('solid')).toContain('bg-primary');
  });

  it('glass-thick matches neutral thick glass', () => {
    const a = resolveButtonVariantClasses('glass-thick');
    const b = resolveButtonVariantClasses('thick-glass');
    expect(a).toBe(b);
  });
});
