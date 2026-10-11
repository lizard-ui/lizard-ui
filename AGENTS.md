# Agent guide

This repository ships machine-readable project knowledge as an [Open Knowledge Format (OKF)](https://github.com/GoogleCloudPlatform/open-knowledge-format) **v0.2** bundle under [`knowledge/`](./knowledge/index.md).

## Where to start

1. Read [`knowledge/index.md`](./knowledge/index.md) for the concept map.
2. Use [`docs/README.md`](./docs/README.md) for human-oriented reference and examples.
3. Run **`bun run test`** (Vitest) and **`bun run build`** before proposing library changes.

## Repository layout

| Path | Purpose |
| --- | --- |
| `src/components/ui/` | React components (primitives + layout) |
| `src/types/` | Per-component TypeScript types |
| `src/utils/ui/` | Tailwind LIST_MAP variant class constructors |
| `src/utils/theme/glass.ts` | Standalone glass surface class strings |
| `src/styles/themes.css` | Theme CSS variables (published as `lizard-ui/styles/themes.css`) |
| `src/contexts/` | `ThemeProvider`, `useTheme` |
| `src/__tests__/` | Vitest unit tests |
| `knowledge/` | OKF v0.2 concepts for agents |
| `docs/` | User documentation (Markdown) |
| `website/` | Vite dev site, docs viewer, and component showcases |

## Tooling (2026)

- **Node.js** 26+ (`engines`, `.nvmrc`)
- **Package manager**: Bun (`bun.lock`); CI uses `bun install --frozen-lockfile`
- **Tests**: Vitest (`vitest.config.ts`, `vitest.setup.ts`)
- **Lint**: ESLint 10 flat config; `scripts/lint.cjs` resolves TypeScript 6 for `typescript-eslint` while **`tsc` uses TypeScript 7**
- **Build**: Rollup + esbuild → ESM/CJS; `tsc --emitDeclarationOnly` for `.d.ts`

## Conventions

- Prefer **static Tailwind class strings** in LIST_MAPs; avoid dynamic class assembly for purge safety.
- Component props types live in `src/types/ui/<name>.ts`.
- Radix UI primitives are **bundled dependencies**; `lucide-react` is a **peer dependency**.
- Update OKF [`knowledge/log.md`](./knowledge/log.md) when you add or materially change concepts.
