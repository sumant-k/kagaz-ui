import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '../components/Button'
import { ThemeProvider, type ThemeProviderProps } from '../index'

const sampleThemeOverride: ThemeProviderProps['theme'] = {
  shared: {
    baseFontSize: '16px',
    lineHeight: '1.7',
    radius: '2px',
    typography: {
      body: {
        fontSize: '0.9rem',
      },
      small: {
        fontSize: '0.5625rem',
      },
      headings: {
        common: {
          lineHeight: '1',
        },
        h1: {
          fontSize: '2.5rem',
        },
        h2: {
          fontSize: '1.75rem',
        },
        h3: {
          fontSize: '1.25rem',
        },
      },
    },
    spacing: {
      space4: '1.125rem',
      space5: '1.5rem',
      space6: '2rem',
    },
  },
  light: {
    color: {
      bg: '#f9f0df',
      panelBg: 'rgba(245, 239, 226, 0.84)',
      panelStrong: '#f5efe2',
      headerBg: '#3a2d29',
    },
  },
  dark: {
    color: {
      bg: '#121416',
      panelBg: 'rgba(23, 27, 29, 0.84)',
      panelStrong: '#171b1d',
      headerBg: '#16191b',
    },
  },
}

function ThemeProviderPreview(args: ThemeProviderProps) {
  return (
    <ThemeProvider {...args}>
      <div
        style={{
          display: 'grid',
          gap: '1rem',
          maxWidth: '45rem',
          padding: '2rem',
        }}
      >
        <div>
          <h1>Heading One</h1>
          <p>
            Paragraph text preview. Adjust the theme object to check base font size,
            body rhythm, line height, and color changes.
          </p>
        </div>

        <div>
          <h2>Heading Two</h2>
          <p>This section helps compare adjacent heading levels.</p>
        </div>

        <div>
          <h3>Heading Three</h3>
          <p>Use this to validate middle-scale typography.</p>
        </div>

        <div>
          <h4>Heading Four</h4>
          <h5>Heading Five</h5>
          <h6>Heading Six</h6>
        </div>

        <div>
          <label htmlFor="theme-preview-input">Label preview</label>
          <input
            id="theme-preview-input"
            placeholder="Input preview"
            style={{ display: 'block', marginTop: '0.5rem', width: '100%' }}
          />
        </div>

        <div>
          <small>Small text preview for captions and supporting details.</small>
        </div>

        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <button type="button">Native button</button>
          <Button>Library button</Button>
        </div>
      </div>
    </ThemeProvider>
  )
}

const meta = {
  title: 'Foundations/Theme Provider',
  component: ThemeProviderPreview,
  parameters: {
    disableThemeDecorator: true,
  },
  args: {
    mode: 'light',
    theme: sampleThemeOverride,
  },
  argTypes: {
    mode: {
      control: 'inline-radio',
      options: ['light', 'dark'],
    },
    theme: {
      control: 'object',
    },
    className: {
      control: 'text',
    },
    children: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof ThemeProviderPreview>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}
