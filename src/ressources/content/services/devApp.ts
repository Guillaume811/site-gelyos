import type { ServiceSectionContent } from "@/ressources/content/contentTypes";
import pictureDevApp from '@/assets/pictures/devApp.webp'

export const devApp: ServiceSectionContent = {
    id: 'dev-app',
    title: `DÃƒÂ©veloppement d'Application personnalisÃƒÂ©es`,
    text: [
        { type: 'text', text: "Les " },
        { type: 'strong', text: "applications web et mobiles sur mesure" },
        { type: 'text', text: " permettent de crÃƒÂ©er des outils adaptÃƒÂ©s ÃƒÂ  vos besoins spÃƒÂ©cifiques : gestion interne, plateforme mÃƒÂ©tier, SaaS ou solution innovente. Nous dÃƒÂ©veloppons des " },
        { type: 'strong', text: "applications performantes et ÃƒÂ©volutives" },
        { type: 'text', text: ", pensÃƒÂ©e pour simplifier vos processus et apporter une rÃƒÂ©elle valeur ÃƒÂ  votre entreprise." },
    ],
    image: {
        src: pictureDevApp,
        alt: 'Illustration de dÃƒÂ©veloppement dÃ¢â‚¬â„¢application.'
    },
    ServiceAccordionItems: [
        {
            id: 'analyse',
            title: 'Analyse fonctionnelle',
            description: [
                { type: 'text', text: `Nous dÃƒÂ©finissons ensemble les fonctionnalitÃƒÂ©s nÃƒÂ©cessaires, les utilisateurs ciblÃƒÂ©s et les objectifs de l'application. Cette ÃƒÂ©tape garantit que l'outil rÃƒÂ©ponde exactement ÃƒÂ  vos besoins.` }
            ]
        },
        {
            id: 'conception',
            title: 'Conception technique',
            description: [
                { type: 'text', text: `Nous choisissons les technologies les plus adaptÃƒÂ©es ÃƒÂ  votre projet (framework, base de donnÃƒÂ©es, hÃƒÂ©bergement). Une architecture solide assure performance, sÃƒÂ©curitÃƒÂ© et ÃƒÂ©volutivitÃƒÂ©.` }
            ]
        },
        {
            id: 'developpement',
            title: 'DÃƒÂ©veloppement & IntÃƒÂ©gration',
            description: [
                { type: 'text', text: `Du front-end au back-end, nous dÃƒÂ©veloppons une application performante et intuitive. L'interface utilisateur est fluide et moderne, tandis que le back-end garantit stabilitÃƒÂ© et rapiditÃƒÂ©.` }
            ]
        },
        {
            id: 'test',
            title: 'Tests & SÃƒÂ©curitÃƒÂ©',
            description: [
                { type: 'text', text: `Chaque fonctionnalitÃƒÂ© est testÃƒÂ©e rigoureusement : compatibilitÃƒÂ©, sÃƒÂ©curitÃƒÂ© des donnÃƒÂ©es, performance en charge. L'objectif : une application fiable et sÃƒÂ©curisÃƒÂ©e.` }
            ]
        },
        {
            id: 'evolution',
            title: 'Ãƒâ€°volutions',
            description: [
                { type: 'text', text: `Une application n'est jamais figÃƒÂ©e : je propose un suivi continu pour ajouter de nouvelles fonctionnalitÃƒÂ©s et rÃƒÂ©pondre ÃƒÂ  vos futurs besoins.` }
            ]
        }
    ]
}
