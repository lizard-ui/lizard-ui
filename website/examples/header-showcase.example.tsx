import { useState } from 'react';
import { Button, Header } from 'lizard-ui';
import { ShowcaseRow, ShowcaseRows } from './showcase-layout';

function DemoHeader({
  withMenu,
  menuOpen,
  onMenuClick,
}: {
  withMenu?: boolean;
  menuOpen?: boolean;
  onMenuClick?: () => void;
}) {
  return (
    <div className="w-full overflow-hidden rounded-lg border border-border bg-background">
      <Header
        logo={<span className="truncate font-semibold text-foreground">Lizard UI</span>}
        nav={
          <nav className="flex gap-1 text-sm">
            <a href="#" className="rounded-md px-2 py-1 text-muted-foreground hover:text-foreground" onClick={(e) => e.preventDefault()}>
              Docs
            </a>
            <a href="#" className="rounded-md px-2 py-1 text-muted-foreground hover:text-foreground" onClick={(e) => e.preventDefault()}>
              Components
            </a>
          </nav>
        }
        actions={
          <Button type="button" variant="outline" size="sm">
            <span className="text-sm font-semibold">GitHub</span>
          </Button>
        }
        onMenuClick={withMenu ? onMenuClick : undefined}
        menuOpen={menuOpen}
        className="!sticky !relative top-0"
      />
    </div>
  );
}

export function ShowcaseExample() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <ShowcaseRows>
      <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 md:items-start md:gap-6">
        <ShowcaseRow label="Logo, nav, actions" className="w-full items-stretch">
          <DemoHeader />
        </ShowcaseRow>
        <ShowcaseRow label="With menu control" className="w-full items-stretch">
          <DemoHeader withMenu menuOpen={menuOpen} onMenuClick={() => setMenuOpen((o) => !o)} />
        </ShowcaseRow>
      </div>
    </ShowcaseRows>
  );
}
