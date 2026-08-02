import { useEffect, useMemo, useState } from 'react'
import { ThemeContext } from './theme-context.js'

function getInitialTheme() {
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light'
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    const root = document.documentElement
    const themeColor = document.querySelector('meta[name="theme-color"]')

    root.dataset.theme = theme
    root.style.colorScheme = theme
    themeColor?.setAttribute('content', theme === 'dark' ? '#0b1120' : '#ffffff')

    try {
      localStorage.setItem('portfolio-theme', theme)
    } catch {
      // Theme persistence is optional when storage is unavailable.
    }
  }, [theme])

  const value = useMemo(
    () => ({
      isDark: theme === 'dark',
      setTheme,
      theme,
      toggleTheme: () => setTheme((current) => (current === 'dark' ? 'light' : 'dark')),
    }),
    [theme],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
