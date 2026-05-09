import { createContext, useContext } from 'react'

type ThemeContextValue = {
  portalHost: HTMLElement | null
}

export const ThemeContext = createContext<ThemeContextValue>({
  portalHost: null,
})

export function useThemePortalHost() {
  return useContext(ThemeContext).portalHost
}
