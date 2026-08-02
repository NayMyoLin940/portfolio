import {
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
} from 'react-icons/fi'
import ContactCard from '@/components/ui/ContactCard.jsx'
import SectionHeader from '@/components/ui/SectionHeader.jsx'
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
  return (
    <section
      aria-labelledby="contact-title"
      id="contact"
      className="section-block relative isolate overflow-hidden border-b border-border bg-background"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 h-80 bg-[radial-gradient(circle_at_50%_0%,color-mix(in_srgb,var(--color-brand-200)_42%,transparent),transparent_68%)]"
      />

      <div className="page-container">
        <SectionHeader
          align="center"
          description="Have a project, role, or collaboration in mind? Choose the channel that works best for you."
          eyebrow="Get in touch"
          headingId="contact-title"
          title="Let's build something thoughtful together."
        />

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
