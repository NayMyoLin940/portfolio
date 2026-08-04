import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import ThemeToggle from '@/components/ui/ThemeToggle.jsx'
import { MOTION_EASE, NAV_LINKS } from '@/constants'
import { useScrolled } from '@/hooks'

function Navbar() {
  const isScrolled = useScrolled()
  const shouldReduceMotion = useReducedMotion()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (!isMenuOpen) return undefined

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-300 ease-standard ${
        isScrolled || isMenuOpen
          ? 'border-border/80 bg-background/80 shadow-soft backdrop-blur-xl'
          : 'border-transparent bg-background'
      }`}
    >
      <nav
        aria-label="Primary navigation"
        className="page-container flex h-16 items-center justify-between sm:h-18"
      >
        <a
          className="focus-ring interactive rounded-sm font-display text-lg font-bold tracking-[-0.03em] text-foreground hover:text-accent sm:text-xl"
          href="#top"
          onClick={closeMenu}
        >
          Nay Myo Lin
        </a>

        <div className="flex items-center gap-2 sm:gap-4">
          <ul className="hidden items-center gap-5 sm:flex lg:gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  className="focus-ring interactive rounded-sm text-sm font-medium text-muted hover:text-foreground"
                  href={link.href}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <ThemeToggle />

          <button
            aria-controls="mobile-navigation"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="focus-ring interactive grid size-10 place-items-center rounded-md border border-border bg-surface text-foreground hover:border-brand-300 hover:text-accent sm:hidden"
            onClick={() => setIsMenuOpen((current) => !current)}
            type="button"
          >
            {isMenuOpen ? (
              <FiX aria-hidden="true" className="text-xl" />
            ) : (
              <FiMenu aria-hidden="true" className="text-xl" />
            )}
          </button>
        </div>
      </nav>

      <AnimatePresence initial={false}>
        {isMenuOpen ? (
          <motion.div
            animate={{ height: 'auto', opacity: 1 }}
            className="overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl sm:hidden"
            exit={{ height: 0, opacity: 0 }}
            id="mobile-navigation"
            initial={shouldReduceMotion ? false : { height: 0, opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.25, ease: MOTION_EASE }}
          >
            <ul className="page-container grid gap-1 py-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    className="focus-ring interactive block rounded-md px-3 py-3 text-sm font-semibold text-muted hover:bg-surface hover:text-foreground"
                    href={link.href}
                    onClick={closeMenu}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
