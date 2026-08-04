export const SKILL_GROUPS = Object.freeze([
  Object.freeze({
    key: 'frontend',
    title: 'Frontend',
    description: 'Responsive, accessible interfaces built with modern frameworks.',
    skills: Object.freeze([
      Object.freeze({ name: 'React', icon: 'react' }),
      Object.freeze({ name: 'Vue.js', icon: 'vue' }),
      Object.freeze({ name: 'JavaScript', icon: 'javascript' }),
      Object.freeze({ name: 'HTML5', icon: 'html' }),
      Object.freeze({ name: 'CSS3', icon: 'css' }),
      Object.freeze({ name: 'Tailwind CSS', icon: 'tailwind' }),
    ]),
  }),
  Object.freeze({
    key: 'backend',
    title: 'Backend',
    description: 'Server-side applications and RESTful services built to last.',
    skills: Object.freeze([
      Object.freeze({ name: 'Java', icon: 'java' }),
      Object.freeze({ name: 'PHP', icon: 'php' }),
      Object.freeze({ name: 'C#', icon: 'csharp' }),
      Object.freeze({ name: 'Node.js', icon: 'node' }),
      Object.freeze({ name: 'REST APIs', icon: 'api' }),
    ]),
  }),
  Object.freeze({
    key: 'database',
    title: 'Database',
    description: 'Relational data storage and practical schema design.',
    skills: Object.freeze([
      Object.freeze({ name: 'MySQL', icon: 'mysql' }),
      Object.freeze({ name: 'PostgreSQL', icon: 'postgresql' }),
    ]),
  }),
  Object.freeze({
    key: 'tools',
    title: 'Tools',
    description: 'A focused workflow from local development through deployment.',
    skills: Object.freeze([
      Object.freeze({ name: 'Git & GitHub', icon: 'github' }),
      Object.freeze({ name: 'Vite', icon: 'vite' }),
      Object.freeze({ name: 'Vercel', icon: 'vercel' }),
      Object.freeze({ name: 'Figma', icon: 'figma' }),
    ]),
  }),
])
