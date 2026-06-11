import type { DetailsPackContent } from '@/ressources/content/contentTypes'
import { serviceDetailIcons } from '../serviceDetailIcons'

export const detailsPackLandingPage: DetailsPackContent = [
    {
        icon: serviceDetailIcons.iconStarter,
        title: 'Détail du pack Starter',
        subtitle: 'Ce qui est inclus',
        itemPackContent: [
            {
                icon: serviceDetailIcons.iconCheck,
                text: [
                    { type: 'strong', text: '1 page principale,' },
                    { type: 'text', text: ' présentation claire de votre activité ou de votre offre' },
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
                description: 'Les indépendants et petites structures qui veulent une présence en ligne simple et professionnelle.',
            },
            {
                icon: serviceDetailIcons.iconOption,
                subtitle: 'Options possibles',
                description: 'Section supplémentaire, amélioration des textes, intégration de GA4.',
            },
            {
                icon: serviceDetailIcons.iconDeadline,
                subtitle: 'Délai moyen',
                description: '1 à 2 semaines selon les contenus et les validations.',
            },
            {
                icon: serviceDetailIcons.iconSupport,
                subtitle: 'Support',
                description: 'Support par email sous 24h ouvrées.',
            },
        ],
        firstButton: {
            label: 'Choisir ce pack',
            to: '/contact'
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
                    { type: 'strong', text: '1 page principale,' },
                    { type: 'text', text: ' présentation claire de votre identité'}
                ],
            },
            {
                icon: serviceDetailIcons.iconCheck,
                text: [
                    { type: 'strong', text: '1 page mentions légales,' },
                    { type: 'text', text: ' base légales indispensables'}
                ],
            },
            {
                icon: serviceDetailIcons.iconCheck,
                text: [
                    { type: 'strong', text: 'Design sur mesure,' },
                    { type: 'text', text: ' une identité unique et professionnelle'}
                ],
            },
            {
                icon: serviceDetailIcons.iconCheck,
                text: [
                    { type: 'strong', text: 'Reformulation des contenus,' },
                    { type: 'text', text: ' des textes clairs et impactants'}
                ],
            },
            {
                icon: serviceDetailIcons.iconCheck,
                text: [
                    { type: 'strong', text: 'Optimisation SEO de base,' },
                    { type: 'text', text: ' fondations solide pour le référencement'}
                ],
            },
            {
                icon: serviceDetailIcons.iconCheck,
                text: [
                    { type: 'strong', text: 'Formulaire de contact,' },
                    { type: 'text', text: ' un moyen simple d’être contacté'}
                ],
            },
            {
                icon: serviceDetailIcons.iconCheck,
                text: [
                    { type: 'strong', text: 'Bannière cookies,' },
                    { type: 'text', text: ' informations cookies sobre et efficace'}
                ],
            },
            {
                icon: serviceDetailIcons.iconCheck,
                text: [
                    { type: 'strong', text: 'Intégration de GA4,' },
                    { type: 'text', text: ' suivi des visites et performances'}
                ],
            },
            {
                icon: serviceDetailIcons.iconCheck,
                text: [
                    { type: 'strong', text: 'Responsive,' },
                    { type: 'text', text: ' un affichage adapté à tous les écrans'}
                ],
            },
            {
                icon: serviceDetailIcons.iconCheck,
                text: [
                    { type: 'strong', text: 'Mise en ligne,' },
                    { type: 'text', text: ' publication propre du site'}
                ],
            },
        ],
        suggestionPackContent: [
            {
                icon: serviceDetailIcons.iconFor,
                subtitle: 'Idéal pour',
                description: 'Les entreprises et indépendants qui souhaitent un site professionnel, visible et évolutif.',
            },
            {
                icon: serviceDetailIcons.iconOption,
                subtitle: 'Option possible',
                description: 'Section supplémentaire, optimisation SEO plus poussée',
            },
            {
                icon: serviceDetailIcons.iconDeadline,
                subtitle: 'Délai moyen',
                description: '2 à 3 semaines selon le contenu et les validations.',
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
                    { type: 'strong', text: '1 page principale,' },
                    { type: 'text', text: ' une page complète pensée pour convaincre' },
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
                    { type: 'strong', text: 'Écriture des contenus,' },
                    { type: 'text', text: ' des textes plus clairs et plus impactants' },
                ],
            },
            {
                icon: serviceDetailIcons.iconCheck,
                text: [
                    { type: 'strong', text: 'SEO avancé & performance,' },
                    { type: 'text', text: ' une page mieux optimisée pour être visible' },
                ],
            },
            {
                icon: serviceDetailIcons.iconCheck,
                text: [
                    { type: 'strong', text: 'Formulaire de contact,' },
                    { type: 'text', text: ' un moyen simple de convertir vos visiteurs' },
                ],
            },
            {
                icon: serviceDetailIcons.iconCheck,
                text: [
                    { type: 'strong', text: 'Bannière cookies simple,' },
                    { type: 'text', text: ' intégration discrète et cohérente' },
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
                description: 'Les professionnels qui veulent une landing page plus stratégique, plus aboutie et plus performante.',
            },
            {
                icon: serviceDetailIcons.iconOption,
                subtitle: 'Options possibles',
                description: 'Prise de rendez-vous en ligne, section supplémentaire, politique de confidentialité.',
            },
            {
                icon: serviceDetailIcons.iconDeadline,
                subtitle: 'Délai moyen',
                description: '2 à 3 semaines selon les contenus et les validations.',
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
