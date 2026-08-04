import { useEffect, useRef } from 'react'
import { FiDownload, FiFileText } from 'react-icons/fi'

function DownloadConfirmDialog({ href, onClose }) {
  const dialogRef = useRef(null)

  useEffect(() => {
    const dialog = dialogRef.current
    dialog?.showModal()

    return () => {
      if (dialog?.open) dialog.close()
    }
  }, [])

  const closeDialog = () => {
    dialogRef.current?.close()
    onClose()
  }

  return (
    <dialog
      aria-labelledby="cv-download-title"
      className="m-auto w-[min(92vw,28rem)] rounded-xl border border-border bg-background p-0 text-foreground shadow-floating backdrop:bg-slate-950/65 backdrop:backdrop-blur-sm"
      onCancel={(event) => {
        event.preventDefault()
        closeDialog()
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) closeDialog()
      }}
      ref={dialogRef}
    >
      <div className="p-6 sm:p-7">
        <span className="accent-tile grid size-12 place-items-center rounded-lg text-xl">
          <FiFileText aria-hidden="true" />
        </span>
        <h2
          className="mt-5 font-display text-xl font-bold text-foreground"
          id="cv-download-title"
        >
          Download CV?
        </h2>
        <p className="mt-3 text-body-sm text-muted">
          This will download Nay Myo Lin&apos;s CV as a PDF file.
        </p>
        <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
          <button
            className="focus-ring interactive min-h-11 rounded-md border border-border bg-background px-5 text-sm font-semibold text-foreground hover:bg-surface"
            onClick={closeDialog}
            type="button"
          >
            Cancel
          </button>
          <a
            className="focus-ring interactive inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-accent px-5 text-sm font-semibold text-accent-foreground hover:bg-accent-hover"
            download
            href={href}
            onClick={closeDialog}
          >
            <FiDownload aria-hidden="true" />
            Download PDF
          </a>
        </div>
      </div>
    </dialog>
  )
}

export default DownloadConfirmDialog
