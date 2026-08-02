function SectionFallback({ label }) {
  return (
    <div
      aria-label={`Loading ${label} section`}
      className="page-container grid min-h-80 place-items-center"
      role="status"
    >
      <span
        aria-hidden="true"
        className="size-8 animate-spin rounded-full border-2 border-brand-200 border-t-accent motion-reduce:animate-none"
      />
    </div>
  )
}

export default SectionFallback
