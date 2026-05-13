'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import clsx from 'clsx'
import logo from '~/assets/pictures/logo-long.webp'
import buttonStyles from '~/components/Buttons/Button.module.scss'
import styles from '~/components/DesktopHeader/DesktopHeader.module.scss'
import MainNavNext from './MainNavNext'

export default function DesktopHeaderNext() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={clsx(styles.header, scrolled && styles.scrolled)} role="banner" aria-label="En-tête du site">
      <Link href="/" className={styles.brand} aria-label="Aller à l’accueil">
        <img src={logo.src} alt="Logo GELYOS" className={styles.logo} />
      </Link>

      <MainNavNext className={styles.nav} />

      <Link href="/contact" className={`${buttonStyles.btn} ${buttonStyles.primary}`}>
        Contact
      </Link>
    </header>
  )
}
