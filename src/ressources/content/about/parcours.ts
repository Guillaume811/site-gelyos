import type { AboutSectionContent } from "@/ressources/content/contentTypes";
import pictureParcours from '@/assets/pictures/parcours.png'

export const parcours: AboutSectionContent = {
    id: 'parcours',
    title: 'Mon parcours, ma vision',
    description: `Je suis **développeur web sur mesure**, passionné par la crétion de solutions digitales uniques et performantes.
    Mon objectif : transformer vos idées en projets concrets, efficaces et adaptés à vos besoins.
    Avec plusieurs années d'espérience en **développement web personnalisé**, j'ai accompagné des entreprises, indépendants et des mairies dans leur projets digitaux.
    Ma vision : proposer des sites et applications qui allient **design**, **performance** et **visibilité SEO**, tout en restant accessibles et simples à gérer pour mes clients.`,
    image: {
        src: pictureParcours,
        alt: 'Photo de Guillaume Huguet, Développeur web freelance.'
    }
}