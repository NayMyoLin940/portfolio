import ecommerceImage from '@/assets/images/project-ecommerce.jpg'
import hotelManagementImage from '@/assets/images/project-hotel-management.jpg'
import islandCafeImage from '@/assets/images/project-island-cafe.jpg'

export const FEATURED_PROJECTS = Object.freeze([
  Object.freeze({
    title: 'Island Cafe',
    description:
      'A welcoming cafe experience designed around menu discovery, reservations, and a warm island-inspired brand atmosphere.',
    image: islandCafeImage,
    imageAlt: 'Island Cafe website interface mockup',
    stack: Object.freeze(['React', 'Tailwind CSS', 'Node.js', 'MongoDB']),
    githubUrl: null,
    liveUrl: null,
  }),
  Object.freeze({
    title: 'Hotel Management System',
    description:
      'An operations dashboard that brings room availability, reservations, guest activity, and revenue insights into one clear workspace.',
    image: hotelManagementImage,
    imageAlt: 'Hotel management dashboard interface mockup',
    stack: Object.freeze(['React', 'Express', 'PostgreSQL', 'REST API']),
    githubUrl: null,
    liveUrl: null,
  }),
  Object.freeze({
    title: 'E-Commerce Shopping System',
    description:
      'A complete shopping experience with product discovery, category filtering, cart management, and a focused checkout flow.',
    image: ecommerceImage,
    imageAlt: 'E-commerce shopping interface mockup',
    stack: Object.freeze(['React', 'Node.js', 'MongoDB', 'Payments']),
    githubUrl: null,
    liveUrl: null,
  }),
])
