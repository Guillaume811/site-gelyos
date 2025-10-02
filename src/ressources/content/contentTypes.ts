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

export interface Content {
    title: RichText
    subtitle?: RichText
    text: RichText
    firstButton?: ButtonContent
    secondButton?: ButtonContent
    image?: ImageContent
    images?: ImageContent[]
}