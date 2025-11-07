import { Link } from 'react-router-dom'
import MainNav from '@components/MainNav/MainNav'
import { PrimaryButtonLink } from '@components/Buttons/ButtonLink'
import styles from './DesktopHeader.module.scss'
import logo from '@/assets/pictures/logo-long.webp'
import { useEffect, useState } from 'react'
import clsx from 'clsx'

export default function DesktopHeader() {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 0);
        onScroll(); // init
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <header 
            className={clsx(styles.header, scrolled && styles.scrolled)}
            role="banner"
            aria-label="En-tête du site"
        >
            <Link to="/" className={styles.brand} aria-label="Aller à l’accueil">
                    <img src={logo} alt="Logo GELYOS" className={styles.logo} />
            </Link>

            <MainNav className={styles.nav} />
            
            <PrimaryButtonLink to="/contact">
                Contact
            </PrimaryButtonLink>
        </header>   
    )
}