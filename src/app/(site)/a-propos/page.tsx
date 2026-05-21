import type { Metadata } from 'next'
import About from '@/_pages/About/About'

export const metadata: Metadata = {
  title: 'Ã€ propos de GELYOS | Studio de dÃ©veloppement web',
  description:
    'DÃ©couvrez GELYOS, notre approche projet et notre mÃ©thode pour concevoir des expÃ©riences web performantes et orientÃ©es conversion.',
  alternates: {
    canonical: '/a-propos',
  },
  openGraph: {
    title: 'Ã€ propos de GELYOS | Studio de dÃ©veloppement web',
    description:
      'DÃ©couvrez GELYOS, notre approche projet et notre mÃ©thode pour concevoir des expÃ©riences web performantes et orientÃ©es conversion.',
    url: '/a-propos',
    images: ['/android-chrome-512x512.png'],
  },
}

export default function AboutPage() {
  return <About />
}
