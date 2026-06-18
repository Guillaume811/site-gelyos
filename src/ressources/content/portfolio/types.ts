import type { AccordionItemContent } from "../contentTypes";

export const CATEGORY_VALUES = ["vitrine", "ecommerce", "application", "landingpage"] as const;

export type Category = typeof CATEGORY_VALUES[number];

export type ProjectCarouselImage = {
    id: string
    src: string
    title: string
    alt: string
};

export type Project = {
    order?: number
    id: string
    slug: string
    image: string
    client?: string
    title: string
    shortDescription: string
    description: string
    category: Category
    accordionItems?: AccordionItemContent[]; 
    url?: string
    carousel?: ProjectCarouselImage[]
}

export type PortfolioData = {
    vitrine: Project[]
    ecommerce: Project[]
    application: Project[]
    landingpage: Project[]
}
