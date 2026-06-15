import type { PacksContent } from '@/ressources/content/contentTypes'
import { serviceRoutes } from '@/ressources/routes'
import { serviceDetailIcons } from '../serviceDetailIcons'

export const packsSiteEcommerce: PacksContent = {
    subtitle: '',
    title: '',
    description: [],
    cardPackItem: [
        {
            icon: serviceDetailIcons.iconStarter,
            title: 'Starter',
            description: [
                { type: 'text', text: 'L’essentiel pour lancer votre première boutique en ligne.' },
            ],
            price: [
                { type: 'text', text: 'À partir de ' },
                { type: 'accent', text: '1590 € HT' },
            ],
            itemPackContent: [
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Boutique en ligne simple' }] },
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Jusqu’à 10 produits' }] },
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Design simple' }] },
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Intégration des contenus fournis' }] },
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Paiement en ligne' }] },
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Livraison simple' }] },
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Panier et commande' }] },
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Pages légales' }] },
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Bannière cookies simple' }] },
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Responsive' }] },
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Mise en ligne' }] },
            ],
            secondButton: {
                label: 'Voir le détail',
                to: serviceRoutes.siteEcommerce.path,
            },
            text: [
                { type: 'link', text: 'Demander un devis', href: '/contact' },
            ],
        },
        {
            icon: serviceDetailIcons.iconEssentielle,
            title: 'Essentielle',
            description: [
                { type: 'text', text: 'Une boutique plus complète pour vendre dans de bonnes conditions.' },
            ],
            price: [
                { type: 'text', text: 'À partir de ' },
                { type: 'accent', text: '2390 € HT' },
            ],
            itemPackContent: [
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Boutique en ligne complète' }] },
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Jusqu’à 25 produits' }] },
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Design sur mesure' }] },
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Catégories de produits' }] },
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Reformulation des contenus fournis' }] },
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Paiement en ligne' }] },
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Livraison configurée' }] },
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Panier et commande' }] },
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Pages légales' }] },
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Intégration de GA4' }] },
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Responsive' }] },
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Mise en ligne' }] },
            ],
            secondButton: {
                label: 'Voir le détail',
                to: serviceRoutes.siteEcommerce.path,
            },
            text: [
                { type: 'link', text: 'Demander un devis', href: '/contact' },
            ],
        },
        {
            icon: serviceDetailIcons.iconPremium,
            title: 'Premium',
            description: [
                { type: 'text', text: 'Une solution e-commerce plus aboutie pour valoriser vos produits et développer vos ventes.' },
            ],
            price: [
                { type: 'text', text: 'À partir de ' },
                { type: 'accent', text: '3290 € HT' },
            ],
            itemPackContent: [
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Boutique en ligne premium' }] },
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Jusqu’à 50 produits' }] },
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Design premium' }] },
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Catalogue structuré' }] },
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Écriture ou réécriture des contenus' }] },
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'SEO de base renforcé & performance' }] },
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Paiement en ligne' }] },
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Livraison avancée' }] },
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Pages légales' }] },
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Intégration de GA4' }] },
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Responsive' }] },
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Mise en ligne' }] },
            ],
            secondButton: {
                label: 'Voir le détail',
                to: serviceRoutes.siteEcommerce.path,
            },
            text: [
                { type: 'link', text: 'Demander un devis', href: '/contact' },
            ],
        },
    ],
}
