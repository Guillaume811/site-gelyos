import type { Metadata } from 'next'
import Services from '@/_pages/Services/Services'

export const metadata: Metadata = {
  title: 'Services GELYOS | Développement, maintenance et SEO',
  description:
    'Création de sites vitrines, e-commerce, applications web, maintenance et optimisation SEO pour faire croître votre activité.',
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Services GELYOS | Développement, maintenance et SEO',
    description:
      'Création de sites vitrines, e-commerce, applications web, maintenance et optimisation SEO pour faire croître votre activité.',
    url: '/services',
    images: ['/android-chrome-512x512.png'],
  },
}

export default function ServicesPage() {
  return <Services />
}
