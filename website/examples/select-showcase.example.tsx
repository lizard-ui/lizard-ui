import { Label, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from 'lizard-ui';
import { ShowcaseRow, ShowcaseRows } from './showcase-layout';

function HueSelect({ disabled }: { disabled?: boolean }) {
  return (
    <div className="w-full min-w-[12rem] max-w-xs space-y-2 text-left">
      <Label>Theme hue</Label>
      <Select defaultValue="teal" disabled={disabled}>
        <SelectTrigger>
          <SelectValue placeholder="Pick a hue" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="teal">Teal</SelectItem>
          <SelectItem value="emerald">Emerald</SelectItem>
          <SelectItem value="cyan">Cyan</SelectItem>
          <SelectItem value="violet">Violet</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

export function ShowcaseExample() {
  return (
    <ShowcaseRows>
      <ShowcaseRow label="Default" className="items-stretch">
        <HueSelect />
      </ShowcaseRow>
      <ShowcaseRow label="Disabled" className="items-stretch">
        <HueSelect disabled />
      </ShowcaseRow>
    </ShowcaseRows>
  );
}
