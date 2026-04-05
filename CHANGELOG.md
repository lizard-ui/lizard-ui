# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.0.2] - 2026-04-04

Architectural refactor: modular types, variant class constructors, standalone glass utilities, theme system promoted to a first-class library export, full reference docs, and an in-playground docs viewer.

### Added

- **`src/types/`** — One TypeScript file per component (`button.ts`, `card.ts`, `badge.ts`, `background-pattern.ts`) plus a shared `theme.ts` and barrel `index.ts`. All component props and variant union types are now defined here and exported from the library root.
- **`src/utils/tokenParser.ts`** — Extracted pure token-parsing primitives (`camelToKebabVariant`, `parseVariantTokens`, `canonicalVariantLabel`, `KNOWN_VARIANT_TOKENS`).
- **`src/utils/theme/glass.ts`** — Standalone, tree-shakeable glass surface functions (`buttonGlassNeutralThick`, `cardGlassPrimaryThin`, etc.) and pre-computed `BUTTON_GLASS_MAP` / `CARD_GLASS_MAP` LIST_MAPs.
- **`src/utils/ui/button.ts`** — `BUTTON_VARIANT_MAP` and `BUTTON_SIZE_MAP` (Tailwind-safe static string records), `resolveButtonVariantClasses`, `isLegacyButtonVariant`, `buttonVariantUsesGlassPill`.
- **`src/utils/ui/card.ts`** — `CARD_VARIANT_MAP`, `resolveCardVariantClasses`.
- **`src/utils/ui/badge.ts`** — `BADGE_VARIANT_MAP`, `resolveBadgeVariantClasses`.
- **`src/utils/ui/background-pattern.ts`** — `BACKGROUND_PATTERN_PLACEMENT_MAP`, `resolveBackgroundPatternClasses`.
- **`src/styles/themes.css`** — Canonical theme stylesheet (23 palettes × light + dark) moved into `src/` and published as `lizard-ui/styles/themes.css`.
- **`src/contexts/ThemeProvider.tsx`** — `ThemeProvider` React context and `useTheme` hook promoted from the playground into the library. Exported from the library root.
- **`src/contexts/ThemeContext.ts`** — Re-exports `ThemeContext`, `ThemeProvider`, `useTheme`, and `ThemeContextValue` for direct context access.
- **Package sub-path export** — `"lizard-ui/styles/themes.css"` mapped to `dist/styles/themes.css` in `package.json` `exports`.
- **Rollup CSS copy** — Inline `copyStyles` plugin copies `src/styles/themes.css` → `dist/styles/themes.css` on every build.
- **`docs/`** — Full reference documentation across 8 sections (`types`, `utils`, `components`, `components/ui`, `contexts`, `styles`, `examples`) each with a `README.md`, cross-linked navigation footer, and prev/next breadcrumb on every page.
- **Playground docs viewer** — `DocsPage` + `MarkdownRenderer` components render the `docs/` folder as a navigable site within the playground at `#/docs`. Hash-based routing (`#/docs`, `#/docs/types`, …) supports deep links, browser back/forward, and sidebar navigation. Relative markdown links navigate in-app; external links open in a new tab.
- **`src/utils/tsxHighlight.tsx`** — Lightweight theme-token-aware TSX colorizer (`highlightTsxTheme`). Exported from the library root.
- **`src/components/ui/themeSelect.tsx`** — `ThemeSelect` drop-down, promoted from the playground into the library.
- **`src/components/ui/markdownRenderer.tsx`** — `MarkdownRenderer` component (GFM, Tailwind-styled, navigable `.md` links), promoted from the playground. Requires optional peer dependencies `react-markdown` and `remark-gfm`.
- **`src/components/ui/codeDisplayCard.tsx`** — `CodeDisplayCard` showcase shell (preview / code tabs with `highlightTsxTheme`), promoted from the playground.

### Changed

