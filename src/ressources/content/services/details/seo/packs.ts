import type { PacksContent } from '@/ressources/content/contentTypes'
import { serviceRoutes } from '@/ressources/routes'
import { serviceDetailIcons } from '../serviceDetailIcons'

export const packsSeo: PacksContent = {
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
                { type: 'text', text: 'Les bases pour améliorer votre visibilité sur Google.' },
            ],
            price: [
                { type: 'text', text: 'À partir de ' },
                { type: 'accent', text: '190 € HT / mois' },
            ],
            itemPackContent: [
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Audit SEO de base' }] },
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Optimisation jusqu’à 3 pages' }] },
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Balises principales' }] },
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'SEO local de base' }] },
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Vérification de GA4' }] },
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Vérification de Search Console' }] },
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Suivi mensuel simple' }] },
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Point mensuel' }] },
            ],
            secondButton: {
                label: 'Voir le détail',
                to: serviceRoutes.seo.path,
            },
            text: [
                { type: 'link', text: 'Demander un devis', href: '/contact' },
            ],
        },
        {
            icon: serviceDetailIcons.iconEssentielle,
            title: 'Essentielle',
            description: [
                { type: 'text', text: 'Un accompagnement plus structuré pour travailler vos pages importantes.' },
            ],
            price: [
                { type: 'text', text: 'À partir de ' },
                { type: 'accent', text: '390 € HT / mois' },
            ],
            itemPackContent: [
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Audit SEO plus complet' }] },
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Optimisation jusqu’à 8 pages' }] },
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Titres, méta-descriptions et structures Hn' }] },
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Maillage interne de base' }] },
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Optimisation SEO local' }] },
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Google Business Profile' }] },
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Suivi mensuel régulier' }] },
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Point mensuel détaillé' }] },
            ],
            secondButton: {
                label: 'Voir le détail',
                to: serviceRoutes.seo.path,
            },
            text: [
                { type: 'link', text: 'Demander un devis', href: '/contact' },
            ],
        },
        {
            icon: serviceDetailIcons.iconPremium,
            title: 'Premium',
            description: [
                { type: 'text', text: 'Une stratégie SEO plus poussée pour renforcer votre visibilité durablement.' },
            ],
            price: [
                { type: 'text', text: 'À partir de ' },
                { type: 'accent', text: '590 € HT / mois' },
            ],
            itemPackContent: [
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Audit SEO approfondi' }] },
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Optimisation jusqu’à 15 pages' }] },
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Plan d’action priorisé' }] },
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Analyse concurrentielle locale' }] },
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Maillage interne renforcé' }] },
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'SEO local avancé' }] },
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Suivi mensuel renforcé' }] },
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Reporting détaillé' }] },
            ],
            secondButton: {
                label: 'Voir le détail',
                to: serviceRoutes.seo.path,
            },
            text: [
                { type: 'link', text: 'Demander un devis', href: '/contact' },
            ],
        },
    ],
}
