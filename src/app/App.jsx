import { About, Contact, Hero, Projects, Skills } from '@/components'
import { MainLayout } from '@/layouts'

function App() {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </MainLayout>
  )
}

export default App
