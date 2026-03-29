import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { cn } from '../cn';

/** Theme-token gradients (no `hsl()` wrapper on vars — matches `themes.css`). */
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

const backgroundPatternVariants = cva('pointer-events-none overflow-hidden', {
  variants: {
    placement: {
      fixed: 'fixed inset-0 -z-10',
      absolute: 'absolute inset-0 -z-10',
    },
  },
  defaultVariants: {
    placement: 'fixed',
  },
});

export type BackgroundPatternProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof backgroundPatternVariants> & {
    /**
     * `mesh` — soft radial mesh + vertical wash.
     * `grid` — masked circuit grid.
     * `meshGrid` — mesh then grid (default).
     * `aurora` — soft dual blobs (pairs well behind `mesh` if you stack via `children`).
     */
    variant?: 'mesh' | 'grid' | 'meshGrid' | 'aurora';
    /** Extra layers or overlays after the built-in pattern. */
    children?: React.ReactNode;
  };

export function BackgroundPattern({
  className,
  variant = 'meshGrid',
  placement,
  children,
  ...props
}: BackgroundPatternProps) {
  return (
    <div
      className={cn(backgroundPatternVariants({ placement }), className)}
      aria-hidden
      {...props}
    >
      {variant === 'aurora' ? (
        <div className="absolute inset-0" style={auroraBackground} />
      ) : null}
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

export { backgroundPatternVariants };
