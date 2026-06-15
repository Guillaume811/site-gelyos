import pictureHeaderService from '@/assets/pictures/header-service.webp'
import type { IntroContent, PageHeaderContent } from '@/ressources/content/contentTypes'

export const headerMaintenance: PageHeaderContent = {
    title: 'Un site suivi, sécurisé et toujours à jour',
    image: {
        src: pictureHeaderService,
        alt: '',
    },
}

export const introMaintenance: IntroContent = {
    text: [
        { type: 'text', text: 'La maintenance de site web permet de garder votre site fiable, sécurisé et fonctionnel dans le temps. C’est une solution idéale pour éviter les problèmes techniques, assurer les mises à jour importantes et conserver un site stable sans avoir à gérer vous-même les aspects techniques.' },
    ],
}
