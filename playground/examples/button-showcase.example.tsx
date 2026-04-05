import { Button } from 'lizard-ui';

const VARIANTS = ['solid', 'glass-thick', 'glass-thin', 'glass-secondary'] as const;

export function ButtonShowcaseExample() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-wrap items-center justify-center gap-3">
        {VARIANTS.map((v) => (
          <Button key={v} type="button" variant={v}>
            <span className="text-sm font-semibold">Click Me!</span>
          </Button>
        ))}
      </div>
      <div className="flex flex-wrap items-center justify-center gap-3">
        {VARIANTS.map((v) => (
          <Button key={`${v}-load`} type="button" variant={v} loading>
            <span className="text-sm font-semibold">Loading</span>
          </Button>
        ))}
      </div>
      <div className="flex flex-wrap items-center justify-center gap-3">
        {VARIANTS.map((v) => (
          <Button key={`${v}-dis`} type="button" variant={v} disabled>
            <span className="text-sm font-semibold">Off</span>
          </Button>
        ))}
      </div>
    </div>
  );
}
