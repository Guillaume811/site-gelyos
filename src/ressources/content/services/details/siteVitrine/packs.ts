import type { PacksContent } from '@/ressources/content/contentTypes'
import { serviceRoutes } from '@/ressources/routes'
import { serviceDetailIcons } from '../serviceDetailIcons'

export const packsSiteVitrine: PacksContent = {
    subtitle: 'Nos Offres',
    title: 'Choisissez le pack adapté à votre projet',
    description: [
        { type: 'text', text: 'Trois offres claires et évolutives pour répondre à vos besoins, à votre ambition et à votre budjet' },
    ],
    cardPackItem: [
        {
            icon: serviceDetailIcons.iconStarter,
            title: 'Starter',
            description: [
                { type: 'text', text: 'L’essentiel pour présenter votre activité avec un site clair et professionnel.' },
            ],
            price: [
                { type: 'text', text: 'À partir de ' },
                { type: 'accent', text: '990 € HT' },
            ],
            itemPackContent: [
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Jusqu’à 4 pages' }] },
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: '1 page mentions légales' }] },
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Design simple' }] },
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Intégration des contenus fournis' }] },
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Menu de navigation' }] },
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Formulaire de contact' }] },
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Bannière cookies simple' }] },
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Intégration de GA4' }] },
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Responsive' }] },
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Mise en ligne' }] },
            ],
            secondButton: {
                label: 'Voir le détail',
                to: serviceRoutes.siteVitrine.path,
            },
            text: [
                { type: 'link', text: 'Demander un devis', href: '/contact' },
            ],
        },
        {
            icon: serviceDetailIcons.iconEssentielle,
            title: 'Essentielle',
            description: [
                { type: 'text', text: 'Un site vitrine plus complet pour valoriser votre activité et renforcer votre crédibilité.' },
            ],
            price: [
                { type: 'text', text: 'À partir de ' },
                { type: 'accent', text: '1490 € HT' },
            ],
            itemPackContent: [
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Jusqu’à 6 pages' }] },
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: '1 page mentions légales' }] },
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Design sur mesure' }] },
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Reformulation des contenus fournis' }] },
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Structure de navigation optimisée' }] },
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Formulaire de contact' }] },
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Bannière cookies simple' }] },
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Intégration de GA4' }] },
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Responsive' }] },
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Mise en ligne' }] },
            ],
            secondButton: {
                label: 'Voir le détail',
                to: serviceRoutes.siteVitrine.path,
            },
            text: [
                { type: 'link', text: 'Demander un devis', href: '/contact' },
            ],
        },
        {
            icon: serviceDetailIcons.iconPremium,
            title: 'Premium',
            description: [
                { type: 'text', text: 'Une solution plus aboutie pour créer un site vitrine professionnel, structuré et différenciant.' },
            ],
            price: [
                { type: 'text', text: 'À partir de ' },
                { type: 'accent', text: '1990 € HT' },
            ],
            itemPackContent: [
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Jusqu’à 8 pages' }] },
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: '1 page mentions légales' }] },
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Design premium' }] },
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Écriture ou réécriture des contenus' }] },
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'SEO de base renforcé & performance' }] },
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Navigation optimisée' }] },
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Formulaire de contact' }] },
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Bannière cookies simple' }] },
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Intégration de GA4' }] },
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Responsive' }] },
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Mise en ligne' }] },
            ],
            secondButton: {
                label: 'Voir le détail',
                to: serviceRoutes.siteVitrine.path,
            },
            text: [
                { type: 'link', text: 'Demander un devis', href: '/contact' },
            ],
        },
    ],
}
