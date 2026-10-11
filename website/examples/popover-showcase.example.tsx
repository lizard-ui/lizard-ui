import { Button, Popover, PopoverContent, PopoverTrigger } from 'lizard-ui';
import { ShowcaseRow, ShowcaseRows } from './showcase-layout';

function SamplePopover({ variant, label }: { variant: 'outline' | 'ghost' | 'glass-thick'; label: string }) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button type="button" variant={variant} size="sm">
          <span className="text-sm font-semibold">{label}</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64 text-sm">
        Popover anchored to <span className="font-mono text-xs">{variant}</span> trigger.
      </PopoverContent>
    </Popover>
  );
}

export function ShowcaseExample() {
  return (
    <ShowcaseRows>
      <ShowcaseRow label="Trigger variants">
        <SamplePopover variant="outline" label="Outline" />
        <SamplePopover variant="ghost" label="Ghost" />
        <SamplePopover variant="glass-thick" label="Glass" />
      </ShowcaseRow>
      <ShowcaseRow label="Alignment (side)" className="gap-6">
        <Popover>
          <PopoverTrigger asChild>
            <Button type="button" variant="outline" size="sm">
              <span className="text-sm font-semibold">Top</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent side="top" className="w-48 text-sm">Opens above the trigger.</PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger asChild>
            <Button type="button" variant="outline" size="sm">
              <span className="text-sm font-semibold">Right</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent side="right" className="w-48 text-sm">Opens to the right.</PopoverContent>
        </Popover>
      </ShowcaseRow>
    </ShowcaseRows>
  );
}
