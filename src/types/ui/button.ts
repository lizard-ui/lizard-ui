import type * as React from 'react';

/** Named button variant presets understood by the variant system. */
export type ButtonVariantPreset =
  | 'default'
  | 'destructive'
  | 'outline'
  | 'secondary'
  | 'ghost'
  | 'link'
  | 'solid'
  | 'glass'
  | 'glassPrimary'
  | 'glassSecondary'
  | 'glass-thin'
  | 'glass-thick'
  | 'glass-primary'
  | 'glass-primary-thin'
  | 'glass-primary-thick'
  | 'glass-secondary'
  | 'glass-secondary-thin'
  | 'glass-secondary-thick';

/** Full variant type: named presets + open token strings (e.g. `"glass-thin-secondary"`). */
export type ButtonVariant = ButtonVariantPreset | (string & {});

export type ButtonSize = 'default' | 'sm' | 'lg' | 'icon' | 'glass';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  /**
   * Named preset (`default`, `glassPrimary`, …) or hyphen token string (`glass-thin-secondary`).
   * @default 'default'
   */
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
  /** Shows a spinner and disables interaction. */
  loading?: boolean;
};
