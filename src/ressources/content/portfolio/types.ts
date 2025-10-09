export const CATEGORY_VALUES = ["vitrine", "ecommerce", "application", "freelance"] as const;

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
    technologies: string[]
    features: string[]
    results?: string[]
    url?: string
    carousel?: ProjectCarouselImage[]
}

export type PortfolioData = {
    vitrine: Project[]
    ecommerce: Project[]
    application: Project[]
    freelance: Project[]
}