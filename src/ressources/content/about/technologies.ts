import type { AboutSectionContent } from "@/ressources/content/contentTypes";
import pictureTechno from '@/assets/pictures/Techno.webp'

export const technologies: AboutSectionContent = {
    id: 'technologies',
    title: 'Technologies & Outils',
    description: [
        { type: 'text', text: 'Pour chaque projet, nous choisissons les outils et langages les plus adaptÃƒÂ©s ÃƒÂ  vos besoins.' },
        { type: 'lineBreak' },
        { type: 'text', text: 'Nous utilisons des technologies modernes et ÃƒÂ©prouvÃƒÂ©es comme ' },
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
        { type: 'text', text: " est pertinente pour votre projet, nous l'intÃƒÂ¨grons aprÃƒÂ¨s l'avoir testÃƒÂ©e et validÃƒÂ©e." },
        { type: 'lineBreak' },
        { type: 'text', text: 'Notre approche : un ' },
        { type: 'strong', text: 'code propre, ÃƒÂ©volutif et performant' },
        { type: 'text', text: ', pour garantir la pÃƒÂ©rennitÃƒÂ© de vos projets web.' },
    ],
    image: {
        src: pictureTechno,
        alt: 'Illustration reprÃƒÂ©sentant diffÃƒÂ©rentes technologies web.'
    }
}
