import islandCafeImage from '@/assets/images/project-island-cafe.jpg'
import employeeManagementImage from '@/assets/images/project-employee-management.png'

export const FEATURED_PROJECTS = Object.freeze([
  Object.freeze({
    title: 'Employee Management System',
    category: 'Full Stack',
    status: 'Live',
    image: employeeManagementImage,
    description:
      'A full-stack employee workspace with live team insights, searchable records, complete CRUD workflows, and a confirmation-protected AI assistant for safe natural-language actions.',
    stack: Object.freeze([
      'React',
      'Spring Boot',
      'PostgreSQL',
      'OpenRouter AI',
    ]),
    githubUrl: 'https://github.com/NayMyoLin940/employee-management-system',
    liveUrl: 'https://employee-management-system-nml.vercel.app',
  }),
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
