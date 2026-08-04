import { motion, useReducedMotion } from 'framer-motion'
import { FiArrowUpRight, FiMail } from 'react-icons/fi'
import {
  SiJavascript,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
} from 'react-icons/si'
import profilePortrait from '@/assets/images/profile-portrait.png'
import TechBadge from '@/components/ui/TechBadge.jsx'
import { MOTION_EASE } from '@/constants'

const entranceTransition = {
  duration: 0.65,
  ease: MOTION_EASE,
}

function Hero() {
  const shouldReduceMotion = useReducedMotion()
  const initial = shouldReduceMotion ? false : { opacity: 0, y: 24 }

  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden border-b border-border/70"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_80%_25%,color-mix(in_srgb,var(--color-brand-200)_45%,transparent),transparent_34%),radial-gradient(circle_at_8%_70%,color-mix(in_srgb,var(--color-brand-100)_55%,transparent),transparent_30%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-40 [background-image:linear-gradient(to_right,var(--theme-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--theme-border)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]"
      />

      <div className="page-container grid min-h-[calc(100svh-4rem)] items-center gap-14 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:py-20">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 max-w-2xl text-left"
          initial={initial}
          transition={entranceTransition}
        >
          <motion.p
            animate={{ opacity: 1, y: 0 }}
            className="mb-5 inline-flex items-center gap-2 rounded-pill border border-brand-200 bg-brand-50/80 px-3 py-1.5 text-xs font-semibold tracking-[0.14em] text-brand-700 uppercase backdrop-blur-sm dark:border-brand-800 dark:bg-brand-950/70 dark:text-brand-200"
            initial={initial}
            transition={{ ...entranceTransition, delay: 0.05 }}
          >
            <motion.span
              animate={
                shouldReduceMotion
                  ? undefined
                  : { opacity: [1, 0.6, 1], scale: [1, 1.55, 1] }
              }
              className="size-1.5 rounded-full bg-brand-500"
              transition={{ duration: 1.4, ease: 'easeInOut', repeat: Infinity }}
            />
            Full Stack Developer
          </motion.p>

          <motion.h1
            animate={{ opacity: 1, y: 0 }}
            className="heading-display text-foreground"
            initial={initial}
            transition={{ ...entranceTransition, delay: 0.12 }}
          >
            Nay Myo Lin
          </motion.h1>

          <motion.p
            animate={{ opacity: 1, y: 0 }}
            className="mt-7 text-body-lg text-muted sm:text-xl sm:leading-8"
            initial={initial}
            transition={{ ...entranceTransition, delay: 0.19 }}
          >
            Passionate full-stack developer crafting modern web applications,
            from intuitive interfaces to reliable back-end systems. As a
            final-year Computer Science student, I&apos;m committed to building
            scalable, maintainable, and user-focused digital products.
          </motion.p>

          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="mt-9 flex flex-col justify-start gap-3 sm:flex-row"
            initial={initial}
            transition={{ ...entranceTransition, delay: 0.26 }}
          >
            <a
              className="focus-ring interactive inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-accent px-6 text-sm font-semibold text-accent-foreground shadow-soft hover:bg-accent-hover hover:shadow-raised"
              href="#work"
            >
              View my work
              <FiArrowUpRight aria-hidden="true" className="text-lg" />
            </a>
            <a
              className="focus-ring interactive inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-border bg-background/75 px-6 text-sm font-semibold text-foreground backdrop-blur-sm hover:border-brand-300 hover:bg-surface"
              href="#contact"
            >
              <FiMail aria-hidden="true" className="text-base" />
              Let&apos;s talk
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="relative mx-auto w-full max-w-[31rem] px-6 sm:px-10 lg:max-w-none lg:px-6"
          initial={
            shouldReduceMotion ? false : { opacity: 0, scale: 0.96, y: 30 }
          }
          transition={{ ...entranceTransition, delay: 0.18 }}
        >
          <div
            aria-hidden="true"
            className="absolute inset-10 -z-10 rounded-full bg-brand-400/25 blur-3xl"
          />

          <motion.figure
            className="relative mx-auto aspect-[4/5] max-w-[25rem] overflow-hidden rounded-[2rem] border border-border/70 bg-brand-950 shadow-floating ring-1 ring-brand-900/10"
            whileHover={shouldReduceMotion ? undefined : { y: -6 }}
            transition={{ duration: 0.3, ease: MOTION_EASE }}
          >
            <img
              alt="Portrait of Nay Myo Lin"
              className="h-full w-full object-cover"
              decoding="async"
              fetchPriority="high"
              height="1402"
              src={profilePortrait}
              width="1122"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-brand-950/20 via-transparent to-white/5"
            />
          </motion.figure>

          <TechBadge
            className="top-[9%] left-0 sm:left-2"
            color="#61dafb"
            delay={0}
            icon={SiReact}
            label="React"
          />
          <TechBadge
            className="top-[27%] right-0 sm:right-1"
            color="#339933"
            delay={0.8}
            icon={SiNodedotjs}
            label="Node.js"
          />
          <TechBadge
            className="bottom-[25%] left-0 sm:-left-1"
            color="#f7df1e"
            delay={1.6}
            icon={SiJavascript}
            label="JavaScript"
          />
          <TechBadge
            className="right-0 bottom-[8%] sm:-right-1"
            color="#06b6d4"
            delay={2.4}
            icon={SiTailwindcss}
            label="Tailwind"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
