import type { AboutSectionContent } from "@/ressources/content/contentTypes";
import pictureExpertise from '@/assets/pictures/expertise.jpg'

export const expertise: AboutSectionContent = {
    id: 'expertise',
    title: 'Notre expertise à votre service',
    description: `**Création de sites vitrines sur mesure** pour mettre en valeur votre activité.  
    **Site e-commerce personnalisés** pour booster vos ventes en ligne.  
    **Applications évolutives** adaptées à vos besoins métiers.  
    **Optimisation SEO** pour améliorer votre visibilité sur Google.`,
    image: {
        src: pictureExpertise,
        alt: `Image d'un expert consultant des données.`
    }
}