import { useState } from 'react';
import { Label, Switch } from 'lizard-ui';
import { ShowcaseRow, ShowcaseRows } from './showcase-layout';

function SwitchField({ id, label, defaultOn, disabled }: { id: string; label: string; defaultOn?: boolean; disabled?: boolean }) {
  const [on, setOn] = useState(defaultOn ?? false);
  return (
    <div className="flex w-full min-w-[12rem] max-w-xs items-center justify-between rounded-lg border border-border px-3 py-2">
      <Label htmlFor={id} className="font-normal">{label}</Label>
      <Switch id={id} checked={on} onCheckedChange={setOn} disabled={disabled} />
    </div>
  );
}

export function ShowcaseExample() {
  return (
    <ShowcaseRows>
      <ShowcaseRow label="Interactive" className="items-stretch">
        <SwitchField id="sw-live" label="Push alerts" />
      </ShowcaseRow>
      <ShowcaseRow label="Disabled" className="items-stretch">
        <SwitchField id="sw-dis-off" label="Unchecked" disabled />
        <SwitchField id="sw-dis-on" label="Checked" defaultOn disabled />
      </ShowcaseRow>
    </ShowcaseRows>
  );
}
