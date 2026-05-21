import type { Metadata } from 'next'
import Contact from '@/_pages/Contact/Contact'

export const metadata: Metadata = {
  title: 'Contact GELYOS | Discutons de votre projet web',
  description:
    'Parlez-nous de votre projet de site vitrine, e-commerce ou application web. RÃ©ponse rapide et accompagnement personnalisÃ©.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact GELYOS | Discutons de votre projet web',
    description:
      'Parlez-nous de votre projet de site vitrine, e-commerce ou application web. RÃ©ponse rapide et accompagnement personnalisÃ©.',
    url: '/contact',
    images: ['/android-chrome-512x512.png'],
  },
}

export default function ContactPage() {
  return <Contact />
}
