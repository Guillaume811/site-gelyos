import type { Project } from '../types'

export const applicationProjects: Project[] = [
  {
    order: 0,
    id: '0101',
    slug: 'projet-gamegenius',
    image: '/pictures/portfolio/applications/gamegenius/logo_gamegenius.webp',
    client: 'GameGenius',
    title: 'Application de gÃ©nÃ©ration de compÃ©titions',
    shortDescription:
      "Application Android dÃ©veloppÃ©e en autodidacte pour apprendre la programmation orientÃ© object en Java. Elle permet de crÃ©er des compÃ©titions (championnats, coupes, tournois), d'entrer les scores et de suivre le classement en temps rÃ©el.",
    category: 'application',
    description:
      "Cette application Android est le projet que j'ai rÃ©alisÃ© Ã  la fin de ma formation en autodidacte, avec pour objectif d'apprendre et de mettre en pratique la programation orientÃ©e objet en Java.\n\nElle permet de gÃ©nÃ©rer diffÃ©rents types de compÃ©titions : championnats, coupes ou tournois. L'utilisateur choisit le format, saisit le nom des joueurs ou des Ã©quipes, puis renseigne les scores des matches.\n\nL'application se charge ensuite de calculer automatiquement les points en cas de victoire, de defaite ou de match nul et met Ã  jour le classement instantanÃ©ment. Cela permet aux joueurs de suivre l'Ã©volution de la compÃ©tition en temps rÃ©el.\n\nL'application est publiÃ©e sur le Play Store et disponible uniquement sur Android.",
    accordionItems: [
      {
        id: 'technologies',
        title: 'Technologies utilisÃ©es',
        description: [{ type: 'text', text: 'Application dÃ©veloppÃ©e en Java avec Android Studio' }],
      },
      {
        id: 'features',
        title: 'FonctionnalitÃ©s clÃ©s',
        description: [
          { type: 'text', text: 'GÃ©nÃ©ration de compÃ©titions sous forme de championnats, coupes ou tournois' },
          { type: 'lineBreak' },
          { type: 'lineBreak' },
          { type: 'text', text: 'Saisie des joueurs ou des Ã©quipes' },
          { type: 'lineBreak' },
          { type: 'lineBreak' },
          { type: 'text', text: 'Enregistrement des scores des matches' },
          { type: 'lineBreak' },
          { type: 'lineBreak' },
          { type: 'text', text: 'Calcul automatique des points (victoire, defaite, match nul)' },
          { type: 'lineBreak' },
          { type: 'lineBreak' },
          { type: 'text', text: 'Classement mis Ã  jour instantanÃ©ment' },
          { type: 'lineBreak' },
          { type: 'lineBreak' },
          { type: 'text', text: 'Suivi de la compÃ©tition en temps rÃ©el par les joueurs' },
        ],
      },
      {
        id: 'defis',
        title: 'DÃ©fis',
        description: [
          {
            type: 'text',
            text: "Projet de fin de formation rÃ©alisÃ© en autodidacte, conÃ§u pour mettre en pratique la programmation orientÃ©e objet en Java dans une application Android concrÃ¨te.",
          },
        ],
      },
    ],
    url: '',
    carousel: [
      {
        id: '01',
        src: '/pictures/portfolio/applications/gamegenius/carousel/select_compet.webp',
        title: 'SÃ©lection du type de compÃ©tition',
        alt: 'SÃ©lection du type de compÃ©tition',
      },
      {
        id: '02',
        src: '/pictures/portfolio/applications/gamegenius/carousel/input_player.webp',
        title: 'SÃ©lections des joueurs ou Ã©quipes',
        alt: 'SÃ©lections des joueurs ou Ã©quipes',
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
        title: 'SÃ©lection du score',
        alt: 'SÃ©lection du score',
      },
      {
        id: '07',
        src: '/pictures/portfolio/applications/gamegenius/carousel/winner.webp',
        title: 'Gagnant de la compÃ©tition',
        alt: 'Gagnant de la compÃ©tition',
      },
    ],
  },
]
