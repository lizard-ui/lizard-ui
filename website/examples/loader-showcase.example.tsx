import { useState } from 'react';
import { Button, Loader, type LoaderSize, type LoaderVariant } from 'lizard-ui';
import { ShowcaseRow, ShowcaseRows } from './showcase-layout';

const SIZES: LoaderSize[] = ['sm', 'default', 'lg', 'xl'];

const VARIANTS: { variant: LoaderVariant; label: string }[] = [
  { variant: 'spinner', label: 'spinner' },
  { variant: 'dots', label: 'dots' },
  { variant: 'ring', label: 'ring' },
  { variant: 'bars', label: 'bars' },
  { variant: 'pulse', label: 'pulse' },
];

export function ShowcaseExample() {
  const [buttonLoading, setButtonLoading] = useState(false);

  const runButtonDemo = () => {
    if (buttonLoading) return;
    setButtonLoading(true);
    window.setTimeout(() => setButtonLoading(false), 1600);
  };

  return (
    <ShowcaseRows>
      <ShowcaseRow label="Variants">
        <div className="flex flex-wrap items-center justify-center gap-10 text-primary">
          {VARIANTS.map(({ variant, label }) => (
            <div key={variant} className="flex flex-col items-center gap-2">
              <Loader variant={variant} size="lg" aria-label={`Loading ${label}`} />
              <span className="font-mono text-xs text-muted-foreground">{label}</span>
            </div>
          ))}
        </div>
      </ShowcaseRow>
      <ShowcaseRow label="Sizes">
        <div className="flex flex-wrap items-end justify-center gap-8 text-primary">
          {SIZES.map((size) => (
            <div key={size} className="flex flex-col items-center gap-2">
              <Loader size={size} aria-label={`Loading ${size}`} />
              <span className="font-mono text-xs text-muted-foreground">{size}</span>
            </div>
          ))}
        </div>
      </ShowcaseRow>
      <ShowcaseRow label="Button loading">
        <Button type="button" loading={buttonLoading} onClick={runButtonDemo}>
          {buttonLoading ? 'Working…' : 'Run demo'}
        </Button>
      </ShowcaseRow>
    </ShowcaseRows>
  );
}
