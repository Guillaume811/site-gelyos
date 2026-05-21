import type { ContactPageContent } from "../contentTypes";
import pictureHeaderContact from '@/assets/pictures/header-service.webp'

export const contactContent: ContactPageContent = {
    header: {
        title: 'Un projet en tÃƒÂªte ? Parlons-en ensemble',
        image: { 
            src: pictureHeaderContact, 
            alt: '' }
    },
    intro: {
        text: [
            { type: 'text', text: 'Vous avez un projet de ' },
            { type: 'strong', text: 'site internet sur mesure' },
            { type: 'text', text: ", d'" },
            { type: 'strong', text: 'application' },
            { type: 'text', text: "' ou besoin d'une " },
            { type: 'strong', text: 'optimisation SEO' },
            { type: 'text', text: ' ? Remplissez ce formulaire ou contactez-nous directement par e-mail ou tÃƒÂ©lÃƒÂ©phone : nous vous rÃƒÂ©pondrons sous 24h.' }
        ]
    },
    title: 'Discutons ensemble',
    email: {
        title: 'Par E-mail',
        description: `Nous sommes la pour vous aidez. Une rÃƒÂ©ponse vous sera garantie sous 24h.`
    },
    phone: {
        title: 'Par TÃƒÂ©lÃƒÂ©phone',
        description: `Disponible du lundi au vendredi de 9h ÃƒÂ  18h.`
    },
    text: `Nous sommes toujours disponible pour ÃƒÂ©changer et rÃƒÂ©pondre ÃƒÂ  vos questions.`,
    textForm: `Nous utiliserons les informations que vous nous fournissez uniquement pour rÃƒÂ©pondre ÃƒÂ  votre demande. Pour plus d'informations, consultez notre`
};
