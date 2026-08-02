import { MOTION_EASE } from '@/constants'

export function getRevealProps(
  shouldReduceMotion,
  { amount = 0.35, delay = 0, duration = 0.55, y = 24 } = {},
) {
  return {
    initial: shouldReduceMotion ? false : { opacity: 0, y },
    transition: { delay, duration, ease: MOTION_EASE },
    viewport: { amount, once: true },
    whileInView: { opacity: 1, y: 0 },
  }
}
