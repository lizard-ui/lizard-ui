import { Button } from 'lizard-ui';
import { ShowcaseRow, ShowcaseRows } from './showcase-layout';

const GLASS_VARIANTS = ['solid', 'glass-thick', 'glass-thin', 'glass-secondary'] as const;
const PRESET_VARIANTS = ['default', 'outline', 'secondary', 'ghost', 'destructive', 'link'] as const;
const SIZES = ['sm', 'default', 'lg'] as const;

export function ButtonShowcaseExample() {
  return (
    <ShowcaseRows>
      <ShowcaseRow label="Preset variants">
        {PRESET_VARIANTS.map((v) => (
          <Button key={v} type="button" variant={v}>
            <span className="text-sm font-semibold">{v}</span>
          </Button>
        ))}
      </ShowcaseRow>

      <ShowcaseRow label="Glass variants">
        {GLASS_VARIANTS.map((v) => (
          <Button key={v} type="button" variant={v}>
            <span className="text-sm font-semibold">{v}</span>
          </Button>
        ))}
      </ShowcaseRow>

      <ShowcaseRow label="Sizes">
        {SIZES.map((size) => (
          <Button key={size} type="button" variant="default" size={size}>
            <span className="text-sm font-semibold">{size}</span>
          </Button>
        ))}
      </ShowcaseRow>

      <ShowcaseRow label="Loading">
        {GLASS_VARIANTS.map((v) => (
          <Button key={`${v}-load`} type="button" variant={v} loading>
            <span className="text-sm font-semibold">Loading</span>
          </Button>
        ))}
      </ShowcaseRow>

      <ShowcaseRow label="Disabled">
        {GLASS_VARIANTS.map((v) => (
          <Button key={`${v}-dis`} type="button" variant={v} disabled>
            <span className="text-sm font-semibold">Disabled</span>
          </Button>
        ))}
      </ShowcaseRow>
    </ShowcaseRows>
  );
}
