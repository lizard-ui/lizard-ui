import { Badge } from 'lizard-ui';
import { ShowcaseRow, ShowcaseRows } from './showcase-layout';

const VARIANTS = ['default', 'secondary', 'destructive', 'outline', 'muted'] as const;

export function ShowcaseExample() {
  return (
    <ShowcaseRows>
      <ShowcaseRow label="Variants">
        {VARIANTS.map((variant) => (
          <Badge key={variant} variant={variant}>{variant}</Badge>
        ))}
      </ShowcaseRow>
    </ShowcaseRows>
  );
}
