import type { ServiceSectionContent } from "@/ressources/content/contentTypes";
import { serviceRoutes } from '@/ressources/routes'
import iconMaintenance from '@/assets/icons/iconMaintenance.webp'
import pictureMaintenance from '@/assets/pictures/picture-maintenance.webp'

export const maintenance: ServiceSectionContent = {
    id: 'maintenance',
    icon: {
        src: iconMaintenance,
        alt: 'Icône de maintenance et support technique.'
    },
    title: 'Maintenance & support technique',
    textObjectif: [
        {
            subtitle: 'Objectif :',
            description: [
                { type: 'text', text: 'Nous assurons la maintenance de votre site web pour le garder à jour, sécurisé et fonctionnel dans le temps. Ce service permet de limiter les risques techniques, de préserver la stabilité du site et de vous libérer de la gestion des tâches de maintenance au quotidien.' },
            ]
        }
    ],
    textForWhom: [
        {
            subtitle: 'Pour qui ?',
            description: [
                { type: 'text', text: 'Professionnels, indépendants, TPE et entreprises qui souhaitent garder un site fiable, sécurisé et suivi régulièrement sans avoir à gérer eux-mêmes les aspects techniques.' },
            ]
        }
    ],
    price: [
        { type: 'text', text: 'À partir de ' },
        { type: 'accent', text: '49 € HT / mois' },
    ],
    secondButton: {
        label: 'Découvrir l\'offre',
        to: serviceRoutes.maintenance.path,
    },
    image: {
        src: pictureMaintenance,
        alt: `Tableauau de bord de maintenance de site web avec graphiques de performance et alertes de sécurité.`
    }
}
