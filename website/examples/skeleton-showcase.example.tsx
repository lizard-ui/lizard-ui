import { Skeleton } from 'lizard-ui';
import { ShowcaseRow, ShowcaseRows } from './showcase-layout';

export function ShowcaseExample() {
  return (
    <ShowcaseRows>
      <ShowcaseRow label="Profile row" className="items-stretch">
        <div className="flex w-full max-w-md gap-3">
          <Skeleton className="h-12 w-12 shrink-0 rounded-full" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        </div>
      </ShowcaseRow>
      <ShowcaseRow label="Blocks">
        <Skeleton className="h-24 w-40 rounded-lg" />
        <Skeleton className="h-10 w-28 rounded-md" />
      </ShowcaseRow>
      <ShowcaseRow label="Text lines" className="flex-col items-stretch">
        <Skeleton className="h-3 w-full max-w-sm" />
        <Skeleton className="h-3 w-full max-w-md" />
        <Skeleton className="h-3 w-full max-w-xs" />
      </ShowcaseRow>
    </ShowcaseRows>
  );
}
