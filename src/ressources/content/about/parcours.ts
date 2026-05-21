import type { AboutSectionContent } from "@/ressources/content/contentTypes";
import pictureParcours from '@/assets/pictures/parcours.webp'

export const parcours: AboutSectionContent = {
    id: 'parcours',
    title: 'Mon parcours, ma vision',
    description: [
        { type: 'text', text: 'Je suis ' },
        { type: 'strong', text: 'dÃƒÂ©veloppeur web sur mesure' },
        { type: 'text', text: ', passionnÃƒÂ© par la crÃƒÂ©tion de solutions digitales uniques et performantes.' },
        { type: 'lineBreak' },
        { type: 'text', text: 'Mon objectif : transformer vos idÃƒÂ©es en projets concrets, efficaces et adaptÃƒÂ©s ÃƒÂ  vos besoins.' },
        { type: 'lineBreak' },
        { type: 'text', text: "Avec plusieurs annÃƒÂ©es d'espÃƒÂ©rience en " },
        { type: 'strong', text: 'dÃƒÂ©veloppement web personnalisÃƒÂ©' },
        { type: 'text', text: ", j'ai accompagnÃƒÂ© des entreprises, indÃƒÂ©pendants et des mairies dans leur projets digitaux." },
        { type: 'lineBreak' },
        { type: 'text', text: 'Ma vision : proposer des sites et applications qui allient ' },
        { type: 'strong', text: 'design' },
        { type: 'text', text: ', ' },
        { type: 'strong', text: 'performance' },
        { type: 'text', text: ' et ' },
        { type: 'strong', text: 'visibilitÃƒÂ© SEO' },
        { type: 'text', text: ', tout en restant accessibles et simples ÃƒÂ  gÃƒÂ©rer pour mes clients.' },
    ],
    image: {
        src: pictureParcours,
        alt: 'Photo de Guillaume Huguet, DÃƒÂ©veloppeur web freelance.'
    }
}
