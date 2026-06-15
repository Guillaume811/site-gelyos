import type { FaqContent } from '@/ressources/content/contentTypes'

export const faqSiteVitrine: FaqContent = {
    title: 'FAQ',
    faqItems: [
        {
            id: 'question-1',
            title: 'À quoi sert un site vitrine ?',
            description: [
                { type: 'text', text: 'Un site vitrine permet de présenter votre entreprise, vos services et vos informations de contact de façon professionnelle. Il sert à rassurer vos visiteurs, renforcer votre crédibilité et faciliter la prise de contact.' },
            ],
        },
        {
            id: 'question-2',
            title: 'Quelle est la différence entre un site vitrine et une landing page ?',
            description: [
                { type: 'text', text: 'Une landing page présente une offre ou une activité sur une seule page. Un site vitrine est plus complet : il permet de structurer votre présentation sur plusieurs pages, comme l’accueil, les services, à propos, réalisations et contact.' },
            ],
        },
        {
            id: 'question-3',
            title: 'Est-ce qu’un site vitrine peut évoluer avec le temps ?',
            description: [
                { type: 'text', text: 'Oui. Un site vitrine peut évoluer progressivement selon vos besoins : ajout de nouvelles pages, création d’un blog, optimisation SEO, intégration d’un module de réservation ou ajout de nouvelles fonctionnalités.' },
            ],
        },
    ],
}
