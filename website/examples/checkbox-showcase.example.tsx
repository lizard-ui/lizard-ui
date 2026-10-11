import { Checkbox, Label } from 'lizard-ui';
import { ShowcaseRow, ShowcaseRows } from './showcase-layout';

function Item({ id, label, defaultChecked, disabled }: { id: string; label: string; defaultChecked?: boolean; disabled?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <Checkbox id={id} defaultChecked={defaultChecked} disabled={disabled} />
      <Label htmlFor={id} className="font-normal">{label}</Label>
    </div>
  );
}

export function ShowcaseExample() {
  return (
    <ShowcaseRows>
      <ShowcaseRow label="Interactive">
        <Item id="cb-live" label="Enable misting schedule" />
      </ShowcaseRow>
      <ShowcaseRow label="Disabled">
        <Item id="cb-dis-off" label="Unchecked" disabled />
        <Item id="cb-dis-on" label="Checked" defaultChecked disabled />
      </ShowcaseRow>
    </ShowcaseRows>
  );
}
