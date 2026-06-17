import type { ProjectPreview } from '@/ressources/content/contentTypes'

export const projectPreviewContent: ProjectPreview = {
    subtitle: 'Nos réalisations',
    title: 'Un aperçu de nos créations',
    text: [
        { type: 'text', text: 'Découvrez les derniers projects de ' },
        { type: 'strong', text: 'sites internet sur mesure' },
        { type: 'text', text: ' que nous avons réalisés: ' },
        { type: 'strong', text: 'sites vitrines' },
        { type: 'text', text: ', ' },
        { type: 'strong', text: 'boutiques e-commerce' },
        { type: 'text', text: ' et ' },
        { type: 'strong', text: 'applications web personnalisées' },
        { type: 'text', text: ' pour des clients de secteurs variés.' },
    ],
    firstButton: {
        label: 'Voir toutes nos réalisations',
        to: '/portfolio',
    }
}
