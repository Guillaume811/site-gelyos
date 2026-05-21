import type { Metadata } from 'next'
import MentionsLegales from '@/_pages/MentionsLegales/MentionsLegales'

export const metadata: Metadata = {
  title: 'Mentions lÃ©gales | GELYOS',
  description:
    'Informations lÃ©gales, hÃ©bergement, propriÃ©tÃ© intellectuelle et politique de confidentialitÃ© du site GELYOS.',
  alternates: {
    canonical: '/mentions-legales',
  },
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: 'Mentions lÃ©gales | GELYOS',
    description:
      'Informations lÃ©gales, hÃ©bergement, propriÃ©tÃ© intellectuelle et politique de confidentialitÃ© du site GELYOS.',
    url: '/mentions-legales',
    images: ['/android-chrome-512x512.png'],
  },
}

export default function MentionsLegalesPage() {
  return <MentionsLegales />
}

