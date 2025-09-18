import { NavLink } from 'react-router-dom'
import clsx from 'clsx'
import styles from './MainNav.module.scss'

// Typage
type Props = {
    className?: string
}

export default function MainNav({ className }: Props) {
    const activeClass = ({ isActive }: { isActive: boolean }) => isActive ? styles.active : undefined

    return (
        <nav className={clsx(styles.navRoot, className)} aria-label="Main">
            <ul className={styles.list}>
                <li className={styles.link}><NavLink to="/service" className={activeClass}>Services</NavLink></li>
                <li className={styles.link}><NavLink to="/apropos" className={activeClass}>À propos</NavLink></li>
                <li className={styles.link}><NavLink to="/portfolio" className={activeClass}>Portfolio</NavLink></li>
                <li className={styles.link}><NavLink to="/blog" className={activeClass}>Blog</NavLink></li>
            </ul>
        </nav>
    )
}