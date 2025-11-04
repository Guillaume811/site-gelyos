import type { DivAvantages } from "@/ressources/content/contentTypes";
import iconPersonnalise from '@/assets/icons/iconPersonnalise.png'
import iconPerformance from '@/assets/icons/iconPerformance.png'
import iconAccompagnement from '@/assets/icons/iconAccompagnement.png'
import iconFiabilite from '@/assets/icons/iconFiabilite.png'

export const divAvantagesContent: DivAvantages = {
    title: 'Les avantages d\'un process personnalisé',
    cards: [
        {
            id: 'personnalisation',
            icon: {
                src: iconPersonnalise,
                alt: 'Icône de personnalisation'
            },
            title: 'Un site internet 100% personnalisé :',
            description: 'pas de template, chaque projet reflète votre identité.'
        },
        {
            id: 'performance',
            icon: {
                src: iconPerformance,
                alt: 'Icône de performance'
            },
            title: 'Performance et visibilité :',
            description: 'SEO intégrées, code optimisé, rapide et pensé pour Google.'
        },
        {
            id: 'accompagnement',
            icon: {
                src: iconAccompagnement,
                alt: 'Icône d\'accompagnement'
            },
            title: 'Un accompagnement humain et réactif :',
            description: 'un interlocuteur unique à chaque étape.'
        },
        {
            id: 'fiabilite',
            icon: {
                src: iconFiabilite,
                alt: 'Icône de fiabilité'
            },
            title: 'Fiabilité et évolutivité :',
            description: 'un développement web sur mesure pensé pour durer.'
        }
    ]
}