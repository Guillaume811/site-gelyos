import type { ServicesPreview } from "@/ressources/content/contentTypes";
import { serviceRoutes } from '@/ressources/routes'
import iconLandingPage from '@/assets/icons/iconLandingPage.webp'
import iconSiteVitrine from '@/assets/icons/iconSiteVitrine.webp'
import iconEcommerce from '@/assets/icons/iconEcommerce.webp'
import iconMaintenance from '@/assets/icons/iconMaintenance.webp'
import iconSeo from '@/assets/icons/iconSeo.webp'

export const servicesPreviewContent: ServicesPreview = {
    subtitle: 'Nos Services',
    title: 'Découvrez comment nous pouvons vous aider',
    text: [
        { type: 'text', text: 'GELYOS vous accompagne dans la ' },
        { type: 'strong', text: 'création de sites internet sur mesure' },
        { type: 'text', text: ', la ' },
        { type: 'strong', text: 'refonte de projets existant' },
        { type: 'text', text: ', ainsi que dans l\'' },
        { type: 'strong', text: 'optimisation SEO' },
        { type: 'text', text: ' et la ' },
        { type: 'strong', text: 'maintenance technique' },
        { type: 'text', text: ' pour garantir performance et visibilité.' },
    ],
    firstButton: {
        label: 'Explorer nos services',
        to: '/services',
    },
    cards: [
        {
           id: 'landingPage',
           icon: { src: iconLandingPage, alt: 'Icône de landing page' },
           subtitle: 'Landing Page',
           title: 'Une page pensée pour convaincre',
           description: [
               { type: 'text', text: 'Création de landing page pour présenter votre activité, mettre en avant votre offre et générer plus de demandes de contact.' },
           ],
           price: [
               { type: 'text', text: 'À partir de ' },
               { type: 'accent', text: '590 € HT' },
           ],
           secondButton: { label: 'Découvrir l\'offre', to: serviceRoutes.landingPage.path }
        },
        {
           id: 'siteVitrine',
           icon: { src: iconSiteVitrine, alt: 'Icône de site vitrine' },
           subtitle: 'Site Vitrine',
           title: 'Un site clair pour valoriser votre activité',
           description: [
               { type: 'text', text: 'Création de site vitrine pour présenter votre entreprise, renforcer votre crédibilité et faciliter la prise de contact.' },
           ],
           price: [
               { type: 'text', text: 'À partir de ' },
               { type: 'accent', text: '990 € HT' },
           ],
           secondButton: { label: 'Découvrir l\'offre', to: serviceRoutes.siteVitrine.path }
        },
        {
           id: 'Ecommerce',
           icon: { src: iconEcommerce, alt: 'Icône d\'e-commerce' },
           subtitle: 'Site E-commerce',
           title: 'Développez vos ventes avec une boutique en ligne',
           description: [
               { type: 'text', text: 'Création de site e-commerce pour vendre vos produits en ligne, offrir une expérience d’achat fluide et développer votre activité.' },
           ],
           price: [
               { type: 'text', text: 'À partir de ' },
               { type: 'accent', text: '1590 € HT' },
           ],
           secondButton: { label: 'Découvrir l\'offre', to: serviceRoutes.siteEcommerce.path }
        },
        {
           id: 'maintenance',
           icon: { src: iconMaintenance, alt: 'Icône de maintenance' },
           subtitle: 'Maintenance',
           title: 'Un site suivi, sécurisé et à jour',
           description: [
               { type: 'text', text: 'Maintenance de site web pour assurer les mises à jour, la sécurité, les sauvegardes et le bon fonctionnement de votre site.' },
           ],
           price: [
               { type: 'text', text: 'À partir de ' },
               { type: 'accent', text: '49 € HT / mois' },
           ],
           secondButton: { label: 'Découvrir l\'offre', to: serviceRoutes.maintenance.path }
        },
        {
           id: 'seo',
           icon: { src: iconSeo, alt: 'Icône SEO' },
           subtitle: 'SEO - Référencement',
           title: 'Gagnez en visibilité sur Google',
           description: [
               { type: 'text', text: 'SEO pour améliorer le référencement naturel de votre site, renforcer votre présence en ligne et attirer plus de contacts qualifiés.' },
           ],
           price: [
               { type: 'text', text: 'À partir de ' },
               { type: 'accent', text: '190 € HT / mois' },
           ],
           secondButton: { label: 'Découvrir l\'offre', to: serviceRoutes.seo.path }
        }
    ]

}
