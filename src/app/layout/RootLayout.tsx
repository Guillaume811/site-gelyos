import { useEffect } from 'react'
import { Outlet, useLocation  } from 'react-router-dom'
import { isAnalyticsEnabled } from '@/ressources/config/analytics'
import DesktopHeader from '@/components/DesktopHeader/DesktopHeader'
import CookieBanner from '@/components/CookieBanner/CookieBanner'
import CallToAction from '@/components/CallToAction/CallToAction'
import styles from './RootLayout.module.scss'
import Footer from '@/components/Footer/Footer'
import { ModalProjectProvider } from '@/components/ModalProject/providers/ModalProjectProvider'
import MobileHeader from '@/components/MobileHeader/MobileHeader'
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop'


export default function RootLayout() {

  const location = useLocation()
  const pathname = location.pathname
  const hideCta = pathname === '/contact'

  useEffect(() => {
    if (!isAnalyticsEnabled()) return
    if (typeof window === 'undefined') return
    const gtag = window.gtag
    if (typeof gtag !== 'function') return

    gtag('event', 'page_view', {
      page_path: location.pathname + location.search,
      page_location: window.location.href,
      page_title: document.title,
    })
  }, [location])

  return (
    <ModalProjectProvider>
      <ScrollToTop />
      <div className={styles.wrapper}>
        <MobileHeader />
        <DesktopHeader />
        <main className={styles.main}>
          <Outlet />
        </main>
        {!hideCta && <CallToAction />}
        <Footer />
      </div>
      <CookieBanner />
    </ModalProjectProvider>
    
  )
}
