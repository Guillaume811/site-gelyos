import type { RoutePath } from '@/ressources/routes'

// ======== Common content types ========
export type RichText = string

export interface ImageContent {
    src: string
    alt: string
}

export interface ButtonContent {
    label: string
    to: RoutePath
}

export interface PageHeaderContent {
    title: RichText
    image: ImageContent
}

export interface IntroContent {
    text: RichText
}

// ======== Home page content types ========
//TODO: passer les 3 ? en obligatoire et changer le code dans le composant Hero + changer son nom
export interface Content {
    title: RichText
    text: RichText
    firstButton?: ButtonContent
    secondButton?: ButtonContent
    image?: ImageContent
}

export interface ServiceCard {
    id: RichText
    icon: ImageContent
    title: RichText
    description: RichText
    secondButton: ButtonContent
}

export interface ServicesPreview {
    title: RichText
    text: RichText
    firstButton: ButtonContent
    cards: ServiceCard[]
}

// ======== Services page content types ========
export interface ServiceAccordionItem {
    id: RichText
    title: RichText
    description: RichText
}

export interface ServiceSectionContent {
    id: RichText
    title: RichText
    text: RichText
    image: ImageContent
    accordionItems: ServiceAccordionItem[]
}

export interface ServicePageContent {
    header: PageHeaderContent
    intro: IntroContent
    services: ServiceSectionContent[]
}

// ======== About page content types ========
export interface AboutSectionContent {
    id: RichText
    title: RichText
    description: RichText
    image: ImageContent
}

export interface AboutPageContent {
    header: PageHeaderContent
    sections: AboutSectionContent[]
}

// ======== Portfolio page content types ========

export interface PortfolioSectionIntro {
    title: RichText
    description: RichText
}

export interface PortfolionSectionContent {
    vitrine: PortfolioSectionIntro
    ecommerce: PortfolioSectionIntro
    application: PortfolioSectionIntro
    freelance: PortfolioSectionIntro
}

export interface PortfolioPageContent {
    header: PageHeaderContent
    intro: IntroContent
    sections: PortfolionSectionContent
}