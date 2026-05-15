import type { AboutSectionContent } from "~/ressources/content/contentTypes";
import pictureExpertise from '~/assets/pictures/expertise.webp'

export const expertise: AboutSectionContent = {
    id: 'expertise',
    title: 'Notre expertise à votre service',
    description: [
        { type: 'strong', text: 'Création de sites vitrines sur mesure' },
        { type: 'text', text: ' pour mettre en valeur votre activité.' },
        { type: 'lineBreak' },
        { type: 'strong', text: 'Site e-commerce personnalisés' },
        { type: 'text', text: ' pour booster vos ventes en ligne.' },
        { type: 'lineBreak' },
        { type: 'strong', text: 'Applications évolutives' },
        { type: 'text', text: ' adaptées à vos besoins métiers.' },
        { type: 'lineBreak' },
        { type: 'strong', text: 'Optimisation SEO' },
        { type: 'text', text: ' pour améliorer votre visibilité sur Google.' },
    ],
    image: {
        src: pictureExpertise,
        alt: `Image d'un expert consultant des données.`
    }
}
