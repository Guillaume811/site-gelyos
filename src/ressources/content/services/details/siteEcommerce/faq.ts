import type { FaqContent } from '@/ressources/content/contentTypes'

export const faqSiteEcommerce: FaqContent = {
    title: 'FAQ',
    faqItems: [
        {
            id: 'question-1',
            title: 'À quoi sert un site e-commerce ?',
            description: [
                { type: 'text', text: 'Un site e-commerce permet de présenter vos produits, de gérer un catalogue et de recevoir des commandes directement en ligne. Il vous aide à vendre plus facilement tout en offrant une expérience d’achat professionnelle à vos clients.' },
            ],
        },
        {
            id: 'question-2',
            title: 'Est-ce adapté pour lancer une première boutique en ligne ?',
            description: [
                { type: 'text', text: 'Oui. Une boutique e-commerce peut être conçue simplement au départ, avec un nombre limité de produits, puis évoluer progressivement avec de nouvelles catégories, fonctionnalités ou optimisations.' },
            ],
        },
        {
            id: 'question-3',
            title: 'Est-ce que je peux gérer mes produits moi-même ?',
            description: [
                { type: 'text', text: 'Oui. Une fois la boutique mise en ligne, vous pouvez gérer vos produits, vos prix, vos stocks et vos commandes depuis l’interface d’administration, selon la solution utilisée.' },
            ],
        },
    ],
}
