import type { KagazThemeOverride } from '../src'

export const storybookThemePresets: Record<string, KagazThemeOverride | undefined> = {
  default: undefined,
  compact: {
    shared: {
      baseFontSize: '16px',
      radius: '1px',
      typography: {
        body: {
          fontSize: '0.9rem',
        },
        headings: {
          h1: {
            fontSize: '1.75rem',
          },
          h2: {
            fontSize: '1.5rem',
          },
          h3: {
            fontSize: '1.25rem',
          },
        },
      },
      spacing: {
        space4: '1rem',
        space5: '1.25rem',
        space6: '1.5rem',
        space7: '2rem',
      },
    },
  },
  roomy: {
    shared: {
      baseFontSize: '16px',
      radius: '4px',
      typography: {
        body: {
          fontSize: '0.9rem',
        },
        headings: {
          h1: {
            fontSize: '3rem',
          },
          h2: {
            fontSize: '2.375rem',
          },
          h3: {
            fontSize: '2rem',
          },
        },
      },
      spacing: {
        space4: '1.5rem',
        space5: '2rem',
        space6: '2.5rem',
        space7: '3.5rem',
      },
    },
  },
  contrast: {
    light: {
      color: {
        bg: '#fff8e3',
        panelBg: 'rgba(255, 252, 244, 0.82)',
        panelStrong: '#fffdf6',
        ink: '#1f1414',
      },
    },
    dark: {
      color: {
        bg: '#0b0d0f',
        panelBg: 'rgba(18, 23, 26, 0.84)',
        panelStrong: '#171b1d',
        ink: '#fff4e3',
      },
    },
  },
}
