import { motion, useReducedMotion } from 'framer-motion'
import { MOTION_EASE } from '@/constants'
import { MILESTONES } from '@/data'
import { getRevealProps } from '@/utils'
import SectionHeader from '@/components/ui/SectionHeader.jsx'
import '@/styles/milestone-timeline.css'

function MilestoneTimeline() {
  const shouldReduceMotion = useReducedMotion()
  const timelineStyle = {
    '--milestone-columns': MILESTONES.length,
    '--milestone-edge-offset': `${100 / (MILESTONES.length * 2)}%`,
    '--milestone-min-width': `${MILESTONES.length * 20}rem`,
  }

  return (
    <section
      id="journey"
      aria-labelledby="milestone-timeline-title"
      className="section-block overflow-x-clip border-b border-border bg-background"
    >
      <div className="page-container">
        <SectionHeader
          eyebrow="MY JOURNEY"
          title="Milestone Timeline"
          description="Tracing my journey from Computer Science student to aspiring full-stack developer."
          align="center"
          headingId="milestone-timeline-title"
        />

        <div
          className="milestone-scroll focus-ring mt-12"
          role="region"
          aria-label="Milestone timeline. Scroll horizontally on larger screens to view every milestone."
          tabIndex="0"
        >
          <div className="milestone-canvas" style={timelineStyle}>
            <div className="milestone-line" aria-hidden="true" />

            <ol className="milestone-track">
              {MILESTONES.map((milestone, index) => {
                const side = index % 2 === 0 ? 'top' : 'bottom'

                return (
                  <li
                    key={`${milestone.tag}-${milestone.title}`}
                    className="milestone-item"
                    data-side={side}
                  >
                    <motion.article
                      className="milestone-card surface-card"
                      {...getRevealProps(shouldReduceMotion, {
                        delay: index * 0.05,
                        y: 18,
                      })}
                      whileHover={shouldReduceMotion ? undefined : { y: -6 }}
                      transition={{ duration: 0.45, ease: MOTION_EASE }}
                    >
                      <div className="flex min-w-0 flex-wrap items-center justify-between gap-3">
                        <time
                          dateTime={String(milestone.year)}
                          className="font-mono text-sm font-bold tracking-[0.12em] text-accent"
                        >
                          {milestone.year}
                        </time>
                        <span className="token-chip text-[0.68rem] tracking-[0.12em]">
                          {milestone.tag}
                        </span>
                      </div>

                      <h3 className="mt-5 text-xl font-bold leading-snug text-foreground">
                        {milestone.title}
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-muted">
                        {milestone.description}
                      </p>
                    </motion.article>

                    <span className="milestone-connector" aria-hidden="true" />
                    <motion.span
                      className="milestone-node"
                      aria-hidden="true"
                      initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.55 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, amount: 0.7 }}
                      transition={{
                        duration: 0.4,
                        delay: shouldReduceMotion ? 0 : index * 0.07,
                        ease: MOTION_EASE,
                      }}
                    />
                  </li>
                )
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MilestoneTimeline
