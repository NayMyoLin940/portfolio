import { motion, useReducedMotion } from 'framer-motion'
import {
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
} from 'react-icons/fi'
import ContactCard from '@/components/ui/ContactCard.jsx'
import { CONTACT_METHODS } from '@/data'

const contactIcons = {
  email: FiMail,
  github: FiGithub,
  linkedin: FiLinkedin,
  resume: FiDownload,
  location: FiMapPin,
}

const cardLayout = {
  email: 'md:col-span-2 lg:col-span-3',
  github: 'lg:col-span-3',
  linkedin: 'lg:col-span-2',
  resume: 'lg:col-span-2',
  location: 'lg:col-span-2',
}

function Contact() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      id="contact"
      className="section-block relative isolate overflow-hidden border-b border-border bg-background"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 h-80 bg-[radial-gradient(circle_at_50%_0%,color-mix(in_srgb,var(--color-brand-200)_42%,transparent),transparent_68%)]"
      />

      <div className="page-container">
        <motion.header
          className="mx-auto max-w-3xl text-center"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          transition={{ duration: 0.55, ease: [0.2, 0, 0, 1] }}
          viewport={{ amount: 0.5, once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <p className="mb-4 text-xs font-semibold tracking-[0.16em] text-accent uppercase">
            Get in touch
          </p>
          <h2 className="heading-section text-foreground">
            Let&apos;s build something thoughtful together.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-body-lg text-muted">
            Have a project, role, or collaboration in mind? Choose the channel
            that works best for you.
          </p>
        </motion.header>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-6">
          {CONTACT_METHODS.map((item, index) => (
            <ContactCard
              className={cardLayout[item.key]}
              icon={contactIcons[item.key]}
              index={index}
              item={item}
              key={item.key}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact
