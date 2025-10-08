export type Category = 'vitrine' | 'ecomerce' | 'application' | 'freelance';

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
    ecomerce: Project[]
    application: Project[]
    freelance: Project[]
}