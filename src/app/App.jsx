import { About, Hero, Projects, Skills } from '@/components'
import { MainLayout } from '@/layouts'

function App() {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Skills />
      <Projects />
    </MainLayout>
  )
}

export default App
