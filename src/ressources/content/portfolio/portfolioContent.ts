import type { PortfolioPageContent } from "@/ressources/content/contentTypes";
import pictureHeaderPortfolio from '@/assets/pictures/header-portfolio.webp'

export const portfolioContent: PortfolioPageContent = {
    header: {
        title: 'Portfolio | DÃƒÂ©veloppeur Web sur Mesure, Site & Applications',
        image: {
            src: pictureHeaderPortfolio,
            alt: ''
        }
    },

    intro: {
        text: [
            { type: 'text', text: 'DÃƒÂ©couvrez une sÃƒÂ©lection de nos projets de dÃƒÂ©veloppement web sur mesure : ' },
            { type: 'strong', text: 'sites vitrines' },
            { type: 'text', text: ', ' },
            { type: 'strong', text: 'boutiques e-commerce personnalisÃƒÂ©es' },
            { type: 'text', text: ', ' },
            { type: 'strong', text: 'applications web' },
            { type: 'text', text: ' et missions en tant que ' },
            { type: 'strong', text: 'dÃƒÂ©veloppeur web freelance' },
            { type: 'text', text: '. Chaque rÃƒÂ©alisation reflÃƒÂ¨te une approche unique, pensÃƒÂ©e pour rÃƒÂ©pondre aux besoins rÃƒÂ©els de nos clients.' }
        ]
    },

    sections: {

        vitrine: {
            title: 'Sites Vitrines',
            description: `CrÃƒÂ©ation de **sites vitrines sur mesure** pour valoriser l'image de marque, mettre en avant les services et gÃƒÂ©nÃƒÂ©rer de nouveaux contacts. Design moderne, responsive et optimisÃƒÂ© SEO pour offrir ÃƒÂ  chaque entreprise une prÃƒÂ©sence en ligne professionnelle.` 
        },

        ecommerce: {
            title: 'Boutiques E-commerce',
            description: `DÃƒÂ©veloppement de **sites e-commerce personnalisÃƒÂ©s** qui allient performance, ergonomie et convertion. De la petite boutique en ligne au catalogue avancÃƒÂ©, chaque projet est conÃƒÂ§u pour offrir une expÃƒÂ©rience d'achat fluide et sÃƒÂ©curisÃƒÂ©e.`
        },

        application: {
            title: 'Applications',
            description: `Conception d'**applications web sur mesure** adaptÃƒÂ©es aux besoins spÃƒÂ©cifiques des entreprises : outils internes, plateformes de gestion ou solutions mÃƒÂ©tier. Des projets robustes, ÃƒÂ©volutifs et pensÃƒÂ©s pour simplifier les processus.`
        },

        freelance: {
            title: 'Missions Freelance',
            description: `En tant que **dÃƒÂ©veloppeur web freelance**, j'interviens sur des missions variÃƒÂ©es : intÃƒÂ©gration de nouvelles fonctionnalitÃƒÂ©s, optimisation de sites existants, renfort technique ou accompagnement ponctuel. Une collaboration flexible, adaptÃƒÂ©e ÃƒÂ  vos besoins.`
        }
    }
}
