import type { RouteName } from "~/ressources/routes"
import type { InlineContent } from "../contentTypes"

type CtaContentEntry = {
    title: string
    text: InlineContent
    button: string
}

/* CTA content registry
* Purpose:
* - Centralize per-route CTA copy outside components.
*
* Type:
* - Partial<Record<RouteName, { title: string; text: string; button: string }>>
*   -> keys are route names (home, services, aPropos, portfolio, ...).
*   -> "Partial" means some routes can be missing (no CTA shown on those pages).
*
* Usage notes:
* - "text" uses InlineContent segments (text/strong/emphasis/accent/link/lineBreak).
* - Keeps UI logic separate from content; easy to update or translate later.
*/
export const ctaContent: Partial<Record<RouteName, CtaContentEntry>> = {

    home: {
        title: "Votre site est-il vraiment optimisé ?",
        text: [
            { type: 'text', text: "Bénéficiez d'un " },
            { type: 'strong', text: 'audit gratuit de votre site internet' },
            { type: 'text', text: " pour identifier ses points forts et ses axes d'amélioration." },
            { type: 'lineBreak' },
            { type: 'text', text: 'Je vous fournis une analyse claire et des recommandations personnalisées pour booster votre visibilité en ligne.' },
        ],
        button: "Recevoir mon audit offert"
    },

    services: {
        title: "Vous avez un projet de site internet sur mesure, d'application web personnalisée ou besoin d'une optimisation SEO ?",
        text: [
            { type: 'text', text: "Parlons de votre prjet dès aujourd'hui et recevez un devis gratuit." },
        ],
        button: "Recevoir mon devis offert"
    },

    aPropos: {
        title: "Vous cherchez un partenaire fiable et passionné pour votre projet digital ?",
        text: [
            { type: 'strong', text: "Parlons de votre projet dès aujourd'hui" },
            { type: 'text', text: ' et construisons ensemble une solution sur mesure.' },
        ],
        button: "Contactez-moi"
    },

    portfolio: {
        title: "Vous souhaitez un projet similaire ou discuter de la création de votre site internet sur mesure ?",
        text: [
            { type: 'text', text: "Contactez-moi dès aujourd'hui pour obtenir un devis gratuit et donner vie à vos idées digitales." },
        ],
        button: "Recevoir mon devis offert"
    }
}
