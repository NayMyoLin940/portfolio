import { FiMoon, FiSun } from 'react-icons/fi'
import { useTheme } from '@/hooks'

function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <button
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={isDark}
      className="focus-ring interactive grid size-10 place-items-center rounded-md border border-border bg-surface text-foreground hover:border-brand-300 hover:text-accent"
      onClick={toggleTheme}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      type="button"
    >
      {isDark ? (
        <FiSun aria-hidden="true" className="text-lg" />
      ) : (
        <FiMoon aria-hidden="true" className="text-lg" />
      )}
    </button>
  )
}

export default ThemeToggle
