import { motion, useReducedMotion } from 'framer-motion'
import ProjectCard from '@/components/ui/ProjectCard.jsx'
import { FEATURED_PROJECTS } from '@/data'

function Projects() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="work" className="section-block bg-surface/60">
      <div className="page-container">
        <motion.header
          className="max-w-3xl"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          transition={{ duration: 0.55, ease: [0.2, 0, 0, 1] }}
          viewport={{ amount: 0.5, once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <p className="mb-4 text-xs font-semibold tracking-[0.16em] text-accent uppercase">
            Featured projects
          </p>
          <h2 className="heading-section text-foreground">
            Selected work, built around real product needs.
          </h2>
          <p className="mt-5 max-w-2xl text-body-lg text-muted">
            A collection of full-stack concepts spanning hospitality,
            operations, and digital commerce.
          </p>
        </motion.header>

        <div className="mt-12 grid items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3">
          {FEATURED_PROJECTS.map((project, index) => (
            <ProjectCard index={index} key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
