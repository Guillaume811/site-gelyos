import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from '@/app/router'
import '@/styles/main.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={<div style={{ padding: 16 }}>Loading…</div>}>
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>,
)
