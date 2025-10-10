import type { ServiceSectionContent } from "@/ressources/content/contentTypes";
import pictureDevApp from '@/assets/pictures/devApp.jpg'

export const devApp: ServiceSectionContent = {
    id: 'dev-app',
    title: `Développement d'Application personnalisées`,
    text: `Les **applications web et mobiles sur mesure** permettent de créer des outils adaptés à vos besoins spécifiques : gestion interne, plateforme métier, SaaS ou solution innovente.
    Je développe des **applications performantes et évolutives **, pensée pour simplifier vos processus et apporter une réelle valeur à votre entreprise.`,
    image: {
        src: pictureDevApp,
        alt: 'Illustration de développement d’application.'
    },
    ServiceAccordionItems: [
        {
            id: 'analyse',
            title: 'Analyse fonctionnelle',
            description: `Nous définissons ensemble les fonctionnalités nécessaires, les utilisateurs ciblés et les objectifs de l'application. Cette étape garantit que l'outil réponde exactement à vos besoins.`
        },
        {
            id: 'conception',
            title: 'Conception technique',
            description: `Je choisis les technologies les plus adaptées à votre projet (framework, base de données, hébergement). Une architecture solide assure performance, sécurité et évolutivité.`
        },
        {
            id: 'developpement',
            title: 'Développement & Intégration',
            description: `Du front-end au back-end, je développe une application performante et intuitive. L'interface utilisateur est fluide et moderne, tandis que le back-end garantit stabilité et rapidité.`
        },
        {
            id: 'test',
            title: 'Tests & Sécurité',
            description: `Chaque fonctionnalité est testée rigoureusement : compatibilité, sécurité des données, performance en charge. L'objectif : une application fiable et sécurisée.`
        },
        {
            id: 'evolution',
            title: 'Évolutions',
            description: `Une application n'est jamais figée : je propose un suivi continu pour ajouter de nouvelles fonctionnalités et répondre à vos futurs besoins.`
        }
    ]
}