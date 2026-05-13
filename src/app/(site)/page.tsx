import type { Metadata } from 'next'
import Home from '~/_pages/Home/Home'

export const metadata: Metadata = {
  title: 'GELYOS | Développement web sur mesure',
  description:
    'Sites vitrines, e-commerce et applications web pensés pour la performance, le SEO et la conversion.',
  openGraph: {
    title: 'GELYOS | Développement web sur mesure',
    description:
      'Sites vitrines, e-commerce et applications web pensés pour la performance, le SEO et la conversion.',
    url: '/',
    images: ['/android-chrome-512x512.png'],
  },
}

export default function SiteHomePage() {
  return <Home />
}
