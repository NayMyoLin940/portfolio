export const COLORS = Object.freeze({
  brand: Object.freeze({
    50: '#eef2ff',
    100: '#e0e7ff',
    200: '#c7d2fe',
    300: '#a5b4fc',
    400: '#818cf8',
    500: '#6366f1',
    600: '#4f46e5',
    700: '#4338ca',
    800: '#3730a3',
    900: '#312e81',
    950: '#1e1b4b',
  }),
  light: Object.freeze({
    background: '#ffffff',
    foreground: '#111827',
    surface: '#f8fafc',
    surfaceElevated: '#ffffff',
    muted: '#64748b',
    border: '#e2e8f0',
    accent: '#4f46e5',
    accentHover: '#4338ca',
    accentForeground: '#ffffff',
    focus: '#6366f1',
  }),
  dark: Object.freeze({
    background: '#0b1120',
    foreground: '#f8fafc',
    surface: '#111827',
    surfaceElevated: '#1e293b',
    muted: '#94a3b8',
    border: '#334155',
    accent: '#818cf8',
    accentHover: '#a5b4fc',
    accentForeground: '#0f172a',
    focus: '#a5b4fc',
  }),
})

export const TYPOGRAPHY = Object.freeze({
  fontFamily: Object.freeze({
    sans:
      'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif',
    display:
      'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif',
    mono: 'SFMono-Regular, Consolas, Liberation Mono, monospace',
  }),
  fontSize: Object.freeze({
    caption: '0.75rem',
    bodySmall: '0.875rem',
    body: '1rem',
    bodyLarge: '1.125rem',
    titleSmall: '1.5rem',
    title: 'clamp(1.875rem, 3vw, 2.5rem)',
    display: 'clamp(2.75rem, 7vw, 5.5rem)',
  }),
})

export const SPACING = Object.freeze({
  pageGutter: 'clamp(1rem, 4vw, 2rem)',
  section: 'clamp(4rem, 9vw, 8rem)',
  sectionSmall: 'clamp(2.5rem, 6vw, 5rem)',
  content: 'clamp(1.5rem, 3vw, 2.5rem)',
})

export const RADII = Object.freeze({
  xs: '0.25rem',
  sm: '0.375rem',
  md: '0.625rem',
  lg: '1rem',
  xl: '1.5rem',
  pill: '9999px',
})

export const SHADOWS = Object.freeze({
  soft: '0 1px 2px rgb(15 23 42 / 0.05), 0 8px 24px rgb(15 23 42 / 0.06)',
  raised:
    '0 4px 8px rgb(15 23 42 / 0.06), 0 20px 40px rgb(15 23 42 / 0.1)',
  floating:
    '0 12px 24px rgb(15 23 42 / 0.1), 0 32px 64px rgb(15 23 42 / 0.14)',
})

export const TRANSITIONS = Object.freeze({
  duration: Object.freeze({
    fast: 120,
    normal: 180,
    slow: 300,
  }),
  easing: Object.freeze({
    standard: Object.freeze([0.2, 0, 0, 1]),
    emphasized: Object.freeze([0.2, 0, 0, 1.2]),
    exit: Object.freeze([0.4, 0, 1, 1]),
  }),
})

export const THEME = Object.freeze({
  colors: COLORS,
  typography: TYPOGRAPHY,
  spacing: SPACING,
  radii: RADII,
  shadows: SHADOWS,
  transitions: TRANSITIONS,
})
