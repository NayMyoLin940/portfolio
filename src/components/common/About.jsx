import { motion, useReducedMotion } from 'framer-motion'
import { FiBookOpen, FiCompass, FiLayers, FiUser } from 'react-icons/fi'
import profilePortrait from '@/assets/images/profile-portrait.jpg'
import AnimatedStat from '@/components/ui/AnimatedStat.jsx'
import {
  ABOUT_INTRODUCTION,
  ABOUT_PROFILE,
  ABOUT_STATS,
  CURRENT_LEARNING,
  EDUCATION,
} from '@/data'

const revealTransition = {
  duration: 0.55,
  ease: [0.2, 0, 0, 1],
}

function About() {
  const shouldReduceMotion = useReducedMotion()
  const revealFrom = shouldReduceMotion ? false : { opacity: 0, y: 24 }

  return (
    <section id="about" className="section-block bg-surface/60">
      <div className="page-container">
        <motion.header
          className="max-w-3xl"
          initial={revealFrom}
          transition={revealTransition}
          viewport={{ amount: 0.5, once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <p className="mb-4 flex items-center gap-2 text-xs font-semibold tracking-[0.16em] text-accent uppercase">
            <FiUser aria-hidden="true" className="text-base" />
            About me
          </p>
          <h2 className="heading-section text-foreground">
            Building across the whole product stack.
          </h2>
          <p className="mt-5 max-w-2xl text-body-lg text-muted">
            I care about the details users see and the systems that make those
            experiences reliable behind the scenes.
          </p>
        </motion.header>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-8">
          <motion.article
            className="surface-card overflow-hidden p-6 sm:p-8"
            initial={revealFrom}
            transition={{ ...revealTransition, delay: 0.06 }}
            viewport={{ amount: 0.35, once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-4">
              <img
                alt="Stylized developer portrait placeholder"
                className="size-20 rounded-xl object-cover shadow-soft"
                height="160"
                loading="lazy"
                src={profilePortrait}
                width="128"
              />
              <div>
                <h3 className="font-display text-xl font-bold tracking-[-0.025em] text-foreground">
                  {ABOUT_PROFILE.name}
                </h3>
                <p className="mt-1 text-body-sm font-medium text-accent">
                  {ABOUT_PROFILE.role}
                </p>
              </div>
            </div>

            <dl className="mt-8 divide-y divide-border border-y border-border">
              <div className="py-5">
                <dt className="text-caption font-semibold tracking-[0.12em] text-muted uppercase">
                  Focus
                </dt>
                <dd className="mt-2 text-body-sm font-medium text-foreground">
                  {ABOUT_PROFILE.focus}
                </dd>
              </div>
              <div className="py-5">
                <dt className="text-caption font-semibold tracking-[0.12em] text-muted uppercase">
                  Approach
                </dt>
                <dd className="mt-2 text-body-sm font-medium text-foreground">
                  {ABOUT_PROFILE.approach}
                </dd>
              </div>
            </dl>
          </motion.article>

          <div className="grid gap-6">
            <motion.article
              className="surface-card p-6 sm:p-8"
              initial={revealFrom}
              transition={{ ...revealTransition, delay: 0.12 }}
              viewport={{ amount: 0.35, once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-md bg-brand-50 text-brand-700">
                  <FiLayers aria-hidden="true" />
                </span>
                <h3 className="font-display text-lg font-bold text-foreground">
                  Introduction
                </h3>
              </div>
              <div className="mt-5 grid gap-4 text-body text-muted">
                {ABOUT_INTRODUCTION.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </motion.article>

            <div className="grid gap-6 sm:grid-cols-2">
              <motion.article
                className="surface-card p-6 sm:p-7"
                initial={revealFrom}
                transition={{ ...revealTransition, delay: 0.18 }}
                viewport={{ amount: 0.35, once: true }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <span className="grid size-10 place-items-center rounded-md bg-brand-50 text-brand-700">
                  <FiBookOpen aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-foreground">
                  Education
                </h3>
                <p className="mt-3 font-semibold text-foreground">
                  {EDUCATION.title}
                </p>
                <p className="mt-1 text-body-sm text-accent">
                  {EDUCATION.institution}
                </p>
                <p className="mt-4 text-body-sm text-muted">
                  {EDUCATION.description}
                </p>
              </motion.article>

              <motion.article
                className="surface-card p-6 sm:p-7"
                initial={revealFrom}
                transition={{ ...revealTransition, delay: 0.24 }}
                viewport={{ amount: 0.35, once: true }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <span className="grid size-10 place-items-center rounded-md bg-brand-50 text-brand-700">
                  <FiCompass aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-foreground">
                  Current learning
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {CURRENT_LEARNING.map((topic) => (
                    <li
                      className="rounded-pill border border-brand-200 bg-brand-50 px-3 py-1.5 text-xs font-semibold text-brand-700"
                      key={topic}
                    >
                      {topic}
                    </li>
                  ))}
                </ul>
              </motion.article>
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {ABOUT_STATS.map((stat) => (
            <AnimatedStat key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
