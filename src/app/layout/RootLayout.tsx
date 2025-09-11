import { NavLink, Outlet } from 'react-router-dom'
import s from './RootLayout.module.scss'

export default function RootLayout() {
  return (
    <div className={s.wrapper}>
      <nav className={s.nav}>
        <div className={s.navInner}>
          <div className={s.brand}>🚀 React TS + Vite</div>
          <NavLink to="/" end className={({ isActive }) => [s.link, isActive && s.active].filter(Boolean).join(' ')}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => [s.link, isActive && s.active].filter(Boolean).join(' ')}>
            About
          </NavLink>
        </div>
      </nav>
      <main className={s.main}>
        <Outlet />
      </main>
    </div>
  )
}