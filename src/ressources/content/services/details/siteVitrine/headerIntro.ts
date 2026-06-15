import pictureHeaderService from '@/assets/pictures/header-service.webp'
import type { IntroContent, PageHeaderContent } from '@/ressources/content/contentTypes'

export const headerSiteVitrine: PageHeaderContent = {
    title: 'Un site vitrine clair pour valoriser votre activité',
    image: {
        src: pictureHeaderService,
        alt: '',
    },
}

export const introSiteVitrine: IntroContent = {
    text: [
        { type: 'text', text: 'Un site vitrine permet de présenter votre entreprise, vos services et votre savoir-faire à travers une présence en ligne professionnelle. C’est une solution idéale pour renforcer votre crédibilité, rassurer vos visiteurs et faciliter la prise de contact grâce à un site structuré, responsive et adapté à votre image.' },
    ],
}
