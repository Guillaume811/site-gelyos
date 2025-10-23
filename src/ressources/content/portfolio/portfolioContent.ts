import type { PortfolioPageContent } from "@/ressources/content/contentTypes";
import pictureHeaderPortfolio from '@/assets/pictures/header-portfolio.jpg'

export const portfolioContent: PortfolioPageContent = {
    header: {
        title: 'Portfolio | Développeur Web sur Mesure, Site & Applications',
        image: {
            src: pictureHeaderPortfolio,
            alt: ''
        }
    },

    intro: {
        text: `Découvrez une sélection de mes projets de développement web sur mesure : **sites vitrines**, **boutiques e-commerce personnalisées**, **applications web** et missions en tant que **développeur web freelance**. Chaque réalisation reflète une approche unique, pensée pour répondre aux besoins réels de mes clients.`
    },

    sections: {

        vitrine: {
            title: 'Sites Vitrines',
            description: `Création de **sites vitrines sur mesure** pour valoriser l'image de marque, mettre en avant les services et générer de nouveaux contacts. Design moderne, responsive et optimisé SEO pour offrir à chaque entreprise une présence en ligne professionnelle.` 
        },

        ecommerce: {
            title: 'Boutiques E-commerce',
            description: `Développement de **sites e-commerce personnalisés** qui allient performance, ergonomie et convertion. De la petite boutique en ligne au catalogue avancé, chaque projet est conçu pour offrir une expérience d'achat fluide et sécurisée.`
        },

        application: {
            title: 'Applications',
            description: `Conception d'**applications web sur mesure** adaptées aux besoins spécifiques des entreprises : outils internes, plateformes de gestion ou solutions métier. Des projets robustes, évolutifs et pensés pour simplifier les processus.`
        },

        freelance: {
            title: 'Missions Freelance',
            description: `En tant que **développeur web freelance**, j'interviens sur des missions variées : intégration de nouvelles fonctionnalités, optimisation de sites existants, renfort technique ou accompagnement ponctuel. Une collaboration flexible, adaptée à vos besoins.`
        }
    }
}