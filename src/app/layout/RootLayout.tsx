import { NavLink, Outlet } from 'react-router-dom'
import styles from './RootLayout.module.scss'

export default function RootLayout() {
  return (
    <div className={styles.wrapper}>
      <nav className={styles.nav}>
        <div className={styles.navInner}>
          <div className={styles.brand}>🚀 React TS + Vite</div>
          <NavLink to="/" end className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>
            Home
          </NavLink>
          <NavLink to="/service" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>
            Service
          </NavLink>
          <NavLink to="/apropos" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>
            A propos
          </NavLink>
          <NavLink to="/portfolio" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>
            Portfolio
          </NavLink>
          <NavLink to="/blog" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>
            Blog
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>
            Contact
          </NavLink>
        </div>
      </nav>
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  )
}