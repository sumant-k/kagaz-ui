import type { Preview } from '@storybook/react-vite'
import { createElement } from 'react'
import { ThemeProvider } from '../src'
import { storybookThemePresets } from './themePresets'

const preview: Preview = {
  globalTypes: {
    themeMode: {
      name: 'Mode',
      description: 'Global Kagaz UI color mode',
      toolbar: {
        icon: 'mirror',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
        ],
        dynamicTitle: true,
      },
    },
    themePreset: {
      name: 'Theme',
      description: 'Global Kagaz UI theme preset',
      toolbar: {
        icon: 'paintbrush',
        items: [
          { value: 'default', title: 'Default' },
          { value: 'compact', title: 'Compact' },
          { value: 'roomy', title: 'Roomy' },
          { value: 'contrast', title: 'Contrast' },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      if (context.parameters.disableThemeDecorator) {
        return createElement(Story)
      }

      const mode = context.globals.themeMode ?? context.parameters.themeMode ?? 'light'
      const presetName = context.globals.themePreset ?? 'default'
      const theme = storybookThemePresets[presetName]

      return createElement(
        ThemeProvider,
        { mode, theme },
        createElement(Story),
      )
    },
  ],
  parameters: {
    layout: 'fullscreen',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo',
    },
    options: {
      storySort: {
        order: ['Foundations', 'Primitives', 'Patterns', 'Demo'],
      },
    },
  },
  initialGlobals: {
    themeMode: 'light',
    themePreset: 'default',
  },
}

export default preview
