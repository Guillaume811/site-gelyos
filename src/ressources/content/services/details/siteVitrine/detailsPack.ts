import type { DetailsPackContent } from '@/ressources/content/contentTypes'
import { serviceDetailIcons } from '../serviceDetailIcons'

export const detailsPackSiteVitrine: DetailsPackContent = [
    {
        icon: serviceDetailIcons.iconStarter,
        title: 'Détail du pack Starter',
        subtitle: 'Ce qui est inclus',
        itemPackContent: [
            {
                icon: serviceDetailIcons.iconCheck,
                text: [
                    { type: 'strong', text: 'Jusqu’à 4 pages,' },
                    { type: 'text', text: ' une structure simple pour présenter votre activité' },
                ],
            },
            {
                icon: serviceDetailIcons.iconCheck,
                text: [
                    { type: 'strong', text: '1 page mentions légales,' },
                    { type: 'text', text: ' base légale indispensable' },
                ],
            },
            {
                icon: serviceDetailIcons.iconCheck,
                text: [
                    { type: 'strong', text: 'Design simple,' },
                    { type: 'text', text: ' une mise en page propre et professionnelle' },
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
                    { type: 'strong', text: 'Menu de navigation,' },
                    { type: 'text', text: ' un accès clair aux pages principales' },
                ],
            },
            {
                icon: serviceDetailIcons.iconCheck,
                text: [
                    { type: 'strong', text: 'Formulaire de contact,' },
                    { type: 'text', text: ' un moyen simple d’être contacté' },
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
                    { type: 'text', text: ' publication propre du site' },
                ],
            },
        ],
        suggestionPackContent: [
            {
                icon: serviceDetailIcons.iconFor,
                subtitle: 'Idéal pour',
                description: 'Les indépendants, artisans et petites structures qui veulent un site vitrine simple, clair et professionnel.',
            },
            {
                icon: serviceDetailIcons.iconOption,
                subtitle: 'Options possibles',
                description: 'Page supplémentaire, amélioration des textes, optimisation SEO plus poussée.',
            },
            {
                icon: serviceDetailIcons.iconDeadline,
                subtitle: 'Délai moyen',
                description: '2 à 3 semaines selon les contenus et les validations.',
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
                    { type: 'strong', text: 'Jusqu’à 6 pages,' },
                    { type: 'text', text: ' une présentation plus complète de votre activité' },
                ],
            },
            {
                icon: serviceDetailIcons.iconCheck,
                text: [
                    { type: 'strong', text: '1 page mentions légales,' },
                    { type: 'text', text: ' base légale indispensable' },
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
                    { type: 'strong', text: 'Reformulation des contenus fournis,' },
                    { type: 'text', text: ' des textes plus clairs et plus impactants' },
                ],
            },
            {
                icon: serviceDetailIcons.iconCheck,
                text: [
                    { type: 'strong', text: 'Structure de navigation optimisée,' },
                    { type: 'text', text: ' un parcours plus fluide pour vos visiteurs' },
                ],
            },
            {
                icon: serviceDetailIcons.iconCheck,
                text: [
                    { type: 'strong', text: 'Formulaire de contact,' },
                    { type: 'text', text: ' un moyen simple de générer des demandes' },
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
                    { type: 'text', text: ' publication propre du site' },
                ],
            },
        ],
        suggestionPackContent: [
            {
                icon: serviceDetailIcons.iconFor,
                subtitle: 'Idéal pour',
                description: 'Les professionnels qui veulent un site vitrine plus complet pour valoriser leur activité et renforcer leur crédibilité.',
            },
            {
                icon: serviceDetailIcons.iconOption,
                subtitle: 'Options possibles',
                description: 'Page supplémentaire, blog, prise de rendez-vous en ligne, optimisation SEO plus poussée.',
            },
            {
                icon: serviceDetailIcons.iconDeadline,
                subtitle: 'Délai moyen',
                description: '2 à 4 semaines selon le volume de contenu et les validations.',
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
                    { type: 'strong', text: 'Jusqu’à 8 pages,' },
                    { type: 'text', text: ' une structure complète pour présenter votre activité' },
                ],
            },
            {
                icon: serviceDetailIcons.iconCheck,
                text: [
                    { type: 'strong', text: '1 page mentions légales,' },
                    { type: 'text', text: ' base légale indispensable' },
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
                    { type: 'strong', text: 'Écriture ou réécriture des contenus,' },
                    { type: 'text', text: ' des textes plus clairs et plus convaincants' },
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
                    { type: 'strong', text: 'Navigation optimisée,' },
                    { type: 'text', text: ' un parcours clair et agréable pour vos visiteurs' },
                ],
            },
            {
                icon: serviceDetailIcons.iconCheck,
                text: [
                    { type: 'strong', text: 'Formulaire de contact,' },
                    { type: 'text', text: ' un moyen simple de convertir vos prospects' },
                ],
            },
            {
                icon: serviceDetailIcons.iconCheck,
                text: [
                    { type: 'strong', text: 'Bannière cookies simple,' },
                    { type: 'text', text: ' intégration sobre et cohérente' },
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
                    { type: 'text', text: ' publication propre du site' },
                ],
            },
        ],
        suggestionPackContent: [
            {
                icon: serviceDetailIcons.iconFor,
                subtitle: 'Idéal pour',
                description: 'Les professionnels qui veulent un site vitrine plus abouti, plus crédible et plus différenciant.',
            },
            {
                icon: serviceDetailIcons.iconOption,
                subtitle: 'Options possibles',
                description: 'Page supplémentaire, blog, prise de rendez-vous en ligne, optimisation SEO avancée, maintenance mensuelle.',
            },
            {
                icon: serviceDetailIcons.iconDeadline,
                subtitle: 'Délai moyen',
                description: '3 à 5 semaines selon le niveau de personnalisation, les contenus et les validations.',
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
