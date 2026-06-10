import type { RoutePath } from '@/ressources/routes'
import type { StaticImageData } from 'next/image'

// ======== Common content types ========
export type RichText = string

export interface InlineTextSegment {
    type: 'text'
    text: string
}

export interface InlineStrongSegment {
    type: 'strong'
    text: string
}

export interface InlineEmphasisSegment {
    type: 'emphasis'
    text: string
}

export interface InlineAccentSegment {
    type: 'accent'
    text: string
}

export interface InlineLinkSegment {
    type: 'link'
    text: string
    href: string
}

export interface InlineLineBreakSegment {
    type: 'lineBreak'
}

export type InlineContentSegment =
    | InlineTextSegment
    | InlineStrongSegment
    | InlineEmphasisSegment
    | InlineAccentSegment
    | InlineLinkSegment
    | InlineLineBreakSegment

export type InlineContent = InlineContentSegment[]

export interface ImageContent {
    src: string | StaticImageData
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
    text: InlineContent
}

export interface AccordionItemContent {
    id: RichText
    title: RichText
    description: InlineContent
}

export interface ParagraphContent {
    subtitle: RichText
    description: InlineContent
}

// ======== Home page content types ========
//TODO: passer les 3 ? en obligatoire et changer le code dans le composant Hero + changer son nom
export interface Content {
    title: InlineContent
    text: RichText
    firstButton?: ButtonContent
    secondButton?: ButtonContent
    image?: ImageContent
}

export interface ServiceCard {
    id: RichText
    icon: ImageContent
    subtitle?: RichText
    title: RichText
    description: InlineContent
    price?: InlineContent
    secondButton: ButtonContent
}

export interface ServicesPreview {
    subtitle: RichText
    title: RichText
    text: InlineContent
    firstButton: ButtonContent
    cards: ServiceCard[]
}

export interface ProcessCard {
    id: RichText
    icon: ImageContent
    number?: RichText
    title: RichText
    description: RichText
}

export interface DivProcess {
    subtitle: RichText
    title: RichText
    description: RichText
    cards: ProcessCard[]
}

export interface DivAvantages {
    subtitle: RichText
    title: RichText
    description: RichText
    cards: ProcessCard[]
    firstButton: ButtonContent
}

export interface ProjectPreview {
    title: RichText
    text: InlineContent
    firstButton: ButtonContent
}

// ======== Services page content types ========


export interface ServiceSectionContent {
    id: RichText
    icon?: ImageContent
    title: RichText
    textObjectif: ParagraphContent[]
    textForWhom: ParagraphContent[]
    price?: InlineContent
    secondButton: ButtonContent
    image: ImageContent
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
    description: InlineContent
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
    description: InlineContent
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
