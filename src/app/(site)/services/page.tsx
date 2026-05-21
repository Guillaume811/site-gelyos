import type { Metadata } from 'next'
import Services from '@/_pages/Services/Services'

export const metadata: Metadata = {
  title: 'Services GELYOS | DÃ©veloppement, maintenance et SEO',
  description:
    'CrÃ©ation de sites vitrines, e-commerce, applications web, maintenance et optimisation SEO pour faire croÃ®tre votre activitÃ©.',
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Services GELYOS | DÃ©veloppement, maintenance et SEO',
    description:
      'CrÃ©ation de sites vitrines, e-commerce, applications web, maintenance et optimisation SEO pour faire croÃ®tre votre activitÃ©.',
    url: '/services',
    images: ['/android-chrome-512x512.png'],
  },
}

export default function ServicesPage() {
  return <Services />
}
