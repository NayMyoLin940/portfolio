import { motion, useReducedMotion } from 'framer-motion'
import { FiCode, FiDatabase, FiServer, FiTool } from 'react-icons/fi'
import SectionHeader from '@/components/ui/SectionHeader.jsx'
import SkillProgress from '@/components/ui/SkillProgress.jsx'
import { SKILL_GROUPS } from '@/data'
import { getRevealProps } from '@/utils'

const categoryIcons = {
  frontend: FiCode,
  backend: FiServer,
  database: FiDatabase,
  tools: FiTool,
}

function Skills() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      aria-labelledby="skills-title"
      id="skills"
      className="section-block border-b border-border bg-background"
    >
      <div className="page-container">
        <SectionHeader
          align="center"
          description="From interface details to data architecture, each part of the stack is approached with clarity, performance, and maintainability in mind."
          eyebrow="Technical skills"
          headingId="skills-title"
          title="A balanced toolkit for modern products."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:gap-6">
          {SKILL_GROUPS.map((group, index) => {
            const Icon = categoryIcons[group.key]

            return (
              <motion.article
                className="surface-card p-6 sm:p-8"
                key={group.key}
                {...getRevealProps(shouldReduceMotion, {
                  amount: 0.25,
                  delay: index * 0.06,
                  duration: 0.5,
                })}
              >
                <div className="flex items-start gap-4">
                  <span className="accent-tile grid size-11 shrink-0 place-items-center rounded-lg text-lg">
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
