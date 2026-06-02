import type { DivAvantages } from "@/ressources/content/contentTypes";
import iconPersonnalise from '@/assets/icons/iconPersonnalise3.webp'
import iconPerformance from '@/assets/icons/iconPerformance3.webp'
import iconAccompagnement from '@/assets/icons/iconAccompagnement3.webp'
import iconFiabilite from '@/assets/icons/iconFiabilite3.webp'

export const divAvantagesContent: DivAvantages = {
    subtitle: 'Vos Avantages',
    title: 'Ce que vous gagnez avec un accompagnement sur mesure',
    description: 'Un process personnalisé, c\'est l\'assurence d\'un site web performant, aligné avec vos objectifs et conçu pour durer.',
    cards: [
        {
            id: 'personnalisation',
            icon: {
                src: iconPersonnalise,
                alt: 'Icône de personnalisation'
            },
            title: 'Une identité unique',
            description: 'Pas de template générique : votre site reflête votre marque, vos valeurs et votre différence.'
        },
        {
            id: 'performance',
            icon: {
                src: iconPerformance,
                alt: 'Icône de performance'
            },
            title: 'Performance et visibilité',
            description: 'Un site rapide, optimisé SEO et techniquement solide pour mieux vous rendre visible.'
        },
        {
            id: 'accompagnement',
            icon: {
                src: iconAccompagnement,
                alt: 'Icône d\'accompagnement'
            },
            title: 'Un accompagnement humain',
            description: 'Un interlocuteur dédié, disponible et à l\'écoute tout au long de votre projet.'
        },
        {
            id: 'fiabilite',
            icon: {
                src: iconFiabilite,
                alt: 'Icône de fiabilité'
            },
            title: 'Fiabilité et évolutivité',
            description: 'Un site pensé pour durer et évoluer facilement selon vos besoins et votre croissance.'
        }
    ],
    firstButton: {
        label: 'Découvrez nos offres',
        to: '/services'
    }
}
