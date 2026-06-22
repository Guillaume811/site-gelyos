import type { Project } from '../types'

export const vitrineProjects: Project[] = [
    {
    order: 3,
    id: '0301',
    slug: 'projet-la-terrasse-des-oliviers',
    image: '/pictures/portfolio/sites-vitrine/ltdo/logo-ltdo.webp',
    client: 'La Terrasse des Oliviers',
    title: 'Site vitrine multilingue pour une résidence de vacances en Corse',
    shortDescription:
      "Site vitrine réalisé pour La Terrasse des Oliviers, résidence de caractère 3* située en Corse du Sud à Sagone, afin de présenter la maison, ses équipements, sa galerie photos et permettre aux voyageurs de consulter les disponibilités avant d’effectuer une demande de réservation.",
    category: 'vitrine',
    description:
      "Ce projet est un site vitrine réalisé pour La Terrasse des Oliviers, une résidence de caractère 3* située en Corse du Sud, à Sagone, à seulement 200 mètres de la mer. L’objectif du site est de valoriser la maison, son cadre et ses équipements afin d’offrir aux voyageurs une vision claire et rassurante de leur futur séjour.\n\nOn y retrouve une présentation complète de la résidence, de sa capacité d’accueil, de ses espaces de vie, de sa terrasse, de ses prestations et des informations pratiques liées à la location. Le site intègre également une galerie photos pour mettre en avant le lieu, un calendrier des disponibilités consultable en ligne ainsi qu’un système de demande de réservation.\n\nDisponible en trois langues, français, anglais et allemand, il permet de s’adresser à une clientèle plus large et de faciliter la préparation d’un séjour en Corse.",
    accordionItems: [
      {
        id: 'technologies',
        title: 'Technologies utilisées',
        description: [{ type: 'text', text: 'Site développé avec Next.js, React et TypeScript.' }],
      },
      {
        id: 'features',
        title: 'Fonctionnalités clés',
        description: [
          { type: 'text', text: 'Mise en valeur complète de la résidence et de ses équipements' },
          { type: 'lineBreak' },
          { type: 'lineBreak' },
          { type: 'lineBreak' },
          { type: 'text', text: 'Site multilingue' },
          { type: 'lineBreak' },
          { type: 'lineBreak' },
          { type: 'lineBreak' },
          { type: 'text', text: 'Formulaire de demande de réservation lié aux disponibilités' },
        ],
      },
    ],
    url: 'https://laterrasse-desoliviers.com/',
    carousel: [
      {
        id: '01',
        src: '/pictures/portfolio/sites-vitrine/ltdo/carousel/hero-section.webp',
        title: 'Hero section',
        alt: 'Hero section',
      },
      {
        id: '02',
        src: '/pictures/portfolio/sites-vitrine/ltdo/carousel/hero-section-mobile.webp',
        title: 'Hero section mobile',
        alt: 'Hero section mobile',
      },
      {
        id: '03',
        src: '/pictures/portfolio/sites-vitrine/ltdo/carousel/equipements.webp',
        title: 'Équipements',
        alt: 'Équipements',
      },
      {
        id: '04',
        src: '/pictures/portfolio/sites-vitrine/ltdo/carousel/equipements-mobile.webp',
        title: 'Équipements mobile',
        alt: 'Équipements mobile',
      },
      {
        id: '05',
        src: '/pictures/portfolio/sites-vitrine/ltdo/carousel/formulaire.webp',
        title: 'Formulaire de contact',
        alt: 'Formulaire de contact',
      },
      {
        id: '06',
        src: '/pictures/portfolio/sites-vitrine/ltdo/carousel/formulaire-mobile.webp',
        title: 'Formulaire de contact mobile',
        alt: 'Formulaire de contact mobile',
      },
    ],
  },
]
