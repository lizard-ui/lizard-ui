import * as React from 'react';
import { cn } from '../cn';

export type FooterProps = {
  children?: React.ReactNode;
  className?: string;
};

export function Footer({ children, className }: FooterProps) {
  return (
    <footer
      className={cn(
        'relative z-10 shrink-0 border-t border-border/80 py-8 text-center text-sm text-muted-foreground',
        className,
      )}
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">{children}</div>
    </footer>
  );
}
