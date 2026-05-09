# Kagaz UI Runbook

## Purpose

`kagaz-ui` is a separate React + TypeScript + Vite design-system/workbench repo with Storybook and Vitest.
It is visually aligned to the portfolio's paper/editorial direction, but it is not the portfolio repo and should be worked on independently.

## What We Changed

### Theme system

- The theme is scoped through `ThemeProvider`.
- `ThemeProvider` imports the library stylesheet and applies all theme variables to `.kz-theme-root`.
- The root export does not force a global app-wide stylesheet outside the provider subtree.
- Overlay components are expected to render into the provider-owned portal host, not raw `document.body`.
- Theme line-height is now a single global token: `shared.lineHeight`.
- Heading, body, label, and small text now inherit that global line-height through `--kz-line-height`.

### Theme token shape

Current shared theme shape:

- `shared.baseFontSize`
- `shared.lineHeight`
- `shared.radius`
- `shared.typography.fontSerif`
- `shared.typography.fontSans`
- `shared.typography.body`
- `shared.typography.small`
- `shared.typography.label`
- `shared.typography.headings.h1` to `h6`
- `shared.spacing`
- `shared.motion`

Current mode theme shape:

- `light.color`
- `dark.color`

Important cleanup already done:

- Removed the old nested `shared.typography.baseFontSize`.
- Removed per-variant `lineHeight` fields from body, small, label, and headings.
- Storybook sample theme data was updated to match the current theme contract.
- Invalid sample-only theme keys like `accent` were removed.

### Current base sizing decision

- `shared.baseFontSize` is now `16px` in the default theme.
- The library had many `rem` values authored when the working assumption was effectively `1rem = 10px`.
- Those authored `rem` values were recalibrated so the rendered visual sizes stay close to the prior look after moving the base size to `16px`.
- Example:
  - old label size: `1rem` at `10px` base
  - new label size: `0.9rem` at `16px` base

### Storybook integration

- Storybook wraps stories with `ThemeProvider` in `.storybook/preview.ts`.
- Storybook global toolbar controls exist for:
  - `themeMode`: `light` / `dark`
  - `themePreset`: `default`, `compact`, `roomy`, `contrast`
- Theme presets live in `.storybook/themePresets.ts`.
- The dedicated theme playground story lives in `src/theme/ThemeProvider.stories.tsx`.

Important Storybook behavior:

- Kagaz theme styles are scoped to `.kz-theme-root`.
- Inspecting Storybook's outer `body` will show Storybook's own shell styles, not Kagaz theme styles.
- To inspect Kagaz styles, inspect the preview iframe content and the `.kz-theme-root` element inside a story.

### Component work covered in this session chain

- Added and stabilized `Chips`.
- Renamed the old card-like pattern into `Article`.
- `Article` styling now uses `kz-article*` class names.
- Fixed the chip border token bug so `.kz-chip` uses `var(--kz-border)`.
- Pushed more editorial UI styles onto theme tokens instead of hardcoded one-off values.

## Current Source Of Truth

### Theme and provider

- `src/tokens/theme.ts`
- `src/theme/ThemeProvider.tsx`
- `src/theme/themeContext.ts`

### Main scoped styles

- `src/styles/index.css`

### Storybook

- `.storybook/preview.ts`
- `.storybook/themePresets.ts`
- `src/theme/ThemeProvider.stories.tsx`

## Current Theme Defaults

From `src/tokens/theme.ts`:

- `shared.baseFontSize: 16px`
- `shared.lineHeight: 1.7`
- `shared.radius: 2px`
- `shared.typography.body.fontSize: 0.9rem`
- `shared.typography.small.fontSize: 0.8125rem`
- `shared.typography.label.fontSize: 0.9rem`

Current heading scale:

- `h1: clamp(2.25rem, 4.8vw, 3.375rem)`
- `h2: clamp(1.875rem, 4vw, 2.625rem)`
- `h3: 1.75rem`
- `h4: 1.375rem`
- `h5: 1.125rem`
- `h6: 0.9375rem`

Current spacing scale:

- `space1: 0.5rem`
- `space2: 0.75rem`
- `space3: 1rem`
- `space4: 1.25rem`
- `space5: 1.5rem`
- `space6: 2rem`
- `space7: 3rem`

## Verification Runbook

Run from `C:\Users\admin-user\Desktop\DEV\kagaz-ui`:

```powershell
npm run lint
npm test
npm run build
npm run build-storybook
```

Expected status:

- `lint` passes
- `test` passes
- `build` passes
- `build-storybook` passes

Known non-blocker:

- Storybook build still emits a large chunk-size warning, but the build succeeds.

## Known Notes And Guardrails

- `kagaz-ui` is not a git repo yet.
- Do not do this work in the portfolio repo.
- Keep theme styling scoped unless there is an explicit product decision to add a separate global baseline component.
- If Storybook looks unthemed at the app-shell level, check whether you are inspecting Storybook manager UI instead of the themed preview subtree.
- If you change `shared.baseFontSize` again, you must decide whether to keep the visual sizes stable. If yes, authored `rem` values need to be recalibrated consistently across:
  - `src/tokens/theme.ts`
  - `.storybook/themePresets.ts`
  - `src/theme/ThemeProvider.stories.tsx`
  - `src/styles/index.css`

## Best Next Steps

- Continue visual cleanup for closer portfolio parity, especially in `Article` and other editorial surfaces.
- Reduce remaining hardcoded values in `src/styles/index.css` where a token should clearly own the decision.
- If needed later, introduce a separate baseline component for global page resets instead of overloading `ThemeProvider`.
