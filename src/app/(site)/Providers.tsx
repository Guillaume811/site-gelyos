'use client'

import { useEffect, type ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import { MemoryRouter, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import RootLayout from '~/app/layout/RootLayout'

type RouterPathSyncProps = {
  target: string
}

function RouterPathSync({ target }: RouterPathSyncProps) {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const current = `${location.pathname}${location.search}`
    if (current !== target) {
      navigate(target, { replace: true })
    }
  }, [location.pathname, location.search, navigate, target])

  return null
}

type SiteProvidersProps = {
  children: ReactNode
}

/* Component SiteProviders
 * Render logic:
 * - Reuses the existing public RootLayout from the legacy router.
 * - Provides a temporary MemoryRouter context required by legacy navigation and providers.
 * - Keeps router pathname in sync with Next.js pathname/search for progressive migration.
 *
 * View TSX:
 * - Mounts MemoryRouter and sync helper.
 * - Renders legacy RootLayout with an Outlet child mapped to Next.js page content.
 */
export default function SiteProviders({ children }: SiteProvidersProps) {
  const pathname = usePathname() ?? '/'
  const target = pathname

  return (
    <MemoryRouter initialEntries={[target]}>
      <RouterPathSync target={target} />
      <Routes>
        <Route path="*" element={<RootLayout />}>
          <Route path="*" element={<>{children}</>} />
        </Route>
      </Routes>
    </MemoryRouter>
  )
}
