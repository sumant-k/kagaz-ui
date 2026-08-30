# Kagaz UI Runbook

## Purpose

`kagaz-ui` is a separate React + TypeScript + Vite design-system/workbench repo.
It uses Storybook, Vitest, React Testing Library, and `clsx`.
It is visually aligned to the portfolio's paper/editorial direction, but it remains an independent library repo.

## Repo Status

- Path: `C:\Users\admin-user\Desktop\DEV\kagaz-ui`
- Git branch: `main`
- Remote: `https://github.com/sumant-k/kagaz-ui`
- First integration tag already exists: `v0.1.0`
- Current notable commits:
  - `ae6bf1e feat: initialize kagaz ui workbench`
  - `dddae75 chore: prepare package for git installs`
  - `e59f0f0 feat: add shared heading line height token`
  - `dd8df99 feat: support link buttons`

## Package / Git Install Setup

The library is currently consumed from GitHub as a git dependency, not from npm.

Important package decisions:

- `package.json` includes `prepare: npm run build:lib`
- `dist/` is generated, not committed
- `exports` point to built `dist` files
- `files` includes `dist`
- `react` and `react-dom` are peer dependencies
- `react` and `react-dom` are also present in dev dependencies for local development and `prepare`
- `clsx` remains a runtime dependency

## Theme System

### Scope and ownership

- The theme is scoped through `ThemeProvider`
- `ThemeProvider` imports the library stylesheet and applies all theme variables to `.kz-theme-root`
- The root export does not force global styling outside the provider subtree
- Overlay components should render into the provider-owned portal host, not raw `document.body`

### Current theme token shape

Shared theme:

- `shared.baseFontSize`
- `shared.lineHeight`
- `shared.radius`
- `shared.typography.fontSerif`
- `shared.typography.fontSans`
- `shared.typography.body`
- `shared.typography.small`
- `shared.typography.label`
- `shared.typography.headings.common`
- `shared.typography.headings.h1` to `h6`
- `shared.spacing`
- `shared.motion`

Mode theme:

- `light.color`
- `dark.color`

### Important theme decisions

- Default `shared.baseFontSize` is `16px`
- Default global `shared.lineHeight` is `1.7`
- Headings now have their own shared rhythm token:
  - `shared.typography.headings.common.lineHeight`
- Default heading line-height is `1`
- Heading-bearing library surfaces use the heading line-height token instead of the body line-height token

This means:

- labels, body text, helper text, chips, and similar content still use `shared.lineHeight`
- headings, article titles, page headers, drawer titles, detail pane titles, and similar heading surfaces use `headings.common.lineHeight`

## Current Defaults

From `src/tokens/theme.ts`:

- `shared.baseFontSize: 16px`
- `shared.lineHeight: 1.7`
- `shared.radius: 2px`
- `shared.typography.body.fontSize: 0.9rem`
- `shared.typography.small.fontSize: 0.8125rem`
- `shared.typography.label.fontSize: 0.9rem`
- `shared.typography.headings.common.lineHeight: 1`

Heading scale:

- `h1: clamp(2.25rem, 4.8vw, 3.375rem)`
- `h2: clamp(1.875rem, 4vw, 2.625rem)`
- `h3: 1.75rem`
- `h4: 1.375rem`
- `h5: 1.125rem`
- `h6: 0.9375rem`

Spacing scale:

- `space1: 0.5rem`
- `space2: 0.75rem`
- `space3: 1rem`
- `space4: 1.25rem`
- `space5: 1.5rem`
- `space6: 2rem`
- `space7: 3rem`

## Storybook

- Stories are wrapped with `ThemeProvider` in `.storybook/preview.ts`
- Toolbar controls:
  - `themeMode`: `light` / `dark`
  - `themePreset`: `default`, `compact`, `roomy`, `contrast`
- Theme presets live in `.storybook/themePresets.ts`
- The dedicated playground is `src/theme/ThemeProvider.stories.tsx`

Important Storybook behavior:

- Kagaz styles are scoped to `.kz-theme-root`
- Storybook manager `body` styles are Storybook shell styles, not Kagaz styles
- To inspect Kagaz styling, inspect the preview iframe and the `.kz-theme-root` inside it

Known non-blocker:

- `npm run build-storybook` succeeds but still emits a large chunk-size warning

## Current Components / Patterns Added Or Refined

### Chips

- `Chips` exists and is stable
- `.kz-chip` correctly uses `var(--kz-border)`
- visual direction is square/editorial, not pill-like

### Article

- `Article` is the renamed and stabilized version of the older card-like pattern
- internal CSS uses `kz-article*`
- it is already being used in the portfolio for featured and side project cards

### Button

`Button` now supports both button and anchor rendering:

- button mode: regular `button`
- link mode: pass `href` and it renders an anchor with button styling

This was added specifically to let portfolio CTA actions move onto a real library primitive instead of custom anchor classes.

## Current Source Of Truth

Theme and provider:

- `src/tokens/theme.ts`
- `src/theme/ThemeProvider.tsx`
- `src/theme/themeContext.ts`

Scoped styles:

- `src/styles/index.css`

Component / pattern files heavily involved in this work:

- `src/components/Button.tsx`
- `src/components/Chips.tsx`
- `src/patterns/Article.tsx`

Storybook:

- `.storybook/preview.ts`
- `.storybook/themePresets.ts`
- `src/theme/ThemeProvider.stories.tsx`

## Verification Runbook

Run from `C:\Users\admin-user\Desktop\DEV\kagaz-ui`:

```powershell
npm run lint
npm test
npm run build
npm run build-storybook
npm pack --dry-run
```

Expected status:

- `lint` passes
- `test` passes
- `build` passes
- `build-storybook` passes with the known chunk-size warning
- `npm pack --dry-run` shows a healthy package payload

## Portfolio Integration Status

The portfolio repo already consumes this library from GitHub.

Current integration facts:

- portfolio repo path: `C:\Users\admin-user\Desktop\DEV\ai-portfolio-playground`
- portfolio branch: `feat/kagaz-ui-implementation`
- the portfolio currently points to a specific Kagaz git commit, not the old tag
- `ThemeProvider` is already adopted there
- featured project cards use `Article`
- side project cards use `Article`
- CTA actions now use library `Button`
- the portfolio defines its own theme override object and passes it into `ThemeProvider`

## Guardrails

- Keep theme styling scoped unless there is an explicit product decision to add a separate global baseline component
- If Storybook looks unthemed, first check whether you are inspecting Storybook manager UI instead of the themed preview subtree
- If `shared.baseFontSize` changes again, decide explicitly whether visual sizes should stay stable
- If the answer is yes, recalibrate authored `rem` values consistently across:
  - `src/tokens/theme.ts`
  - `.storybook/themePresets.ts`
  - `src/theme/ThemeProvider.stories.tsx`
  - `src/styles/index.css`
- Do not casually remove the heading common line-height token; the portfolio now depends on distinct heading rhythm

## Best Next Steps

- Replace more portfolio case-study surfaces with library patterns
- Consider introducing a small editorial meta/info panel pattern for hero sidebars and definition-list content
- Continue reducing hardcoded values in `src/styles/index.css` where a token should clearly own the decision
- If npm publishing is needed later, decide separately from the current git-dependency workflow
