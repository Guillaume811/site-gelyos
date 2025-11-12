import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';
import logoUrl from '@/assets/pictures/logo-long.webp';
import { getMainNavRoutes } from '@/ressources/routes';

import phoneIcon from '@/assets/icons/phone.webp';
import mailIcon from '@/assets/icons/mail.webp';
import linkedinIcon from '@/assets/icons/linkedin.webp';
import maltIcon from '@/assets/icons/iconMalt.webp';

export default function Footer() {
  const navRoutes = getMainNavRoutes();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.left}>
          <Link to="/" className={styles.logo}>
            <img src={logoUrl} alt="Logo GELYOS" />
          </Link>
          <p className={styles.tagline}>Construisons vos projets avec passion.</p>
        </div>

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
            <Link to="/mentions-legales#confidential">Confidentialité</Link>
          </div>

          <p className={styles.copyright}>
            Copyright © {currentYear} GELYOS
          </p>
        </div>

        <div className={styles.right}>
          <a href="tel:+33677637864" aria-label="Telephone">
            <img src={phoneIcon} alt="" aria-hidden="true" />
          </a>
          <a href="mailto:guillaumehuguet.gelyos@gmail.com" aria-label="Email">
            <img src={mailIcon} alt="" aria-hidden="true" />
          </a>
          <a
            href="https://www.linkedin.com/in/guillaume-huguet/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <img src={linkedinIcon} alt="" aria-hidden="true" />
          </a>
          <a
            href="https://www.malt.fr/profile/guillaumehuguet1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Malt"
          >
            <img src={maltIcon} alt="" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}
