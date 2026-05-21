import type { Project } from '../types'

export const ecommerceProjects: Project[] = [
  {
    order: 1,
    id: '0201',
    slug: 'projet-la-petite-emi',
    image: '/pictures/portfolio/ecommerce/laPetiteEmi/logo-emi.webp',
    client: 'La Petite Emi',
    title: 'Boutique en ligne de bougies, bijoux et impression lasers',
    shortDescription:
      "Boutique en ligne rÃ©alisÃ©e avec Wordpress et WooComerce pour la petite Emi, crÃ©atrice indÃ©pendante de bougies, bijoux et object gravÃ©s au laser, autour d'un univers artisanal, Ã©thique et plein de douceurs.",
    category: 'ecommerce',
    description:
      "Ce projet est une boutique en ligne rÃ©alisÃ©e pour la petite Emi, une crÃ©atrice indÃ©pendante qui conÃ§oit des bougies, des bijoux et des impressions laser.\n\nL'objectif du site est de prÃ©senter ses crÃ©ations artisanales et de mettre en avant son univers : des piÃ¨ces fabriquÃ©es Ã  la main, Ã©thiques et pleines de douceur. On y retrouve des bougies naturelles, des bijoux en bois et des objets gravÃ©s sur-mesure, pensÃ©s comme des cadeaux uniques.\n\nLa boutique repose sur Wordpress et Woocommerce, afin de pouvoir gÃ©rer facilement les produits et organiser les diffÃ©rentes catÃ©gories de crÃ©ations.",
    accordionItems: [
      {
        id: 'technologies',
        title: 'Technologies utilisÃ©es',
        description: [{ type: 'text', text: 'Site dÃ©veloppÃ© avec WordPress et WooCommerce.' }],
      },
      {
        id: 'features',
        title: 'FonctionnalitÃ©s clÃ©s',
        description: [
          { type: 'text', text: 'Boutique en ligne dÃ©diÃ©e aux crÃ©ations de la petit emi' },
          { type: 'lineBreak' },
          { type: 'lineBreak' },
          { type: 'text', text: 'Mise en avant des bougies naturelles, des bijoux en bois et des objets gravÃ©s au laser' },
          { type: 'lineBreak' },
          { type: 'lineBreak' },
          { type: 'text', text: 'Contenus pensÃ©s pour reflÃ©ter un univers artisanal, Ã©thique et plein de douceur' },
        ],
      },
      {
        id: 'result',
        title: 'RÃ©sultats',
        description: [{ type: 'text', text: 'Site livrÃ© dans les temps, Client satisfait' }],
      },
    ],
    url: 'https://la-petite-emi.fr/',
    carousel: [
      {
        id: '01',
        src: '/pictures/portfolio/ecommerce/laPetiteEmi/carousel/hero-section.webp',
        title: 'Hero section',
        alt: 'Hero section',
      },
      {
        id: '02',
        src: '/pictures/portfolio/ecommerce/laPetiteEmi/carousel/gamme-produit.webp',
        title: 'Gamme de produits',
        alt: 'Gamme de produits',
      },
      {
        id: '03',
        src: '/pictures/portfolio/ecommerce/laPetiteEmi/carousel/liste-produits.webp',
        title: 'Liste des produits',
        alt: 'Liste des produits',
      },
      {
        id: '04',
        src: '/pictures/portfolio/ecommerce/laPetiteEmi/carousel/produit.webp',
        title: 'Image produit',
        alt: 'Image produit',
      },
      {
        id: '05',
        src: '/pictures/portfolio/ecommerce/laPetiteEmi/carousel/description.webp',
        title: 'Description produit',
        alt: 'Description produit',
      },
      {
        id: '06',
        src: '/pictures/portfolio/ecommerce/laPetiteEmi/carousel/panier.webp',
        title: "Panier d'achat",
        alt: "Panier d'achat",
      },
    ],
  },
]
