import { motion, useReducedMotion } from 'framer-motion'
import { FiBookOpen, FiCompass, FiLayers, FiUser } from 'react-icons/fi'
import profilePortrait from '@/assets/images/profile-portrait.jpg'
import AnimatedStat from '@/components/ui/AnimatedStat.jsx'
import SectionHeader from '@/components/ui/SectionHeader.jsx'
import {
  ABOUT_INTRODUCTION,
  ABOUT_PROFILE,
  ABOUT_STATS,
  CURRENT_LEARNING,
  EDUCATION,
} from '@/data'
import { getRevealProps } from '@/utils'

function About() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      aria-labelledby="about-title"
      id="about"
      className="section-block bg-surface/60"
    >
      <div className="page-container">
        <SectionHeader
          description="I care about the details users see and the systems that make those experiences reliable behind the scenes."
          eyebrow="About me"
          headingId="about-title"
          icon={FiUser}
          title="Building across the whole product stack."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-8">
          <motion.article
            className="surface-card overflow-hidden p-6 sm:p-8"
            {...getRevealProps(shouldReduceMotion, { delay: 0.06 })}
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
              {...getRevealProps(shouldReduceMotion, { delay: 0.12 })}
            >
              <div className="flex items-center gap-3">
                <span className="accent-tile grid size-10 place-items-center rounded-md">
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
                {...getRevealProps(shouldReduceMotion, { delay: 0.18 })}
              >
                <span className="accent-tile grid size-10 place-items-center rounded-md">
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
                {...getRevealProps(shouldReduceMotion, { delay: 0.24 })}
              >
                <span className="accent-tile grid size-10 place-items-center rounded-md">
                  <FiCompass aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-foreground">
                  Current learning
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {CURRENT_LEARNING.map((topic) => (
                    <li
                      className="token-chip rounded-pill px-3 py-1.5 text-xs font-semibold"
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
