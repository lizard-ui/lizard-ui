---
type: Reference
title: Component catalog
description: Exported React components grouped by role.
tags: [components, api, radix]
status: stable
---

# Component catalog

Components live under [`../src/components/ui/`](../src/components/ui/) and are re-exported from [`../src/index.ts`](../src/index.ts).

## Core primitives

| Component | Notes |
| --- | --- |
| `Button`, `buttonVariants` | Presets + token strings; `asChild`, `loading` |
| `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`, `cardVariants` | Glass and solid surfaces |
| `Badge`, `badgeVariants` | Status chips |
| `BackgroundPattern`, `backgroundPatternVariants` | Decorative backgrounds |

## Forms

| Component | Notes |
| --- | --- |
| `Input`, `Textarea`, `Label` | Text fields |
| `Checkbox`, `Switch` | Radix toggles |
| `Select`, `SelectTrigger`, `SelectContent`, `SelectItem`, `SelectValue`, … | Radix select |

## Overlays and navigation

| Component | Notes |
| --- | --- |
| `Dialog`, `DialogTrigger`, `DialogContent`, … | Modal |
| `Popover`, `PopoverTrigger`, `PopoverContent` | Anchored panel |
| `Tooltip`, `TooltipProvider`, `TooltipTrigger`, `TooltipContent` | Hover hint |
| `DropdownMenu`, `DropdownMenuTrigger`, `DropdownMenuContent`, … | Context menu |
| `Tabs`, `TabsList`, `TabsTrigger`, `TabsContent` | Tabbed panels |
| `Accordion`, `AccordionItem`, `AccordionTrigger`, `AccordionContent` | Collapsible sections |

## Display

| Component | Notes |
| --- | --- |
| `Alert`, `AlertTitle`, `AlertDescription` | Inline messages |
| `Avatar`, `AvatarImage`, `AvatarFallback` | User avatar |
| `Progress` | Determinate bar |
| `Separator` | Horizontal or vertical rule |
| `Skeleton` | Loading placeholder |

## Date and time

| Component | Notes |
| --- | --- |
| `Calendar` | Month grid; `selected`, `onSelect`, `weekStartsOn`, `disabled` |
| `DatePicker` | Popover + `Calendar`; `value`, `onChange` |

Calendar math helpers (`buildMonthGrid`, `formatDate`, …) are exported from the package root.

## Layout and docs (app shells)

| Component | Notes |
| --- | --- |
| `Header`, `Footer`, `Sidebar`, `VerticalMenu` | Marketing / app chrome |
| `GitHubFooter` | Repo link + stars badge |
| `ThemeSelect` | Theme picker control |
| `CodeDisplayCard` | Preview + code tabs |
| `MarkdownRenderer` | GFM markdown (optional peers `react-markdown`, `remark-gfm`) |

Narrative docs: [`../docs/components/ui/README.md`](../docs/components/ui/README.md). Playground: [`../playground/`](../playground/).
