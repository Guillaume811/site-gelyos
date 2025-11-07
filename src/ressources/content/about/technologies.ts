import type { AboutSectionContent } from "@/ressources/content/contentTypes";
import pictureTechno from '@/assets/pictures/Techno.png'

export const technologies: AboutSectionContent = {
    id: 'technologies',
    title: 'Technologies & Outils',
    description: `Pour chaque projet, nous choisissons les outils et langages les plus adaptés à vos besoins.  
    Nous utilisons des technologies modernes et éprouvées comme **HTML5**, **CSS3**, **JavaScript**, **React**, **Java**, **Wordpress** et bien d'autres.  
    Nous restons ouvert : si une **nouvelle technologie** est pertinente pour votre projet, nous l'intègrons après l'avoir testée et validée.  
    Notre approche : un **code propre, évolutif et performant**, pour garantir la pérennité de vos projets web.`,
    image: {
        src: pictureTechno,
        alt: 'Illustration représentant différentes technologies web.'
    }
}