import * as React from 'react';
import { cn } from '../../utils/cn';
import { Separator } from './separator';

export type VerticalMenuLinkItem = {
  label: string;
  href: string;
  external?: boolean;
};

export type VerticalMenuSeparatorItem = { kind: 'separator' };

export type VerticalMenuItem = VerticalMenuLinkItem | VerticalMenuSeparatorItem;

function isSeparatorItem(item: VerticalMenuItem): item is VerticalMenuSeparatorItem {
  return 'kind' in item && item.kind === 'separator';
}

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
      {items.map((item, index) =>
        isSeparatorItem(item) ? (
          <Separator key={`separator-${index}`} className="my-2" />
        ) : (
          <a
            key={`${item.href}-${item.label}`}
            href={item.href}
            {...(item.external ? { target: '_blank', rel: 'noreferrer' } : {})}
            className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition hover:bg-muted hover:text-foreground"
          >
            {item.label}
          </a>
        ),
      )}
    </nav>
  );
}
