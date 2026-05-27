import type { ServicesPreview } from "@/ressources/content/contentTypes";
import iconWeb from '@/assets/icons/iconWeb.webp'
import iconApp from '@/assets/icons/iconApp.webp'
import iconMaintenance from '@/assets/icons/iconMaintenance.webp'
import iconSeo from '@/assets/icons/iconSeo.webp'

export const servicesPreviewContent: ServicesPreview = {
    title: 'Service de développement web sur mesure',
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
        label: 'Trouver la solution adaptée à mon projet',
        to: '/services',
    },
    cards: [
        {
           id: 'web',
           icon: { src: iconWeb, alt: 'Icône développement web' },
           title: 'Création et refonte de sites internet sur mesure - Lancez votre projet dès aujourd\'hui',
           description: [
               { type: 'text', text: 'Du ' },
               { type: 'strong', text: 'site vitrine sur mesure' },
               { type: 'text', text: ' au ' },
               { type: 'strong', text: 'site e-commerce personnalisé' },
               { type: 'text', text: ', nous vous développons des solutions uniques, modernes et évolutives, adaptées à vos objectifs et à votre image de marque.' },
           ],
           secondButton: { label: 'Découvrir', to: '/services' }
        },
        {
           id: 'app',
           icon: { src: iconApp, alt: 'Icône de smartphone' },
           title: 'Application web personnalisées - Transformez vos idées en réalité',
           description: [
               { type: 'text', text: 'Nous vous concevons des ' },
               { type: 'strong', text: 'applications web sur mesure' },
               { type: 'text', text: ' performantes et sécurisées, pensées pour répondre à vos besoins spécifiques et améliorer vos processus métiers.' },
           ],
           secondButton: { label: 'Découvrir', to: '/services' }
        },
        {
           id: 'maintenance',
           icon: { src: iconMaintenance, alt: 'Icône de maintenance' },
           title: 'Maintenance et support technique - Assurez sécurité et performance',
           description: [
               { type: 'text', text: 'Un site doit rester rapide, sécurisé et à jour. Nous vous proposons la ' },
               { type: 'strong', text: 'maintenance de site internet' },
               { type: 'text', text: ' et un ' },
               { type: 'strong', text: 'support technique continu' },
               { type: 'text', text: ' pour assurer la fiabilité et l\'évolution de vos projets web.' },
           ],
           secondButton: { label: 'Découvrir', to: '/services' }
        },
        {
           id: 'seo',
           icon: { src: iconSeo, alt: 'Icône SEO' },
           title: 'Optimisation SEO - Attirez plus de clients grâce à Google',
           description: [
               { type: 'text', text: 'Améliorez votre visibilité grâce à une ' },
               { type: 'strong', text: 'optimisation SEO' },
               { type: 'text', text: ' complète : structure technique, vitesse, contenus optimisés et suivi des performances pour attirer plus de clients.' },
           ],
           secondButton: { label: 'Découvrir', to: '/services' }
        }
    ]

}
