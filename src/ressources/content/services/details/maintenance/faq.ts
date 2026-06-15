import type { FaqContent } from '@/ressources/content/contentTypes'

export const faqMaintenance: FaqContent = {
    title: 'FAQ',
    faqItems: [
        {
            id: 'question-1',
            title: 'Pourquoi souscrire à une maintenance de site web ?',
            description: [
                { type: 'text', text: 'La maintenance permet de garder votre site à jour, sécurisé et fonctionnel. Elle limite les risques de bugs, de failles de sécurité ou de dysfonctionnements liés aux mises à jour.' },
            ],
        },
        {
            id: 'question-2',
            title: 'Est-ce que la maintenance inclut les modifications du site ?',
            description: [
                { type: 'text', text: 'Selon le pack choisi, certaines petites corrections ou modifications de contenu peuvent être incluses. Les évolutions plus importantes, comme l’ajout d’une page ou d’une fonctionnalité, font généralement l’objet d’un devis complémentaire.' },
            ],
        },
        {
            id: 'question-3',
            title: 'Peut-on maintenir un site que nous n’avons pas créé ?',
            description: [
                { type: 'text', text: 'Oui, c’est possible après une vérification technique préalable. Cela permet d’évaluer l’état du site, ses extensions, son thème et les éventuels risques avant de mettre en place la maintenance.' },
            ],
        },
    ],
}
