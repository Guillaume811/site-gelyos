import type { Metadata } from 'next'
import About from '~/_pages/About/About'

export const metadata: Metadata = {
  title: 'À propos de GELYOS | Studio de développement web',
  description:
    'Découvrez GELYOS, notre approche projet et notre méthode pour concevoir des expériences web performantes et orientées conversion.',
  alternates: {
    canonical: '/a-propos',
  },
  openGraph: {
    title: 'À propos de GELYOS | Studio de développement web',
    description:
      'Découvrez GELYOS, notre approche projet et notre méthode pour concevoir des expériences web performantes et orientées conversion.',
    url: '/a-propos',
    images: ['/android-chrome-512x512.png'],
  },
}

export default function AboutPage() {
  return <About />
}
