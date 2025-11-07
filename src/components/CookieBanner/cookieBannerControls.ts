const OPEN_EVENT = 'cookie-banner:open'

export function openCookieBanner() {
  if (typeof window === 'undefined') return
  window.dispatchEvent(new Event(OPEN_EVENT))
}

export { OPEN_EVENT }
