import type { AboutSectionContent } from "@/ressources/content/contentTypes";
import pictureTechno from '@/assets/pictures/Techno.webp'

export const technologies: AboutSectionContent = {
    id: 'technologies',
    title: 'Technologies & Outils',
    description: [
        { type: 'text', text: 'Pour chaque projet, nous choisissons les outils et langages les plus adaptés à vos besoins.' },
        { type: 'lineBreak' },
        { type: 'text', text: 'Nous utilisons des technologies modernes et éprouvées comme ' },
        { type: 'strong', text: 'HTML5' },
        { type: 'text', text: ', ' },
        { type: 'strong', text: 'CSS3' },
        { type: 'text', text: ', ' },
        { type: 'strong', text: 'JavaScript' },
        { type: 'text', text: ', ' },
        { type: 'strong', text: 'React' },
        { type: 'text', text: ', ' },
        { type: 'strong', text: 'Java' },
        { type: 'text', text: ', ' },
        { type: 'strong', text: 'Wordpress' },
        { type: 'text', text: " et bien d'autres." },
        { type: 'lineBreak' },
        { type: 'text', text: 'Nous restons ouvert : si une ' },
        { type: 'strong', text: 'nouvelle technologie' },
        { type: 'text', text: " est pertinente pour votre projet, nous l'intègrons après l'avoir testée et validée." },
        { type: 'lineBreak' },
        { type: 'text', text: 'Notre approche : un ' },
        { type: 'strong', text: 'code propre, évolutif et performant' },
        { type: 'text', text: ', pour garantir la pérennité de vos projets web.' },
    ],
    image: {
        src: pictureTechno,
        alt: 'Illustration représentant différentes technologies web.'
    }
}
