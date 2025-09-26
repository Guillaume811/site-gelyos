import { Outlet } from 'react-router-dom'
import DesktopHeader from '@/components/DesktopHeader/DesktopHeader'
import styles from './RootLayout.module.scss'
import Footer from '@/components/Footer/Footer'


export default function RootLayout() {
  return (
    <div className={styles.wrapper}>
      <DesktopHeader />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}