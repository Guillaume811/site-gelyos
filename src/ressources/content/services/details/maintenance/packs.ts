import type { PacksContent } from '@/ressources/content/contentTypes'
import { serviceRoutes } from '@/ressources/routes'
import { serviceDetailIcons } from '../serviceDetailIcons'

export const packsMaintenance: PacksContent = {
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
                { type: 'text', text: 'L’essentiel pour garder votre site à jour et fonctionnel.' },
            ],
            price: [
                { type: 'text', text: 'À partir de ' },
                { type: 'accent', text: '49 € HT / mois' },
            ],
            itemPackContent: [
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Mises à jour techniques' }] },
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Sauvegardes régulières' }] },
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Sécurité de base' }] },
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Surveillance de base' }] },
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Vérification du bon fonctionnement' }] },
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Support léger par email' }] },
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Petites corrections mineures' }] },
            ],
            secondButton: {
                label: 'Voir le détail',
                to: serviceRoutes.maintenance.path,
            },
            text: [
                { type: 'link', text: 'Demander un devis', href: '/contact' },
            ],
        },
        {
            icon: serviceDetailIcons.iconEssentielle,
            title: 'Essentielle',
            description: [
                { type: 'text', text: 'Un suivi plus complet pour garder votre site stable et sécurisé.' },
            ],
            price: [
                { type: 'text', text: 'À partir de ' },
                { type: 'accent', text: '89 € HT / mois' },
            ],
            itemPackContent: [
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Mises à jour techniques' }] },
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Sauvegardes régulières' }] },
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Sécurité renforcée' }] },
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Surveillance plus régulière' }] },
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Vérification des formulaires' }] },
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Petites modifications de contenu' }] },
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Corrections mineures' }] },
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Support plus réactif par email' }] },
            ],
            secondButton: {
                label: 'Voir le détail',
                to: serviceRoutes.maintenance.path,
            },
            text: [
                { type: 'link', text: 'Demander un devis', href: '/contact' },
            ],
        },
        {
            icon: serviceDetailIcons.iconPremium,
            title: 'Premium',
            description: [
                { type: 'text', text: 'Une maintenance renforcée pour un site important dans votre activité.' },
            ],
            price: [
                { type: 'text', text: 'À partir de ' },
                { type: 'accent', text: '149 € HT / mois' },
            ],
            itemPackContent: [
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Mises à jour techniques' }] },
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Sauvegardes régulières' }] },
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Sécurité renforcée' }] },
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Surveillance technique avancée' }] },
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Vérification des éléments essentiels' }] },
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Petites modifications de contenu' }] },
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Ajustements simples' }] },
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Corrections techniques mineures à intermédiaires' }] },
                { icon: serviceDetailIcons.iconCheck, text: [{ type: 'text', text: 'Support prioritaire par email' }] },
            ],
            secondButton: {
                label: 'Voir le détail',
                to: serviceRoutes.maintenance.path,
            },
            text: [
                { type: 'link', text: 'Demander un devis', href: '/contact' },
            ],
        },
    ],
}
