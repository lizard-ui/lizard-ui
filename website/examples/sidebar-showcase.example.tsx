import { useState } from 'react';
import { cn, Button, Header, Sidebar, VerticalMenu } from 'lizard-ui';
import { ShowcaseRow, ShowcaseRows } from './showcase-layout';

const MENU_ITEMS = [
  { label: 'Dashboard', href: '#' },
  { label: 'Sensors', href: '#' },
  { label: 'Settings', href: '#' },
];

/** Sidebar defaults to `fixed` + viewport height; confine it to the preview card. */
function embeddedSidebarClass(open: boolean) {
  return cn(
    '!relative !inset-auto !top-0 !left-0 !z-0 !h-full !max-h-none shrink-0',
    'md:!relative md:!top-0 md:!h-full md:!max-h-none md:!self-stretch',
    open
      ? '!flex !w-44 !translate-x-0 opacity-100 md:!flex md:!translate-x-0'
      : '!hidden !w-0 !min-w-0 md:!hidden',
  );
}

export function ShowcaseExample() {
  const [open, setOpen] = useState(true);

  return (
    <ShowcaseRows>
      <ShowcaseRow label="With header + menu" className="w-full items-stretch">
        <div className="flex w-full max-w-xl flex-col overflow-hidden rounded-lg border border-border bg-background">
          <Header
            logo={<span className="font-semibold text-foreground">Habitat</span>}
            onMenuClick={() => setOpen((o) => !o)}
            menuOpen={open}
            actions={
              <Button type="button" variant="ghost" size="sm">
                <span className="text-sm font-semibold">Help</span>
              </Button>
            }
            className="!sticky !relative top-0 z-10"
          />
          <div className="relative flex min-h-40">
            <Sidebar open={open} className={embeddedSidebarClass(open)}>
              <VerticalMenu title="Navigate" items={MENU_ITEMS} />
            </Sidebar>
            <main className="flex flex-1 items-center justify-center p-4 text-sm text-muted-foreground">
              Main content — toggle menu in header
            </main>
          </div>
        </div>
      </ShowcaseRow>
    </ShowcaseRows>
  );
}
