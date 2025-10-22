import type { AboutSectionContent } from "@/ressources/content/contentTypes";
import pictureTechno from '@/assets/pictures/Techno.png'

export const technologies: AboutSectionContent = {
    id: 'technologies',
    title: 'Technologies & Outils',
    description: `Pour chaque projet, je choisis les outils et langages les plus adaptés à vos besoins.  
    J'utilise des technologies modernes et éprouvées comme **HTML5**, **CSS3**, **JavaScript**, **React**, **Java**, **Wordpress** et bien d'autres.  
    Je reste ouvert : si une **nouvelle technologie** est pertinente pour votre projet, je l'intègre après l'avoir testée et validée.  
    Mon approche : un **code propre, évolutif et performant**, pour garantir la pérennité de vos projets web.`,
    image: {
        src: pictureTechno,
        alt: 'Illustration représentant différentes technologies web.'
    }
}