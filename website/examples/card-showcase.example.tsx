import { Card, CardContent, CardDescription, CardHeader, CardTitle, type CardVariant } from 'lizard-ui';
import { ShowcaseRow, ShowcaseRows } from './showcase-layout';

function SampleCard({ variant, title }: { variant: CardVariant; title: string }) {
  return (
    <Card variant={variant} className="w-full min-w-[10rem]">
      <CardHeader className="pb-2">
        <CardTitle className="font-mono text-xs">{title}</CardTitle>
        <CardDescription>Sample surface copy</CardDescription>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground">Theme tokens apply to borders and glass.</CardContent>
    </Card>
  );
}

const CARDS: { variant: CardVariant; rowLabel: string; title: string }[] = [
  { variant: 'default', rowLabel: 'Opaque', title: 'default' },
  { variant: 'glass-thin', rowLabel: 'Glass', title: 'glass-thin' },
  { variant: 'glass-primary-thick', rowLabel: 'Glass · primary', title: 'glass-primary-thick' },
  { variant: 'glass-secondary', rowLabel: 'Glass · secondary', title: 'glass-secondary' },
];

export function CardShowcaseExample() {
  return (
    <ShowcaseRows>
      <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 md:items-start md:gap-6 xl:grid-cols-4">
        {CARDS.map(({ variant, rowLabel, title }) => (
          <ShowcaseRow key={title} label={rowLabel} className="w-full items-stretch">
            <SampleCard variant={variant} title={title} />
          </ShowcaseRow>
        ))}
      </div>
    </ShowcaseRows>
  );
}
