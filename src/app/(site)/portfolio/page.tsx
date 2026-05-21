import type { Metadata } from 'next'
import Portfolio from '@/_pages/Portfolio/Portfolio'

export const metadata: Metadata = {
  title: 'Portfolio GELYOS | RÃ©alisations web et applications',
  description:
    'SÃ©lection de sites vitrines, e-commerce, applications web et missions freelance rÃ©alisÃ©s par GELYOS.',
  alternates: {
    canonical: '/portfolio',
  },
  openGraph: {
    title: 'Portfolio GELYOS | RÃ©alisations web et applications',
    description:
      'SÃ©lection de sites vitrines, e-commerce, applications web et missions freelance rÃ©alisÃ©s par GELYOS.',
    url: '/portfolio',
    images: ['/android-chrome-512x512.png'],
  },
}

export default function PortfolioPage() {
  return <Portfolio />
}
