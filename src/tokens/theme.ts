export type KagazThemeMode = 'light' | 'dark'

export type KagazSharedTheme = {
  baseFontSize: string
  lineHeight: string
  radius: string
  typography: {
    fontSerif: string
    fontSans: string
    body: {
      fontSize: string
      fontWeight: string
    }
    small: {
      fontSize: string
      fontWeight: string
    }
    label: {
      fontSize: string
      fontWeight: string
      letterSpacing: string
      textTransform: string
    }
    headings: {
      common: {
        lineHeight: string
      }
      h1: HeadingTypographyStyle
      h2: HeadingTypographyStyle
      h3: HeadingTypographyStyle
      h4: HeadingTypographyStyle
      h5: HeadingTypographyStyle
      h6: HeadingTypographyStyle
    }
  }
  spacing: {
    space1: string
    space2: string
    space3: string
    space4: string
    space5: string
    space6: string
    space7: string
  }
  motion: {
    quick: string
    standard: string
  }
}

export type TypographyStyle = {
  fontSize: string
  fontWeight: string
}

export type HeadingTypographyStyle = TypographyStyle & {
  letterSpacing: string
}

export type KagazModeTheme = {
  color: {
    bg: string
    ink: string
    inkMuted: string
    border: string
    panelBg: string
    panelStrong: string
    headerBg: string
    headerFg: string
    headerSoft: string
    headerLine: string
    cardHover: string
    washA: string
    washB: string
    shadowSoft: string
    shadowHard: string
    success: string
    warning: string
    critical: string
  }
}

export type KagazTheme = {
  shared: KagazSharedTheme
  light: KagazModeTheme
  dark: KagazModeTheme
}

type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K]
}

export type KagazThemeOverride = DeepPartial<KagazTheme>

export const defaultTheme: KagazTheme = {
  shared: {
    baseFontSize: '16px',
    lineHeight: '1.7',
    radius: '2px',
    typography: {
      fontSerif: "'Crimson Pro', Georgia, serif",
      fontSans: 'system-ui, -apple-system, sans-serif',
      body: {
        fontSize: '0.9rem',
        fontWeight: '400',
      },
      small: {
        fontSize: '0.8125rem',
        fontWeight: '400',
      },
      label: {
        fontSize: '0.9rem',
        fontWeight: '600',
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
      },
      headings: {
        common: {
          lineHeight: '1',
        },
        h1: {
          fontSize: 'clamp(2.25rem, 4.8vw, 3.375rem)',
          fontWeight: '600',
          letterSpacing: '-0.03em',
        },
        h2: {
          fontSize: 'clamp(1.875rem, 4vw, 2.625rem)',
          fontWeight: '600',
          letterSpacing: '-0.03em',
        },
        h3: {
          fontSize: '1.75rem',
          fontWeight: '600',
          letterSpacing: '-0.02em',
        },
        h4: {
          fontSize: '1.375rem',
          fontWeight: '600',
          letterSpacing: '-0.02em',
        },
        h5: {
          fontSize: '1.125rem',
          fontWeight: '600',
          letterSpacing: '-0.01em',
        },
        h6: {
          fontSize: '0.9375rem',
          fontWeight: '600',
          letterSpacing: '0',
        },
      },
    },
    spacing: {
      space1: '0.5rem',
      space2: '0.75rem',
      space3: '1rem',
      space4: '1.25rem',
      space5: '1.5rem',
      space6: '2rem',
      space7: '3rem',
    },
    motion: {
      quick: '150ms ease',
      standard: '220ms ease',
    },
  },
  light: {
    color: {
      bg: '#fff4ce',
      ink: '#312323',
      inkMuted: '#574040',
      border: 'rgba(49, 35, 35, 0.18)',
      panelBg: 'rgba(255, 248, 224, 0.8)',
      panelStrong: 'rgba(255, 250, 234, 0.92)',
      headerBg: '#312323',
      headerFg: '#fff4ce',
      headerSoft: 'rgba(255, 244, 206, 0.16)',
      headerLine: 'rgba(255, 244, 206, 0.24)',
      cardHover: 'rgba(49, 35, 35, 0.04)',
      washA: 'rgba(188, 130, 61, 0.14)',
      washB: 'rgba(49, 35, 35, 0.08)',
      shadowSoft: 'rgba(49, 35, 35, 0.08)',
      shadowHard: 'rgba(49, 35, 35, 0.16)',
      success: '#42634b',
      warning: '#7b5b2e',
      critical: '#82453c',
    },
  },
  dark: {
    color: {
      bg: '#111315',
      ink: '#f2eadb',
      inkMuted: '#cbbfae',
      border: 'rgba(242, 234, 219, 0.18)',
      panelBg: 'rgba(24, 27, 29, 0.82)',
      panelStrong: 'rgba(29, 33, 35, 0.92)',
      headerBg: '#181b1d',
      headerFg: '#f2eadb',
      headerSoft: 'rgba(242, 234, 219, 0.12)',
      headerLine: 'rgba(242, 234, 219, 0.24)',
      cardHover: 'rgba(242, 234, 219, 0.05)',
      washA: 'rgba(181, 133, 81, 0.12)',
      washB: 'rgba(242, 234, 219, 0.04)',
      shadowSoft: 'rgba(0, 0, 0, 0.28)',
      shadowHard: 'rgba(0, 0, 0, 0.38)',
      success: '#90b59b',
      warning: '#d3b06d',
      critical: '#d29d92',
    },
  },
}

export const themeTokens = defaultTheme

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function mergeValue<T>(base: T, override: DeepPartial<T> | undefined): T {
  if (override === undefined) {
    return base
  }

  if (!isRecord(base) || !isRecord(override)) {
    return override as T
  }

  const result: Record<string, unknown> = { ...base }

  const overrideRecord = override as Record<string, unknown>

  for (const key of Object.keys(overrideRecord)) {
    const overrideValue = overrideRecord[key]
    const baseValue = result[key]
    result[key] = mergeValue(baseValue, overrideValue as never)
  }

  return result as T
}

export function resolveTheme(theme?: KagazThemeOverride) {
  return mergeValue(defaultTheme, theme)
}
