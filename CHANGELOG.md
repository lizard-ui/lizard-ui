# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
- **Playground / docs site** — Vite-powered showcase with appearance toggle (light / dark / system), **23 hue themes** via `data-theme` (see `playground/themes.css` and `theme-config.ts`), default theme **lime** on first load, and static build output to `playground-dist/` via `bun run build:site`.

### Notes

- Tailwind should scan `node_modules/lizard-ui` (or your path) in `content` so library classes are generated.
- Dark mode uses `class="dark"` on `<html>` with `darkMode: ['class']`; theme hues use `.dark[data-theme='…']` for token overrides.

[0.0.1]: https://github.com/lizard-ui/lizard-ui/releases/tag/v0.0.1
