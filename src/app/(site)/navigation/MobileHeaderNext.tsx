'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion, type Variants } from 'framer-motion'
import { getAllExceptMentions, type RouteItem } from '~/ressources/routes'
import clsx from 'clsx'
import styles from './MobileHeaderNext.module.scss'
import logo from '~/assets/pictures/logo-long.webp'
import linkedinIcon from '~/assets/icons/linkedin-contact.webp'
import maltIcon from '~/assets/icons/malt.webp'

function isPathActive(pathname: string, routePath: string) {
  if (routePath === '/') return pathname === '/'
  return pathname.startsWith(routePath)
}

export default function MobileHeaderNext() {
  const pathname = usePathname() ?? '/'
  const [isOpen, setIsOpen] = useState(false)
  const items: RouteItem[] = useMemo(() => getAllExceptMentions(), [])

  const panelVariants: Variants = {
    open: { x: 0, transition: { type: 'tween', duration: 0.25 } },
    closed: { x: '100%', transition: { type: 'tween', duration: 0.2 } },
  }

  const listVariants: Variants = {
    open: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
    closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
  }

  const itemVariants: Variants = {
    open: { y: 0, opacity: 1, transition: { duration: 0.25, ease: 'easeOut' } },
    closed: { y: 40, opacity: 0, transition: { duration: 0.18, ease: 'easeIn' } },
  }

  return (
    <header
      className={styles.header}
      role="banner"
      aria-label="En-tête du site"
      data-open={isOpen ? 'true' : 'false'}
    >
      <div className={styles.container}>
        <Link href="/" className={styles.brand} aria-label="Aller à l’accueil">
          <span className={styles.logoWrap}>
            <img src={logo.src} alt="Logo GELYOS" className={styles.logo} />
          </span>
        </Link>

        <div className={styles.actions} aria-label="Actions rapides">
          <a
            href="tel:+33677637864"
            className={clsx(styles.iconBtn, styles.phoneBtn)}
            aria-label="Appeler"
            title="Appeler"
          >
            <svg viewBox="0 0 24 24" className={styles.icon} aria-hidden="true">
              <path d="M22 16.92v2a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 11.19 18a19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 3.08 4.18 2 2 0 0 1 5.11 2h2a2 2 0 0 1 2 1.72c.12.86.31 1.7.57 2.5a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.58-1.14a2 2 0 0 1 2.11-.45c.8.26 1.64.45 2.5.57A2 2 0 0 1 22 16.92Z" />
            </svg>
          </a>

          <Link
            href="/contact"
            className={clsx(styles.iconBtn, styles.mailBtn)}
            aria-label="Aller à la page Contact"
            title="Contact"
          >
            <svg viewBox="0 0 24 24" className={styles.icon} aria-hidden="true">
              <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm0 0 8 7 8-7" />
            </svg>
          </Link>

          <button
            type="button"
            className={styles.iconBtn}
            aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? (
              <svg viewBox="0 0 24 24" className={styles.icon} aria-hidden="true">
                <path d="M6 6L18 18M6 18L18 6" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className={styles.icon} aria-hidden="true">
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.button
            key="backdrop"
            type="button"
            className={styles.backdrop}
            aria-label="Fermer le menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      <motion.nav
        className={styles.panel}
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        variants={panelVariants}
        aria-label="Menu principal"
      >
        <motion.ul className={styles.menu} variants={listVariants}>
          {items.map((route) => {
            const active = isPathActive(pathname, route.path)

            return (
              <motion.li key={route.path} className={styles.menuItem} variants={itemVariants}>
                <Link
                  href={route.path}
                  className={clsx(styles.menuLink, active && styles.active)}
                  aria-current={active ? 'page' : undefined}
                  onClick={() => setIsOpen(false)}
                >
                  {route.label}
                </Link>
              </motion.li>
            )
          })}
        </motion.ul>

        <div className={styles.panelFooter}>
          <div className={styles.socialBox} role="group" aria-label="Réseaux sociaux">
            <a
              href="https://www.linkedin.com/in/guillaume-huguet/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <img src={linkedinIcon.src} alt="LinkedIn" className={styles.socialIconLinkedin} width={32} height={32} />
            </a>

            <a
              href="https://www.malt.fr/profile/guillaumehuguet1"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Malt"
              title="Malt"
            >
              <img src={maltIcon.src} alt="Malt" className={styles.socialIconMalt} width={32} height={32} />
            </a>
          </div>
        </div>
      </motion.nav>
    </header>
  )
}
