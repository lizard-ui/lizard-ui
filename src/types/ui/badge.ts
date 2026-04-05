import type * as React from 'react';

export type BadgeVariant = 'default' | 'secondary' | 'destructive' | 'outline' | 'muted';

export type BadgeProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: BadgeVariant;
  asChild?: boolean;
};
