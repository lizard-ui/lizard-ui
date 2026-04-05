import * as React from 'react';
import type { BackgroundPatternProps } from '../../types/ui/background-pattern';
import { cn } from '../../utils/cn';
import {
  BACKGROUND_PATTERN_PLACEMENT_MAP,
  resolveBackgroundPatternClasses,
} from '../../utils/ui/background-pattern';

/** Theme-token gradients via CSS variables set by `[data-theme]`. */
const meshBackground: React.CSSProperties = {
  backgroundImage: [
    'radial-gradient(900px 520px at 85% -5%, hsl(var(--primary) / 0.12), transparent 55%)',
    'radial-gradient(700px 480px at 5% 30%, hsl(var(--muted) / 0.85), transparent 50%)',
    'radial-gradient(600px 400px at 100% 80%, hsl(var(--secondary) / 0.1), transparent 45%)',
    'linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--muted)) 45%, hsl(var(--background)) 100%)',
  ].join(', '),
};

const gridBackground: React.CSSProperties = {
  backgroundImage: [
    'linear-gradient(hsl(var(--foreground) / 0.04) 1px, transparent 1px)',
    'linear-gradient(90deg, hsl(var(--foreground) / 0.04) 1px, transparent 1px)',
  ].join(', '),
  backgroundSize: '48px 48px',
  maskImage: 'radial-gradient(ellipse 80% 70% at 50% 40%, black 15%, transparent 70%)',
};

const auroraBackground: React.CSSProperties = {
  backgroundImage: [
    'radial-gradient(120% 80% at 50% -20%, hsl(var(--primary) / 0.08), transparent 50%)',
    'radial-gradient(80% 60% at 100% 50%, hsl(var(--secondary) / 0.06), transparent 45%)',
  ].join(', '),
};

/**
 * CVA-compatible helper: accepts `{ placement, className }` and returns the full class string.
 * Replaces the old `cva`-generated `backgroundPatternVariants` export.
 */
export function backgroundPatternVariants(opts: {
  placement?: 'fixed' | 'absolute';
  className?: string;
}): string {
  return cn(resolveBackgroundPatternClasses(opts.placement), opts.className);
}

export function BackgroundPattern({
  className,
  variant = 'meshGrid',
  placement = 'fixed',
  children,
  ...props
}: BackgroundPatternProps) {
  return (
    <div
      className={cn(
        'pointer-events-none overflow-hidden',
        BACKGROUND_PATTERN_PLACEMENT_MAP[placement],
        className,
      )}
      aria-hidden
      {...props}
    >
      {variant === 'aurora' ? <div className="absolute inset-0" style={auroraBackground} /> : null}
      {(variant === 'mesh' || variant === 'meshGrid') && (
        <div className="absolute inset-0" style={meshBackground} />
      )}
      {(variant === 'grid' || variant === 'meshGrid') && (
        <div className="absolute inset-0 opacity-50" style={gridBackground} />
      )}
      {children}
    </div>
  );
}

BackgroundPattern.displayName = 'BackgroundPattern';

export { backgroundPatternVariants as backgroundPatternVariantsFn };
export type { BackgroundPatternProps };
