import { lazy, Suspense } from 'react'
import Hero from '@/components/common/Hero.jsx'
import SectionFallback from '@/components/ui/SectionFallback.jsx'
import { MainLayout } from '@/layouts'

const About = lazy(() => import('@/components/common/About.jsx'))
const Skills = lazy(() => import('@/components/common/Skills.jsx'))
const Projects = lazy(() => import('@/components/common/Projects.jsx'))
const Contact = lazy(() => import('@/components/common/Contact.jsx'))

function DeferredSection({ children, label }) {
  return <Suspense fallback={<SectionFallback label={label} />}>{children}</Suspense>
}

function App() {
  return (
    <MainLayout>
      <Hero />
      <DeferredSection label="About">
        <About />
      </DeferredSection>
      <DeferredSection label="Skills">
        <Skills />
      </DeferredSection>
      <DeferredSection label="Projects">
        <Projects />
      </DeferredSection>
      <DeferredSection label="Contact">
        <Contact />
      </DeferredSection>
    </MainLayout>
  )
}

export default App
