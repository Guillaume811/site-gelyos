import type { Metadata } from 'next'
import '@/styles/main.scss'

export const metadata: Metadata = {
  metadataBase: new URL('https://gelyos.fr'),
  title: 'GELYOS - Developement sur mesure',
  description:
    'Studio GELYOS - creation de sites vitrines, e-commerce et applications web sur mesure.',
}

type RootLayoutProps = Readonly<{ children: React.ReactNode }>

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
