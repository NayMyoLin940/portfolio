import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from '@/app/App.jsx'
import { ThemeProvider } from '@/context'
import '@/styles/globals.css'

const root = createRoot(document.getElementById('root'))

root.render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)

requestAnimationFrame(() => {
  const loader = document.getElementById('app-loader')

  if (!loader) return

  const removeLoader = () => loader.remove()

  loader.classList.add('app-loader--hidden')
  loader.addEventListener('transitionend', removeLoader, { once: true })
  window.setTimeout(removeLoader, 500)
})
