import type { IntroContent, PageHeaderContent } from "@/ressources/content/contentTypes";
import pictureHeaderService from '@/assets/pictures/header-service.png'

export const headerServices: PageHeaderContent = {
    title: 'Services en développment web sur mesure',
    image: {
        src: pictureHeaderService,
        alt: ''
    }
    
}

export const introServices: IntroContent = {
    text: `En tant que **développeur web sur mesure**, *GELYOS* vous propose des solutions digitales adaptées aux besoins des entreprises, startups et indépendants.
    De la **création de sites internet personnalisés** à la **conception d'applications web**, en passant par **l'optimisation SEO** et la **maintenance**, chaque service est conçu pour garantir performance, sécurité et visibilité.`
}