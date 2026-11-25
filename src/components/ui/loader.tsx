import * as React from 'react';
import type { LoaderProps, LoaderSize, LoaderVariant } from '../../types/ui/loader';
import { cn } from '../../utils/cn';
import { loaderBarClass, loaderDotClass, loaderVariants } from '../../utils/ui/loader';

export { loaderVariants };

function isAriaHidden(value: LoaderProps['aria-hidden']): boolean {
  return value === true || value === 'true';
}

function loaderA11y(
  ariaHidden: LoaderProps['aria-hidden'],
  ariaLabel: string | undefined,
): Pick<React.HTMLAttributes<HTMLElement>, 'role' | 'aria-hidden' | 'aria-label'> {
  if (isAriaHidden(ariaHidden)) {
    return { 'aria-hidden': true };
  }
  return { role: 'status', 'aria-label': ariaLabel ?? 'Loading' };
}

type LoaderSpinnerProps = {
  className?: string;
  size: LoaderSize;
  'aria-label'?: string;
  'aria-hidden'?: LoaderProps['aria-hidden'];
};

const LoaderSpinner = React.forwardRef<SVGSVGElement, LoaderSpinnerProps>(
  ({ className, size, 'aria-label': ariaLabel, 'aria-hidden': ariaHidden }, ref) => (
    <svg
      ref={ref}
      className={cn(loaderVariants({ size, variant: 'spinner' }), className)}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      {...loaderA11y(ariaHidden, ariaLabel)}
    >
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  ),
);
LoaderSpinner.displayName = 'LoaderSpinner';

const BAR_DELAYS = ['0ms', '150ms', '300ms'] as const;

/** Default circular spinner (same graphic as `Button` `loading`). */
export const Loader = React.forwardRef<HTMLElement, LoaderProps>(
  (
    {
      className,
      size = 'default',
      variant = 'spinner',
      'aria-label': ariaLabel,
      'aria-hidden': ariaHidden,
      ...props
    },
    ref,
  ) => {
    if (variant === 'spinner') {
      return (
        <LoaderSpinner
          ref={ref as React.Ref<SVGSVGElement>}
          className={className}
          size={size}
          aria-label={ariaLabel}
          aria-hidden={ariaHidden}
        />
      );
    }

    if (variant === 'ring') {
      return (
        <span
          ref={ref}
          className={cn(loaderVariants({ size, variant: 'ring' }), className)}
          {...loaderA11y(ariaHidden, ariaLabel)}
          {...props}
        />
      );
    }

    if (variant === 'pulse') {
      return (
        <span
          ref={ref}
          className={cn(loaderVariants({ size, variant: 'pulse' }), className)}
          {...loaderA11y(ariaHidden, ariaLabel)}
          {...props}
        />
      );
    }

    if (variant === 'bars') {
      const bar = loaderBarClass(size);
      return (
        <span
          ref={ref}
          className={cn(loaderVariants({ size, variant: 'bars' }), className)}
          {...loaderA11y(ariaHidden, ariaLabel)}
          {...props}
        >
          {BAR_DELAYS.map((delay) => (
            <span
              key={delay}
              className={cn(bar, 'animate-pulse', delay !== '0ms' && `[animation-delay:${delay}]`)}
            />
          ))}
        </span>
      );
    }

    const dot = loaderDotClass(size);
    return (
      <span
        ref={ref}
        className={cn(loaderVariants({ size, variant: 'dots' }), className)}
        {...loaderA11y(ariaHidden, ariaLabel)}
        {...props}
      >
        <span className={cn(dot, 'animate-bounce')} />
        <span className={cn(dot, 'animate-bounce [animation-delay:150ms]')} />
        <span className={cn(dot, 'animate-bounce [animation-delay:300ms]')} />
      </span>
    );
  },
);
Loader.displayName = 'Loader';

export type { LoaderProps, LoaderSize, LoaderVariant };
