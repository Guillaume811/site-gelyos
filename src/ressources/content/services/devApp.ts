import type { ServiceSectionContent } from "@/ressources/content/contentTypes";
import pictureDevApp from '@/assets/pictures/devApp.webp'

export const devApp: ServiceSectionContent = {
    id: 'dev-app',
    title: `Développement d'Application personnalisées`,
    text: [
        { type: 'text', text: "Les " },
        { type: 'strong', text: "applications web et mobiles sur mesure" },
        { type: 'text', text: " permettent de créer des outils adaptés ? vos besoins spécifiques : gestion interne, plateforme métier, SaaS ou solution innovente. Nous développons des " },
        { type: 'strong', text: "applications performantes et évolutives" },
        { type: 'text', text: ", pensée pour simplifier vos processus et apporter une réelle valeur ? votre entreprise." },
    ],
    image: {
        src: pictureDevApp,
        alt: 'Illustration de développement d’application.'
    },
    ServiceAccordionItems: [
        {
            id: 'analyse',
            title: 'Analyse fonctionnelle',
            description: [
                { type: 'text', text: `Nous définissons ensemble les fonctionnalités nécessaires, les utilisateurs ciblés et les objectifs de l'application. Cette étape garantit que l'outil réponde exactement ? vos besoins.` }
            ]
        },
        {
            id: 'conception',
            title: 'Conception technique',
            description: [
                { type: 'text', text: `Nous choisissons les technologies les plus adaptées ? votre projet (framework, base de données, hébergement). Une architecture solide assure performance, sécurité et évolutivité.` }
            ]
        },
        {
            id: 'developpement',
            title: 'Développement & Intégration',
            description: [
                { type: 'text', text: `Du front-end au back-end, nous développons une application performante et intuitive. L'interface utilisateur est fluide et moderne, tandis que le back-end garantit stabilité et rapidité.` }
            ]
        },
        {
            id: 'test',
            title: 'Tests & Sécurité',
            description: [
                { type: 'text', text: `Chaque fonctionnalité est testée rigoureusement : compatibilité, sécurité des données, performance en charge. L'objectif : une application fiable et sécurisée.` }
            ]
        },
        {
            id: 'evolution',
            title: 'Évolutions',
            description: [
                { type: 'text', text: `Une application n'est jamais figée : je propose un suivi continu pour ajouter de nouvelles fonctionnalités et répondre ? vos futurs besoins.` }
            ]
        }
    ]
}
