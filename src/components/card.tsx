import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { cn } from '../cn';

const cardVariants = cva('rounded-xl border text-foreground shadow-sm transition-shadow', {
  variants: {
    variant: {
      default: 'border-border bg-background',
      /** Neutral frosted panel — theme-agnostic; works with all `data-theme` palettes. */
      glass:
        'border-white/25 bg-gradient-to-br from-white/45 via-background/55 to-background/65 shadow-[inset_0_1px_0_rgba(255,255,255,0.45)] backdrop-blur-xl backdrop-saturate-150',
      /** Primary-tinted glass (`--primary` / `--secondary`). */
      glassPrimary:
        'border-primary/35 bg-gradient-to-br from-primary/28 via-background/50 to-secondary/22 shadow-[inset_0_1px_0_rgba(255,255,255,0.35)] backdrop-blur-xl backdrop-saturate-150',
      /** Secondary-tinted glass. */
      glassSecondary:
        'border-secondary/35 bg-gradient-to-br from-secondary/28 via-background/50 to-primary/22 shadow-[inset_0_1px_0_rgba(255,255,255,0.35)] backdrop-blur-xl backdrop-saturate-150',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export type CardProps = React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof cardVariants>;

const Card = React.forwardRef<HTMLDivElement, CardProps>(({ className, variant, ...props }, ref) => (
  <div ref={ref} className={cn(cardVariants({ variant }), className)} {...props} />
));
Card.displayName = 'Card';

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex flex-col space-y-1.5 p-6', className)} {...props} />
  ),
);
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn('text-2xl font-semibold leading-none tracking-tight', className)} {...props} />
  ),
);
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn('text-sm text-muted-foreground', className)} {...props} />
  ),
);
CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />,
);
CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex items-center p-6 pt-0', className)} {...props} />
  ),
);
CardFooter.displayName = 'CardFooter';

export { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, cardVariants };
