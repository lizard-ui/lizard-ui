import { useState } from 'react';
import { DatePicker, Label } from 'lizard-ui';
import { ShowcaseRow, ShowcaseRows } from './showcase-layout';

function PickerField({
  label,
  value,
  onChange,
  disabled,
  placeholder,
}: {
  label: string;
  value?: Date | null;
  onChange?: (d: Date) => void;
  disabled?: boolean;
  placeholder?: string;
}) {
  return (
    <div className="w-full min-w-[12rem] max-w-xs space-y-2 text-left">
      <Label>{label}</Label>
      <DatePicker value={value ?? null} onChange={onChange} disabled={disabled} placeholder={placeholder} />
    </div>
  );
}

export function ShowcaseExample() {
  const [empty, setEmpty] = useState<Date | null>(null);
  const [filled, setFilled] = useState<Date | null>(new Date());

  return (
    <ShowcaseRows>
      <ShowcaseRow label="Empty & filled" className="items-stretch">
        <PickerField label="Pick a date" value={empty} onChange={setEmpty} placeholder="Schedule check-in" />
        <PickerField label="Pre-selected" value={filled} onChange={setFilled} />
      </ShowcaseRow>
      <ShowcaseRow label="Disabled" className="items-stretch">
        <PickerField label="Disabled" value={new Date()} disabled placeholder="Unavailable" />
      </ShowcaseRow>
    </ShowcaseRows>
  );
}
