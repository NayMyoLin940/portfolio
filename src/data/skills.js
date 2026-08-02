export const SKILL_GROUPS = Object.freeze([
  Object.freeze({
    key: 'frontend',
    title: 'Frontend',
    description: 'Responsive, accessible interfaces with thoughtful interactions.',
    skills: Object.freeze([
      Object.freeze({ name: 'React', level: 90 }),
      Object.freeze({ name: 'JavaScript', level: 88 }),
      Object.freeze({ name: 'HTML & CSS', level: 92 }),
      Object.freeze({ name: 'Tailwind CSS', level: 86 }),
    ]),
  }),
  Object.freeze({
    key: 'backend',
    title: 'Backend',
    description: 'Reliable APIs and application logic built for maintainability.',
    skills: Object.freeze([
      Object.freeze({ name: 'Node.js', level: 84 }),
      Object.freeze({ name: 'Express', level: 82 }),
      Object.freeze({ name: 'REST APIs', level: 88 }),
      Object.freeze({ name: 'Authentication', level: 80 }),
    ]),
  }),
  Object.freeze({
    key: 'database',
    title: 'Database',
    description: 'Practical data modeling across relational and document stores.',
    skills: Object.freeze([
      Object.freeze({ name: 'MongoDB', level: 80 }),
      Object.freeze({ name: 'PostgreSQL', level: 78 }),
      Object.freeze({ name: 'MySQL', level: 76 }),
      Object.freeze({ name: 'Data Modeling', level: 82 }),
    ]),
  }),
  Object.freeze({
    key: 'tools',
    title: 'Tools',
    description: 'A focused workflow from local development through delivery.',
    skills: Object.freeze([
      Object.freeze({ name: 'Git & GitHub', level: 88 }),
      Object.freeze({ name: 'Vite', level: 86 }),
      Object.freeze({ name: 'Docker', level: 72 }),
      Object.freeze({ name: 'Figma', level: 74 }),
    ]),
  }),
])
