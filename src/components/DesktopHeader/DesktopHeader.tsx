import { Link } from 'react-router-dom'
import MainNav from '@components/MainNav/MainNav'
import { PrimaryButtonLink } from '@components/Buttons/ButtonLink'
import styles from './DesktopHeader.module.scss'
import logo from '@/assets/pictures/logo-long.png'

export default function DesktopHeader() {
    return (
        <header className={styles.header}>
            <Link to="/" className={styles.brand} aria-label="Go to homepage">
                    <img src={logo} alt="Logo GELYOS" className={styles.logo} />
            </Link>

            <MainNav className={styles.nav} />
            
            <PrimaryButtonLink to="/contact" className={styles.ctaButton}>
                Contact
            </PrimaryButtonLink>     
        </header>   
    )
}