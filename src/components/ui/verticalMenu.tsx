import * as React from 'react';
import { cn } from '../../utils/cn';

export type VerticalMenuItem = {
  label: string;
  href: string;
  external?: boolean;
};

export type VerticalMenuProps = {
  items: VerticalMenuItem[];
  className?: string;
  /** Optional heading above links. */
  title?: string;
};

export function VerticalMenu({ items, className, title }: VerticalMenuProps) {
  return (
    <nav className={cn('flex flex-col gap-1', className)} aria-label="Site">
      {title ? <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">{title}</p> : null}
      {items.map((item) => (
        <a
          key={`${item.href}-${item.label}`}
          href={item.href}
          {...(item.external ? { target: '_blank', rel: 'noreferrer' } : {})}
          className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition hover:bg-muted hover:text-foreground"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
