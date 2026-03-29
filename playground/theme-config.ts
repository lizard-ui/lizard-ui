/** Tailwind one-word palettes plus extras (e.g. `brown`), in a stable order. */
export const THEMES = [
  'slate',
  'gray',
  'zinc',
  'neutral',
  'stone',
  'brown',
  'red',
  'orange',
  'amber',
  'yellow',
  'lime',
  'green',
  'emerald',
  'teal',
  'cyan',
  'sky',
  'blue',
  'indigo',
  'violet',
  'purple',
  'fuchsia',
  'pink',
  'rose',
] as const;

export type ThemeName = (typeof THEMES)[number];

export const THEME_LABELS: Record<ThemeName, string> = {
  slate: 'Slate',
  gray: 'Gray',
  zinc: 'Zinc',
  neutral: 'Neutral',
  stone: 'Stone',
  brown: 'Brown',
  red: 'Red',
  orange: 'Orange',
  amber: 'Amber',
  yellow: 'Yellow',
  lime: 'Lime',
  green: 'Green',
  emerald: 'Emerald',
  teal: 'Teal',
  cyan: 'Cyan',
  sky: 'Sky',
  blue: 'Blue',
  indigo: 'Indigo',
  violet: 'Violet',
  purple: 'Purple',
  fuchsia: 'Fuchsia',
  pink: 'Pink',
  rose: 'Rose',
};

/** Light / dark / follow OS (`prefers-color-scheme`). */
export const COLOR_SCHEMES = ['light', 'dark', 'system'] as const;

export type ColorScheme = (typeof COLOR_SCHEMES)[number];

export const COLOR_SCHEME_LABELS: Record<ColorScheme, string> = {
  light: 'Light',
  dark: 'Dark',
  system: 'System',
};

export const STORAGE_THEME = 'lizard-ui-theme';
export const STORAGE_COLOR_SCHEME = 'lizard-ui-color-scheme';
