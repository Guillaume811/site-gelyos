import type { AboutSectionContent } from "@/ressources/content/contentTypes";
import pictureExpertise from '@/assets/pictures/expertise.webp'

export const expertise: AboutSectionContent = {
    id: 'expertise',
    title: 'Notre expertise ÃƒÂ  votre service',
    description: [
        { type: 'strong', text: 'CrÃƒÂ©ation de sites vitrines sur mesure' },
        { type: 'text', text: ' pour mettre en valeur votre activitÃƒÂ©.' },
        { type: 'lineBreak' },
        { type: 'strong', text: 'Site e-commerce personnalisÃƒÂ©s' },
        { type: 'text', text: ' pour booster vos ventes en ligne.' },
        { type: 'lineBreak' },
        { type: 'strong', text: 'Applications ÃƒÂ©volutives' },
        { type: 'text', text: ' adaptÃƒÂ©es ÃƒÂ  vos besoins mÃƒÂ©tiers.' },
        { type: 'lineBreak' },
        { type: 'strong', text: 'Optimisation SEO' },
        { type: 'text', text: ' pour amÃƒÂ©liorer votre visibilitÃƒÂ© sur Google.' },
    ],
    image: {
        src: pictureExpertise,
        alt: `Image d'un expert consultant des donnÃƒÂ©es.`
    }
}
