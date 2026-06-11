import type { ServiceDetailPageContent } from '@/ressources/content/contentTypes'
import type { ServiceRouteItem } from '@/ressources/routes'
import { headerLandingPage, introLandingPage } from './landingPage/headerIntro'
import { headerMaintenance, introMaintenance } from './maintenance/headerIntro'
import { headerSeo, introSeo } from './seo/headerIntro'
import { headerSiteEcommerce, introSiteEcommerce } from './siteEcommerce/headerIntro'
import { headerSiteVitrine, introSiteVitrine } from './siteVitrine/headerIntro'

export type ServiceDetailIntroContent = Pick<ServiceDetailPageContent, 'header' | 'intro'>

export const serviceDetailsContent = {
    'landing-page': {
        header: headerLandingPage,
        intro: introLandingPage,
    },
    'site-vitrine': {
        header: headerSiteVitrine,
        intro: introSiteVitrine,
    },
    'site-ecommerce': {
        header: headerSiteEcommerce,
        intro: introSiteEcommerce,
    },
    maintenance: {
        header: headerMaintenance,
        intro: introMaintenance,
    },
    seo: {
        header: headerSeo,
        intro: introSeo,
    },
} satisfies Record<ServiceRouteItem['slug'], ServiceDetailIntroContent>
