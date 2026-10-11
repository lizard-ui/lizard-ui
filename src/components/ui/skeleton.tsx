import * as React from 'react';
import { cn } from '../../utils/cn';

export type SkeletonProps = React.HTMLAttributes<HTMLDivElement>;

function Skeleton({ className, ...props }: SkeletonProps) {
  return <div className={cn('animate-pulse rounded-md border border-border bg-muted', className)} {...props} />;
}

export { Skeleton };
