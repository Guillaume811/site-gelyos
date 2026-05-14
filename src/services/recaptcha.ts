let scriptPromise: Promise<void> | null = null

function loadRecaptcha(siteKey: string) {
  if (typeof window === 'undefined') {
    return Promise.reject(new Error('reCAPTCHA ne peut etre charge cote serveur.'))
  }

  if (!scriptPromise) {
    scriptPromise = new Promise<void>((resolve, reject) => {
      if (window.grecaptcha) {
        window.grecaptcha.ready(() => resolve())
        return
      }

      const script = document.createElement('script')
      script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`
      script.async = true
      script.defer = true
      script.onload = () => {
        if (!window.grecaptcha) {
          reject(new Error('reCAPTCHA non disponible apres chargement.'))
          return
        }
        window.grecaptcha.ready(() => resolve())
      }
      script.onerror = () => reject(new Error('Impossible de charger reCAPTCHA.'))
      document.head.appendChild(script)
    })
  }

  return scriptPromise
}

export async function getRecaptchaToken(action: string) {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
  if (!siteKey) {
    throw new Error(
      'La cle publique reCAPTCHA est manquante. Ajoutez NEXT_PUBLIC_RECAPTCHA_SITE_KEY dans .env.local.',
    )
  }

  await loadRecaptcha(siteKey)
  if (!window.grecaptcha) {
    throw new Error('reCAPTCHA indisponible.')
  }
  return window.grecaptcha.execute(siteKey, { action })
}
