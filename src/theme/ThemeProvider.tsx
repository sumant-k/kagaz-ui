import clsx from 'clsx'
import { useMemo, useState, type CSSProperties, type ReactNode } from 'react'
import '../styles/index.css'
import { resolveTheme, type KagazTheme, type KagazThemeMode, type KagazThemeOverride } from '../tokens/theme'
import { ThemeContext } from './themeContext'

export type ThemeProviderProps = {
  children: ReactNode
  mode?: KagazThemeMode
  theme?: KagazThemeOverride
  className?: string
}

function themeToStyle(theme: KagazTheme, mode: KagazThemeMode): CSSProperties {
  const colors = theme[mode].color

  return {
    '--kz-bg': colors.bg,
    '--kz-ink': colors.ink,
    '--kz-ink-muted': colors.inkMuted,
    '--kz-border': colors.border,
    '--kz-panel-bg': colors.panelBg,
    '--kz-panel-strong': colors.panelStrong,
    '--kz-header-bg': colors.headerBg,
    '--kz-header-fg': colors.headerFg,
    '--kz-header-soft': colors.headerSoft,
    '--kz-header-line': colors.headerLine,
    '--kz-card-hover': colors.cardHover,
    '--kz-wash-a': colors.washA,
    '--kz-wash-b': colors.washB,
    '--kz-shadow-soft': colors.shadowSoft,
    '--kz-shadow-hard': colors.shadowHard,
    '--kz-success': colors.success,
    '--kz-warning': colors.warning,
    '--kz-critical': colors.critical,
    '--kz-font-serif': theme.shared.typography.fontSerif,
    '--kz-font-sans': theme.shared.typography.fontSans,
    '--kz-font-size-base': theme.shared.baseFontSize,
    '--kz-line-height': theme.shared.lineHeight,
    '--kz-radius': theme.shared.radius,
    '--kz-type-body-size': theme.shared.typography.body.fontSize,
    '--kz-type-body-weight': theme.shared.typography.body.fontWeight,
    '--kz-type-small-size': theme.shared.typography.small.fontSize,
    '--kz-type-small-weight': theme.shared.typography.small.fontWeight,
    '--kz-type-label-size': theme.shared.typography.label.fontSize,
    '--kz-type-label-weight': theme.shared.typography.label.fontWeight,
    '--kz-type-label-spacing': theme.shared.typography.label.letterSpacing,
    '--kz-type-label-transform': theme.shared.typography.label.textTransform,
    '--kz-type-h1-size': theme.shared.typography.headings.h1.fontSize,
    '--kz-type-h1-weight': theme.shared.typography.headings.h1.fontWeight,
    '--kz-type-h1-spacing': theme.shared.typography.headings.h1.letterSpacing,
    '--kz-type-h2-size': theme.shared.typography.headings.h2.fontSize,
    '--kz-type-h2-weight': theme.shared.typography.headings.h2.fontWeight,
    '--kz-type-h2-spacing': theme.shared.typography.headings.h2.letterSpacing,
    '--kz-type-h3-size': theme.shared.typography.headings.h3.fontSize,
    '--kz-type-h3-weight': theme.shared.typography.headings.h3.fontWeight,
    '--kz-type-h3-spacing': theme.shared.typography.headings.h3.letterSpacing,
    '--kz-type-h4-size': theme.shared.typography.headings.h4.fontSize,
    '--kz-type-h4-weight': theme.shared.typography.headings.h4.fontWeight,
    '--kz-type-h4-spacing': theme.shared.typography.headings.h4.letterSpacing,
    '--kz-type-h5-size': theme.shared.typography.headings.h5.fontSize,
    '--kz-type-h5-weight': theme.shared.typography.headings.h5.fontWeight,
    '--kz-type-h5-spacing': theme.shared.typography.headings.h5.letterSpacing,
    '--kz-type-h6-size': theme.shared.typography.headings.h6.fontSize,
    '--kz-type-h6-weight': theme.shared.typography.headings.h6.fontWeight,
    '--kz-type-h6-spacing': theme.shared.typography.headings.h6.letterSpacing,
    '--kz-space-1': theme.shared.spacing.space1,
    '--kz-space-2': theme.shared.spacing.space2,
    '--kz-space-3': theme.shared.spacing.space3,
    '--kz-space-4': theme.shared.spacing.space4,
    '--kz-space-5': theme.shared.spacing.space5,
    '--kz-space-6': theme.shared.spacing.space6,
    '--kz-space-7': theme.shared.spacing.space7,
    '--kz-motion-quick': theme.shared.motion.quick,
    '--kz-motion-standard': theme.shared.motion.standard,
  } as CSSProperties
}

export function ThemeProvider({
  children,
  mode = 'light',
  theme,
  className,
}: ThemeProviderProps) {
  const [portalHost, setPortalHost] = useState<HTMLElement | null>(null)
  const resolvedTheme = useMemo(() => resolveTheme(theme), [theme])
  const style = useMemo(() => themeToStyle(resolvedTheme, mode), [mode, resolvedTheme])

  return (
    <ThemeContext.Provider value={{ portalHost }}>
      <div className={clsx('kz-theme-root', className)} data-kz-theme-mode={mode} style={style}>
        {children}
        <div className="kz-theme-root__portal-host" ref={setPortalHost} />
      </div>
    </ThemeContext.Provider>
  )
}
