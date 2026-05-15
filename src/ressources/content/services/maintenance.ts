import type { ServiceSectionContent } from "~/ressources/content/contentTypes";
import pictureMaintenance from '~/assets/pictures/maintenance.webp'

export const maintenance: ServiceSectionContent = {
    id: 'maintenance',
    title: 'Maintenance & support technique',
    text: [
        { type: 'text', text: "Un site doit rester " },
        { type: 'strong', text: "sécurisé, performant et à jour" },
        { type: 'text', text: ". Nous assurons la " },
        { type: 'strong', text: "maintenance de sites internet" },
        { type: 'text', text: " pour garantir leur bon fonctionnement au quotidien et accompagner vos évolutions futures." },
    ],
    image: {
        src: pictureMaintenance,
        alt: `Illustration de maintenance d'un site web`
    },
    ServiceAccordionItems: [
        {
            id: 'mises-a-jour',
            title: 'Mises à jour régulières',
            description: [
                { type: 'text', text: `Nous installons les dernières mises à jour de sécurité et de comptabilité pour protéger votre site contre les failles et garantir sa stabilité.` }
            ]
        },
        {
            id: 'surveillance',
            title: 'Surveillance & monitoring',
            description: [
                { type: 'text', text: `Nous mettons en place un suivi continu pour anticiper les problèmes (pannes, lenteurs, attaques). Vous avez l'assurance d'un site toujours opérationnel.` }
            ]
        },
        {
            id: 'sauvegardes',
            title: 'Sauvegardes & restauration',
            description: [
                { type: 'text', text: `Des sauvegardes régulières sont effectuées pour protéger vos données. En cas de problème, votre site peut être restauré rapidement.` }
            ]
        },
        {
            id: 'corrections',
            title: 'Corrections rapides',
            description: [
                { type: 'text', text: `En cas de bug ou de panne, Nous intervenons rapidement pour corriger le problème et limiter l'impact sur votre activité.` }
            ]
        },
        {
            id: 'ameliorations',
            title: 'Améliorations continues',
            description: [
                { type: 'text', text: `Nous accompagnons vos besoins d'évolution : ajout de nouvelles fonctionnalités, refonte partielles, optimisation des performances.` }
            ]
        }
    ]
}
