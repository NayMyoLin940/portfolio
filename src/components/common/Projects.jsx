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
          description="Full-stack products shaped around real workflows, thoughtful interfaces, and reliable data—from an AI-assisted employee workspace to a cafe ordering experience in progress."
          eyebrow="Current projects"
          headingId="projects-title"
          title="Selected work, built from interface to infrastructure."
        />

        <div className="mt-12 grid grid-cols-[repeat(auto-fit,minmax(min(100%,28rem),1fr))] items-stretch gap-6">
          {FEATURED_PROJECTS.map((project, index) => (
            <ProjectCard index={index} key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
