import type { ServiceSectionContent } from "@/ressources/content/contentTypes";
import pictureSeo from '@/assets/pictures/serviceSeo.jpg'

export const seo: ServiceSectionContent = {
    id: 'seo',
    title: 'Optimisation SEO et référencement naturel',
    text: `Un site performant doit aussi être visible.
    J'assure l'**optimisation SEO** de votre site pour améliorer son classement sur Google : technique, contenu et expérience utilisateur. L'objectif : plus de trafic qualité et donc plus de clients.`,
    image: {
        src: pictureSeo,
        alt: 'Illustration de SEO avec des éléments de graphique.'
    },
    ServiceAccordionItems: [
        {
            id: 'audit',
            title: 'Audit SEO complet',
            description: `J'analyse votre site sous tous les angles : technique, contenus, maillage interne, backlinks, vitesse. Cet audit identifie les points forts et les axes d'amélioration.`
        },
        {
            id: 'technique',
            title: 'Optimisation technique',
            description: `J'interviens sur la structure du site : balises HTML, plan de site, indexation, vitesse de chargement et comptatibilité mobile. Chaque détail compte pour plaire à Google.`
        },
        {
            id: 'contenu',
            title: 'Optimisation des contenus',
            description: `Je retravaille les textes et les balises pour intégrer les bons mots-clés, améliorer la lisibilité et capter l'attention des visiteurs. Le but est de plaire autant aux utilisateurs qu'aux moteurs de recherche.`
        },
        {
            id: 'suivi',
            title: 'Suivi & reporting',
            description: `Vous recevez un suivi clair des performances : évolution du trafic, positions sur Google, conversions. Les actions sont ajustées en fonction des résultats.`
        },
        {
            id: 'strategie',
            title: 'Conseil stratégique',
            description: `Je vous accompagne sur la durée pour garder une longueur d'avance : stratégie de contenus, acquisition de backlinks, bonne pratiques SEO.`
        }
    ]
}