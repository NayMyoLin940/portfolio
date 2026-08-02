import { motion, useReducedMotion } from 'framer-motion'

function TechBadge({ icon: Icon, label, className = '', delay = 0 }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      animate={shouldReduceMotion ? undefined : { y: [0, -10, 0] }}
      className={`absolute z-20 flex items-center gap-2 rounded-pill border border-white/60 bg-white/85 px-3 py-2 text-xs font-semibold text-slate-800 shadow-raised backdrop-blur-md sm:px-4 sm:py-2.5 sm:text-sm ${className}`}
      transition={{
        delay,
        duration: 4,
        ease: 'easeInOut',
        repeat: Infinity,
      }}
    >
      <Icon aria-hidden="true" className="text-base text-brand-600 sm:text-lg" />
      <span>{label}</span>
    </motion.div>
  )
}

export default TechBadge
