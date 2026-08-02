import { motion, useReducedMotion } from 'framer-motion'
import { FiCode, FiDatabase, FiServer, FiTool } from 'react-icons/fi'
import SkillProgress from '@/components/ui/SkillProgress.jsx'
import { SKILL_GROUPS } from '@/data'

const categoryIcons = {
  frontend: FiCode,
  backend: FiServer,
  database: FiDatabase,
  tools: FiTool,
}

function Skills() {
  const shouldReduceMotion = useReducedMotion()
  const revealFrom = shouldReduceMotion ? false : { opacity: 0, y: 24 }

  return (
    <section id="skills" className="section-block border-b border-border bg-background">
      <div className="page-container">
        <motion.header
          className="mx-auto max-w-3xl text-center"
          initial={revealFrom}
          transition={{ duration: 0.55, ease: [0.2, 0, 0, 1] }}
          viewport={{ amount: 0.5, once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <p className="mb-4 text-xs font-semibold tracking-[0.16em] text-accent uppercase">
            Technical skills
          </p>
          <h2 className="heading-section text-foreground">
            A balanced toolkit for modern products.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-body-lg text-muted">
            From interface details to data architecture, each part of the stack
            is approached with clarity, performance, and maintainability in mind.
          </p>
        </motion.header>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:gap-6">
          {SKILL_GROUPS.map((group, index) => {
            const Icon = categoryIcons[group.key]

            return (
              <motion.article
                className="surface-card p-6 sm:p-8"
                initial={revealFrom}
                key={group.key}
                transition={{
                  delay: index * 0.06,
                  duration: 0.5,
                  ease: [0.2, 0, 0, 1],
                }}
                viewport={{ amount: 0.25, once: true }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <div className="flex items-start gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-brand-50 text-lg text-brand-700">
                    <Icon aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-bold tracking-[-0.025em] text-foreground">
                      {group.title}
                    </h3>
                    <p className="mt-1.5 text-body-sm text-muted">
                      {group.description}
                    </p>
                  </div>
                </div>

                <ul className="mt-7 grid gap-5">
                  {group.skills.map((skill) => (
                    <SkillProgress key={skill.name} {...skill} />
                  ))}
                </ul>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills
