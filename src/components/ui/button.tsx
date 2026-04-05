import { Slot } from '@radix-ui/react-slot';
import * as React from 'react';
import type { ButtonProps, ButtonSize, ButtonVariant, ButtonVariantPreset } from '../../types/ui/button';
import { cn } from '../../utils/cn';
import {
  BUTTON_BASE,
  BUTTON_SIZE_MAP,
  BUTTON_VARIANT_MAP,
  buttonVariantUsesGlassPill,
  isLegacyButtonVariant,
  resolveButtonVariantClasses,
} from '../../utils/ui/button';

/**
 * CVA-compatible helper: accepts `{ variant, size, className }` and returns the full class string.
 * Replaces the old `cva`-generated `buttonVariants` export.
 */
export function buttonVariants(opts: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}): string {
  const { variant = 'default', size = 'default', className } = opts;
  const variantClasses = Object.prototype.hasOwnProperty.call(BUTTON_VARIANT_MAP, variant)
    ? BUTTON_VARIANT_MAP[variant as ButtonVariantPreset]
    : resolveButtonVariantClasses(variant);
  const pill = buttonVariantUsesGlassPill(variant);
  const resolvedSize: ButtonSize =
    pill && (size === 'default' || size === 'sm' || size === 'lg') ? 'glass' : size;
  return cn(BUTTON_BASE, variantClasses, BUTTON_SIZE_MAP[resolvedSize], className);
}

const spinner = (
  <svg
    className="size-4 shrink-0 animate-spin"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    aria-hidden
  >
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </svg>
);

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'default',
      size = 'default',
      asChild = false,
      loading = false,
      disabled,
      children,
      ...props
    },
    ref,
  ) => {
    const isDisabled = Boolean(disabled || loading);
    const Comp = asChild ? Slot : 'button';

    const content =
      loading && !asChild ? (
        <>
          {spinner}
          {children}
        </>
      ) : (
        children
      );

    const variantClasses = isLegacyButtonVariant(variant)
      ? (BUTTON_VARIANT_MAP[variant as ButtonVariantPreset] ?? BUTTON_VARIANT_MAP.default)
      : resolveButtonVariantClasses(variant);

    const pill = buttonVariantUsesGlassPill(variant);
    const resolvedSize: ButtonSize =
      pill && (size === 'default' || size === 'sm' || size === 'lg') ? 'glass' : size;

    return (
      <Comp
        className={cn(BUTTON_BASE, variantClasses, BUTTON_SIZE_MAP[resolvedSize], className)}
        ref={ref}
        disabled={isDisabled}
        aria-busy={loading || undefined}
        {...props}
      >
        {content}
      </Comp>
    );
  },
);
Button.displayName = 'Button';

export { Button };
export type { ButtonProps, ButtonSize, ButtonVariant, ButtonVariantPreset };
