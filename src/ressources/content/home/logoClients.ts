import logoEmi from '@/assets/logosClients/logo-emi.webp'
import logoPema from '@/assets/logosClients/logo.webp'
import logoLtdo from '@/assets/logosClients/ltdo-logo.webp'
import logoZozaPizza from '@/assets/logosClients/logo-zoza-pizza.webp'
import type { ImageContent } from '@/ressources/content/contentTypes'

export interface LogoClientItem {
  image: ImageContent
  link: string
}

export interface LogoClientsContent {
  title: string
  itemClient: LogoClientItem[]
}

export const logoClientsContent: LogoClientsContent = {
  title: 'Ils nous ont fait confiance',
  itemClient: [
    {
      image: {
        src: logoEmi,
        alt: 'Logo La Petite Emi',
      },
      link: 'https://la-petite-emi.fr/',
    },
    {
      image: {
        src: logoZozaPizza,
        alt: 'Logo Zoza Pizza',
      },
      link: 'https://zozapizza.fr/',
    },
    {
      image: {
        src: logoLtdo,
        alt: 'Logo La terrasse des Oliviers',
      },
      link: 'https://laterrasse-desoliviers.com/',
    },
    {
      image: {
        src: logoPema,
        alt: 'Logo Péma Bessège - Psychopraticienne',
      },
      link: 'https://pbtherapie.fr/',
    },
  ],
}
