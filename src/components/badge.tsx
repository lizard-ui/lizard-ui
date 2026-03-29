import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { cn } from '../cn';

const badgeVariants = cva(
  'inline-flex items-center justify-center gap-1 rounded-md border px-2.5 py-0.5 text-xs font-semibold leading-none transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 [&_svg]:pointer-events-none [&_svg]:size-3 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/90',
        secondary: 'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
        destructive: 'border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/90',
        outline: 'border-border bg-background text-foreground hover:bg-accent hover:text-accent-foreground',
        /** Muted label (sidebar tags, version chips). */
        muted: 'border-transparent bg-muted text-muted-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export type BadgeProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof badgeVariants> & {
    asChild?: boolean;
  };

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'div';
    return <Comp ref={ref} className={cn(badgeVariants({ variant }), className)} {...props} />;
  },
);
Badge.displayName = 'Badge';

export { Badge, badgeVariants };
