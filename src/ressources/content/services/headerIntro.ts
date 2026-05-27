import type { IntroContent, PageHeaderContent } from "@/ressources/content/contentTypes";
import pictureHeaderService from '@/assets/pictures/header-service.webp'

export const headerServices: PageHeaderContent = {
    title: 'Services en développment web sur mesure',
    image: {
        src: pictureHeaderService,
        alt: ''
    }
    
}

export const introServices: IntroContent = {
    text: [
        { type: 'text', text: 'En tant que ' },
        { type: 'strong', text: 'développeur web sur mesure' },
        { type: 'text', text: ', ' },
        { type: 'emphasis', text: 'GELYOS' },
        { type: 'text', text: ' vous propose des solutions digitales adaptées aux besoins des entreprises, startups et indépendants. De la ' },
        { type: 'strong', text: 'création de sites internet personnalisés' },
        { type: 'text', text: ' à la ' },
        { type: 'strong', text: "conception d'applications web" },
        { type: 'text', text: ', en passant par ' },
        { type: 'strong', text: "l'optimisation SEO" },
        { type: 'text', text: ' et la ' },
        { type: 'strong', text: 'maintenance' },
        { type: 'text', text: ', chaque service est conçu pour garantir performance, sécurité et visibilité.' }
    ]
}
