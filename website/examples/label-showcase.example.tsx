import { Checkbox, Input, Label } from 'lizard-ui';
import { ShowcaseRow, ShowcaseRows } from './showcase-layout';

export function ShowcaseExample() {
  return (
    <ShowcaseRows>
      <ShowcaseRow label="With input" className="items-stretch">
        <div className="w-full max-w-xs space-y-2 text-left">
          <Label htmlFor="label-species">Species</Label>
          <Input id="label-species" placeholder="Green anole" />
        </div>
      </ShowcaseRow>
      <ShowcaseRow label="With checkbox">
        <div className="flex items-center gap-2">
          <Checkbox id="label-cb" />
          <Label htmlFor="label-cb" className="font-normal">Accept care schedule</Label>
        </div>
      </ShowcaseRow>
      <ShowcaseRow label="Disabled control">
        <div className="flex items-center gap-2 opacity-60">
          <Checkbox id="label-cb-dis" disabled />
          <Label htmlFor="label-cb-dis" className="font-normal">Unavailable option</Label>
        </div>
      </ShowcaseRow>
    </ShowcaseRows>
  );
}
