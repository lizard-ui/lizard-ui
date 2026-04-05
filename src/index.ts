// Components
export {
  BackgroundPattern,
  backgroundPatternVariants,
  Badge,
  badgeVariants,
  Button,
  buttonVariants,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  cardVariants,
  CodeDisplayCard,
  Footer,
  GitHubFooter,
  Header,
  MarkdownRenderer,
  Sidebar,
  ThemeSelect,
  VerticalMenu,
  type BackgroundPatternProps,
  type BadgeProps,
  type BadgeVariant,
  type ButtonProps,
  type ButtonSize,
  type ButtonVariant,
  type ButtonVariantPreset,
  type CardProps,
  type CardVariant,
  type CodeDisplayCardProps,
  type FooterProps,
  type GitHubFooterProps,
  type HeaderProps,
  type MarkdownRendererProps,
  type SidebarProps,
  type VerticalMenuItem,
  type VerticalMenuProps,
} from './components/ui';

// Utilities
export { cn } from './utils/cn';
export {
  getGitHubRepoInfo,
  getGitHubStarsShieldsJsonUrl,
  type GitHubRepoInfo,
} from './utils/ui/github';

// Token parser
export {
  camelToKebabVariant,
  canonicalVariantLabel,
  KNOWN_VARIANT_TOKENS,
  parseVariantTokens,
} from './utils/tokenParser';

// TSX syntax highlighter
export { highlightTsxTheme } from './utils/tsxHighlight';

// Glass variant standalone functions + LIST_MAPs
export {
  BUTTON_GLASS_MAP,
  buttonGlassNeutralThick,
  buttonGlassNeutralThin,
  buttonGlassPrimaryThick,
  buttonGlassPrimaryThin,
  buttonGlassSecondaryThick,
  buttonGlassSecondaryThin,
  CARD_GLASS_MAP,
  cardGlassNeutralThick,
  cardGlassNeutralThin,
  cardGlassPrimaryThick,
  cardGlassPrimaryThin,
  cardGlassSecondaryThick,
  cardGlassSecondaryThin,
  GLASS_BLUR_THICK,
  GLASS_BLUR_THIN,
  type GlassMapKey,
  type GlassTint,
  type GlassWeight,
} from './utils/theme/glass';

// Variant class constructors — button
export {
  BUTTON_BASE,
  BUTTON_SIZE_MAP,
  BUTTON_VARIANT_MAP,
  buttonVariantUsesGlassPill,
  isLegacyButtonVariant,
  LEGACY_BUTTON_VARIANTS,
  resolveButtonVariantClasses,
} from './utils/ui/button';

// Variant class constructors — card
export { CARD_BASE, CARD_VARIANT_MAP, resolveCardVariantClasses } from './utils/ui/card';

// Variant class constructors — badge
export {
  BADGE_BASE,
  BADGE_VARIANT_MAP,
  resolveBadgeVariantClasses,
} from './utils/ui/badge';

// Variant class constructors — background pattern
export {
  BACKGROUND_PATTERN_BASE,
  BACKGROUND_PATTERN_PLACEMENT_MAP,
  resolveBackgroundPatternClasses,
} from './utils/ui/background-pattern';

// Types
export type {
  BackgroundPatternPlacement,
  BackgroundPatternVariant,
} from './types/ui/background-pattern';
export type { CardVariantPreset } from './types/ui/card';

// Theme types, constants, and LIST_COLORS
export {
  COLOR_SCHEME_LABELS,
  COLOR_SCHEMES,
  STORAGE_COLOR_SCHEME,
  STORAGE_THEME,
  THEME_LABELS,
  THEMES,
  type ColorScheme,
  type ThemeContextValue,
  type ThemeName,
} from './types/theme';

// Theme context and provider
export { ThemeContext, ThemeProvider, useTheme } from './contexts/ThemeProvider';
