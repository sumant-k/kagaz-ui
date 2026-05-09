# Kagaz UI

Kagaz UI is a paper-inspired design system lab for internal tools and dashboard interfaces.

This repo is intentionally built as public proof of:

- system thinking for product UI
- reusable component design
- accessible interaction patterns
- product-shaped composition beyond isolated primitives

## Stack

- React
- TypeScript
- Vite
- Storybook
- Vitest
- React Testing Library
- CSS variables + scoped class naming

## Repository Shape

- `src/tokens` foundation tokens and theme definitions
- `src/components` primitives
- `src/patterns` reusable dashboard-oriented compositions
- `src/demo` a realistic operations workflow using shared components
- `src/styles` global design-system styling
- `.storybook` documentation and story rendering config

## Scripts

- `npm run dev` runs the demo app
- `npm run storybook` runs Storybook
- `npm run test` runs component tests
- `npm run build` builds the library output and demo app
- `npm run build-storybook` builds the docs site
- `npm run preview` previews the built demo app from `demo-dist`

## Packaging

The repo is package-ready from day one:

- flat root exports
- generated type declarations
- library build output in `dist`
- demo app output in `demo-dist`
- CSS export path via `styles.css`

Publishing is not the primary goal of v1. The first goal is to make the API, docs, and system quality strong enough to deserve publishing.
