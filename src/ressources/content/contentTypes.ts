import type { RoutePath } from '@/ressources/routes'

export type RichText = string

export interface ImageContent {
    src: string
    alt: string
}

export interface ButtonContent {
    label: string
    to: RoutePath
}

//TODO: passer les 3 ? en obligatoire et changer le code dans le composant Hero + changer son nom
export interface Content {
    title: RichText
    text: RichText
    firstButton?: ButtonContent
    secondButton?: ButtonContent
    image?: ImageContent
}

export interface ServiceCard {
    id: RichText,
    icon: ImageContent,
    title: RichText,
    description: RichText,
    secondButton: ButtonContent
}

export interface ServicesPreview {
    title: RichText,
    text: RichText,
    firstButton: ButtonContent,
    cards: ServiceCard[]
}

