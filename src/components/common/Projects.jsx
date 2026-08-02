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
          description="A collection of full-stack concepts spanning hospitality, operations, and digital commerce."
          eyebrow="Featured projects"
          headingId="projects-title"
          title="Selected work, built around real product needs."
        />

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
