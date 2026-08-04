import islandCafeImage from '@/assets/images/project-island-cafe.jpg'

export const FEATURED_PROJECTS = Object.freeze([
  Object.freeze({
    title: 'Island Cafe',
    category: 'Hospitality',
    status: 'In Progress',
    image: islandCafeImage,
    description:
      'An island-inspired cafe ordering experience currently in development, with responsive menu browsing, product customization, cart and checkout flows, location selection, and order tracking.',
    availability:
      'Source code and a live demo will be shared after the first stable release.',
    stack: Object.freeze([
      'React',
      'Tailwind CSS',
      'Framer Motion',
      'Leaflet',
    ]),
    githubUrl: null,
    liveUrl: null,
  }),
])
