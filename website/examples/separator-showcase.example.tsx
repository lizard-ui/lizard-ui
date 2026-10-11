import { Separator } from 'lizard-ui';
import { ShowcaseRow, ShowcaseRows } from './showcase-layout';

export function ShowcaseExample() {
  return (
    <ShowcaseRows>
      <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 md:items-start md:gap-6">
        <ShowcaseRow label="Horizontal" className="w-full flex-col items-stretch gap-0">
          <p className="py-2 text-sm text-muted-foreground">Section A</p>
          <Separator />
          <p className="py-2 text-sm text-muted-foreground">Section B</p>
        </ShowcaseRow>
        <ShowcaseRow label="Vertical" className="w-full">
          <div className="flex h-10 items-center gap-3 text-sm text-muted-foreground">
            <span>Left</span>
            <Separator orientation="vertical" className="h-8" />
            <span>Right</span>
          </div>
        </ShowcaseRow>
      </div>
    </ShowcaseRows>
  );
}
