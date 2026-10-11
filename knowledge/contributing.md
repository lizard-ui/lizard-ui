---
type: Playbook
title: Contributing workflow
description: Commands and checks for library changes.
tags: [development, vitest, bun, node]
status: stable
---

# Contributing workflow

## Prerequisites

- **Node.js 26+** (see `.nvmrc`)
- **Bun** (lockfile: `bun.lock`)

```bash
bun install
```

## Checks before a PR

```bash
bun run typecheck
bun run lint
bun run test
bun run build
```

Optional: `bun run test:coverage`, `bun run format:check`, `bun dev` for the project website.

## Tests

- Runner: **Vitest** (`vitest.config.ts`, `vitest.setup.ts`)
- Environment: **node** (variant/calendar unit tests)
- Pattern: `src/**/*.test.ts` with explicit `import { describe, expect, test } from 'vitest'`

## Lint and TypeScript

- ESLint 10 flat config in `eslint.config.js`
- **`tsc`** uses **TypeScript 7**; ESLint uses `scripts/lint.cjs` with a nested **TypeScript 6** copy for `typescript-eslint` until it supports TS 7
- `.npmrc` sets `legacy-peer-deps=true` for that peer range

## Build

```bash
bun run build   # rollup -c && tsc --emitDeclarationOnly
```

Radix packages are bundled; React and `lucide-react` stay external.

## Knowledge updates

When behavior or public API changes, update:

- [`../CHANGELOG.md`](../CHANGELOG.md)
- [`../docs/`](../docs/) as needed
- This bundle’s [`log.md`](./log.md) and affected concept files
- [`../AGENTS.md`](../AGENTS.md) if layout or tooling changes materially
