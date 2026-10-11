import { Button, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from 'lizard-ui';
import { ShowcaseRow, ShowcaseRows } from './showcase-layout';

function TipButton({ variant, label }: { variant: 'outline' | 'ghost' | 'glass-thick'; label: string }) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button type="button" variant={variant} size="sm">
          <span className="text-sm font-semibold">{label}</span>
        </Button>
      </TooltipTrigger>
      <TooltipContent>Tooltip on {variant}</TooltipContent>
    </Tooltip>
  );
}

export function ShowcaseExample() {
  return (
    <TooltipProvider delayDuration={200}>
      <ShowcaseRows>
        <ShowcaseRow label="Trigger variants">
          <TipButton variant="outline" label="Outline" />
          <TipButton variant="ghost" label="Ghost" />
          <TipButton variant="glass-thick" label="Glass" />
        </ShowcaseRow>
        <ShowcaseRow label="Placement">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button type="button" variant="outline" size="sm">
                <span className="text-sm font-semibold">Top</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="top">Opens above</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button type="button" variant="outline" size="sm">
                <span className="text-sm font-semibold">Bottom</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom">Opens below</TooltipContent>
          </Tooltip>
        </ShowcaseRow>
      </ShowcaseRows>
    </TooltipProvider>
  );
}
