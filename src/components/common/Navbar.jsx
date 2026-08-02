import { NAV_LINKS } from '@/constants'
import { useScrolled } from '@/hooks'

function Navbar() {
  const isScrolled = useScrolled()

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-300 ease-standard ${
        isScrolled
          ? 'border-border/80 bg-background/80 shadow-soft backdrop-blur-xl'
          : 'border-transparent bg-background'
      }`}
    >
      <nav
        aria-label="Primary navigation"
        className="page-container flex h-16 items-center justify-between sm:h-18"
      >
        <a
          className="focus-ring interactive rounded-sm font-display text-sm font-bold tracking-[-0.02em] text-foreground hover:text-accent sm:text-base"
          href="#top"
        >
          Portfolio
        </a>

        <ul className="flex items-center gap-4 sm:gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                className="focus-ring interactive rounded-sm text-xs font-medium text-muted hover:text-foreground sm:text-sm"
                href={link.href}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
