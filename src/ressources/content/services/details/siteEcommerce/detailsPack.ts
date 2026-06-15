import type { DetailsPackContent } from '@/ressources/content/contentTypes'
import { serviceDetailIcons } from '../serviceDetailIcons'

export const detailsPackSiteEcommerce: DetailsPackContent = [
    {
        icon: serviceDetailIcons.iconStarter,
        title: 'Détail du pack Starter',
        subtitle: 'Ce qui est inclus',
        itemPackContent: [
            {
                icon: serviceDetailIcons.iconCheck,
                text: [
                    { type: 'strong', text: 'Boutique en ligne simple,' },
                    { type: 'text', text: ' une base claire pour vendre vos premiers produits' },
                ],
            },
            {
                icon: serviceDetailIcons.iconCheck,
                text: [
                    { type: 'strong', text: 'Jusqu’à 10 produits,' },
                    { type: 'text', text: ' intégration des fiches produits fournies' },
                ],
            },
            {
                icon: serviceDetailIcons.iconCheck,
                text: [
                    { type: 'strong', text: 'Design simple,' },
                    { type: 'text', text: ' une présentation propre et professionnelle' },
                ],
            },
            {
                icon: serviceDetailIcons.iconCheck,
                text: [
                    { type: 'strong', text: 'Intégration des contenus fournis,' },
                    { type: 'text', text: ' vos textes et visuels mis en forme' },
                ],
            },
            {
                icon: serviceDetailIcons.iconCheck,
                text: [
                    { type: 'strong', text: 'Paiement en ligne,' },
                    { type: 'text', text: ' un système simple pour recevoir les commandes' },
                ],
            },
            {
                icon: serviceDetailIcons.iconCheck,
                text: [
                    { type: 'strong', text: 'Livraison simple,' },
                    { type: 'text', text: ' configuration d’un mode de livraison de base' },
                ],
            },
            {
                icon: serviceDetailIcons.iconCheck,
                text: [
                    { type: 'strong', text: 'Panier et commande,' },
                    { type: 'text', text: ' un parcours d’achat fonctionnel' },
                ],
            },
            {
                icon: serviceDetailIcons.iconCheck,
                text: [
                    { type: 'strong', text: 'Pages légales,' },
                    { type: 'text', text: ' bases indispensables pour votre boutique' },
                ],
            },
            {
                icon: serviceDetailIcons.iconCheck,
                text: [
                    { type: 'strong', text: 'Bannière cookies simple,' },
                    { type: 'text', text: ' information sobre et visible' },
                ],
            },
            {
                icon: serviceDetailIcons.iconCheck,
                text: [
                    { type: 'strong', text: 'Responsive,' },
                    { type: 'text', text: ' un affichage adapté à tous les écrans' },
                ],
            },
            {
                icon: serviceDetailIcons.iconCheck,
                text: [
                    { type: 'strong', text: 'Mise en ligne,' },
                    { type: 'text', text: ' publication propre de la boutique' },
                ],
            },
        ],
        suggestionPackContent: [
            {
                icon: serviceDetailIcons.iconFor,
                subtitle: 'Idéal pour',
                description: 'Les créateurs, artisans et petites structures qui veulent lancer une première boutique en ligne simple et professionnelle.',
            },
            {
                icon: serviceDetailIcons.iconOption,
                subtitle: 'Options possibles',
                description: 'Produit supplémentaire, variation de produits, intégration de GA4, optimisation SEO plus poussée.',
            },
            {
                icon: serviceDetailIcons.iconDeadline,
                subtitle: 'Délai moyen',
                description: '2 à 4 semaines selon le nombre de produits, les contenus et les validations.',
            },
            {
                icon: serviceDetailIcons.iconSupport,
                subtitle: 'Support',
                description: 'Support par email sous 24h à 48h ouvrées.',
            },
        ],
        firstButton: {
            label: 'Choisir ce pack',
            to: '/contact',
        },
    },
    {
        icon: serviceDetailIcons.iconEssentielle,
        title: 'Détail du pack Essentielle',
        subtitle: 'Ce qui est inclus',
        itemPackContent: [
            {
                icon: serviceDetailIcons.iconCheck,
                text: [
                    { type: 'strong', text: 'Boutique en ligne complète,' },
                    { type: 'text', text: ' une structure plus solide pour vendre en ligne' },
                ],
            },
            {
                icon: serviceDetailIcons.iconCheck,
                text: [
                    { type: 'strong', text: 'Jusqu’à 25 produits,' },
                    { type: 'text', text: ' intégration d’un catalogue plus développé' },
                ],
            },
            {
                icon: serviceDetailIcons.iconCheck,
                text: [
                    { type: 'strong', text: 'Design sur mesure,' },
                    { type: 'text', text: ' une identité plus professionnelle et cohérente' },
                ],
            },
            {
                icon: serviceDetailIcons.iconCheck,
                text: [
                    { type: 'strong', text: 'Catégories de produits,' },
                    { type: 'text', text: ' une navigation plus claire dans votre catalogue' },
                ],
            },
            {
                icon: serviceDetailIcons.iconCheck,
                text: [
                    { type: 'strong', text: 'Reformulation des contenus fournis,' },
                    { type: 'text', text: ' des textes plus clairs et plus convaincants' },
                ],
            },
            {
                icon: serviceDetailIcons.iconCheck,
                text: [
                    { type: 'strong', text: 'Paiement en ligne,' },
                    { type: 'text', text: ' configuration du système de paiement' },
                ],
            },
            {
                icon: serviceDetailIcons.iconCheck,
                text: [
                    { type: 'strong', text: 'Livraison configurée,' },
                    { type: 'text', text: ' paramétrage adapté à vos besoins de base' },
                ],
            },
            {
                icon: serviceDetailIcons.iconCheck,
                text: [
                    { type: 'strong', text: 'Panier et commande,' },
                    { type: 'text', text: ' un parcours d’achat fluide et fonctionnel' },
                ],
            },
            {
                icon: serviceDetailIcons.iconCheck,
                text: [
                    { type: 'strong', text: 'Pages légales,' },
                    { type: 'text', text: ' mentions indispensables pour votre activité e-commerce' },
                ],
            },
            {
                icon: serviceDetailIcons.iconCheck,
                text: [
                    { type: 'strong', text: 'Intégration de GA4,' },
                    { type: 'text', text: ' suivi des visites et des performances' },
                ],
            },
            {
                icon: serviceDetailIcons.iconCheck,
                text: [
                    { type: 'strong', text: 'Responsive,' },
                    { type: 'text', text: ' un affichage adapté à tous les écrans' },
                ],
            },
            {
                icon: serviceDetailIcons.iconCheck,
                text: [
                    { type: 'strong', text: 'Mise en ligne,' },
                    { type: 'text', text: ' publication propre de la boutique' },
                ],
            },
        ],
        suggestionPackContent: [
            {
                icon: serviceDetailIcons.iconFor,
                subtitle: 'Idéal pour',
                description: 'Les professionnels qui veulent une boutique plus complète, mieux structurée et plus confortable pour vendre leurs produits.',
            },
            {
                icon: serviceDetailIcons.iconOption,
                subtitle: 'Options possibles',
                description: 'Produit supplémentaire, catégories avancées, codes promo, avis clients, optimisation SEO plus poussée.',
            },
            {
                icon: serviceDetailIcons.iconDeadline,
                subtitle: 'Délai moyen',
                description: '3 à 5 semaines selon le volume de produits, les contenus et les validations.',
            },
            {
                icon: serviceDetailIcons.iconSupport,
                subtitle: 'Support',
                description: 'Support par email sous 24h ouvrées.',
            },
        ],
        firstButton: {
            label: 'Choisir ce pack',
            to: '/contact',
        },
    },
    {
        icon: serviceDetailIcons.iconPremium,
        title: 'Détail du pack Premium',
        subtitle: 'Ce qui est inclus',
        itemPackContent: [
            {
                icon: serviceDetailIcons.iconCheck,
                text: [
                    { type: 'strong', text: 'Boutique en ligne premium,' },
                    { type: 'text', text: ' une solution plus complète pour développer vos ventes' },
                ],
            },
            {
                icon: serviceDetailIcons.iconCheck,
                text: [
                    { type: 'strong', text: 'Jusqu’à 50 produits,' },
                    { type: 'text', text: ' intégration d’un catalogue plus conséquent' },
                ],
            },
            {
                icon: serviceDetailIcons.iconCheck,
                text: [
                    { type: 'strong', text: 'Design premium,' },
                    { type: 'text', text: ' une identité plus soignée et différenciante' },
                ],
            },
            {
                icon: serviceDetailIcons.iconCheck,
                text: [
                    { type: 'strong', text: 'Catalogue structuré,' },
                    { type: 'text', text: ' une organisation plus claire des produits' },
                ],
            },
            {
                icon: serviceDetailIcons.iconCheck,
                text: [
                    { type: 'strong', text: 'Écriture ou réécriture des contenus,' },
                    { type: 'text', text: ' des textes plus impactants et rassurants' },
                ],
            },
            {
                icon: serviceDetailIcons.iconCheck,
                text: [
                    { type: 'strong', text: 'SEO de base renforcé & performance,' },
                    { type: 'text', text: ' des fondations plus solides pour votre visibilité' },
                ],
            },
            {
                icon: serviceDetailIcons.iconCheck,
                text: [
                    { type: 'strong', text: 'Paiement en ligne,' },
                    { type: 'text', text: ' configuration propre du système de paiement' },
                ],
            },
            {
                icon: serviceDetailIcons.iconCheck,
                text: [
                    { type: 'strong', text: 'Livraison avancée,' },
                    { type: 'text', text: ' paramétrage plus complet selon vos besoins' },
                ],
            },
            {
                icon: serviceDetailIcons.iconCheck,
                text: [
                    { type: 'strong', text: 'Pages légales,' },
                    { type: 'text', text: ' bases indispensables pour vendre en ligne' },
                ],
            },
            {
                icon: serviceDetailIcons.iconCheck,
                text: [
                    { type: 'strong', text: 'Intégration de GA4,' },
                    { type: 'text', text: ' suivi des visites et des performances' },
                ],
            },
            {
                icon: serviceDetailIcons.iconCheck,
                text: [
                    { type: 'strong', text: 'Responsive,' },
                    { type: 'text', text: ' un affichage adapté à tous les écrans' },
                ],
            },
            {
                icon: serviceDetailIcons.iconCheck,
                text: [
                    { type: 'strong', text: 'Mise en ligne,' },
                    { type: 'text', text: ' publication propre de la boutique' },
                ],
            },
        ],
        suggestionPackContent: [
            {
                icon: serviceDetailIcons.iconFor,
                subtitle: 'Idéal pour',
                description: 'Les marques, commerçants et entreprises qui veulent une boutique en ligne plus aboutie, plus soignée et plus évolutive.',
            },
            {
                icon: serviceDetailIcons.iconOption,
                subtitle: 'Options possibles',
                description: 'Produit supplémentaire, organisation avancée du catalogue, blog, avis clients, optimisation SEO avancée, maintenance mensuelle.',
            },
            {
                icon: serviceDetailIcons.iconDeadline,
                subtitle: 'Délai moyen',
                description: '4 à 6 semaines selon le niveau de personnalisation, le catalogue et les validations.',
            },
            {
                icon: serviceDetailIcons.iconSupport,
                subtitle: 'Support',
                description: 'Support par email sous 24h ouvrées.',
            },
        ],
        firstButton: {
            label: 'Choisir ce pack',
            to: '/contact',
        },
    },
]
