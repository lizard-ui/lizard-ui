import { Label, Textarea } from 'lizard-ui';
import { ShowcaseRow, ShowcaseRows } from './showcase-layout';

export function ShowcaseExample() {
  return (
    <ShowcaseRows>
      <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 md:items-start md:gap-6">
        <ShowcaseRow label="Default" className="w-full items-stretch">
          <div className="w-full space-y-2 text-left">
            <Label htmlFor="ta-notes">Notes</Label>
            <Textarea id="ta-notes" placeholder="Humidity, light cycles…" rows={3} />
          </div>
        </ShowcaseRow>
        <ShowcaseRow label="Disabled" className="w-full items-stretch">
          <div className="w-full space-y-2 text-left">
            <Label htmlFor="ta-disabled">Disabled</Label>
            <Textarea id="ta-disabled" rows={3} disabled placeholder="Cannot edit" />
          </div>
        </ShowcaseRow>
      </div>
    </ShowcaseRows>
  );
}
