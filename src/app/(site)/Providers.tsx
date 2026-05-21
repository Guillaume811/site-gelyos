'use client'

import { useEffect, type ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import CookieBanner from '@/components/CookieBanner/CookieBanner'
import { ModalProjectProviderNext } from '@/components/ModalProject/providers/ModalProjectProviderNext'
import { isAnalyticsEnabled } from '@/ressources/config/analytics'
import styles from './Providers.module.scss'
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
 * - Uses a Next-compatible modal provider without react-router-dom dependency.
 * - Preserves analytics page view behavior and scroll reset on pathname changes.
 *
 * View TSX:
 * - Renders global public shell and wraps page content with ModalProjectProviderNext.
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
          <ModalProjectProviderNext>{children}</ModalProjectProviderNext>
        </main>
        {pathname !== '/contact' && <CallToActionNext />}
        <FooterNext />
      </div>
      <CookieBanner />
    </>
  )
}
