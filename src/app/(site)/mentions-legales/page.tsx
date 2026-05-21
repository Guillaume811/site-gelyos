import type { Metadata } from 'next'
import MentionsLegales from '@/_pages/MentionsLegales/MentionsLegales'

export const metadata: Metadata = {
  title: 'Mentions légales | GELYOS',
  description:
    'Informations légales, hébergement, propriété intellectuelle et politique de confidentialité du site GELYOS.',
  alternates: {
    canonical: '/mentions-legales',
  },
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: 'Mentions légales | GELYOS',
    description:
      'Informations légales, hébergement, propriété intellectuelle et politique de confidentialité du site GELYOS.',
    url: '/mentions-legales',
    images: ['/android-chrome-512x512.png'],
  },
}

export default function MentionsLegalesPage() {
  return <MentionsLegales />
}

