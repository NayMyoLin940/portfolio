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
