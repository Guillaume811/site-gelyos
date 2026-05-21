import type { ServiceSectionContent } from "@/ressources/content/contentTypes";
import pictureDevWeb from '@/assets/pictures/devWeb.webp'

export const devWeb: ServiceSectionContent = {
    id: 'dev-web',
    title: 'CrÃƒÂ©ation de sites internet sur mesure',
    text: [
        { type: 'text', text: "Un " },
        { type: 'strong', text: "site internet sur mesure" },
        { type: 'text', text: " est l'outil idÃƒÂ©al pour dÃƒÂ©velopper votre prÃƒÂ©sence en ligne. Que ce soit pour un " },
        { type: 'strong', text: "site vitrine" },
        { type: 'text', text: " destinÃƒÂ© ÃƒÂ  prÃƒÂ©senter vos services, une " },
        { type: 'strong', text: "site e-commerce" },
        { type: 'text', text: " pour vendre vos produits ou un " },
        { type: 'strong', text: "site institutionnel" },
        { type: 'text', text: ", je conÃƒÂ§ois des solutions uniques qui reflÃƒÂ¨tent votre marque et atteignent vos objectifs." },
    ],
    image: {
        src: pictureDevWeb,
        alt: 'Illustration de design UI/UX avec ÃƒÂ©lÃƒÂ©ments dÃ¢â‚¬â„¢interface.'
    },
    ServiceAccordionItems: [
        {
            id: 'cahier-charges',
            title: 'RÃƒÂ©daction du cahier des charges',
            description: [
                { type: 'text', text: 'Ensemble, nous dÃƒÂ©finissons prÃƒÂ©cisÃƒÂ©ment vos besoins, vos objectifs et votre public cible. Le cahier des charges sert de feuille de route pour ÃƒÂ©viter les imprÃƒÂ©vus et garantir que le site corresponde parfaitement ÃƒÂ  vos attentes.' }
            ]
        },
        {
            id: 'design',
            title: 'Ãƒâ€°laboration des maquettes (UI/UX)',
            description: [
                { type: 'text', text: `Avant toute ligne de code, nous crÃƒÂ©ons des maquettes ergonomiques et esthÃƒÂ©tiques. L'objectif est de proposer une expÃƒÂ©rience utilisateur fluide et intuitive, tout en respectant votre identitÃƒÂ© visuelle.` }
            ]
        },
        {
            id: 'seo',
            title:'Optimisation SEO / LLMO',
            description: [
                { type: 'text', text: `DÃƒÂ¨s la conception, le site est pensÃƒÂ© pour Google : structure claire, balise optimisÃƒÂ©es, vitesse de chargement et contenus adaptÃƒÂ©s aux mots-clÃƒÂ©s. Cela permet d'amÃƒÂ©liorer votre visibilitÃƒÂ© dÃƒÂ¨s la mise en ligne.` }
            ]
        },
        {
            id: 'developpement',
            title: 'DÃƒÂ©veloppement Web & Mobile',
            description: [
                { type: 'text', text: `Nous dÃƒÂ©veloppons un site robuste, rapide et responsive, qui s'adapte ÃƒÂ  tous les ÃƒÂ©crans (ordinateurs, tablettes, mobiles). Le code est propre, sÃƒÂ©curisÃƒÂ© et ÃƒÂ©volutif, afin de pouvoir ajouter de nouvelles fonctionnalitÃƒÂ©s si nÃƒÂ©cessaire.` }
            ]
        },
        {
            id: 'maintenance',
            title: 'Maintenance & Ãƒâ€°volutions',
            description: [
                { type: 'text', text: `AprÃƒÂ¨s la mise en ligne, nous restons disponible pour assurer la sÃƒÂ©curitÃƒÂ©, corriger d'ÃƒÂ©ventuels bugs et accompagner vos ÃƒÂ©volutions futures. Votre site reste performant et ÃƒÂ  jour dans le temps.` }
            ]
        }
    ]
}
