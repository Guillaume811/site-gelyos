import type { Metadata } from 'next'
import Portfolio from '~/_pages/Portfolio/Portfolio'

export const metadata: Metadata = {
  title: 'Portfolio GELYOS | Réalisations web et applications',
  description:
    'Sélection de sites vitrines, e-commerce, applications web et missions freelance réalisés par GELYOS.',
  alternates: {
    canonical: '/portfolio',
  },
  openGraph: {
    title: 'Portfolio GELYOS | Réalisations web et applications',
    description:
      'Sélection de sites vitrines, e-commerce, applications web et missions freelance réalisés par GELYOS.',
    url: '/portfolio',
    images: ['/android-chrome-512x512.png'],
  },
}

export default function PortfolioPage() {
  return <Portfolio />
}
