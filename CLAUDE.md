# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Project

Carideal UI — a mobile-first visual prototype (Next.js App Router, React, TypeScript) for a used-car marketplace ("seminuevos", powered by Nissan). This repo is for mocking up responsive screens; functional integration (real data, auth, payments) happens later. Copy and content are in Spanish (es-AR).

## Commands

```bash
npm run dev        # local dev server (Turbopack)
npm run lint        # eslint
npm run typecheck   # tsc --noEmit
npm run check        # lint + typecheck
npm run build        # production build
npm run start         # serve the production build
```

There is no test runner configured in this repo.

## Architecture

- `src/app/` — one route per screen (`app/<route>/page.tsx`), each typically paired with a `page.module.css`. Screens are mock/static — data is hardcoded inline in the page component (e.g. `src/app/car-list/page.tsx`), not fetched. `src/data/` exists for future mock data but is currently unused.
- `src/components/layout/NavigationShell.tsx` wraps every page from the root layout and decides chrome: routes in its `headerlessRoutes` set (`/`, `/initial-screen`) render full-bleed with no header; every other route gets `AppHeader` plus a scrollable content area. When adding a route that shouldn't show the standard header, add it to `headerlessRoutes`.
- `src/components/layout/PlaceholderScreen.tsx` + `ScreenIntro.tsx` is the pattern for not-yet-built screens (e.g. `favorites`, `credit-simulator`): a title/subtitle inside the shared `screen-layout.module.css` page/content grid. Use this for new stub screens instead of building bespoke layout.
- `src/components/` is organized by role, not by screen: `layout/` (shell/page scaffolding), `navigation/` (header, pagination dots), `forms/` (field controls), `filters/`, `ui/` (cards, panels), `icons/` (local inline SVG components — icons are not pulled from an icon font/library), `branding/`.
- `src/config/site.ts` is the single source for site metadata (`siteConfig`) and absolute URL building (`getAbsoluteUrl`), consumed by `layout.tsx`, `sitemap.ts`, `robots.ts`, and structured data (JSON-LD) in the root layout. Set `NEXT_PUBLIC_SITE_URL` to control the domain used for canonicals/sitemap/social metadata in production; it defaults to `http://localhost:3000`.
- Per-page `metadata.robots` follows a deliberate split: only fully-built, public-facing screens (currently `initial-screen`, `create-account`) are indexable; every placeholder or in-progress screen sets `robots: { index: false, follow: true }`. Match this when adding a new route — don't index it until it's real. `src/app/sitemap.ts` similarly only lists screens meant to be indexed; add new indexable routes there too.
- Styling: no CSS framework. Global tokens (colors, font, spacing) live in `src/app/globals.css` as CSS custom properties (`--color-*`, `--font-sans`, `--page-gutter`, etc.); screen- and component-specific styles are co-located CSS Modules (`*.module.css`). Reuse existing tokens/variables rather than hardcoding new colors or spacing.
- Path alias `@/*` maps to `src/*` (see `tsconfig.json`).
