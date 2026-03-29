import { Button } from 'lizard-ui';

export function ButtonGlassExample() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Button type="button" variant="outline" onClick={() => console.info('outline')}>
        <span className="text-sm font-semibold text-foreground">Outline</span>
      </Button>
      <Button type="button" variant="glassPrimary" onClick={() => console.info('primary')}>
        <span className="text-sm font-semibold text-foreground">Primary</span>
      </Button>
      <Button type="button" variant="glassSecondary" onClick={() => console.info('secondary')}>
        <span className="text-sm font-semibold text-foreground">Secondary</span>
      </Button>
      <Button type="button" variant="glassPrimary" disabled>
        <span className="text-sm font-semibold">Disabled</span>
      </Button>
    </div>
  );
}
