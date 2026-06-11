import type { ServiceDetailPageContent } from '@/ressources/content/contentTypes'
import type { ServiceRouteItem } from '@/ressources/routes'
import { faqLandingPage } from './landingPage/faq'
import { headerLandingPage, introLandingPage } from './landingPage/headerIntro'
import { profitsLandingPage } from './landingPage/profits'
import { faqMaintenance } from './maintenance/faq'
import { headerMaintenance, introMaintenance } from './maintenance/headerIntro'
import { profitsMaintenance } from './maintenance/profits'
import { faqSeo } from './seo/faq'
import { headerSeo, introSeo } from './seo/headerIntro'
import { profitsSeo } from './seo/profits'
import { faqSiteEcommerce } from './siteEcommerce/faq'
import { headerSiteEcommerce, introSiteEcommerce } from './siteEcommerce/headerIntro'
import { profitsSiteEcommerce } from './siteEcommerce/profits'
import { faqSiteVitrine } from './siteVitrine/faq'
import { headerSiteVitrine, introSiteVitrine } from './siteVitrine/headerIntro'
import { profitsSiteVitrine } from './siteVitrine/profits'

export type ServiceDetailIntroContent = Pick<ServiceDetailPageContent, 'header' | 'intro' | 'profits' | 'faq'>

export const serviceDetailsContent = {
    'landing-page': {
        header: headerLandingPage,
        intro: introLandingPage,
        profits: profitsLandingPage,
        faq: faqLandingPage,
    },
    'site-vitrine': {
        header: headerSiteVitrine,
        intro: introSiteVitrine,
        profits: profitsSiteVitrine,
        faq: faqSiteVitrine,
    },
    'site-ecommerce': {
        header: headerSiteEcommerce,
        intro: introSiteEcommerce,
        profits: profitsSiteEcommerce,
        faq: faqSiteEcommerce,
    },
    maintenance: {
        header: headerMaintenance,
        intro: introMaintenance,
        profits: profitsMaintenance,
        faq: faqMaintenance,
    },
    seo: {
        header: headerSeo,
        intro: introSeo,
        profits: profitsSeo,
        faq: faqSeo,
    },
} satisfies Record<ServiceRouteItem['slug'], ServiceDetailIntroContent>
