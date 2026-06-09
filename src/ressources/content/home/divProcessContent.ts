import type { DivProcess } from "@/ressources/content/contentTypes";
import iconAnalyse from '@/assets/icons/iconAnalyse.webp'
import iconConception from '@/assets/icons/iconConception.webp'
import iconDev from '@/assets/icons/iconDev.webp'
import iconTest from '@/assets/icons/iconTest.webp'
import iconSuivi from '@/assets/icons/iconSuivi.webp'

export const divProcessContent: DivProcess = {
    subtitle: 'Notre méthode',
    title: 'Un process clair pour un site web sur mesure réussi',
    description: 'De l\'analyse de vos besoins à la mise en ligne et au suivi, nous vous accompagnons à chaque étape de votre projet.',
    cards: [
        {
            id: 'analyse',
            icon: {
                src: iconAnalyse,
                alt: 'Icône d\'analyse'
            },
            number: '01',
            title: 'Analyse et cadrage',
            description: 'Nous comprenons vos besoins, vos objectifs et votre public cible pour poser des bases solides.'
        },
        {
            id: 'conception',
            icon: {
                src: iconConception,
                alt: 'Icône de conception'
            },
            number: '02',
            title: 'Conception',
            description: 'Nous concevons une structure et un design adaptés à votre marque et à vos utilisateurs.'
        },
        {
            id: 'developpement',
            icon: {
                src: iconDev,
                alt: 'Icône de développement'
            },
            number: '03',
            title: 'Développement',
            description: 'Nous développons un site robuste, sécurisé et évolutif, avec un code propre.'
        },
        {
            id: 'test',
            icon: {
                src: iconTest,
                alt: 'Icône de test'
            },
            number: '04',
            title: 'Tests et mise en ligne',
            description: 'Nous testons chaque détail avant un déploiement sécurisé et optimisé.'
        },
        {
            id: 'suivi',
            icon: {
                src: iconSuivi,
                alt: 'Icône de suivi'
            },
            number: '05',
            title: 'Suivi et maintenance',
            description: 'Nous restons à vos cötés pour assurer la performance et faire évoluer votre site.'
        }
    ]
}
