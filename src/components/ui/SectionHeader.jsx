import { motion, useReducedMotion } from 'framer-motion'
import { getRevealProps } from '@/utils'

function SectionHeader({
  align = 'left',
  description,
  eyebrow,
  headingId,
  icon: Icon,
  title,
}) {
  const shouldReduceMotion = useReducedMotion()
  const isCentered = align === 'center'

  return (
    <motion.header
      className={isCentered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}
      {...getRevealProps(shouldReduceMotion, { amount: 0.5 })}
    >
      <p
        className={`mb-4 text-xs font-semibold tracking-[0.16em] text-accent uppercase ${
          Icon ? 'flex items-center gap-2' : ''
        } ${isCentered && Icon ? 'justify-center' : ''}`}
      >
        {Icon ? <Icon aria-hidden="true" className="text-base" /> : null}
        {eyebrow}
      </p>
      <h2 className="heading-section text-foreground" id={headingId}>
        {title}
      </h2>
      <p
        className={`mt-5 max-w-2xl text-body-lg text-muted ${
          isCentered ? 'mx-auto' : ''
        }`}
      >
        {description}
      </p>
    </motion.header>
  )
}

export default SectionHeader
