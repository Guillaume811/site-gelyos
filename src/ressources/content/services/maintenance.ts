import type { ServiceSectionContent } from "@/ressources/content/contentTypes";
import pictureMaintenance from '@/assets/pictures/maintenance.jpg'

export const maintenance: ServiceSectionContent = {
    id: 'maintenance',
    title: 'Maintenance & support technique',
    text: `Un site doit rester **sécurisé, performant et à jour**.
    J'assure la **maintenance de sites internet** pour garantir leur bon fonctionnement au quotidien et accompagner vos évolutions futures.`,
    image: {
        src: pictureMaintenance,
        alt: `Illustration de maintenance d'un site web`
    },
    accordionItems: [
        {
            id: 'mises-a-jour',
            title: 'Mises à jour régulières',
            description: `J'installe les dernières mises à jour de sécurité et de comptabilité pour protéger votre site contre les failles et garantir sa stabilité.`
        },
        {
            id: 'surveillance',
            title: 'Surveillance & monitoring',
            description: `Je mets en place un suivi continu pour anticiper les problèmes (pannes, lenteurs, attaques). Vous avez l'assurance d'un site toujours opérationnel.`
        },
        {
            id: 'sauvegardes',
            title: 'Sauvegardes & restauration',
            description: `Des sauvegardes régulières sont effectuées pour protéger vos données. En cas de problème, votre site peut être restauré rapidement.`
        },
        {
            id: 'corrections',
            title: 'Corrections rapides',
            description: `En cas de bug ou de panne, j'interviens rapidement pour corriger le problème et limiter l'impact sur votre activité.`
        },
        {
            id: 'ameliorations',
            title: 'Améliorations continues',
            description: `J'accompagne vos besoins d'évolution : ajout de nouvelles fonctionnalités, refonte partielles, optimisation des performances.`
        }
    ]
}