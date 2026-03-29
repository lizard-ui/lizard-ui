import * as React from 'react';
import { cn } from '../cn';

export type SidebarProps = {
  open: boolean;
  children: React.ReactNode;
  className?: string;
};

/**
 * Collapsible sidebar: off-canvas on small screens; inline in the row when open on `md+`.
 * When `open` is false, the sidebar is hidden (`md:hidden`) so main content stays full width.
 */
export function Sidebar({ open, children, className }: SidebarProps) {
  return (
    <aside
      className={cn(
        'fixed inset-y-0 left-0 top-14 z-40 flex h-[calc(100vh-3.5rem)] w-64 flex-col border-r border-border bg-background/95 backdrop-blur transition-transform duration-200 ease-out',
        'md:static md:z-auto md:h-auto md:min-h-[calc(100vh-3.5rem)] md:translate-x-0',
        open ? 'translate-x-0' : '-translate-x-full',
        !open && 'md:hidden',
        className,
      )}
    >
      <div className="flex-1 overflow-y-auto overflow-x-hidden p-4">{children}</div>
    </aside>
  );
}
