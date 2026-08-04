import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { FiCheckCircle, FiSend } from 'react-icons/fi'
import { MOTION_EASE } from '@/constants'
import { getRevealProps } from '@/utils'

const FORM_ENDPOINT = 'https://formsubmit.co/ajax/naymyolin940@gmail.com'

const initialStatus = Object.freeze({ type: 'idle', message: '' })

const fieldClassName =
  'focus-ring w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground shadow-sm transition-colors placeholder:text-muted/70 hover:border-brand-300 focus:border-accent disabled:cursor-not-allowed disabled:opacity-60'

function MessageForm({ compact = false }) {
  const shouldReduceMotion = useReducedMotion()
  const [status, setStatus] = useState(initialStatus)
  const isSubmitting = status.type === 'submitting'

  const handleSubmit = async (event) => {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)

    if (formData.get('_honey')) {
      form.reset()
      return
    }

    setStatus({ type: 'submitting', message: 'Sending your message…' })

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(Object.fromEntries(formData.entries())),
      })

      if (!response.ok) {
        throw new Error('Message delivery failed')
      }

      form.reset()
      setStatus({
        type: 'success',
        message: 'Your message has been sent. Thank you for getting in touch!',
      })
    } catch {
      setStatus({
        type: 'error',
        message: 'The message could not be sent. Please try again or contact me by email.',
      })
    }
  }

  return (
    <motion.div
      aria-labelledby="message-form-title"
      className={`surface-card ${compact ? 'h-fit p-5 sm:p-6 lg:sticky lg:top-24' : 'mx-auto max-w-3xl p-6 sm:p-8 lg:p-10'}`}
      id="message"
      role="region"
      {...getRevealProps(shouldReduceMotion, { amount: 0.2, y: 20 })}
    >
      <header>
        <p className="mb-4 text-xs font-semibold tracking-[0.16em] text-accent uppercase">
          Direct message
        </p>
        <h2 className="heading-section text-foreground" id="message-form-title">
          Send a Message
        </h2>
        <p className="mt-4 text-body-lg text-muted">
          Share a few details and I’ll get back to you as soon as I can.
        </p>
      </header>

      <form
        action="https://formsubmit.co/naymyolin940@gmail.com"
        className={`grid ${compact ? 'mt-6 gap-4' : 'mt-8 gap-6'}`}
        method="POST"
        onSubmit={handleSubmit}
      >
            <input name="_subject" type="hidden" value="New portfolio message" />
            <input name="_template" type="hidden" value="table" />
            <input name="_captcha" type="hidden" value="false" />

            <div aria-hidden="true" className="hidden">
              <label htmlFor="message-company">Company</label>
              <input
                autoComplete="off"
                id="message-company"
                name="_honey"
                tabIndex="-1"
                type="text"
              />
            </div>

            <div className={`grid sm:grid-cols-2 ${compact ? 'gap-4' : 'gap-6'}`}>
              <div>
                <label className="mb-2 block text-sm font-semibold text-foreground" htmlFor="message-name">
                  Your Name
                </label>
                <input
                  autoComplete="name"
                  className={fieldClassName}
                  disabled={isSubmitting}
                  id="message-name"
                  maxLength="80"
                  name="name"
                  placeholder="e.g. John Doe"
                  required
                  type="text"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-foreground" htmlFor="message-email">
                  Email Address
                </label>
                <input
                  autoComplete="email"
                  className={fieldClassName}
                  disabled={isSubmitting}
                  id="message-email"
                  maxLength="120"
                  name="email"
                  placeholder="john@example.com"
                  required
                  type="email"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-foreground" htmlFor="message-subject">
                Subject
              </label>
              <input
                className={fieldClassName}
                disabled={isSubmitting}
                id="message-subject"
                maxLength="120"
                name="subject"
                placeholder="Project inquiry / internship opportunity"
                required
                type="text"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-foreground" htmlFor="message-body">
                Message
              </label>
              <textarea
                className={`${fieldClassName} ${compact ? 'min-h-32' : 'min-h-40'} resize-y`}
                disabled={isSubmitting}
                id="message-body"
                maxLength="2000"
                name="message"
                placeholder="Tell me about your project or opportunity…"
                required
                rows={compact ? 4 : 6}
              />
            </div>

            <motion.button
              className="focus-ring interactive flex min-h-12 w-full cursor-pointer items-center justify-center gap-3 rounded-lg bg-accent px-6 py-3.5 text-base font-bold text-accent-foreground shadow-soft hover:bg-accent-hover hover:shadow-raised disabled:cursor-not-allowed disabled:opacity-65"
              disabled={isSubmitting}
              type="submit"
              whileHover={shouldReduceMotion || isSubmitting ? undefined : { y: -2 }}
              whileTap={shouldReduceMotion || isSubmitting ? undefined : { scale: 0.99 }}
              transition={{ duration: 0.25, ease: MOTION_EASE }}
            >
              {status.type === 'success' ? (
                <FiCheckCircle aria-hidden="true" className="text-xl" />
              ) : (
                <FiSend aria-hidden="true" className="text-xl" />
              )}
              {isSubmitting ? 'Sending…' : 'Send Message'}
            </motion.button>

            <div
              aria-live="polite"
              className={`min-h-6 text-center text-sm font-medium ${
                status.type === 'success'
                  ? 'text-emerald-600 dark:text-emerald-400'
                  : status.type === 'error'
                    ? 'text-red-600 dark:text-red-400'
                    : 'text-muted'
              }`}
              role={status.type === 'error' ? 'alert' : 'status'}
            >
              {status.message}
            </div>

            <p className="text-center text-xs leading-5 text-muted">
              This form uses FormSubmit to deliver your message. Your details are used only to reply.
            </p>
      </form>
    </motion.div>
  )
}

export default MessageForm
