import type { ServicesPreview } from "@/ressources/content/contentTypes";
import iconWeb from '@/assets/icons/iconWeb.webp'
import iconApp from '@/assets/icons/iconApp.webp'
import iconMaintenance from '@/assets/icons/iconMaintenance.webp'
import iconSeo from '@/assets/icons/iconSeo.webp'

export const servicesPreviewContent: ServicesPreview = {
    title: 'Service de développement web sur mesure',
    text: 'GELYOS vous accompagne dans la **création de sites internet sur mesure**, la **refonte de projets existant**, ainsi que dans l\'**optimisation SEO** et la **maintenance technique** pour garantir performance et visibilité.',
    firstButton: {
        label: 'Trouver la solution adaptée à mon projet',
        to: '/services',
    },
    cards: [
        {
           id: 'web',
           icon: { src: iconWeb, alt: 'Icône développement web' },
           title: 'Création et refonte de sites internet sur mesure - Lancez votre projet dès aujourd\'hui',
           description: 'Du **site vitrine sur mesure** au **site e-commerce personnalisé**, nous vous développons des solutions uniques, modernes et évolutives, adaptées à vos objectifs et à votre image de marque.',
           secondButton: { label: 'Découvrir', to: '/services' }
        },
        {
           id: 'app',
           icon: { src: iconApp, alt: 'Icône de smartphone' },
           title: 'Application web personnalisées - Transformez vos idées en réalité',
           description: 'Nous vous concevons des **applications web sur mesure** performantes et sécurisées, pensées pour répondre à vos besoins spécifiques et améliorer vos processus métiers.',
           secondButton: { label: 'Découvrir', to: '/services' }
        },
        {
           id: 'maintenance',
           icon: { src: iconMaintenance, alt: 'Icône de maintenance' },
           title: 'Maintenance et support technique - Assurez sécurité et performance',
           description: 'Un site doit rester rapide, sécurisé et à jour. Nous vous proposons la **maintenance de site internet** et un **support technique continu** pour assurer la fiabilité et l\'évolution de vos projets web.',
           secondButton: { label: 'Découvrir', to: '/services' }
        },
        {
           id: 'seo',
           icon: { src: iconSeo, alt: 'Icône SEO' },
           title: 'Optimisation SEO - Attirez plus de clients grâce à Google',
           description: 'Améliorez votre visibilité grâce à une **optimisation SEO** complète : structure technique, vitesse, contenus optimisés et suivi des performances pour attirer plus de clients.',
           secondButton: { label: 'Découvrir', to: '/services' }
        }
    ]

}