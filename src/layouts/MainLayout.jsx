import Footer from '@/components/common/Footer.jsx'
import Navbar from '@/components/common/Navbar.jsx'

function MainLayout({ children }) {
  return (
    <div id="top" className="flex min-h-svh flex-col bg-background text-foreground">
      <a
        className="focus-ring fixed top-3 left-3 z-[60] -translate-y-20 rounded-md bg-foreground px-4 py-2 text-body-sm font-semibold text-background transition-transform focus:translate-y-0"
        href="#main-content"
      >
        Skip to content
      </a>

      <Navbar />

      <main
        id="main-content"
        className="min-h-[calc(100svh-4rem)] flex-1"
        tabIndex="-1"
      >
        {children}
      </main>

      <Footer />
    </div>
  )
}

export default MainLayout
