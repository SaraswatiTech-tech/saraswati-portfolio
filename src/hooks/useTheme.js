import { useCallback, useEffect, useState } from 'react'

export const THEME_STORAGE_KEY = 'portfolio-theme'

export function getStoredTheme() {
  if (typeof window === 'undefined') return null
  try {
    return localStorage.getItem(THEME_STORAGE_KEY)
  } catch {
    return null
  }
}

export function getSystemTheme() {
  if (typeof window === 'undefined') return 'dark'
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function resolveTheme(stored) {
  return stored === 'light' || stored === 'dark' ? stored : getSystemTheme()
}

export function getTheme() {
  if (typeof document === 'undefined') return 'dark'
  return document.documentElement.getAttribute('data-theme') || resolveTheme(getStoredTheme())
}

export function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme)
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme)
  } catch {
    // ignore storage failures (private browsing, etc.)
  }
}

export function useTheme() {
  const [theme, setThemeState] = useState(() => getTheme())

  useEffect(() => {
    setThemeState(getTheme())
  }, [])

  const setTheme = useCallback((next) => {
    setThemeState(next)
    applyTheme(next)
  }, [])

  const toggle = useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }, [theme, setTheme])

  return { theme, setTheme, toggle }
}
