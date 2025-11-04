import type { DivProcess } from "@/ressources/content/contentTypes";
import iconAnalyse from '@/assets/icons/iconAnalyse.png'
import iconConception from '@/assets/icons/iconConception.png'
import iconDev from '@/assets/icons/iconDev.png'
import iconTest from '@/assets/icons/iconTest.png'
import iconSuivi from '@/assets/icons/iconSuivi.png'

export const divProcessContent: DivProcess = {
    title: 'Un process clair pour un site web sur mesure réussi',
    cards: [
        {
            id: 'analyse',
            icon: {
                src: iconAnalyse,
                alt: 'Icône d\'analyse'
            },
            title: 'Analyse et cadrage',
            description: 'Compréhension de vos besoins et objectifs.'
        },
        {
            id: 'conception',
            icon: {
                src: iconConception,
                alt: 'Icône de conception'
            },
            title: 'Conception',
            description: 'Structure et design adaptés à votre marque.'
        },
        {
            id: 'developpement',
            icon: {
                src: iconDev,
                alt: 'Icône de développement'
            },
            title: 'Développement',
            description: 'Un code robuste et évolutif'
        },
        {
            id: 'test',
            icon: {
                src: iconTest,
                alt: 'Icône de test'
            },
            title: 'Tests et mise en ligne',
            description: 'Validation qualité et déploiement.'
        },
        {
            id: 'suivi',
            icon: {
                src: iconSuivi,
                alt: 'Icône de suivi'
            },
            title: 'Suivi et maintenance',
            description: 'Accompagnement et évolutions dans le temps.'
        }
    ]
}