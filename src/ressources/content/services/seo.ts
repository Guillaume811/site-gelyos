import type { ServiceSectionContent } from "@/ressources/content/contentTypes";
import { serviceRoutes } from '@/ressources/routes'
import iconSeo from '@/assets/icons/iconSeo.webp'
import pictureSeo from '@/assets/pictures/picture-seo.webp'

export const seo: ServiceSectionContent = {
    id: 'seo',
    icon: {
        src: iconSeo,
        alt: 'Icône d\'optimisation SEO.'
    },
    title: 'Optimisation SEO et référencement naturel',
    textObjectif: [
        {
            subtitle: 'Objectif :',
            description: [
                { type: 'text', text: 'Nous optimisons votre site pour améliorer sa visibilité sur Google et renforcer votre présence en ligne sur les recherches les plus importantes pour votre activité. Ce service est idéal pour attirer un trafic plus qualifié, gagner en visibilité et générer davantage de contacts sur le long terme.' },
            ]
        }
    ],
    textForWhom: [
        {
            subtitle: 'Pour qui ?',
            description: [
                { type: 'text', text: 'Indépendants, artisans, TPE, commerçants et entreprises qui veulent améliorer leur référencement naturel et être plus visibles auprès de leurs futurs clients.' },
            ]
        }
    ],
    price: [
        { type: 'text', text: 'À partir de ' },
        { type: 'accent', text: '190 € HT / mois' },
    ],
    secondButton: {
        label: 'Découvrir l\'offre',
        to: serviceRoutes.seo.path,
    },
    image: {
        src: pictureSeo,
        alt: 'Illustration de SEO avec des éléments de graphique.'
    }
}
