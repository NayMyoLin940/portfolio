function ProjectAction({ children, href, icon: Icon }) {
  const className =
    'focus-ring interactive inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-md border px-4 text-sm font-semibold sm:flex-none'

  if (!href) {
    return (
      <button
        className={`${className} cursor-not-allowed border-border bg-surface text-muted opacity-70`}
        disabled
        title="Add this project URL in src/data/projects.js"
        type="button"
      >
        <Icon aria-hidden="true" className="text-base" />
        {children}
      </button>
    )
  }

  return (
    <a
      className={`${className} border-border bg-background text-foreground hover:border-brand-300 hover:bg-surface hover:text-accent`}
      href={href}
      rel="noreferrer"
      target="_blank"
    >
      <Icon aria-hidden="true" className="text-base" />
      {children}
    </a>
  )
}

export default ProjectAction
