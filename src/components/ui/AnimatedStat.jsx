import { animate, motion, useInView, useReducedMotion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { MOTION_EASE } from '@/constants'

function AnimatedStat({ label, suffix = '', value }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.6, once: true })
  const shouldReduceMotion = useReducedMotion()
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (!isInView) return undefined

    if (shouldReduceMotion) {
      setDisplayValue(value)
      return undefined
    }

    const controls = animate(0, value, {
      duration: 1.2,
      ease: MOTION_EASE,
      onUpdate: (latest) => setDisplayValue(Math.round(latest)),
    })

    return () => controls.stop()
  }, [isInView, shouldReduceMotion, value])

  const formattedValue =
    value < 10 ? String(displayValue).padStart(2, '0') : displayValue

  return (
    <motion.article
      ref={ref}
      className="rounded-lg border border-border bg-background p-5 shadow-soft sm:p-6"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
      transition={{ duration: 0.45, ease: MOTION_EASE }}
      viewport={{ amount: 0.5, once: true }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <p className="font-display text-3xl font-bold tracking-[-0.04em] text-foreground sm:text-4xl">
        {formattedValue}
        {suffix}
      </p>
      <p className="mt-2 text-body-sm text-muted">{label}</p>
    </motion.article>
  )
}

export default AnimatedStat
