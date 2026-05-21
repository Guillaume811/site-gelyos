import type { ProjectPreview } from '@/ressources/content/contentTypes'

export const projectPreviewContent: ProjectPreview = {
    title: 'Un aperÃ§u de nos crÃ©ations',
    text: [
        { type: 'text', text: 'DÃ©couvrez les derniers projects de ' },
        { type: 'strong', text: 'sites internet sur mesure' },
        { type: 'text', text: ' que nous avons rÃ©alisÃ©s: ' },
        { type: 'strong', text: 'sites vitrines' },
        { type: 'text', text: ', ' },
        { type: 'strong', text: 'boutiques e-commerce' },
        { type: 'text', text: ' et ' },
        { type: 'strong', text: 'applications web personnalisÃ©es' },
        { type: 'text', text: ' pour des clients de secteurs variÃ©s.' },
    ],
    firstButton: {
        label: 'Voir toutes nos rÃ©alisations',
        to: '/portfolio',
    }
}
