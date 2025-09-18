import { Outlet } from 'react-router-dom'
import DesktopHeader from '@/components/DesktopHeader/DesktopHeader'
import styles from './RootLayout.module.scss'


export default function RootLayout() {
  return (
    <div className={styles.wrapper}>
      <DesktopHeader />
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  )
}