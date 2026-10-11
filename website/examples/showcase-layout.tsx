import type { ReactNode } from 'react';
import { cn } from 'lizard-ui';

export function ShowcaseRows({ children }: { children: ReactNode }) {
  return <div className="flex w-full flex-col gap-8">{children}</div>;
}

export function ShowcaseRow({
  label,
  children,
  className,
}: {
  label: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className="space-y-3">
      <p className="text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</p>
      <div className={cn('flex flex-wrap items-center justify-center gap-3', className)}>{children}</div>
    </div>
  );
}
