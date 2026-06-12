import { useEffect, useState } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'

const STORAGE_KEY = 'portfolio-theme'

export default function ThemeToggle({ className = '' }) {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const initial = stored || (prefersDark ? 'dark' : 'light')
    setTheme(initial)
    document.documentElement.setAttribute('data-theme', initial)
  }, [])

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
    localStorage.setItem(STORAGE_KEY, next)
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className={`theme-toggle ${className}`.trim()}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {theme === 'dark' ? <FiSun className="w-4 h-4" /> : <FiMoon className="w-4 h-4" />}
    </button>
  )
}
