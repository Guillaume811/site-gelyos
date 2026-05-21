import type { DivProcess } from "@/ressources/content/contentTypes";
import iconAnalyse from '@/assets/icons/iconAnalyse.webp'
import iconConception from '@/assets/icons/iconConception.webp'
import iconDev from '@/assets/icons/iconDev.webp'
import iconTest from '@/assets/icons/iconTest.webp'
import iconSuivi from '@/assets/icons/iconSuivi.webp'

export const divProcessContent: DivProcess = {
    title: 'Un process clair pour un site web sur mesure rÃƒÂ©ussi',
    cards: [
        {
            id: 'analyse',
            icon: {
                src: iconAnalyse,
                alt: 'IcÃƒÂ´ne d\'analyse'
            },
            title: 'Analyse et cadrage',
            description: 'ComprÃƒÂ©hension de vos besoins et objectifs.'
        },
        {
            id: 'conception',
            icon: {
                src: iconConception,
                alt: 'IcÃƒÂ´ne de conception'
            },
            title: 'Conception',
            description: 'Structure et design adaptÃƒÂ©s ÃƒÂ  votre marque.'
        },
        {
            id: 'developpement',
            icon: {
                src: iconDev,
                alt: 'IcÃƒÂ´ne de dÃƒÂ©veloppement'
            },
            title: 'DÃƒÂ©veloppement',
            description: 'Un code robuste et ÃƒÂ©volutif'
        },
        {
            id: 'test',
            icon: {
                src: iconTest,
                alt: 'IcÃƒÂ´ne de test'
            },
            title: 'Tests et mise en ligne',
            description: 'Validation qualitÃƒÂ© et dÃƒÂ©ploiement.'
        },
        {
            id: 'suivi',
            icon: {
                src: iconSuivi,
                alt: 'IcÃƒÂ´ne de suivi'
            },
            title: 'Suivi et maintenance',
            description: 'Accompagnement et ÃƒÂ©volutions dans le temps.'
        }
    ]
}
