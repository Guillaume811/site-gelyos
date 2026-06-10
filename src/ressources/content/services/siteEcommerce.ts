import type { ServiceSectionContent } from "@/ressources/content/contentTypes";
import { serviceRoutes } from '@/ressources/routes'
import iconEcommerce from '@/assets/icons/iconEcommerce.webp'
import pictureEcommerce from '@/assets/pictures/picture-eCommerce.webp'

export const siteEcommerce: ServiceSectionContent = {
    id: 'site-ecommerce',
    icon: {
        src: iconEcommerce,
        alt: 'Icône de création de site e-commerce.'
    },
    title: `Création de site e-commerce`,
    textObjectif: [
        {
            subtitle: 'Objectif :',
            description: [
                { type: 'text', text: 'Nous créons des sites e-commerce pensés pour vendre vos produits en ligne avec une boutique claire, professionnelle et simple à utiliser. Ce format est idéal pour lancer une activité de vente en ligne, développer vos ventes et proposer une expérience d’achat fluide à vos clients.' },
            ]
        }
    ],
    textForWhom: [
        {
            subtitle: 'Pour qui ?',
            description: [
                { type: 'text', text: 'Créateurs de marque, artisans, commerçants et petites entreprises qui souhaitent vendre leurs produits en ligne avec une boutique fiable, claire et adaptée à leur activité.' },
            ]
        }
    ],
    price: [
        { type: 'text', text: 'À partir de ' },
        { type: 'accent', text: '1590 € HT' },
    ],
    secondButton: {
        label: 'Découvrir l\'offre',
        to: serviceRoutes.siteEcommerce.path,
    },
    image: {
        src: pictureEcommerce,
        alt: 'Illustration de création de site e-commerce.'
    },

}
