import { Slot } from '@radix-ui/react-slot';
import * as React from 'react';
import type { BadgeProps, BadgeVariant } from '../../types/ui/badge';
import { cn } from '../../utils/cn';
import { BADGE_BASE, BADGE_VARIANT_MAP, resolveBadgeVariantClasses } from '../../utils/ui/badge';

/** CVA-compatible helper: accepts `{ variant }` and returns the full class string. */
export function badgeVariants(opts: { variant?: BadgeVariant; className?: string }): string {
  return cn(BADGE_BASE, resolveBadgeVariantClasses(opts.variant), opts.className);
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'div';
    return (
      <Comp
        ref={ref}
        className={cn(BADGE_BASE, BADGE_VARIANT_MAP[variant ?? 'default'], className)}
        {...props}
      />
    );
  },
);
Badge.displayName = 'Badge';

export { Badge };
export type { BadgeProps, BadgeVariant };
