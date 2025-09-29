import type { RouteName } from "@/ressources/routes"

export const ctaContent: Partial<Record<RouteName, {
    title: string
    text: string
    button: string
}>> = {

    home: {
        title: "Votre site est-il vraiment optimisé ?",
        text: "Bénéficiez d'un **audit gratuit de votre site internet** pour identifier ses points forts et ses axes d'amélioration.\nJe vous fournis une analyse claire et des recommandations personnalisées pour booster votre visibilité en ligne.",
        button: "Recevoir mon audit offert"
    },

    services: {
        title: "Vous avez un projet de **site internet sur mesure**, d'**application web personnalisée** ou besoin d'une **optimisation SEO** ?",
        text: "PArlons de votre prjet dès aujourd'hui et recevez un devis gratuit.",
        button: "Recevoir mon devis offert"
    },

    aPropos: {
        title: "Vous cherchez un **partenaire fiable et passionné** pour votre projet digital ?",
        text: "**Parlons de votre projet dès aujourd'hui** et construisons ensemble une solution sur mesure.",
        button: "Contactez-moi"
    },

    portfolio: {
        title: "Vous souhaitez un projet similaire ou discuter de la **création de votre site internet sur mesure** ?",
        text: "Contactez-moi dès aujourd'hui pour obtenir un devis gratuit et donner vie à vos idées digitales.",
        button: "Recevoir mon devis offert"
    }
}