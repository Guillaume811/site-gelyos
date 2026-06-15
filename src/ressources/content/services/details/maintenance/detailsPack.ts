import type { DetailsPackContent } from '@/ressources/content/contentTypes'
import { serviceDetailIcons } from '../serviceDetailIcons'

export const detailsPackMaintenance: DetailsPackContent = [
    {
        icon: serviceDetailIcons.iconStarter,
        title: 'Détail du pack Starter',
        subtitle: 'Ce qui est inclus',
        itemPackContent: [
            {
                icon: serviceDetailIcons.iconCheck,
                text: [
                    { type: 'strong', text: 'Mises à jour techniques,' },
                    { type: 'text', text: ' maintien du site et des extensions à jour' },
                ],
            },
            {
                icon: serviceDetailIcons.iconCheck,
                text: [
                    { type: 'strong', text: 'Sauvegardes régulières,' },
                    { type: 'text', text: ' protection des données essentielles' },
                ],
            },
            {
                icon: serviceDetailIcons.iconCheck,
                text: [
                    { type: 'strong', text: 'Sécurité de base,' },
                    { type: 'text', text: ' prévention des risques courants' },
                ],
            },
            {
                icon: serviceDetailIcons.iconCheck,
                text: [
                    { type: 'strong', text: 'Surveillance de base,' },
                    { type: 'text', text: ' contrôle simple du bon fonctionnement' },
                ],
            },
            {
                icon: serviceDetailIcons.iconCheck,
                text: [
                    { type: 'strong', text: 'Vérification du site,' },
                    { type: 'text', text: ' détection des problèmes visibles' },
                ],
            },
            {
                icon: serviceDetailIcons.iconCheck,
                text: [
                    { type: 'strong', text: 'Support léger par email,' },
                    { type: 'text', text: ' accompagnement sur les demandes simples' },
                ],
            },
            {
                icon: serviceDetailIcons.iconCheck,
                text: [
                    { type: 'strong', text: 'Petites corrections mineures,' },
                    { type: 'text', text: ' ajustements techniques simples' },
                ],
            },
        ],
        suggestionPackContent: [
            {
                icon: serviceDetailIcons.iconFor,
                subtitle: 'Idéal pour',
                description: 'Les indépendants et petites structures qui veulent garder un site simple à jour, sécurisé et fonctionnel.',
            },
            {
                icon: serviceDetailIcons.iconOption,
                subtitle: 'Options possibles',
                description: 'Modification de contenu, restauration avancée, optimisation de performance, intervention sur bug complexe.',
            },
            {
                icon: serviceDetailIcons.iconDeadline,
                subtitle: 'Délai moyen',
                description: 'Mise en place sous quelques jours après réception des accès.',
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
                    { type: 'strong', text: 'Mises à jour techniques,' },
                    { type: 'text', text: ' suivi régulier du site et des extensions' },
                ],
            },
            {
                icon: serviceDetailIcons.iconCheck,
                text: [
                    { type: 'strong', text: 'Sauvegardes régulières,' },
                    { type: 'text', text: ' conservation de versions récentes du site' },
                ],
            },
            {
                icon: serviceDetailIcons.iconCheck,
                text: [
                    { type: 'strong', text: 'Sécurité renforcée,' },
                    { type: 'text', text: ' actions préventives contre les risques courants' },
                ],
            },
            {
                icon: serviceDetailIcons.iconCheck,
                text: [
                    { type: 'strong', text: 'Surveillance plus régulière,' },
                    { type: 'text', text: ' contrôle plus attentif de la stabilité' },
                ],
            },
            {
                icon: serviceDetailIcons.iconCheck,
                text: [
                    { type: 'strong', text: 'Vérification des formulaires,' },
                    { type: 'text', text: ' contrôle des points de contact importants' },
                ],
            },
            {
                icon: serviceDetailIcons.iconCheck,
                text: [
                    { type: 'strong', text: 'Petites modifications de contenu,' },
                    { type: 'text', text: ' ajustements simples du quotidien' },
                ],
            },
            {
                icon: serviceDetailIcons.iconCheck,
                text: [
                    { type: 'strong', text: 'Corrections mineures,' },
                    { type: 'text', text: ' résolution des petits problèmes visibles' },
                ],
            },
            {
                icon: serviceDetailIcons.iconCheck,
                text: [
                    { type: 'strong', text: 'Support plus réactif par email,' },
                    { type: 'text', text: ' traitement prioritaire des demandes courantes' },
                ],
            },
        ],
        suggestionPackContent: [
            {
                icon: serviceDetailIcons.iconFor,
                subtitle: 'Idéal pour',
                description: 'Les professionnels qui veulent une maintenance plus complète avec davantage de suivi et de sérénité.',
            },
            {
                icon: serviceDetailIcons.iconOption,
                subtitle: 'Options possibles',
                description: 'Ajout de section, création de page, optimisation SEO, optimisation de performance, intervention sur bug complexe.',
            },
            {
                icon: serviceDetailIcons.iconDeadline,
                subtitle: 'Délai moyen',
                description: 'Mise en place sous quelques jours après réception des accès.',
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
                    { type: 'strong', text: 'Mises à jour techniques,' },
                    { type: 'text', text: ' maintien complet du site et des outils essentiels' },
                ],
            },
            {
                icon: serviceDetailIcons.iconCheck,
                text: [
                    { type: 'strong', text: 'Sauvegardes régulières,' },
                    { type: 'text', text: ' protection renforcée des données du site' },
                ],
            },
            {
                icon: serviceDetailIcons.iconCheck,
                text: [
                    { type: 'strong', text: 'Sécurité renforcée,' },
                    { type: 'text', text: ' suivi plus attentif des risques techniques' },
                ],
            },
            {
                icon: serviceDetailIcons.iconCheck,
                text: [
                    { type: 'strong', text: 'Surveillance technique avancée,' },
                    { type: 'text', text: ' contrôle régulier de l’état général' },
                ],
            },
            {
                icon: serviceDetailIcons.iconCheck,
                text: [
                    { type: 'strong', text: 'Vérification des éléments essentiels,' },
                    { type: 'text', text: ' formulaires, pages clés et fonctionnalités importantes' },
                ],
            },
            {
                icon: serviceDetailIcons.iconCheck,
                text: [
                    { type: 'strong', text: 'Petites modifications de contenu,' },
                    { type: 'text', text: ' mises à jour simples et régulières' },
                ],
            },
            {
                icon: serviceDetailIcons.iconCheck,
                text: [
                    { type: 'strong', text: 'Ajustements simples,' },
                    { type: 'text', text: ' améliorations légères selon les besoins' },
                ],
            },
            {
                icon: serviceDetailIcons.iconCheck,
                text: [
                    { type: 'strong', text: 'Corrections techniques mineures à intermédiaires,' },
                    { type: 'text', text: ' résolution des anomalies courantes' },
                ],
            },
            {
                icon: serviceDetailIcons.iconCheck,
                text: [
                    { type: 'strong', text: 'Support prioritaire par email,' },
                    { type: 'text', text: ' accompagnement plus réactif sur les demandes importantes' },
                ],
            },
        ],
        suggestionPackContent: [
            {
                icon: serviceDetailIcons.iconFor,
                subtitle: 'Idéal pour',
                description: 'Les professionnels qui veulent un suivi renforcé pour un site important dans leur activité.',
            },
            {
                icon: serviceDetailIcons.iconOption,
                subtitle: 'Options possibles',
                description: 'Création de page, ajout de fonctionnalité, refonte partielle, optimisation SEO avancée, accompagnement mensuel plus large.',
            },
            {
                icon: serviceDetailIcons.iconDeadline,
                subtitle: 'Délai moyen',
                description: 'Mise en place sous quelques jours après réception des accès.',
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
