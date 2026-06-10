import type { ServiceSectionContent } from "@/ressources/content/contentTypes";
import { serviceRoutes } from '@/ressources/routes'
import pictureSiteVitrine from '@/assets/pictures/picture-siteVitrine.webp'
import iconSiteVitrine from '@/assets/icons/iconSiteVitrine.webp'

export const siteVitrine: ServiceSectionContent = {
    id: 'site-vitrine',
    icon: {
        src: iconSiteVitrine,
        alt: 'Icône de création de site vitrine.'
    },
    title: 'Création de site vitrine',
    textObjectif: [
        {
            subtitle: 'Objectif :',
            description: [
                { type: 'text', text: 'Nous créons des sites vitrines clairs, professionnels et pensés pour valoriser votre activité. Ce format est idéal pour présenter votre entreprise, vos services, votre savoir-faire et rassurer vos visiteurs avec une présence en ligne structurée et crédible.' },
            ]
        }
    ],
    textForWhom: [
        {
            subtitle: 'Pour qui ?',
            description: [
                { type: 'text', text: 'Indépendants, artisans, TPE, commerçants et petites entreprises qui souhaitent présenter leur activité sur plusieurs pages avec un site professionnel et facile à consulter.' },
            ]
        }
    ],
    price: [
        { type: 'text', text: 'À partir de ' },
        { type: 'accent', text: '990 € HT' },
    ],
    secondButton: {
        label: 'Découvrir l\'offre',
        to: serviceRoutes.siteVitrine.path,
    },
    image: {
        src: pictureSiteVitrine,
        alt: 'Illustration de création de site vitrine.'
    },
}
