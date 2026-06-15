import pictureHeaderService from '@/assets/pictures/header-service.webp'
import type { IntroContent, PageHeaderContent } from '@/ressources/content/contentTypes'

export const headerSeo: PageHeaderContent = {
    title: 'Gagnez en visibilité sur Google',
    image: {
        src: pictureHeaderService,
        alt: '',
    },
}

export const introSeo: IntroContent = {
    text: [
        { type: 'text', text: 'Le SEO permet d’améliorer la visibilité de votre site sur les moteurs de recherche afin d’attirer des visiteurs plus qualifiés. C’est une solution idéale pour renforcer votre présence en ligne, travailler vos pages stratégiques et générer plus de contacts sur le long terme sans dépendre uniquement de la publicité.' },
    ],
}
