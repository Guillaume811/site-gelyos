import pictureHeaderService from '@/assets/pictures/header-service.webp'
import type { IntroContent, PageHeaderContent } from '@/ressources/content/contentTypes'

export const headerSiteEcommerce: PageHeaderContent = {
    title: 'Une boutique en ligne pensée pour vendre',
    image: {
        src: pictureHeaderService,
        alt: '',
    },
}

export const introSiteEcommerce: IntroContent = {
    text: [
        { type: 'text', text: 'Un site e-commerce permet de vendre vos produits en ligne avec une boutique claire, professionnelle et simple à utiliser. C’est une solution idéale pour lancer votre activité, développer vos ventes et offrir à vos clients une expérience d’achat fluide, rassurante et adaptée à votre image.' },
    ],
}
