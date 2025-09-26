import { Link } from 'react-router-dom'
import styles from './Footer.module.scss'
import logoUrl from '@/assets/pictures/logo-long.png'
import { getMainNavRoutes } from '@/ressources/routes'

// Icônes (place-les dans src/assets/icons/)
import phoneIcon from '@/assets/icons/phone.png'
import mailIcon from '@/assets/icons/mail.png'
import linkedinIcon from '@/assets/icons/linkedin.png'
import githubIcon from '@/assets/icons/github.png'


/* Component Footer
* Render logic :
* Uses "getMainNavRoutes()" to get the list of main navigation routes.
* External links (tel, mail, LinkedIn, GitHub) use proper aria-labels.

* View TSX :
* Returns a <footer> with a grid container of three columns:
*   -> Left column: brand logo linking to home + a short tagline.
*   -> Center column: a horizontal list of site links (from routes),
*      then legal links (Mentions légales, Confidentialité),
*      and a small copyright line.
*   -> Right column: 4 icon links (phone, email, LinkedIn, GitHub),
*      each as an <a> with an <img> inside, accessible and focusable.
*/
export default function Footer() {
  const navRoutes = getMainNavRoutes()

  return (
    <footer className={styles.footer}>
        <div className={styles.container}>
            {/* Left column */}
            <div className={styles.left}>
                <Link to="/" className={styles.logo}>
                <img src={logoUrl} alt="Logo GELYOS" />
                </Link>
                <p className={styles.tagline}>Construisons vos projets avec passion.</p>
            </div>

            {/* Center column */}
            <div className={styles.center}>
                <ul className={styles.links}>
                    {navRoutes.map((route) => (
                    <li key={route.name}>
                        <Link to={route.path}>{route.label}</Link>
                    </li>
                    ))}
                </ul>
                <div className={styles.legal}>
                    <Link to="/mentions-legales">Mentions légales</Link>
                    <Link to="/mentions-legales">Confidentialité</Link>
                </div>
                <p className={styles.copyright}>
                    Copyright © 2025 GELYOS
                </p>
            </div>

            {/* Right column */}
            <div className={styles.right}>
                <a href="tel:+33677637864" aria-label="Téléphone">
                    <img src={phoneIcon} alt="" aria-hidden="true" />
                </a>
                <a href="mailto:guillaumehuguet.gelyos@gmail.com" aria-label="Email">
                    <img src={mailIcon} alt="" aria-hidden="true" />
                </a>
                <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                >
                    <img src={linkedinIcon} alt="" aria-hidden="true" />
                </a>
                <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                >
                    <img src={githubIcon} alt="" aria-hidden="true" />
                </a>
            </div>
        </div>
    </footer>
  )
}