import { motion, useReducedMotion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import ProjectAction from '@/components/ui/ProjectAction.jsx'
import { MOTION_EASE } from '@/constants'

function ProjectCard({ project, index }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.article
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-background shadow-soft"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
      transition={{
        delay: index * 0.08,
        duration: 0.55,
        ease: MOTION_EASE,
      }}
      viewport={{ amount: 0.2, once: true }}
      whileHover={shouldReduceMotion ? undefined : { y: -8 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <div className="aspect-[16/10] overflow-hidden border-b border-border bg-surface">
        <motion.img
          alt={project.imageAlt}
          className="h-full w-full object-cover"
          height="1024"
          loading="lazy"
          src={project.image}
          transition={{ duration: 0.5, ease: MOTION_EASE }}
          whileHover={shouldReduceMotion ? undefined : { scale: 1.04 }}
          width="1536"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-bold tracking-[-0.025em] text-foreground sm:text-2xl">
          {project.title}
        </h3>
        <p className="mt-3 text-body-sm text-muted">{project.description}</p>

        <ul aria-label={`${project.title} technology stack`} className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((technology) => (
            <li
              className="token-chip rounded-pill px-3 py-1 text-xs font-semibold"
              key={technology}
            >
              {technology}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex gap-3 pt-7">
          <ProjectAction href={project.githubUrl} icon={FiGithub}>
            GitHub
          </ProjectAction>
          <ProjectAction href={project.liveUrl} icon={FiExternalLink}>
            Live Demo
          </ProjectAction>
        </div>
      </div>
    </motion.article>
  )
}

export default ProjectCard
