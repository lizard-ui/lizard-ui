import * as React from 'react';
import { cn } from '../../utils/cn';

export type SidebarProps = {
  open: boolean;
  children: React.ReactNode;
  className?: string;
};

/**
 * Collapsible sidebar: off-canvas on small screens; inline in the row when open on `md+`.
 * When `open` is false, the sidebar is hidden (`md:hidden`) so main content stays full width.
 * On `md+`, the column is **sticky** under the header (`top-14`) so nav stays in view while the page scrolls.
 */
export function Sidebar({ open, children, className }: SidebarProps) {
  return (
    <aside
      className={cn(
        'fixed inset-y-0 left-0 top-14 z-40 flex h-[calc(100vh-3.5rem)] w-64 shrink-0 flex-col border-r border-border bg-background/95 backdrop-blur transition-transform duration-200 ease-out',
        'md:sticky md:top-14 md:z-auto md:h-[calc(100vh-3.5rem)] md:max-h-[calc(100vh-3.5rem)] md:translate-x-0 md:self-start',
        open ? 'translate-x-0' : '-translate-x-full',
        !open && 'md:hidden',
        className,
      )}
    >
      <div className="flex min-h-0 flex-1 flex-col overflow-y-auto overflow-x-hidden overscroll-contain p-4">
        {children}
      </div>
    </aside>
  );
}
