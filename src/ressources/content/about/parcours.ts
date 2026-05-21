import type { AboutSectionContent } from "@/ressources/content/contentTypes";
import pictureParcours from '@/assets/pictures/parcours.webp'

export const parcours: AboutSectionContent = {
    id: 'parcours',
    title: 'Mon parcours, ma vision',
    description: [
        { type: 'text', text: 'Je suis ' },
        { type: 'strong', text: 'développeur web sur mesure' },
        { type: 'text', text: ', passionné par la crétion de solutions digitales uniques et performantes.' },
        { type: 'lineBreak' },
        { type: 'text', text: 'Mon objectif : transformer vos idées en projets concrets, efficaces et adaptés ? vos besoins.' },
        { type: 'lineBreak' },
        { type: 'text', text: "Avec plusieurs années d'espérience en " },
        { type: 'strong', text: 'développement web personnalisé' },
        { type: 'text', text: ", j'ai accompagné des entreprises, indépendants et des mairies dans leur projets digitaux." },
        { type: 'lineBreak' },
        { type: 'text', text: 'Ma vision : proposer des sites et applications qui allient ' },
        { type: 'strong', text: 'design' },
        { type: 'text', text: ', ' },
        { type: 'strong', text: 'performance' },
        { type: 'text', text: ' et ' },
        { type: 'strong', text: 'visibilité SEO' },
        { type: 'text', text: ', tout en restant accessibles et simples ? g?rer pour mes clients.' },
    ],
    image: {
        src: pictureParcours,
        alt: 'Photo de Guillaume Huguet, Développeur web freelance.'
    }
}
