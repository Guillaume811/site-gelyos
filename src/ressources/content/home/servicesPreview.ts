import type { ServicesPreview } from "@/ressources/content/contentTypes";
import iconWeb from '@/assets/icons/iconWeb.webp'
import iconApp from '@/assets/icons/iconApp.webp'
import iconMaintenance from '@/assets/icons/iconMaintenance.webp'
import iconSeo from '@/assets/icons/iconSeo.webp'

export const servicesPreviewContent: ServicesPreview = {
    title: 'Service de dÃƒÂ©veloppement web sur mesure',
    text: [
        { type: 'text', text: 'GELYOS vous accompagne dans la ' },
        { type: 'strong', text: 'crÃƒÂ©ation de sites internet sur mesure' },
        { type: 'text', text: ', la ' },
        { type: 'strong', text: 'refonte de projets existant' },
        { type: 'text', text: ', ainsi que dans l\'' },
        { type: 'strong', text: 'optimisation SEO' },
        { type: 'text', text: ' et la ' },
        { type: 'strong', text: 'maintenance technique' },
        { type: 'text', text: ' pour garantir performance et visibilitÃƒÂ©.' },
    ],
    firstButton: {
        label: 'Trouver la solution adaptÃƒÂ©e ÃƒÂ  mon projet',
        to: '/services',
    },
    cards: [
        {
           id: 'web',
           icon: { src: iconWeb, alt: 'IcÃƒÂ´ne dÃƒÂ©veloppement web' },
           title: 'CrÃƒÂ©ation et refonte de sites internet sur mesure - Lancez votre projet dÃƒÂ¨s aujourd\'hui',
           description: [
               { type: 'text', text: 'Du ' },
               { type: 'strong', text: 'site vitrine sur mesure' },
               { type: 'text', text: ' au ' },
               { type: 'strong', text: 'site e-commerce personnalisÃƒÂ©' },
               { type: 'text', text: ', nous vous dÃƒÂ©veloppons des solutions uniques, modernes et ÃƒÂ©volutives, adaptÃƒÂ©es ÃƒÂ  vos objectifs et ÃƒÂ  votre image de marque.' },
           ],
           secondButton: { label: 'DÃƒÂ©couvrir', to: '/services' }
        },
        {
           id: 'app',
           icon: { src: iconApp, alt: 'IcÃƒÂ´ne de smartphone' },
           title: 'Application web personnalisÃƒÂ©es - Transformez vos idÃƒÂ©es en rÃƒÂ©alitÃƒÂ©',
           description: [
               { type: 'text', text: 'Nous vous concevons des ' },
               { type: 'strong', text: 'applications web sur mesure' },
               { type: 'text', text: ' performantes et sÃƒÂ©curisÃƒÂ©es, pensÃƒÂ©es pour rÃƒÂ©pondre ÃƒÂ  vos besoins spÃƒÂ©cifiques et amÃƒÂ©liorer vos processus mÃƒÂ©tiers.' },
           ],
           secondButton: { label: 'DÃƒÂ©couvrir', to: '/services' }
        },
        {
           id: 'maintenance',
           icon: { src: iconMaintenance, alt: 'IcÃƒÂ´ne de maintenance' },
           title: 'Maintenance et support technique - Assurez sÃƒÂ©curitÃƒÂ© et performance',
           description: [
               { type: 'text', text: 'Un site doit rester rapide, sÃƒÂ©curisÃƒÂ© et ÃƒÂ  jour. Nous vous proposons la ' },
               { type: 'strong', text: 'maintenance de site internet' },
               { type: 'text', text: ' et un ' },
               { type: 'strong', text: 'support technique continu' },
               { type: 'text', text: ' pour assurer la fiabilitÃƒÂ© et l\'ÃƒÂ©volution de vos projets web.' },
           ],
           secondButton: { label: 'DÃƒÂ©couvrir', to: '/services' }
        },
        {
           id: 'seo',
           icon: { src: iconSeo, alt: 'IcÃƒÂ´ne SEO' },
           title: 'Optimisation SEO - Attirez plus de clients grÃƒÂ¢ce ÃƒÂ  Google',
           description: [
               { type: 'text', text: 'AmÃƒÂ©liorez votre visibilitÃƒÂ© grÃƒÂ¢ce ÃƒÂ  une ' },
               { type: 'strong', text: 'optimisation SEO' },
               { type: 'text', text: ' complÃƒÂ¨te : structure technique, vitesse, contenus optimisÃƒÂ©s et suivi des performances pour attirer plus de clients.' },
           ],
           secondButton: { label: 'DÃƒÂ©couvrir', to: '/services' }
        }
    ]

}
