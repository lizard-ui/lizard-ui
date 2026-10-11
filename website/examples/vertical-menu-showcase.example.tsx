import { VerticalMenu } from 'lizard-ui';
import { ShowcaseRow, ShowcaseRows } from './showcase-layout';

const ITEMS = [
  { label: 'Overview', href: '#' },
  { label: 'Installation', href: '#install' },
  { label: 'Components', href: '#components' },
  { label: 'GitHub', href: 'https://github.com/lizard-ui/lizard-ui', external: true },
];

export function ShowcaseExample() {
  return (
    <ShowcaseRows>
      <ShowcaseRow label="Default" className="w-full items-stretch">
        <div className="w-full max-w-xs rounded-lg border border-border bg-background p-2">
          <VerticalMenu title="On this page" items={ITEMS} />
        </div>
      </ShowcaseRow>
    </ShowcaseRows>
  );
}
