import type { MentionPageContent } from "../contentTypes";
import pictureHeaderContact from '@/assets/pictures/header-service.png'

export const mentionContent: MentionPageContent = {
    header : {
        title: 'Mentions Légales',
        image: {
            src: pictureHeaderContact,
            alt:''
        }
    },
    editeur : {
        title: '1. Éditeur du site',
        description: `
Le présent site est édité par : GELYOS  
Statut juridique : Auto-entrepreneur  
Siège social : 1171 route de l'Aérodrome, 84140 Montfavet  
Numéro SIRET : 940 613 110 00011  
Numéro de TVA intracommunautaire : TVA non applicable, art. 293 B du CGI  
Responsable de la publication : Guillaume HUGUET  
Contact: [guillaumehuguet.gelyos@gmail.com](mailto:guillaumehuguet.gelyos@gmail.com) - [06 77 63 78 64](tel:+33677637864)
`.replace(/^\s*\n/, "").replace(/\s*$/, "")
    },
    hebergement: {
        title: '2. Hébergement',
        description: `
Le site est hébergé par : Netlify, Inc.  
Adresse : 512 2nd Street, Fl 2, San Francisco, CA 94107  
Site web : [netlify.com](https://www.netlify.com/)
`.replace(/^\s*\n/, "").replace(/\s*$/, "")
    },
    conception: {
        title: '3. Conception / Développement',
        description: `
La conception graphique et le développement du site ont été réalisés par : GELYOS  
Adresse : 1171 route de l'Aérodrome, 84140 Montfavet  
Contact : [guillaumehuguet.gelyos@gmail.com](mailto:guillaumehuguet.gelyos@gmail.com)
`.replace(/^\s*\n/, "").replace(/\s*$/, "")
    },
    intellectuelle: {
        title: '4. Propriété intellectuelle',
        description: `
L’ensemble du contenu présent sur ce site (textes, images, graphismes, logos, icônes, sons, logiciels, etc.) est la propriété exclusive de GELYOS, sauf mentions contraires.  
Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même partielle, de ces différents éléments est strictement interdite sans l’accord écrit de GELYOS.
Cette représentation ou reproduction, par quelque procédé que ce soit, constitue une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la propriété intellectuelle.
`.replace(/^\s*\n/, "").replace(/\s*$/, "")
    },
    responsabilite: {
        title: '5. Responsabilité',
        description: `
L’éditeur s’efforce de fournir des informations aussi précises que possible. Toutefois, il ne pourra être tenu responsable des omissions, des inexactitudes ou des carences dans la mise à jour de ces informations, qu'elles soient de son fait ou du fait des tiers partenaires.  
Le site peut contenir des liens hypertextes vers d’autres sites. GELYOS ne peut être tenu responsable des contenus de ces sites externes.  
L’utilisateur du site reconnaît disposer des compétences nécessaires pour accéder et utiliser ce site et avoir vérifié que la configuration informatique utilisée ne contient aucun virus et qu’elle est en parfait état de fonctionnement.
`.replace(/^\s*\n/, "").replace(/\s*$/, "")
    },
    cookies: {
        title: '6. Gestion des cookies',
        description: `
Le site utilise des cookies à des fins de mesure d’audience via Google Analytics.  

Types de cookies utilisés :  

Cookies de mesure d’audience :  
permettent de collecter des informations anonymes sur la navigation afin d’améliorer le contenu et l’expérience utilisateur. 

Gestion des cookies :  
Lors de votre première visite, un bandeau vous informe de la présence de ces cookies et vous permet d’accepter ou de refuser leur utilisation.  
Vous pouvez à tout moment modifier vos préférences de cookies en cliquant sur le bouton de gestion des cookies présent en bas de page (ou selon l’emplacement défini sur le site).  
Pour en savoir plus sur la gestion des cookies par Google Analytics, consultez la page : [policies.google.com](https://policies.google.com/technologies/cookies?hl=fr)
`.replace(/^\s*\n/, "").replace(/\s*$/, ""),
        secondButton: {
            label: 'Gérer mes Cookies',
            to: '/'
        }
    },
    confidentialite: {
        title: '7. Politique de confidentialité',
        description: `
Données collectées via le formulaire de contact :  

Nom  
Prénom  
Adresse email  
Téléphone  

Ces données sont collectées uniquement pour répondre aux demandes transmises via le formulaire de contact.  

Fondement légal :  
Le traitement repose sur le consentement de l’utilisateur (article 6.1.a du RGPD).  

Durée de conservation :  
Les données sont conservées pendant une durée maximale de 3 ans à compter du dernier contact.  

Destinataires des données :  
Les données collectées sont destinées exclusivement à GELYOS et ne sont en aucun cas cédées ou vendues à des tiers. 

Données de navigation :  
Les données de navigation sont collectées de manière anonymisée via Google Analytics et utilisées uniquement à des fins statistiques. 

Droits des utilisateurs :  
Conformément au RGPD et à la loi Informatique et Libertés, vous disposez des droits suivants :  
Droit d’accès, de rectification, de suppression et de portabilité de vos données  
Droit de limitation et d’opposition au traitement de vos données  
Droit de retirer votre consentement à tout moment  
Pour exercer vos droits, vous pouvez contacter : GELYOS  
Email : [guillaumehuguet.gelyos@gmail.com](mailto:guillaumehuguet.gelyos@gmail.com)  
Adresse : 1171 route de l'Aérodrome, 84140 Montfavet  
En cas de non-réponse satisfaisante, vous avez la possibilité de déposer une réclamation auprès de la CNIL : [cnil.fr](https://www.cnil.fr/fr)
`.replace(/^\s*\n/, "").replace(/\s*$/, "")
    },
    loi: {
        title: '8. Loi applicable',
        description: `
Le présent site est régi par la loi française. En cas de litige, et à défaut de résolution amiable, les tribunaux français seront seuls compétents.
`.replace(/^\s*\n/, "").replace(/\s*$/, "")
    }
}