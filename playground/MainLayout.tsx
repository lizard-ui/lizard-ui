import { useCallback, useState, type ReactNode } from 'react';
import {
  cn,
  Footer,
  Header,
  Sidebar,
  VerticalMenu,
  type VerticalMenuItem,
} from 'lizard-ui';

export type MainLayoutProps = {
  children: React.ReactNode;
  /** Branding (logo + title). */
  logo: React.ReactNode;
  /** Optional top-center nav (shown from `sm`). */
  headerNav?: React.ReactNode;
  /** Right side of header (theme, links, …). */
  headerActions?: React.ReactNode;
  /** Vertical sidebar links. */
  menuItems?: VerticalMenuItem[];
  /** Optional label above menu items. */
  menuTitle?: string;
  /** Optional chip(s) above the sidebar nav (e.g. version or status `Badge`). */
  menuBadge?: React.ReactNode;
  footerChildren?: React.ReactNode;
  /** Initial sidebar visibility; default `false` (collapsed / off-canvas). */
  defaultSidebarOpen?: boolean;
  /** Decorative background behind the shell (e.g. `BackgroundPattern`). */
  background?: ReactNode;
  className?: string;
};

/** Playground app shell — composes library `Header`, `Sidebar`, `Footer`, `VerticalMenu`. */
export function MainLayout({
  children,
  logo,
  headerNav,
  headerActions,
  menuItems = [],
  menuTitle = 'On this page',
  menuBadge,
  footerChildren,
  background,
  defaultSidebarOpen = false,
  className,
}: MainLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(defaultSidebarOpen);

  const toggleSidebar = useCallback(() => {
    setSidebarOpen((o) => !o);
  }, []);

  const closeSidebar = useCallback(() => {
    setSidebarOpen(false);
  }, []);

  return (
    <div className={cn('relative', className)}>
      {background}
      {/* Backdrop only for mobile drawer; keeps flex row to exactly two columns on md+ */}
      {sidebarOpen ? (
        <button
          type="button"
          className="fixed inset-0 z-30 bg-background/50 backdrop-blur-sm md:hidden"
          aria-label="Close sidebar"
          onClick={closeSidebar}
        />
      ) : null}
      <div className="flex min-h-screen flex-col">
        <Header
          logo={logo}
          nav={headerNav}
          actions={headerActions}
          onMenuClick={toggleSidebar}
          menuOpen={sidebarOpen}
        />
        <div className="flex min-h-0 flex-1">
          <Sidebar open={sidebarOpen}>
            {menuBadge ? (
              <div className="mb-3 flex flex-wrap items-center gap-2 px-3">{menuBadge}</div>
            ) : null}
            <VerticalMenu title={menuTitle} items={menuItems} />
          </Sidebar>
          {/* isolate + z-0 so glass (backdrop-blur) layers stack predictably above page background */}
          <div className="relative isolate z-0 flex min-w-0 min-h-0 flex-1 flex-col">
            <main className="relative z-0 flex-1">{children}</main>
            <Footer>{footerChildren}</Footer>
          </div>
        </div>
      </div>
    </div>
  );
}
