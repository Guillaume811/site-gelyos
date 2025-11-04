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

export interface AccordionItemContent {
    id: RichText
    title: RichText
    description: RichText
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

export interface ProcessCard {
    id: RichText
    icon: ImageContent
    title: RichText
    description: RichText
}

export interface DivProcess {
    title: RichText
    cards: ProcessCard[]
}

export interface DivAvantages {
    title: RichText
    cards: ProcessCard[]
}

// ======== Services page content types ========


export interface ServiceSectionContent {
    id: RichText
    title: RichText
    text: RichText
    image: ImageContent
    ServiceAccordionItems: AccordionItemContent[]
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

// ======== Contact page content types ========

export interface ContactInfo {
    title: RichText
    description: RichText
}

export interface ContactPageContent {
    header: PageHeaderContent
    intro: IntroContent
    title: RichText
    email: ContactInfo
    phone: ContactInfo
    text: RichText
    textForm: RichText
}

// ======== Mention page content types ========

export interface ParagrapheInfo {
    title: RichText
    description: RichText
    secondButton?: ButtonContent
}

export interface MentionPageContent {
    header: PageHeaderContent
    editeur: ParagrapheInfo
    hebergement: ParagrapheInfo
    conception: ParagrapheInfo
    intellectuelle: ParagrapheInfo
    responsabilite: ParagrapheInfo
    cookies: ParagrapheInfo
    confidentialite: ParagrapheInfo
    loi:ParagrapheInfo
}