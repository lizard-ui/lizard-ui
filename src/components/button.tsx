import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { cn } from '../cn';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'rounded-md bg-primary text-primary-foreground hover:bg-primary/90',
        destructive: 'rounded-md bg-destructive text-destructive-foreground hover:bg-destructive/90',
        /** shadcn outline: frosted fill + theme gradient only in the border (no face gradient). */
        outline: [
          'rounded-md border border-transparent text-foreground backdrop-blur-sm',
          '[background-origin:border-box] [background-clip:padding-box,border-box]',
          'bg-[linear-gradient(hsl(var(--background)/0.92),hsl(var(--background)/0.92))_padding-box,linear-gradient(to_bottom_right,hsl(var(--primary)/0.45),hsl(var(--secondary)/0.3))_border-box]',
          'hover:text-accent-foreground',
          'hover:bg-[linear-gradient(hsl(var(--accent)/0.1),hsl(var(--accent)/0.1))_padding-box,linear-gradient(to_bottom_right,hsl(var(--primary)/0.55),hsl(var(--secondary)/0.38))_border-box]',
        ].join(' '),
        secondary: 'rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'rounded-md hover:bg-accent hover:text-accent-foreground',
        link: 'rounded-md text-primary underline-offset-4 hover:underline',
        /** Primary-tinted glass pill (`--primary` / `--secondary` from Tailwind theme). */
        glassPrimary:
          'rounded-full border border-primary/40 bg-gradient-to-br from-primary/35 via-primary/15 to-secondary/30 text-foreground backdrop-blur-xl backdrop-saturate-150 shadow-[inset_0_1px_0_rgba(255,255,255,0.35)] hover:from-primary/45 hover:via-primary/20 hover:to-secondary/35',
        /** Secondary-tinted glass pill. */
        glassSecondary:
          'rounded-full border border-secondary/40 bg-gradient-to-br from-secondary/35 via-secondary/15 to-primary/30 text-foreground backdrop-blur-xl backdrop-saturate-150 shadow-[inset_0_1px_0_rgba(255,255,255,0.35)] hover:from-secondary/45 hover:via-secondary/20 hover:to-primary/35',
      },
      size: {
        default: 'h-10 rounded-md px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10 shrink-0',
        /** Pill padding for `glassPrimary` / `glassSecondary`. */
        glass: 'h-10 min-w-[2.5rem] rounded-full px-5 py-2',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size = 'default', asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    const pillGlass = variant === 'glassPrimary' || variant === 'glassSecondary';
    const resolvedSize =
      pillGlass && (size === 'default' || size === 'sm' || size === 'lg') ? 'glass' : size;
    return (
      <Comp
        className={cn(buttonVariants({ variant, size: resolvedSize, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
