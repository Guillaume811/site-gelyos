import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import router from '~/app/router'
import '~/styles/main.scss'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <Suspense fallback={<div style={{ padding: 16 }}>Loading...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </HelmetProvider>
  </StrictMode>,
)
