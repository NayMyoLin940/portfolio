import { motion, useReducedMotion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import ProjectAction from '@/components/ui/ProjectAction.jsx'
import { MOTION_EASE } from '@/constants'

function ProjectCard({ project, index }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.article
      className="group relative isolate flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-slate-950 shadow-soft"
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
      <img
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        decoding="async"
        loading="lazy"
        src={project.image}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-slate-950/55 via-slate-950/85 to-slate-950/95"
      />

      <div className="relative flex flex-1 flex-col p-6">
        <div className="mb-10 flex items-center justify-between gap-4">
          <span className="font-mono text-sm font-bold tracking-[0.12em] text-white/80">
            {String(index + 1).padStart(2, '0')}
          </span>
          <div className="flex flex-wrap justify-end gap-2">
            <span className="rounded-pill border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
              {project.category}
            </span>
            {project.status ? (
              <span className="inline-flex items-center gap-2 rounded-pill border border-emerald-300/30 bg-emerald-400/15 px-3 py-1 text-xs font-semibold text-emerald-100 backdrop-blur-md">
                <span
                  aria-hidden="true"
                  className="size-1.5 rounded-full bg-emerald-300"
                />
                {project.status}
              </span>
            ) : null}
          </div>
        </div>

        <h3 className="font-display text-2xl font-bold tracking-[-0.03em] text-white">
          {project.title}
        </h3>
        <p className="mt-4 text-body-sm text-slate-200">
          {project.description}
        </p>

        <ul aria-label={`${project.title} technology stack`} className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((technology) => (
            <li
              className="rounded-pill border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md"
              key={technology}
            >
              {technology}
            </li>
          ))}
        </ul>

        {project.githubUrl || project.liveUrl ? (
          <div className="mt-auto flex gap-3 pt-7">
            <ProjectAction href={project.githubUrl} icon={FiGithub}>
              GitHub
            </ProjectAction>
            <ProjectAction href={project.liveUrl} icon={FiExternalLink}>
              Live Demo
            </ProjectAction>
          </div>
        ) : (
          <div className="mt-auto pt-7">
            <p className="rounded-lg border border-white/15 bg-black/20 px-4 py-3 text-xs leading-5 text-slate-300 backdrop-blur-md">
              {project.availability}
            </p>
          </div>
        )}
      </div>
    </motion.article>
  )
}

export default ProjectCard
