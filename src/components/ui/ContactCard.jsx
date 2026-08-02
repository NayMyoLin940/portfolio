import { motion, useReducedMotion } from 'framer-motion'
import { FiArrowDown, FiArrowUpRight } from 'react-icons/fi'

function ContactCard({ className = '', icon: Icon, index, item }) {
  const shouldReduceMotion = useReducedMotion()
  const motionProps = {
    initial: shouldReduceMotion ? false : { opacity: 0, y: 24 },
    transition: {
      delay: index * 0.06,
      duration: 0.5,
      ease: [0.2, 0, 0, 1],
    },
    viewport: { amount: 0.35, once: true },
    whileHover: shouldReduceMotion ? undefined : { y: -6 },
    whileInView: { opacity: 1, y: 0 },
  }

  const content = (
    <>
      <div className="flex items-start justify-between gap-4">
        <span className="grid size-12 place-items-center rounded-lg bg-brand-50 text-xl text-brand-700 transition-colors group-hover:bg-brand-100">
          <Icon aria-hidden="true" />
        </span>
        {item.href ? (
          item.download ? (
            <FiArrowDown aria-hidden="true" className="text-lg text-muted" />
          ) : (
            <FiArrowUpRight aria-hidden="true" className="text-lg text-muted" />
          )
        ) : (
          <span className="rounded-pill bg-surface px-2.5 py-1 text-[0.65rem] font-semibold tracking-[0.1em] text-muted uppercase">
            Configure
          </span>
        )}
      </div>

      <div className="mt-8">
        <p className="text-caption font-semibold tracking-[0.14em] text-accent uppercase">
          {item.label}
        </p>
        <h3 className="mt-2 font-display text-lg font-bold tracking-[-0.02em] text-foreground sm:text-xl">
          {item.value}
        </h3>
        <p className="mt-3 max-w-md text-body-sm text-muted">
          {item.description}
        </p>
      </div>
    </>
  )

  const cardClassName = `group block rounded-xl border border-border bg-background p-6 shadow-soft transition-[border-color,box-shadow] hover:border-brand-200 hover:shadow-raised sm:p-7 ${className}`

  if (item.href) {
    return (
      <motion.a
        className={cardClassName}
        download={item.download || undefined}
        href={item.href}
        rel={item.download ? undefined : 'noreferrer'}
        target={item.download ? undefined : '_blank'}
        {...motionProps}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.article
      aria-disabled="true"
      className={cardClassName}
      {...motionProps}
    >
      {content}
    </motion.article>
  )
}

export default ContactCard
