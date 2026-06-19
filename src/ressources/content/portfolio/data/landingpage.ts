import type { Project } from '../types'

export const landingpageProjects: Project[] = [
    {
    order: 1,
    id: '0401',
    slug: 'projet-pema-bessege-psychopraticienne',
    image: '/pictures/portfolio/landingpage/pemaBessege/logo-pema.webp',
    client: 'Péma Bessège - Psychopraticienne',
    title: 'Landing page pour une psychopraticienne à Aix-en-Provence',
    shortDescription:
      "Landing page réalisée pour Péma Bessège, psychopraticienne à Aix-en-Provence, afin de présenter son accompagnement, son approche bienveillante et confidentielle, et faciliter la prise de contact pour les personnes en recherche d’un espace d’écoute.",
    category: 'landingpage',
    description:
      "Ce projet est une landing page réalisée pour Péma Bessège, psychopraticienne à Aix-en-Provence, qui souhaitait développer sa présence en ligne et proposer un premier point de contact clair, rassurant et professionnel.\n\nL’objectif du site est de présenter son activité, son approche thérapeutique et les différentes situations pour lesquelles elle accompagne ses patients : anxiété, stress, manque de confiance en soi, hypersensibilité, périodes de vie difficiles ou encore difficultés relationnelles.\n\nLa page met en avant un univers sobre, doux et apaisant, pensé pour instaurer un climat de confiance dès les premières secondes. Elle permet également de retrouver facilement les informations essentielles, comme le déroulement des séances, les modalités de consultation, le tarif, l’adresse du cabinet et le formulaire de contact.",
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
          { type: 'text', text: 'Présentation claire et attrayante de l’approche thérapeutique.' },
          { type: 'lineBreak' },
          { type: 'lineBreak' },
          { type: 'text', text: 'Formulaire de contact intuitif et facile à utiliser.' },
          { type: 'lineBreak' },
          { type: 'lineBreak' },
          { type: 'text', text: 'Informations détaillées sur les séances et les modalités de consultation.' },
        ],
      },
    ],
    url: 'https://pbtherapie.fr/',
    carousel: [
      {
        id: '01',
        src: '/pictures/portfolio/landingpage/pemaBessege/carousel/hero-section.webp',
        title: 'Hero section',
        alt: 'Hero section',
      },
      {
        id: '02',
        src: '/pictures/portfolio/landingpage/pemaBessege/carousel/hero-section-mobile.webp',
        title: 'Hero section mobile',
        alt: 'Hero section mobile',
      },
      {
        id: '03',
        src: '/pictures/portfolio/landingpage/pemaBessege/carousel/pourquoi-consulter.webp',
        title: 'Pourquoi consulter',
        alt: 'Pourquoi consulter',
      },
      {
        id: '04',
        src: '/pictures/portfolio/landingpage/pemaBessege/carousel/pourquoi-consulter-mobile.webp',
        title: 'Pourquoi consulter mobile',
        alt: 'Pourquoi consulter mobile',
      },
      {
        id: '05',
        src: '/pictures/portfolio/landingpage/pemaBessege/carousel/formulaire.webp',
        title: 'Formulaire de contact',
        alt: 'Formulaire de contact',
      },
      {
        id: '06',
        src: '/pictures/portfolio/landingpage/pemaBessege/carousel/formulaire-mobile.webp',
        title: 'Formulaire de contact mobile',
        alt: 'Formulaire de contact mobile',
      },
    ],
  },
]
