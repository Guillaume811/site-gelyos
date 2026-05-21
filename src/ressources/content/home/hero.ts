import heroImage from '@/assets/pictures/hero.webp'
import type { Content } from '@/ressources/content/contentTypes'

export const heroContent: Content = {
    title: [
        { type: 'text', text: 'DÃ©veloppement' },
        { type: 'lineBreak' },
        { type: 'strong', text: 'Web Sur Mesure' }
    ],
    text: '[[GELYOS]] vous conÃ§ois des sites internet sur mesure avec un dÃ©veloppement web personnalisÃ© - site vitrine, e-commerce ou application web - pour servir vos objectifs, reflÃ¨ter votre marque et convertir vos visiteurs en clients.',
    firstButton: {
        label: 'Parlons de votre projet',
        to: '/contact',
    },
    secondButton: {
        label: 'Voir nos rÃ©alisations',
        to: '/portfolio',
    },
    image: {
        src: heroImage,
        alt: 'Illustration site moderne',
    }
}
