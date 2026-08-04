# Nay Myo Lin — Portfolio

🌐 **Live Demo:** [View My Portfolio](https://naymyolin.vercel.app/)

# Portfolio

A React portfolio project initialized with Vite and Tailwind CSS.

## Scripts

- `npm run dev` starts the development server.
- `npm run build` creates a production build.
- `npm run lint` runs Oxlint.
- `npm run preview` previews the production build.

## Source structure

```text
src/
├── app/                  Application root and app-level setup
├── assets/
│   ├── fonts/            Local font files
│   ├── icons/            SVG and icon assets
│   └── images/           Image assets
├── components/
│   ├── common/           Shared composed components
│   └── ui/               Reusable UI primitives
├── constants/            Shared constants
├── context/              React context providers
├── data/                 Local application data
├── hooks/                Reusable React hooks
├── layouts/              Page layout components
├── pages/                Route-level page components
├── routes/               Route definitions
├── services/             API and external service integrations
├── styles/               Global and shared styles
├── utils/                Utility functions
└── main.jsx              Application entry point
```

Imports from `src` can use the `@` alias, for example `@/components`.

## Design system

Design tokens live in `src/styles/tokens.css` and generate Tailwind utilities for
typography, colors, spacing, radius, shadows, and transitions. Semantic colors
support light mode by default and dark mode through `data-theme="dark"` on the
document root.

Reusable composition utilities live in `src/styles/utilities.css`:

- `page-container`
- `section-block` and `section-block-sm`
- `content-stack`
- `heading-display` and `heading-section`
- `body-copy`
- `surface-card`
- `focus-ring`
- `interactive`

Equivalent JavaScript values for Framer Motion and application logic are exported
from `src/constants/theme.js`.
