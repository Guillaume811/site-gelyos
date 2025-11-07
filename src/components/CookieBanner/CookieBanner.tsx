import { useEffect, useState } from 'react'
import styles from './CookieBanner.module.scss'
import GA_MEASUREMENT_ID from '@/ressources/config/analytics'
import { OPEN_EVENT } from './cookieBannerControls'

const CONSENT_KEY = 'cookie-consent'
type ConsentValue = 'accepted' | 'refused'

function applyConsent(choice: ConsentValue) {
  if (typeof window === 'undefined') return
  const gtag = window.gtag
  if (typeof gtag !== 'function') return

  if (choice === 'accepted') {
    gtag('consent', 'update', { analytics_storage: 'granted' })
    gtag('config', GA_MEASUREMENT_ID, { send_page_view: false })
  } else {
    gtag('consent', 'update', { analytics_storage: 'denied' })
  }
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const stored = window.localStorage.getItem(CONSENT_KEY) as ConsentValue | null
    if (!stored) {
      setVisible(true)
    } else {
      applyConsent(stored)
    }

    const handleOpen = () => setVisible(true)
    window.addEventListener(OPEN_EVENT, handleOpen)

    return () => {
      window.removeEventListener(OPEN_EVENT, handleOpen)
    }
  }, [])

  const handleChoice = (choice: ConsentValue) => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(CONSENT_KEY, choice)
    }
    applyConsent(choice)
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className={styles.banner} role="dialog" aria-live="polite" aria-label="Bannière de consentement aux cookies">
      <div className={styles.text}>
        Nous utilisons des cookies pour mesurer l'audience et améliorer votre expérience. Vous pouvez accepter ou refuser l'utilisation des cookies analytiques.
        <a href="/mentions-legales#cookie" rel="noreferrer">
          En savoir plus
        </a>
      </div>
      <div className={styles.actions}>
        <button type="button" className={styles.secondary} onClick={() => handleChoice('refused')}>
          Tout refuser
        </button>
        <button type="button" className={styles.primary} onClick={() => handleChoice('accepted')}>
          Tout accepter
        </button>
      </div>
    </div>
  )
}
