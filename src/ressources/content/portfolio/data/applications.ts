import type { Project } from '../types'

export const applicationProjects: Project[] = [
  {
    order: 0,
    id: '0101',
    slug: 'projet-gamegenius',
    image: '/pictures/portfolio/applications/gamegenius/logo_gamegenius.webp',
    client: 'GameGenius',
    title: 'Application de génération de compétitions',
    shortDescription:
      "Application Android développée en autodidacte pour apprendre la programmation orienté object en Java. Elle permet de créer des compétitions (championnats, coupes, tournois), d'entrer les scores et de suivre le classement en temps réel.",
    category: 'application',
    description:
      "Cette application Android est le projet que j'ai réalisé à la fin de ma formation en autodidacte, avec pour objectif d'apprendre et de mettre en pratique la programation orientée objet en Java.\n\nElle permet de générer différents types de compétitions : championnats, coupes ou tournois. L'utilisateur choisit le format, saisit le nom des joueurs ou des équipes, puis renseigne les scores des matches.\n\nL'application se charge ensuite de calculer automatiquement les points en cas de victoire, de defaite ou de match nul et met à jour le classement instantanément. Cela permet aux joueurs de suivre l'évolution de la compétition en temps réel.\n\nL'application est publiée sur le Play Store et disponible uniquement sur Android.",
    accordionItems: [
      {
        id: 'technologies',
        title: 'Technologies utilisées',
        description: [{ type: 'text', text: 'Application développée en Java avec Android Studio' }],
      },
      {
        id: 'features',
        title: 'Fonctionnalités clés',
        description: [
          { type: 'text', text: 'Génération de compétitions sous forme de championnats, coupes ou tournois' },
          { type: 'lineBreak' },
          { type: 'lineBreak' },
          { type: 'lineBreak' },
          { type: 'text', text: 'Saisie des joueurs ou des équipes' },
          { type: 'lineBreak' },
          { type: 'lineBreak' },
          { type: 'lineBreak' },
          { type: 'text', text: 'Enregistrement des scores des matches' },
          { type: 'lineBreak' },
          { type: 'lineBreak' },
          { type: 'lineBreak' },
          { type: 'text', text: 'Calcul automatique des points (victoire, defaite, match nul)' },
          { type: 'lineBreak' },
          { type: 'lineBreak' },
          { type: 'lineBreak' },
          { type: 'text', text: 'Classement mis à jour instantanément' },
          { type: 'lineBreak' },
          { type: 'lineBreak' },
          { type: 'lineBreak' },
          { type: 'text', text: 'Suivi de la compétition en temps réel par les joueurs' },
        ],
      },
      {
        id: 'defis',
        title: 'Défis',
        description: [
          {
            type: 'text',
            text: "Projet de fin de formation réalisé en autodidacte, conçu pour mettre en pratique la programmation orientée objet en Java dans une application Android concrète.",
          },
        ],
      },
    ],
    url: '',
    carousel: [
      {
        id: '01',
        src: '/pictures/portfolio/applications/gamegenius/carousel/select_compet.webp',
        title: 'Sélection du type de compétition',
        alt: 'Sélection du type de compétition',
      },
      {
        id: '02',
        src: '/pictures/portfolio/applications/gamegenius/carousel/input_player.webp',
        title: 'Sélections des joueurs ou équipes',
        alt: 'Sélections des joueurs ou équipes',
      },
      {
        id: '03',
        src: '/pictures/portfolio/applications/gamegenius/carousel/tournoi.webp',
        title: 'Tournoi',
        alt: 'Tournoi',
      },
      {
        id: '04',
        src: '/pictures/portfolio/applications/gamegenius/carousel/championship.webp',
        title: 'Championnat',
        alt: 'Championnat',
      },
      {
        id: '05',
        src: '/pictures/portfolio/applications/gamegenius/carousel/cup.webp',
        title: 'Coupe',
        alt: 'Coupe',
      },
      {
        id: '06',
        src: '/pictures/portfolio/applications/gamegenius/carousel/input_score.webp',
        title: 'Sélection du score',
        alt: 'Sélection du score',
      },
      {
        id: '07',
        src: '/pictures/portfolio/applications/gamegenius/carousel/winner.webp',
        title: 'Gagnant de la compétition',
        alt: 'Gagnant de la compétition',
      },
    ],
  },
]
