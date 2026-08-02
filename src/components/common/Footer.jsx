import { NAV_LINKS } from '@/constants'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="footer" className="border-t border-border bg-surface">
      <div className="page-container flex flex-col gap-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-body-sm text-muted">
          © {currentYear} Portfolio. All rights reserved.
        </p>

        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  className="focus-ring interactive rounded-sm text-body-sm text-muted hover:text-foreground"
                  href={link.href}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                className="focus-ring interactive rounded-sm text-body-sm font-medium text-foreground hover:text-accent"
                href="#top"
              >
                Back to top
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
