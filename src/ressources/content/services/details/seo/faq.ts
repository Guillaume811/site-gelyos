import type { FaqContent } from '@/ressources/content/contentTypes'

export const faqSeo: FaqContent = {
    title: 'FAQ',
    faqItems: [
        {
            id: 'question-1',
            title: 'À quoi sert le SEO ?',
            description: [
                { type: 'text', text: 'Le SEO sert à améliorer la visibilité naturelle de votre site sur Google. L’objectif est de rendre vos pages plus claires, mieux structurées et plus pertinentes pour attirer des visiteurs intéressés par vos services.' },
            ],
        },
        {
            id: 'question-2',
            title: 'Combien de temps faut-il pour voir des résultats ?',
            description: [
                { type: 'text', text: 'Le SEO est un travail progressif. Les premières améliorations peuvent être visibles après quelques semaines, mais les résultats les plus solides se construisent généralement sur plusieurs mois selon la concurrence, l’état du site et les actions mises en place.' },
            ],
        },
        {
            id: 'question-3',
            title: 'Peut-on garantir la première position sur Google ?',
            description: [
                { type: 'text', text: 'Non, personne ne peut garantir une première position durable sur Google. En revanche, un accompagnement SEO sérieux permet d’améliorer les bases du site, de travailler les bons contenus et d’augmenter les chances de progression dans les résultats.' },
            ],
        },
    ],
}
