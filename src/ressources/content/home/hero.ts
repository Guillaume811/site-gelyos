import heroImage from '@/assets/pictures/hero.png'
import type { Content } from '@/ressources/content/contentTypes'

export const heroContent: Content = {
    title: 'Développement **Web\n Sur Mesure**',
    text: 'Je vous conçois des **sites internet sur mesure** avec un **développement web personnalisé** - **site vitrine**, **e-commerce** ou **application web** - pour servir vos objectifs, reflèter votre marque et convertir vos visiteurs en clients.',
    firstButton: {
        label: 'Parlons de votre projet',
        to: '/contact',
    },
    secondButton: {
        label: 'Voir mes réalisations',
        to: '/portfolio',
    },
    image: {
        src: heroImage,
        alt: 'Illustration site moderne',
    }
}