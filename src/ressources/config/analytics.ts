const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID ?? 'G-VXTT8XHFGF'

export function isAnalyticsEnabled() {
  if (typeof window === 'undefined') return false
  return window.localStorage.getItem('cookie-consent') === 'accepted'
}

export default GA_MEASUREMENT_ID
