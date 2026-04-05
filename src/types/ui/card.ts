import type * as React from 'react';

/** Named card variant presets understood by the variant system. */
export type CardVariantPreset =
  | 'default'
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

/** Full variant type: named presets + open token strings. */
export type CardVariant = CardVariantPreset | (string & {});

export type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: CardVariant;
};
