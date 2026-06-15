import type { DetailsPackContent } from '@/ressources/content/contentTypes'
import { serviceDetailIcons } from '../serviceDetailIcons'

export const detailsPackSeo: DetailsPackContent = [
    {
        icon: serviceDetailIcons.iconStarter,
        title: 'Détail du pack Starter',
        subtitle: 'Ce qui est inclus',
        itemPackContent: [
            {
                icon: serviceDetailIcons.iconCheck,
                text: [
                    { type: 'strong', text: 'Audit SEO de base,' },
                    { type: 'text', text: ' première analyse des points à améliorer' },
                ],
            },
            {
                icon: serviceDetailIcons.iconCheck,
                text: [
                    { type: 'strong', text: 'Optimisation jusqu’à 3 pages,' },
                    { type: 'text', text: ' travail sur les pages prioritaires' },
                ],
            },
            {
                icon: serviceDetailIcons.iconCheck,
                text: [
                    { type: 'strong', text: 'Balises principales,' },
                    { type: 'text', text: ' titres et méta-informations mieux structurés' },
                ],
            },
            {
                icon: serviceDetailIcons.iconCheck,
                text: [
                    { type: 'strong', text: 'SEO local de base,' },
                    { type: 'text', text: ' fondations utiles pour la visibilité locale' },
                ],
            },
            {
                icon: serviceDetailIcons.iconCheck,
                text: [
                    { type: 'strong', text: 'Vérification de GA4,' },
                    { type: 'text', text: ' suivi des visites du site' },
                ],
            },
            {
                icon: serviceDetailIcons.iconCheck,
                text: [
                    { type: 'strong', text: 'Vérification de Search Console,' },
                    { type: 'text', text: ' suivi de l’indexation Google' },
                ],
            },
            {
                icon: serviceDetailIcons.iconCheck,
                text: [
                    { type: 'strong', text: 'Suivi mensuel simple,' },
                    { type: 'text', text: ' contrôle des premiers indicateurs' },
                ],
            },
            {
                icon: serviceDetailIcons.iconCheck,
                text: [
                    { type: 'strong', text: 'Point mensuel,' },
                    { type: 'text', text: ' résumé des actions et priorités' },
                ],
            },
        ],
        suggestionPackContent: [
            {
                icon: serviceDetailIcons.iconFor,
                subtitle: 'Idéal pour',
                description: 'Les indépendants et petites structures qui veulent poser des bases SEO saines et améliorer leur visibilité progressivement.',
            },
            {
                icon: serviceDetailIcons.iconOption,
                subtitle: 'Options possibles',
                description: 'Optimisation de pages supplémentaires, création ou amélioration de contenus, optimisation Google Business Profile.',
            },
            {
                icon: serviceDetailIcons.iconDeadline,
                subtitle: 'Délai moyen',
                description: 'Premières optimisations mises en place dès le premier mois selon les accès et les validations.',
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
                    { type: 'strong', text: 'Audit SEO plus complet,' },
                    { type: 'text', text: ' analyse plus précise du site et des priorités' },
                ],
            },
            {
                icon: serviceDetailIcons.iconCheck,
                text: [
                    { type: 'strong', text: 'Optimisation jusqu’à 8 pages,' },
                    { type: 'text', text: ' travail sur les pages importantes' },
                ],
            },
            {
                icon: serviceDetailIcons.iconCheck,
                text: [
                    { type: 'strong', text: 'Titres, méta-descriptions et structures Hn,' },
                    { type: 'text', text: ' contenus mieux organisés' },
                ],
            },
            {
                icon: serviceDetailIcons.iconCheck,
                text: [
                    { type: 'strong', text: 'Maillage interne de base,' },
                    { type: 'text', text: ' liens mieux structurés entre les pages' },
                ],
            },
            {
                icon: serviceDetailIcons.iconCheck,
                text: [
                    { type: 'strong', text: 'Optimisation SEO local,' },
                    { type: 'text', text: ' amélioration des signaux de proximité' },
                ],
            },
            {
                icon: serviceDetailIcons.iconCheck,
                text: [
                    { type: 'strong', text: 'Google Business Profile,' },
                    { type: 'text', text: ' fiche mieux renseignée et plus cohérente' },
                ],
            },
            {
                icon: serviceDetailIcons.iconCheck,
                text: [
                    { type: 'strong', text: 'Suivi mensuel régulier,' },
                    { type: 'text', text: ' analyse des évolutions importantes' },
                ],
            },
            {
                icon: serviceDetailIcons.iconCheck,
                text: [
                    { type: 'strong', text: 'Point mensuel détaillé,' },
                    { type: 'text', text: ' bilan des actions et recommandations' },
                ],
            },
        ],
        suggestionPackContent: [
            {
                icon: serviceDetailIcons.iconFor,
                subtitle: 'Idéal pour',
                description: 'Les professionnels qui veulent un accompagnement SEO plus structuré pour améliorer leurs pages stratégiques.',
            },
            {
                icon: serviceDetailIcons.iconOption,
                subtitle: 'Options possibles',
                description: 'Rédaction SEO, optimisation de pages supplémentaires, audit concurrentiel plus poussé, stratégie éditoriale.',
            },
            {
                icon: serviceDetailIcons.iconDeadline,
                subtitle: 'Délai moyen',
                description: 'Premières optimisations lancées dès le premier mois, puis suivi régulier chaque mois.',
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
                    { type: 'strong', text: 'Audit SEO approfondi,' },
                    { type: 'text', text: ' analyse complète des freins et opportunités' },
                ],
            },
            {
                icon: serviceDetailIcons.iconCheck,
                text: [
                    { type: 'strong', text: 'Optimisation jusqu’à 15 pages,' },
                    { type: 'text', text: ' travail renforcé sur les pages clés' },
                ],
            },
            {
                icon: serviceDetailIcons.iconCheck,
                text: [
                    { type: 'strong', text: 'Plan d’action priorisé,' },
                    { type: 'text', text: ' feuille de route claire pour avancer' },
                ],
            },
            {
                icon: serviceDetailIcons.iconCheck,
                text: [
                    { type: 'strong', text: 'Analyse concurrentielle locale,' },
                    { type: 'text', text: ' repérage des axes de progression' },
                ],
            },
            {
                icon: serviceDetailIcons.iconCheck,
                text: [
                    { type: 'strong', text: 'Maillage interne renforcé,' },
                    { type: 'text', text: ' meilleure circulation entre les contenus' },
                ],
            },
            {
                icon: serviceDetailIcons.iconCheck,
                text: [
                    { type: 'strong', text: 'SEO local avancé,' },
                    { type: 'text', text: ' présence locale travaillée plus en profondeur' },
                ],
            },
            {
                icon: serviceDetailIcons.iconCheck,
                text: [
                    { type: 'strong', text: 'Suivi mensuel renforcé,' },
                    { type: 'text', text: ' pilotage plus régulier des performances' },
                ],
            },
            {
                icon: serviceDetailIcons.iconCheck,
                text: [
                    { type: 'strong', text: 'Reporting détaillé,' },
                    { type: 'text', text: ' bilan clair des actions et résultats observés' },
                ],
            },
        ],
        suggestionPackContent: [
            {
                icon: serviceDetailIcons.iconFor,
                subtitle: 'Idéal pour',
                description: 'Les professionnels qui veulent développer leur visibilité sur le long terme avec un accompagnement SEO plus poussé.',
            },
            {
                icon: serviceDetailIcons.iconOption,
                subtitle: 'Options possibles',
                description: 'Rédaction de contenus SEO, stratégie éditoriale mensuelle, optimisation technique avancée, accompagnement multi-zone.',
            },
            {
                icon: serviceDetailIcons.iconDeadline,
                subtitle: 'Délai moyen',
                description: 'Actions prioritaires lancées dès le premier mois, puis accompagnement continu selon les objectifs.',
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
