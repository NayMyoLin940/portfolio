import { motion, useReducedMotion } from 'framer-motion'
import { MOTION_EASE } from '@/constants'

function SkillProgress({ level, name }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <li>
      <div className="mb-2 flex items-center justify-between gap-4 text-body-sm">
        <span className="font-medium text-foreground">{name}</span>
        <span className="font-mono text-xs font-semibold text-muted">
          {level}%
        </span>
      </div>
      <div className="h-2 overflow-hidden rounded-pill bg-brand-100 dark:bg-brand-950">
        <motion.div
          aria-label={`${name} proficiency`}
          aria-valuemax="100"
          aria-valuemin="0"
          aria-valuenow={level}
          className="h-full origin-left rounded-pill bg-gradient-to-r from-brand-600 to-brand-400"
          initial={{ scaleX: shouldReduceMotion ? level / 100 : 0 }}
          role="progressbar"
          transition={{
            duration: shouldReduceMotion ? 0 : 0.9,
            ease: MOTION_EASE,
          }}
          viewport={{ amount: 0.8, once: true }}
          whileInView={{ scaleX: level / 100 }}
        />
      </div>
    </li>
  )
}

export default SkillProgress
