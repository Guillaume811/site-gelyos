import type { ContactPageContent } from "../contentTypes";
import pictureHeaderContact from '@/assets/pictures/header-service.webp'

export const contactContent: ContactPageContent = {
    header: {
        title: 'Un projet en tête ? Parlons-en ensemble',
        image: { 
            src: pictureHeaderContact, 
            alt: '' }
    },
    intro: {
        text: `Vous avez un projet de **site internet sur mesure**, d'**application** ou besoin d'une **optimisation SEO** ? Remplissez ce formulaire ou contactez-nous directement par e-mail ou téléphone : nous vous répondrons sous 24h.`
    },
    title: 'Discutons ensemble',
    email: {
        title: 'Par E-mail',
        description: `Nous sommes la pour vous aidez. Une réponse vous sera garantie sous 24h.`
    },
    phone: {
        title: 'Par Téléphone',
        description: `Disponible du lundi au vendredi de 9h à 18h.`
    },
    text: `Nous sommes toujours disponible pour échanger et répondre à vos questions.`,
    textForm: `Nous utiliserons les informations que vous nous fournissez uniquement pour répondre à votre demande. Pour plus d'informations, consultez notre`
};
