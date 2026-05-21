import type { ServiceSectionContent } from "@/ressources/content/contentTypes";
import pictureSeo from '@/assets/pictures/serviceSeo.webp'

export const seo: ServiceSectionContent = {
    id: 'seo',
    title: 'Optimisation SEO et rÃƒÂ©fÃƒÂ©rencement naturel',
    text: [
        { type: 'text', text: "Un site performant doit aussi ÃƒÂªtre visible. Nous assurons l'" },
        { type: 'strong', text: "optimisation SEO" },
        { type: 'text', text: " de votre site pour amÃƒÂ©liorer son classement sur Google : technique, contenu et expÃƒÂ©rience utilisateur. L'objectif : plus de trafic qualitÃƒÂ© et donc plus de clients." },
    ],
    image: {
        src: pictureSeo,
        alt: 'Illustration de SEO avec des ÃƒÂ©lÃƒÂ©ments de graphique.'
    },
    ServiceAccordionItems: [
        {
            id: 'audit',
            title: 'Audit SEO complet',
            description: [
                { type: 'text', text: `Nous analysons votre site sous tous les angles : technique, contenus, maillage interne, backlinks, vitesse. Cet audit identifie les points forts et les axes d'amÃƒÂ©lioration.` }
            ]
        },
        {
            id: 'technique',
            title: 'Optimisation technique',
            description: [
                { type: 'text', text: `Nous intervienons sur la structure du site : balises HTML, plan de site, indexation, vitesse de chargement et comptatibilitÃƒÂ© mobile. Chaque dÃƒÂ©tail compte pour plaire ÃƒÂ  Google.` }
            ]
        },
        {
            id: 'contenu',
            title: 'Optimisation des contenus',
            description: [
                { type: 'text', text: `Nous retravaillons les textes et les balises pour intÃƒÂ©grer les bons mots-clÃƒÂ©s, amÃƒÂ©liorer la lisibilitÃƒÂ© et capter l'attention des visiteurs. Le but est de plaire autant aux utilisateurs qu'aux moteurs de recherche.` }
            ]
        },
        {
            id: 'suivi',
            title: 'Suivi & reporting',
            description: [
                { type: 'text', text: `Vous recevez un suivi clair des performances : ÃƒÂ©volution du trafic, positions sur Google, conversions. Les actions sont ajustÃƒÂ©es en fonction des rÃƒÂ©sultats.` }
            ]
        },
        {
            id: 'strategie',
            title: 'Conseil stratÃƒÂ©gique',
            description: [
                { type: 'text', text: `Nous vous accompagnons sur la durÃƒÂ©e pour garder une longueur d'avance : stratÃƒÂ©gie de contenus, acquisition de backlinks, bonne pratiques SEO.` }
            ]
        }
    ]
}
