import { Progress } from 'lizard-ui';
import { ShowcaseRow, ShowcaseRows } from './showcase-layout';

function Bar({ value }: { value: number }) {
  return (
    <div className="w-full space-y-2">
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>Progress</span>
        <span>{value}%</span>
      </div>
      <Progress value={value} />
    </div>
  );
}

const BARS = [
  { value: 0, rowLabel: 'Empty' },
  { value: 33, rowLabel: 'In progress' },
  { value: 66, rowLabel: 'Almost there' },
  { value: 100, rowLabel: 'Complete' },
] as const;

export function ShowcaseExample() {
  return (
    <ShowcaseRows>
      <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 md:items-start md:gap-6 xl:grid-cols-4">
        {BARS.map(({ value, rowLabel }) => (
          <ShowcaseRow key={rowLabel} label={rowLabel} className="w-full items-stretch">
            <Bar value={value} />
          </ShowcaseRow>
        ))}
      </div>
    </ShowcaseRows>
  );
}
