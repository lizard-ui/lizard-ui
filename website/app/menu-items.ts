import type { VerticalMenuItem } from 'lizard-ui';
import { SHOWCASE_MENU_ITEMS } from './showcase-registry';

export const PAGE_MENU_ITEMS: VerticalMenuItem[] = [
  { label: 'Docs', href: '#/docs' },
  { label: 'Components', href: '#components' },
  { label: 'Installation', href: '#install' },
  { kind: 'separator' },
  ...SHOWCASE_MENU_ITEMS,
  { label: 'Glass variants', href: '#tint-matrix' },
];

export const DOCS_MENU_ITEMS: VerticalMenuItem[] = [
  { label: '← Site', href: '#' },
  { label: 'Documentation', href: '#/docs' },
  { label: 'Types', href: '#/docs/types' },
  { label: 'Utils', href: '#/docs/utils' },
  { label: 'Components', href: '#/docs/components' },
  { label: 'Components / UI', href: '#/docs/components/ui' },
  { label: 'Contexts', href: '#/docs/contexts' },
  { label: 'Styles', href: '#/docs/styles' },
  { label: 'Examples', href: '#/docs/examples' },
];
