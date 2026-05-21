import type { InlineContent, MentionPageContent } from "../contentTypes";
import pictureHeaderContact from '@/assets/pictures/header-service.webp'

const MARKDOWN_LINK_REGEX = /\[([^\]]+)\]\(([^)]+)\)/g

function markdownLikeToInlineContent(raw: string): InlineContent {
    const normalized = raw.replace(/\r\n/g, '\n').replace(/^\s*\n/, "").replace(/\s*$/, "")
    const tokens = normalized.split(/(\[[^\]]+\]\([^)]+\)|\n)/g).filter(Boolean)

    const segments: InlineContent = []
    for (const token of tokens) {
        if (token === '\n') {
            segments.push({ type: 'lineBreak' })
            continue
        }

        const match = token.match(MARKDOWN_LINK_REGEX)
        if (match) {
            const parsed = token.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
            if (parsed) {
                segments.push({ type: 'link', text: parsed[1], href: parsed[2] })
                continue
            }
        }

        segments.push({ type: 'text', text: token })
    }

    return segments
}

export const mentionContent: MentionPageContent = {
    header : {
        title: 'Mentions LÃƒÂ©gales',
        image: {
            src: pictureHeaderContact,
            alt:''
        }
    },
    editeur : {
        title: '1. Ãƒâ€°diteur du site',
        description: markdownLikeToInlineContent(`
Le prÃƒÂ©sent site est ÃƒÂ©ditÃƒÂ© par : GELYOS  
Statut juridique : Auto-entrepreneur  
SiÃƒÂ¨ge social : 1171 route de l'AÃƒÂ©rodrome, 84140 Montfavet  
NumÃƒÂ©ro SIRET : 940 613 110 00011  
NumÃƒÂ©ro de TVA intracommunautaire : TVA non applicable, art. 293 B du CGI  
Responsable de la publication : Guillaume HUGUET  
Contact: [guillaumehuguet.gelyos@gmail.com](mailto:guillaumehuguet.gelyos@gmail.com) - [06 77 63 78 64](tel:+33677637864)
`)
    },
    hebergement: {
        title: '2. HÃƒÂ©bergement',
        description: markdownLikeToInlineContent(`
Le site est hÃƒÂ©bergÃƒÂ© par : Netlify, Inc.  
Adresse : 512 2nd Street, Fl 2, San Francisco, CA 94107  
Site web : [netlify.com](https://www.netlify.com/)
`)
    },
    conception: {
        title: '3. Conception / DÃƒÂ©veloppement',
        description: markdownLikeToInlineContent(`
La conception graphique et le dÃƒÂ©veloppement du site ont ÃƒÂ©tÃƒÂ© rÃƒÂ©alisÃƒÂ©s par : GELYOS  
Adresse : 1171 route de l'AÃƒÂ©rodrome, 84140 Montfavet  
Contact : [guillaumehuguet.gelyos@gmail.com](mailto:guillaumehuguet.gelyos@gmail.com)
`)
    },
    intellectuelle: {
        title: '4. PropriÃƒÂ©tÃƒÂ© intellectuelle',
        description: markdownLikeToInlineContent(`
LÃ¢â‚¬â„¢ensemble du contenu prÃƒÂ©sent sur ce site (textes, images, graphismes, logos, icÃƒÂ´nes, sons, logiciels, etc.) est la propriÃƒÂ©tÃƒÂ© exclusive de GELYOS, sauf mentions contraires.  
Toute reproduction, distribution, modification, adaptation, retransmission ou publication, mÃƒÂªme partielle, de ces diffÃƒÂ©rents ÃƒÂ©lÃƒÂ©ments est strictement interdite sans lÃ¢â‚¬â„¢accord ÃƒÂ©crit de GELYOS.
Cette reprÃƒÂ©sentation ou reproduction, par quelque procÃƒÂ©dÃƒÂ© que ce soit, constitue une contrefaÃƒÂ§on sanctionnÃƒÂ©e par les articles L.335-2 et suivants du Code de la propriÃƒÂ©tÃƒÂ© intellectuelle.
`)
    },
    responsabilite: {
        title: '5. ResponsabilitÃƒÂ©',
        description: markdownLikeToInlineContent(`
LÃ¢â‚¬â„¢ÃƒÂ©diteur sÃ¢â‚¬â„¢efforce de fournir des informations aussi prÃƒÂ©cises que possible. Toutefois, il ne pourra ÃƒÂªtre tenu responsable des omissions, des inexactitudes ou des carences dans la mise ÃƒÂ  jour de ces informations, qu'elles soient de son fait ou du fait des tiers partenaires.  
Le site peut contenir des liens hypertextes vers dÃ¢â‚¬â„¢autres sites. GELYOS ne peut ÃƒÂªtre tenu responsable des contenus de ces sites externes.  
LÃ¢â‚¬â„¢utilisateur du site reconnaÃƒÂ®t disposer des compÃƒÂ©tences nÃƒÂ©cessaires pour accÃƒÂ©der et utiliser ce site et avoir vÃƒÂ©rifiÃƒÂ© que la configuration informatique utilisÃƒÂ©e ne contient aucun virus et quÃ¢â‚¬â„¢elle est en parfait ÃƒÂ©tat de fonctionnement.
`)
    },
    cookies: {
        title: '6. Gestion des cookies',
        description: markdownLikeToInlineContent(`
Le site utilise des cookies ÃƒÂ  des fins de mesure dÃ¢â‚¬â„¢audience via Google Analytics.  

Types de cookies utilisÃƒÂ©s :  

Cookies de mesure dÃ¢â‚¬â„¢audience :  
permettent de collecter des informations anonymes sur la navigation afin dÃ¢â‚¬â„¢amÃƒÂ©liorer le contenu et lÃ¢â‚¬â„¢expÃƒÂ©rience utilisateur. 

Gestion des cookies :  
Lors de votre premiÃƒÂ¨re visite, un bandeau vous informe de la prÃƒÂ©sence de ces cookies et vous permet dÃ¢â‚¬â„¢accepter ou de refuser leur utilisation.  
Vous pouvez ÃƒÂ  tout moment modifier vos prÃƒÂ©fÃƒÂ©rences de cookies en cliquant sur le bouton de gestion des cookies prÃƒÂ©sent en bas de page (ou selon lÃ¢â‚¬â„¢emplacement dÃƒÂ©fini sur le site).  
Pour en savoir plus sur la gestion des cookies par Google Analytics, consultez la page : [policies.google.com](https://policies.google.com/technologies/cookies?hl=fr)
`),
        secondButton: {
            label: 'GÃƒÂ©rer mes Cookies',
            to: '/'
        }
    },
    confidentialite: {
        title: '7. Politique de confidentialitÃƒÂ©',
        description: markdownLikeToInlineContent(`
DonnÃƒÂ©es collectÃƒÂ©es via le formulaire de contact :  

Nom  
PrÃƒÂ©nom  
Adresse email  
TÃƒÂ©lÃƒÂ©phone  

Ces donnÃƒÂ©es sont collectÃƒÂ©es uniquement pour rÃƒÂ©pondre aux demandes transmises via le formulaire de contact.  

Fondement lÃƒÂ©gal :  
Le traitement repose sur le consentement de lÃ¢â‚¬â„¢utilisateur (article 6.1.a du RGPD).  

DurÃƒÂ©e de conservation :  
Les donnÃƒÂ©es sont conservÃƒÂ©es pendant une durÃƒÂ©e maximale de 3 ans ÃƒÂ  compter du dernier contact.  

Destinataires des donnÃƒÂ©es :  
Les donnÃƒÂ©es collectÃƒÂ©es sont destinÃƒÂ©es exclusivement ÃƒÂ  GELYOS et ne sont en aucun cas cÃƒÂ©dÃƒÂ©es ou vendues ÃƒÂ  des tiers. 

DonnÃƒÂ©es de navigation :  
Les donnÃƒÂ©es de navigation sont collectÃƒÂ©es de maniÃƒÂ¨re anonymisÃƒÂ©e via Google Analytics et utilisÃƒÂ©es uniquement ÃƒÂ  des fins statistiques. 

Droits des utilisateurs :  
ConformÃƒÂ©ment au RGPD et ÃƒÂ  la loi Informatique et LibertÃƒÂ©s, vous disposez des droits suivants :  
Droit dÃ¢â‚¬â„¢accÃƒÂ¨s, de rectification, de suppression et de portabilitÃƒÂ© de vos donnÃƒÂ©es  
Droit de limitation et dÃ¢â‚¬â„¢opposition au traitement de vos donnÃƒÂ©es  
Droit de retirer votre consentement ÃƒÂ  tout moment  
Pour exercer vos droits, vous pouvez contacter : GELYOS  
Email : [guillaumehuguet.gelyos@gmail.com](mailto:guillaumehuguet.gelyos@gmail.com)  
Adresse : 1171 route de l'AÃƒÂ©rodrome, 84140 Montfavet  
En cas de non-rÃƒÂ©ponse satisfaisante, vous avez la possibilitÃƒÂ© de dÃƒÂ©poser une rÃƒÂ©clamation auprÃƒÂ¨s de la CNIL : [cnil.fr](https://www.cnil.fr/fr)
`)
    },
    loi: {
        title: '8. Loi applicable',
        description: markdownLikeToInlineContent(`
Le prÃƒÂ©sent site est rÃƒÂ©gi par la loi franÃƒÂ§aise. En cas de litige, et ÃƒÂ  dÃƒÂ©faut de rÃƒÂ©solution amiable, les tribunaux franÃƒÂ§ais seront seuls compÃƒÂ©tents.
`)
    }
}
