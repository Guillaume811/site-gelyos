import type { DivAvantages } from "@/ressources/content/contentTypes";
import iconPersonnalise from '@/assets/icons/iconPersonnalise.webp'
import iconPerformance from '@/assets/icons/iconPerformance.webp'
import iconAccompagnement from '@/assets/icons/iconAccompagnement.webp'
import iconFiabilite from '@/assets/icons/iconFiabilite.webp'

export const divAvantagesContent: DivAvantages = {
    title: 'Les avantages d\'un process personnalisÃƒÂ©',
    cards: [
        {
            id: 'personnalisation',
            icon: {
                src: iconPersonnalise,
                alt: 'IcÃƒÂ´ne de personnalisation'
            },
            title: 'Un site internet 100% personnalisÃƒÂ© :',
            description: 'pas de template, chaque projet reflÃƒÂ¨te votre identitÃƒÂ©.'
        },
        {
            id: 'performance',
            icon: {
                src: iconPerformance,
                alt: 'IcÃƒÂ´ne de performance'
            },
            title: 'Performance et visibilitÃƒÂ© :',
            description: 'SEO intÃƒÂ©grÃƒÂ©es, code optimisÃƒÂ©, rapide et pensÃƒÂ© pour Google.'
        },
        {
            id: 'accompagnement',
            icon: {
                src: iconAccompagnement,
                alt: 'IcÃƒÂ´ne d\'accompagnement'
            },
            title: 'Un accompagnement humain et rÃƒÂ©actif :',
            description: 'un interlocuteur unique ÃƒÂ  chaque ÃƒÂ©tape.'
        },
        {
            id: 'fiabilite',
            icon: {
                src: iconFiabilite,
                alt: 'IcÃƒÂ´ne de fiabilitÃƒÂ©'
            },
            title: 'FiabilitÃƒÂ© et ÃƒÂ©volutivitÃƒÂ© :',
            description: 'un dÃƒÂ©veloppement web sur mesure pensÃƒÂ© pour durer.'
        }
    ]
}
