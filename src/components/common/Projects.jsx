import ProjectCard from '@/components/ui/ProjectCard.jsx'
import SectionHeader from '@/components/ui/SectionHeader.jsx'
import { FEATURED_PROJECTS } from '@/data'

function Projects() {
  return (
    <section
      aria-labelledby="projects-title"
      id="work"
      className="section-block bg-surface/60"
    >
      <div className="page-container">
        <SectionHeader
          description="A real work in progress where I am applying responsive UI, state management, mapping, and product-flow thinking to a complete cafe ordering experience."
          eyebrow="Current project"
          headingId="projects-title"
          title="Building Island Cafe, one thoughtful flow at a time."
        />

        <div className="mt-12 grid max-w-4xl items-stretch gap-6">
          {FEATURED_PROJECTS.map((project, index) => (
            <ProjectCard index={index} key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
