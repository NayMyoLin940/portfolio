import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  FiArrowDown,
  FiArrowUpRight,
  FiCheck,
  FiCopy,
} from 'react-icons/fi'
import DownloadConfirmDialog from '@/components/ui/DownloadConfirmDialog.jsx'
import { getRevealProps } from '@/utils'

function ContactCard({ className = '', compact = false, icon: Icon, index, item }) {
  const [isCopied, setIsCopied] = useState(false)
  const [isDownloadConfirmOpen, setIsDownloadConfirmOpen] = useState(false)
  const shouldReduceMotion = useReducedMotion()
  const motionProps = {
    ...getRevealProps(shouldReduceMotion, {
      delay: index * 0.06,
      duration: 0.5,
    }),
    whileHover: shouldReduceMotion ? undefined : { y: -6 },
  }

  useEffect(() => {
    if (!isCopied) return undefined

    const timeoutId = window.setTimeout(() => setIsCopied(false), 2000)
    return () => window.clearTimeout(timeoutId)
  }, [isCopied])

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(item.copyValue)
      setIsCopied(true)
    } catch {
      setIsCopied(false)
    }
  }

  const content = (
    <>
      <div className="flex items-start justify-between gap-4">
        <span className={`accent-tile grid place-items-center rounded-lg text-xl transition-transform group-hover:scale-105 ${compact ? 'size-10' : 'size-12'}`}>
          <Icon aria-hidden="true" />
        </span>
        {item.copyValue ? (
          <button
            aria-label={`Copy ${item.label}`}
            className="focus-ring interactive inline-flex min-h-9 cursor-pointer items-center gap-1.5 rounded-pill border border-border bg-surface px-3 text-xs font-semibold text-foreground hover:border-brand-300 hover:text-accent"
            onClick={handleCopy}
            type="button"
          >
            {isCopied ? (
              <FiCheck aria-hidden="true" />
            ) : (
              <FiCopy aria-hidden="true" />
            )}
            {isCopied ? 'Copied' : 'Copy'}
          </button>
        ) : item.href ? (
          item.download ? (
            <FiArrowDown aria-hidden="true" className="text-lg text-muted" />
          ) : (
            <FiArrowUpRight aria-hidden="true" className="text-lg text-muted" />
          )
        ) : item.status ? (
          <span className="rounded-pill bg-surface px-2.5 py-1 text-[0.65rem] font-semibold tracking-[0.1em] text-muted uppercase">
            {item.status}
          </span>
        ) : null}
      </div>

      <div className={compact ? 'mt-5' : 'mt-8'}>
        <p className="text-caption font-semibold tracking-[0.14em] text-accent uppercase">
          {item.label}
        </p>
        <h3 className={`mt-2 break-words font-display font-bold tracking-[-0.02em] text-foreground ${compact ? 'text-base sm:text-lg' : 'text-lg sm:text-xl'}`}>
          {item.value}
        </h3>
        <p className={`max-w-md text-muted ${compact ? 'mt-2 text-xs leading-5' : 'mt-3 text-body-sm'}`}>
          {item.description}
        </p>
      </div>
    </>
  )

  const cardClassName = `group block rounded-xl border border-border bg-background shadow-soft transition-[border-color,box-shadow] hover:border-brand-200 hover:shadow-raised ${compact ? 'p-4 sm:p-5' : 'p-6 sm:p-7'} ${className}`

  if (item.href && !item.copyValue) {
    return (
      <>
        <motion.a
          className={cardClassName}
          download={item.download || undefined}
          href={item.href}
          onClick={
            item.confirmDownload
              ? (event) => {
                  event.preventDefault()
                  setIsDownloadConfirmOpen(true)
                }
              : undefined
          }
          rel={item.download ? undefined : 'noreferrer'}
          target={item.download ? undefined : '_blank'}
          {...motionProps}
        >
          {content}
        </motion.a>
        {isDownloadConfirmOpen ? (
          <DownloadConfirmDialog
            href={item.href}
            onClose={() => setIsDownloadConfirmOpen(false)}
          />
        ) : null}
      </>
    )
  }

  return (
    <motion.article className={cardClassName} {...motionProps}>
      {content}
    </motion.article>
  )
}

export default ContactCard
