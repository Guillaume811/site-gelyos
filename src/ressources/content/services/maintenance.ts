import type { ServiceSectionContent } from "@/ressources/content/contentTypes";
import pictureMaintenance from '@/assets/pictures/maintenance.webp'

export const maintenance: ServiceSectionContent = {
    id: 'maintenance',
    title: 'Maintenance & support technique',
    text: [
        { type: 'text', text: "Un site doit rester " },
        { type: 'strong', text: "sÃƒÂ©curisÃƒÂ©, performant et ÃƒÂ  jour" },
        { type: 'text', text: ". Nous assurons la " },
        { type: 'strong', text: "maintenance de sites internet" },
        { type: 'text', text: " pour garantir leur bon fonctionnement au quotidien et accompagner vos ÃƒÂ©volutions futures." },
    ],
    image: {
        src: pictureMaintenance,
        alt: `Illustration de maintenance d'un site web`
    },
    ServiceAccordionItems: [
        {
            id: 'mises-a-jour',
            title: 'Mises ÃƒÂ  jour rÃƒÂ©guliÃƒÂ¨res',
            description: [
                { type: 'text', text: `Nous installons les derniÃƒÂ¨res mises ÃƒÂ  jour de sÃƒÂ©curitÃƒÂ© et de comptabilitÃƒÂ© pour protÃƒÂ©ger votre site contre les failles et garantir sa stabilitÃƒÂ©.` }
            ]
        },
        {
            id: 'surveillance',
            title: 'Surveillance & monitoring',
            description: [
                { type: 'text', text: `Nous mettons en place un suivi continu pour anticiper les problÃƒÂ¨mes (pannes, lenteurs, attaques). Vous avez l'assurance d'un site toujours opÃƒÂ©rationnel.` }
            ]
        },
        {
            id: 'sauvegardes',
            title: 'Sauvegardes & restauration',
            description: [
                { type: 'text', text: `Des sauvegardes rÃƒÂ©guliÃƒÂ¨res sont effectuÃƒÂ©es pour protÃƒÂ©ger vos donnÃƒÂ©es. En cas de problÃƒÂ¨me, votre site peut ÃƒÂªtre restaurÃƒÂ© rapidement.` }
            ]
        },
        {
            id: 'corrections',
            title: 'Corrections rapides',
            description: [
                { type: 'text', text: `En cas de bug ou de panne, Nous intervenons rapidement pour corriger le problÃƒÂ¨me et limiter l'impact sur votre activitÃƒÂ©.` }
            ]
        },
        {
            id: 'ameliorations',
            title: 'AmÃƒÂ©liorations continues',
            description: [
                { type: 'text', text: `Nous accompagnons vos besoins d'ÃƒÂ©volution : ajout de nouvelles fonctionnalitÃƒÂ©s, refonte partielles, optimisation des performances.` }
            ]
        }
    ]
}
