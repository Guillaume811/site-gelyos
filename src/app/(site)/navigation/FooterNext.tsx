'use client'

import Link from 'next/link'
import styles from './FooterNext.module.scss'
import logoUrl from '~/assets/pictures/logo-long.webp'
import { getMainNavRoutes } from '~/ressources/routes'
import phoneIcon from '~/assets/icons/phone.webp'
import mailIcon from '~/assets/icons/mail.webp'
import linkedinIcon from '~/assets/icons/linkedin.webp'
import maltIcon from '~/assets/icons/iconMalt.webp'

export default function FooterNext() {
  const navRoutes = getMainNavRoutes()
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.left}>
          <Link href="/" className={styles.logo}>
            <img src={logoUrl.src} alt="Logo GELYOS" />
          </Link>
          <p className={styles.tagline}>Construisons vos projets avec passion.</p>
        </div>

        <div className={styles.center}>
          <ul className={styles.links}>
            {navRoutes.map((route) => (
              <li key={route.name}>
                <Link href={route.path}>{route.label}</Link>
              </li>
            ))}
          </ul>

          <div className={styles.legal}>
            <Link href="/mentions-legales">Mentions légales</Link>
            <Link href="/mentions-legales#confidential">Confidentialité</Link>
          </div>

          <p className={styles.copyright}>Copyright © {currentYear} GELYOS</p>
        </div>

        <div className={styles.right}>
          <a href="tel:+33677637864" aria-label="Telephone">
            <img src={phoneIcon.src} alt="" aria-hidden="true" />
          </a>
          <a href="mailto:guillaumehuguet.gelyos@gmail.com" aria-label="Email">
            <img src={mailIcon.src} alt="" aria-hidden="true" />
          </a>
          <a
            href="https://www.linkedin.com/in/guillaume-huguet/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <img src={linkedinIcon.src} alt="" aria-hidden="true" />
          </a>
          <a
            href="https://www.malt.fr/profile/guillaumehuguet1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Malt"
          >
            <img src={maltIcon.src} alt="" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}
