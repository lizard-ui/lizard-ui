import type { HTMLAttributes } from 'react';

export type LoaderSize = 'sm' | 'default' | 'lg' | 'xl';

/** Visual style; `spinner` matches `Button` `loading`. */
export type LoaderVariant = 'spinner' | 'dots' | 'ring' | 'bars' | 'pulse';

export type LoaderProps = HTMLAttributes<HTMLElement> & {
  size?: LoaderSize;
  variant?: LoaderVariant;
};
