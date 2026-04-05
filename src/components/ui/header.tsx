import * as React from 'react';
import { cn } from '../../utils/cn';
import { Button } from './button';

export type HeaderProps = {
  logo: React.ReactNode;
  /** Optional horizontal nav (e.g. top links). */
  nav?: React.ReactNode;
  /** Right side (theme picker, GitHub, …). */
  actions?: React.ReactNode;
  /** When set, shows a menu control that toggles the sidebar (all breakpoints). */
  onMenuClick?: () => void;
  /** Reflects sidebar open state for a11y. */
  menuOpen?: boolean;
  className?: string;
};

function MenuIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

export function Header({ logo, nav, actions, onMenuClick, menuOpen, className }: HeaderProps) {
  return (
    <header
      className={cn(
        'sticky top-0 z-50 h-14 shrink-0 border-b border-border/80 bg-background/75 backdrop-blur-md',
        className,
      )}
    >
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between gap-3 px-4 md:px-6">
        <div className="flex min-w-0 items-center gap-2">
          {onMenuClick ? (
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="shrink-0"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              onClick={onMenuClick}
            >
              <MenuIcon />
            </Button>
          ) : null}
          <div className="min-w-0">{logo}</div>
        </div>
        {nav ? <div className="hidden min-w-0 flex-1 justify-center sm:flex">{nav}</div> : null}
        {actions ? <div className="flex shrink-0 items-center gap-2">{actions}</div> : null}
      </div>
    </header>
  );
}
