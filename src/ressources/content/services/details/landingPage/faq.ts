import type { FaqContent } from '@/ressources/content/contentTypes'

export const faqLandingPage: FaqContent = {
    title: 'FAQ',
    faqItems: [
        { 
            id: 'question-1',
            title: 'Une landing page, c’est quoi exactement ?',
            description: [{ type: 'text', text: 'C’est une page unique pensée pour présenter votre activité, votre offre et vos informations de contact de façon claire, structurée et efficace.' }] 
        },
        { 
            id: 'question-2',
            title: 'Est-ce adapté à une petite activité ?',
            description: [{ type: 'text', text: 'Oui, une landing page convient très bien à un indépendant, un artisan, une TPE ou un lancement d’activité qui a besoin d’une présence en ligne simple et professionnelle.' }] 
        },
        { 
            id: 'question-3',
            title: 'Est-ce que la landing page peut évoluer plus tard ?',
            description: [{ type: 'text', text: 'Oui, elle peut servir de base de départ avant de faire évoluer votre présence en ligne vers un site vitrine plus complet.' }] 
        },
    ],
}
