'use client'

import { useEffect, type ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import { MemoryRouter } from 'react-router-dom'
import CookieBanner from '~/components/CookieBanner/CookieBanner'
import { ModalProjectProvider } from '~/components/ModalProject/providers/ModalProjectProvider'
import { isAnalyticsEnabled } from '~/ressources/config/analytics'
import styles from '~/app/layout/RootLayout.module.scss'
import DesktopHeaderNext from './navigation/DesktopHeaderNext'
import MobileHeaderNext from './navigation/MobileHeaderNext'
import CallToActionNext from './navigation/CallToActionNext'
import FooterNext from './navigation/FooterNext'

type SiteProvidersProps = {
  children: ReactNode
}

/* Component SiteProviders
 * Render logic:
 * - Uses Next-compatible public navigation components (header/nav/footer/cta).
 * - Keeps a temporary MemoryRouter only where legacy modal provider is still required.
 * - Preserves analytics page view behavior and scroll reset on pathname changes.
 *
 * View TSX:
 * - Renders global public shell and wraps page content with ModalProjectProvider.
 */
export default function SiteProviders({ children }: SiteProvidersProps) {
  const pathname = usePathname() ?? '/'

  useEffect(() => {
    if (typeof window === 'undefined') return

    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname])

  useEffect(() => {
    if (!isAnalyticsEnabled()) return
    if (typeof window === 'undefined') return

    const gtag = window.gtag
    if (typeof gtag !== 'function') return

    gtag('event', 'page_view', {
      page_path: `${pathname}${window.location.search}`,
      page_location: window.location.href,
      page_title: document.title,
    })
  }, [pathname])

  return (
    <>
      <div className={styles.wrapper}>
        <MobileHeaderNext />
        <DesktopHeaderNext />
        <main>
          <MemoryRouter key={pathname} initialEntries={[pathname]}>
            <ModalProjectProvider>{children}</ModalProjectProvider>
          </MemoryRouter>
        </main>
        {pathname !== '/contact' && <CallToActionNext />}
        <FooterNext />
      </div>
      <CookieBanner />
    </>
  )
}