- **`src/utils/uiVariant.ts`** — Now a backward-compatible barrel re-export; all logic has moved to the focused modules above. Existing imports continue to work unchanged.
- **Components revamped** — `Button`, `Card`, `Badge`, and `BackgroundPattern` each import their types from `src/types/<component>.ts` and their class constructors from `src/utils/ui/<component>.ts`. CVA removed from `Button` and `Badge`; replaced with direct LIST_MAP lookups.
- **`buttonVariants` / `badgeVariants` / `backgroundPatternVariants`** — Kept as exported helpers with the same call signature but reimplemented using LIST_MAPs instead of CVA.
- **`package.json`** — `sideEffects` changed from `false` to `["**/*.css"]` so bundlers do not tree-shake theme stylesheet imports. Version bumped to `0.0.2`.
- **`playground/theme-config.ts`** — Deleted; all theme constants are now imported directly from `lizard-ui`.
- **`playground/ThemeProvider.tsx`** — Deleted; `ThemeProvider` and `useTheme` are imported directly from `lizard-ui`.
- **`playground/themes.css`** — Deleted; replaced by `src/styles/themes.css`. Playground imports via `@import '../src/styles/themes.css'`.
- **Playground routing** — `App.tsx` gained a `useIsDocsRoute()` hash router; the `Docs` header/sidebar link now routes to `#/docs` (previously a scroll anchor). Sidebar swaps between page items and docs-section items depending on the active route. Version badge updated to `v0.0.2`.
- **Playground reorganised** — App files moved from `playground/*.tsx` to `playground/app/` (`App.tsx`, `DocsPage.tsx`, `MainLayout.tsx`, `MainPageContent.tsx`, `menu-items.ts`, `heroTerrarium.ts`). Smaller UI helpers live in `playground/app/components/` (`AppearanceToggle`, `CopyInstallButton`, `CodeBlock`). Entry point `playground/main.tsx` and assets in `playground/public/` are unchanged.
- **`react-markdown` / `remark-gfm`** — Added as optional `peerDependencies`; required only when using `MarkdownRenderer`. Added to `rollup.config.js` externals so they are never bundled.
- **`vite.config.ts`** — Added `server.fs.allow: [rootDir]` to permit `import.meta.glob` access to `docs/` from outside the Vite playground root.

### Notes

- Import themes in consuming projects: `import 'lizard-ui/styles/themes.css'`
- Glass variants are individually importable: `import { buttonGlassPrimaryThick } from 'lizard-ui'`
- All variant class maps (`BUTTON_VARIANT_MAP`, `CARD_VARIANT_MAP`, etc.) are exported for custom component authoring.
- `ThemeProvider` and `useTheme` are now part of the library: `import { ThemeProvider, useTheme } from 'lizard-ui'`

[0.0.2]: https://github.com/lizard-ui/lizard-ui/compare/v0.0.1...v0.0.2

## [0.0.1] - 2026-03-29

Initial release of **Lizard UI** — a React component library with shadcn-style primitives and Tailwind-native glass styling (gradients, blur, saturation) driven by theme tokens, without a separate WebGL glass runtime.

### Added

- **Package build** — Dual **ESM** and **CJS** outputs plus TypeScript declarations via Rollup; `exports` map for modern bundlers; `sideEffects: false` for tree-shaking.
- **Components**
  - **Button** — Variants including glass and outline styles aligned with theme `primary` / `secondary`.
  - **Card** — Subcomponents (`CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`) and glass variants (`glass`, `glassPrimary`, `glassSecondary`).
  - **Badge** — Muted and standard styling variants.
  - **Layout** — `Header`, `Footer`, `Sidebar`, and **VerticalMenu** for app shells.
  - **BackgroundPattern** — Decorative mesh/grid-style backgrounds.
  - **GitHubFooter** — Repo link with `@owner`, optional star count (GitHub API with Shields.io fallback), **lucide-react** icons (`Github`, `Star`), and an `asFooter` option to avoid nested `<footer>` when used inside a layout footer.
- **Utilities** — `cn` (class name helper), `getGitHubRepoInfo` / `getGitHubStarsShieldsJsonUrl` for the footer, and `noop`.
- **Peer dependencies** — `react`, `react-dom`, `tailwindcss` (optional), and `lucide-react` (^0.263.0) for consumers using `GitHubFooter`.
- **Playground / docs site** — Vite-powered showcase with appearance toggle (light / dark / system), **23 hue themes** via `data-theme`, default theme **lime** on first load, and static build output to `playground-dist/` via `bun run build:site`.

### Notes

- Tailwind should scan `node_modules/lizard-ui` (or your path) in `content` so library classes are generated.
- Dark mode uses `class="dark"` on `<html>` with `darkMode: ['class']`; theme hues use `.dark[data-theme='…']` for token overrides.

[0.0.1]: https://github.com/lizard-ui/lizard-ui/releases/tag/v0.0.1
