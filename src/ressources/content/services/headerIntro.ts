import type { IntroContent, PageHeaderContent } from "@/ressources/content/contentTypes";
import pictureHeaderService from '@/assets/pictures/header-service.webp'

export const headerServices: PageHeaderContent = {
    title: 'Services en dÃ©veloppment web sur mesure',
    image: {
        src: pictureHeaderService,
        alt: ''
    }
    
}

export const introServices: IntroContent = {
    text: [
        { type: 'text', text: 'En tant que ' },
        { type: 'strong', text: 'dÃ©veloppeur web sur mesure' },
        { type: 'text', text: ', ' },
        { type: 'emphasis', text: 'GELYOS' },
        { type: 'text', text: ' vous propose des solutions digitales adaptÃ©es aux besoins des entreprises, startups et indÃ©pendants. De la ' },
        { type: 'strong', text: 'crÃ©ation de sites internet personnalisÃ©s' },
        { type: 'text', text: ' Ã  la ' },
        { type: 'strong', text: "conception d'applications web" },
        { type: 'text', text: ', en passant par ' },
        { type: 'strong', text: "l'optimisation SEO" },
        { type: 'text', text: ' et la ' },
        { type: 'strong', text: 'maintenance' },
        { type: 'text', text: ', chaque service est conÃ§u pour garantir performance, sÃ©curitÃ© et visibilitÃ©.' }
    ]
}
