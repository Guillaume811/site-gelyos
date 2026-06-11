import pictureHeaderService from '@/assets/pictures/header-service.webp'
import type { IntroContent, PageHeaderContent } from '@/ressources/content/contentTypes'

export const headerLandingPage: PageHeaderContent = {
    title: 'Une landing page pensée pour convaincre',
    image: {
        src: pictureHeaderService,
        alt: '',
    },
}

export const introLandingPage: IntroContent = {
    text: [
        { type: 'text', text: 'Une landing page est une solution simple, rapide et efficace pour présenter votre activité ou une offre précise sur une seule page. C’est un excellent format pour démarrer une présence en ligne, lancer un service, tester une offre ou disposer d’un mini site professionnel sans partir sur un site vitrine plus complet.' },
    ],
}
