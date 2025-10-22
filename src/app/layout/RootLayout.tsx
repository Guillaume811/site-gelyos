import { Outlet, useLocation  } from 'react-router-dom'
import DesktopHeader from '@/components/DesktopHeader/DesktopHeader'
import CallToAction from '@/components/CallToAction/CallToAction'
import styles from './RootLayout.module.scss'
import Footer from '@/components/Footer/Footer'
import { ModalProjectProvider } from '@/components/ModalProject/providers/ModalProjectProvider'
import MobileHeader from '@/components/MobileHeader/MobileHeader'


export default function RootLayout() {

  const { pathname } = useLocation()
  const hideCta = pathname === '/contact'

  return (
    <ModalProjectProvider>
      <div className={styles.wrapper}>
        <MobileHeader />
        <DesktopHeader />
        <main className={styles.main}>
          <Outlet />
        </main>
        {!hideCta && <CallToAction />}
        <Footer />
      </div>
    </ModalProjectProvider>
    
  )
}