import type { PacksContent } from '@/ressources/content/contentTypes'
import { serviceDetailIcons } from '../serviceDetailIcons'

//TODO : changer le lien qui ouvre les détails des packs
export const packsLandingPage: PacksContent = {
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
                { type: 'text', text: 'L’essentiel pour lancer votre présence en ligne' },
            ],
            price: [
                { type: 'text', text: 'À partir de ' },
                { type: 'accent', text: '590 € HT' },
            ],
            itemPackContent: [
                {
                    icon: serviceDetailIcons.iconCheck,
                    text: [{ type: 'text', text: '1 page principale' }],
                },
                {
                    icon: serviceDetailIcons.iconCheck,
                    text: [{ type: 'text', text: '1 page mentions légales' }],
                },
                {
                    icon: serviceDetailIcons.iconCheck,
                    text: [{ type: 'text', text: 'Design simple' }],
                },
                {
                    icon: serviceDetailIcons.iconCheck,
                    text: [{ type: 'text', text: 'Intégration des contenus fournis' }],
                },
                {
                    icon: serviceDetailIcons.iconCheck,
                    text: [{ type: 'text', text: 'Formulaire de contact' }],
                },
                {
                    icon: serviceDetailIcons.iconCheck,
                    text: [{ type: 'text', text: 'Bannière cookies simple' }],
                },
                {
                    icon: serviceDetailIcons.iconCheck,
                    text: [{ type: 'text', text: 'Responsive' }],
                },
                {
                    icon: serviceDetailIcons.iconCheck,
                    text: [{ type: 'text', text: 'Mise en ligne' }],
                }
                
            ],
             secondButton: {
                label: 'Voir le détail',
                to: '/services/landing-page',
            },
            text: [
                {
                    type: 'link',
                    text: 'Demander un devis',
                    href: '/contact',
                },
            ],
        },
        {
            icon: serviceDetailIcons.iconEssentielle,
            title: 'Essentielle',
            description: [
                { type: 'text', text: 'Le parfait équilibre entre performance et visibilité' },
            ],
            price: [
                { type: 'text', text: 'À partir de ' },
                { type: 'accent', text: '990 € HT' },
            ],
            itemPackContent: [
                {
                    icon: serviceDetailIcons.iconCheck,
                    text: [{ type: 'text', text: '1 page principale' }],
                },
                {
                    icon: serviceDetailIcons.iconCheck,
                    text: [{ type: 'text', text: '1 page mentions légales' }],
                },
                {
                    icon: serviceDetailIcons.iconCheck,
                    text: [{ type: 'text', text: 'Design sur mesure' }],
                },
                {
                    icon: serviceDetailIcons.iconCheck,
                    text: [{ type: 'text', text: 'Reformulation des contenus fournis' }],
                },
                {
                    icon: serviceDetailIcons.iconCheck,
                    text: [{ type: 'text', text: 'Optimisation SEO de base' }],
                },
                {
                    icon: serviceDetailIcons.iconCheck,
                    text: [{ type: 'text', text: 'Formulaire de contact' }],
                },
                {
                    icon: serviceDetailIcons.iconCheck,
                    text: [{ type: 'text', text: 'Bannière cookies simple' }],
                },
                {
                    icon: serviceDetailIcons.iconCheck,
                    text: [{ type: 'text', text: 'Intégration de GA4' }],
                },
                {
                    icon: serviceDetailIcons.iconCheck,
                    text: [{ type: 'text', text: 'Responsive' }],
                },
                {
                    icon: serviceDetailIcons.iconCheck,
                    text: [{ type: 'text', text: 'Mise en ligne' }],
                }
                
            ],
             secondButton: {
                label: 'Voir le détail',
                to: '/services/landing-page',
            },
            text: [
                {
                    type: 'link',
                    text: 'Demander un devis',
                    href: '/contact',
                },
            ],
        },
        {
            icon: serviceDetailIcons.iconPremium,
            title: 'Premium',
            description: [
                { type: 'text', text: 'Une solution complète pour vous démarquer' },
            ],
            price: [
                { type: 'text', text: 'À partir de ' },
                { type: 'accent', text: '1390 € HT' },
            ],
            itemPackContent: [
                {
                    icon: serviceDetailIcons.iconCheck,
                    text: [{ type: 'text', text: '1 page principale' }],
                },
                {
                    icon: serviceDetailIcons.iconCheck,
                    text: [{ type: 'text', text: '1 page mentions légales' }],
                },
                {
                    icon: serviceDetailIcons.iconCheck,
                    text: [{ type: 'text', text: 'Design premium' }],
                },
                {
                    icon: serviceDetailIcons.iconCheck,
                    text: [{ type: 'text', text: 'Écriture des contenus' }],
                },
                {
                    icon: serviceDetailIcons.iconCheck,
                    text: [{ type: 'text', text: 'SEO avancé & performant' }],
                },
                {
                    icon: serviceDetailIcons.iconCheck,
                    text: [{ type: 'text', text: 'Formulaire de contact' }],
                },
                {
                    icon: serviceDetailIcons.iconCheck,
                    text: [{ type: 'text', text: 'Bannière cookies simple' }],
                },
                {
                    icon: serviceDetailIcons.iconCheck,
                    text: [{ type: 'text', text: 'Intégration de GA4' }],
                },
                {
                    icon: serviceDetailIcons.iconCheck,
                    text: [{ type: 'text', text: 'Responsive' }],
                },
                {
                    icon: serviceDetailIcons.iconCheck,
                    text: [{ type: 'text', text: 'Mise en ligne' }],
                }
                
            ],
             secondButton: {
                label: 'Voir le détail',
                to: '/services/landing-page',
            },
            text: [
                {
                    type: 'link',
                    text: 'Demander un devis',
                    href: '/contact',
                },
            ],
        },
    ],
}
