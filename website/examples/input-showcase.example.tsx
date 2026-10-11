import type { ReactNode } from 'react';
import { Input, Label } from 'lizard-ui';
import { ShowcaseRow, ShowcaseRows } from './showcase-layout';

function Field({ id, label, children }: { id: string; label: string; children: ReactNode }) {
  return (
    <div className="w-full min-w-[12rem] max-w-xs space-y-2 text-left">
      <Label htmlFor={id}>{label}</Label>
      {children}
    </div>
  );
}

export function ShowcaseExample() {
  return (
    <ShowcaseRows>
      <ShowcaseRow label="Default" className="items-stretch">
        <Field id="input-default" label="Email">
          <Input id="input-default" type="email" placeholder="you@habitat.dev" />
        </Field>
        <Field id="input-value" label="With value">
          <Input id="input-value" defaultValue="anole@terrarium.io" />
        </Field>
      </ShowcaseRow>
      <ShowcaseRow label="Disabled & read-only" className="items-stretch">
        <Field id="input-disabled" label="Disabled">
          <Input id="input-disabled" placeholder="Unavailable" disabled />
        </Field>
        <Field id="input-readonly" label="Read-only">
          <Input id="input-readonly" readOnly defaultValue="Read-only value" />
        </Field>
      </ShowcaseRow>
      <ShowcaseRow label="Types" className="items-stretch">
        <Field id="input-password" label="Password">
          <Input id="input-password" type="password" defaultValue="secret" />
        </Field>
        <Field id="input-number" label="Number">
          <Input id="input-number" type="number" defaultValue={72} />
        </Field>
      </ShowcaseRow>
    </ShowcaseRows>
  );
}
