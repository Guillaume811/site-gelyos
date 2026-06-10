import type { ServiceSectionContent } from "@/ressources/content/contentTypes";
import iconLandingPage from '@/assets/icons/iconLandingPage.webp'
import pictureLandingPage from '@/assets/pictures/picture-landingPage.webp'

// TODO: remplacer le lien par la page correspondante une fois créée
export const landingPage: ServiceSectionContent = {
    id: 'landing-page',
    icon: {
        src: iconLandingPage,
        alt: 'Icône de création de landing page.'
    },
    title: `Création de landing page`,
    textObjectif: [
        {
            subtitle: 'Objectif :',
            description: [
                { type: 'text', text: 'Nous créons des landing pages claires, modernes et pensées pour présenter votre activité de façon professionnelle. Ce format est idéal pour lancer une présence en ligne rapidement, mettre en avant une offre précise ou disposer d’un mini site autonome simple à gérer.' },
            ]
        }
    ],
    textForWhom: [
        {
            subtitle: 'Pour qui ?',
            description: [
                { type: 'text', text: 'Indépendants, artisans, TPE, porteurs de projet et professionnels qui ont besoin d’une page unique efficace pour présenter leur activité et faciliter la prise de contact.' },
            ]
        }
    ],
    price: [
        { type: 'text', text: 'À partir de ' },
        { type: 'accent', text: '590 € HT' },
    ],
    secondButton: {
        label: 'Découvrir l\'offre',
        to: '/services',
    },
    image: {
        src: pictureLandingPage,
        alt: 'Illustration de création de landing page.'
    },

}
