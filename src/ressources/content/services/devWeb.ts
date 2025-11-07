import type { ServiceSectionContent } from "@/ressources/content/contentTypes";
import pictureDevWeb from '@/assets/pictures/devWeb.jpg'

export const devWeb: ServiceSectionContent = {
    id: 'dev-web',
    title: 'Création de sites internet sur mesure',
    text: `Un **site internet sur mesure** est l'outil idéal pour développer votre présence en ligne.
    Que ce soit pour un **site vitrine** destiné à présenter vos services, une **site e-commerce** pour vendre vos produits ou un **site institutionnel**, je conçois des solutions uniques qui reflètent votre marque et atteignent vos objectifs.`,
    image: {
        src: pictureDevWeb,
        alt: 'Illustration de design UI/UX avec éléments d’interface.'
    },
    ServiceAccordionItems: [
        {
            id: 'cahier-charges',
            title: 'Rédaction du cahier des charges',
            description: 'Ensemble, nous définissons précisément vos besoins, vos objectifs et votre public cible. Le cahier des charges sert de feuille de route pour éviter les imprévus et garantir que le site corresponde parfaitement à vos attentes.'
        },
        {
            id: 'design',
            title: 'Élaboration des maquettes (UI/UX)',
            description: `Avant toute ligne de code, nous créons des maquettes ergonomiques et esthétiques. L'objectif est de proposer une expérience utilisateur fluide et intuitive, tout en respectant votre identité visuelle.`
        },
        {
            id: 'seo',
            title:'Optimisation SEO / LLMO',
            description: `Dès la conception, le site est pensé pour Google : structure claire, balise optimisées, vitesse de chargement et contenus adaptés aux mots-clés. Cela permet d'améliorer votre visibilité dès la mise en ligne.`
        },
        {
            id: 'developpement',
            title: 'Développement Web & Mobile',
            description: `Nous développons un site robuste, rapide et responsive, qui s'adapte à tous les écrans (ordinateurs, tablettes, mobiles). Le code est propre, sécurisé et évolutif, afin de pouvoir ajouter de nouvelles fonctionnalités si nécessaire.`
        },
        {
            id: 'maintenance',
            title: 'Maintenance & Évolutions',
            description: `Après la mise en ligne, nous restons disponible pour assurer la sécurité, corriger d'éventuels bugs et accompagner vos évolutions futures. Votre site reste performant et à jour dans le temps.`
        }
    ]
}