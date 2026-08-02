import { About, Hero, Skills } from '@/components'
import { MainLayout } from '@/layouts'

function App() {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Skills />
    </MainLayout>
  )
}

export default App
