import type { ServiceDetailPageContent } from '@/ressources/content/contentTypes'
import type { ServiceRouteItem } from '@/ressources/routes'
import { faqLandingPage } from './landingPage/faq'
import { detailsPackLandingPage } from './landingPage/detailsPack'
import { headerLandingPage, introLandingPage } from './landingPage/headerIntro'
import { packsLandingPage } from './landingPage/packs'
import { profitsLandingPage } from './landingPage/profits'
import { faqMaintenance } from './maintenance/faq'
import { detailsPackMaintenance } from './maintenance/detailsPack'
import { headerMaintenance, introMaintenance } from './maintenance/headerIntro'
import { packsMaintenance } from './maintenance/packs'
import { profitsMaintenance } from './maintenance/profits'
import { faqSeo } from './seo/faq'
import { detailsPackSeo } from './seo/detailsPack'
import { headerSeo, introSeo } from './seo/headerIntro'
import { packsSeo } from './seo/packs'
import { profitsSeo } from './seo/profits'
import { faqSiteEcommerce } from './siteEcommerce/faq'
import { detailsPackSiteEcommerce } from './siteEcommerce/detailsPack'
import { headerSiteEcommerce, introSiteEcommerce } from './siteEcommerce/headerIntro'
import { packsSiteEcommerce } from './siteEcommerce/packs'
import { profitsSiteEcommerce } from './siteEcommerce/profits'
import { faqSiteVitrine } from './siteVitrine/faq'
import { detailsPackSiteVitrine } from './siteVitrine/detailsPack'
import { headerSiteVitrine, introSiteVitrine } from './siteVitrine/headerIntro'
import { packsSiteVitrine } from './siteVitrine/packs'
import { profitsSiteVitrine } from './siteVitrine/profits'

export type ServiceDetailIntroContent = Pick<ServiceDetailPageContent, 'header' | 'intro' | 'profits' | 'faq' | 'packs' | 'detailsPack'>

export const serviceDetailsContent = {
    'landing-page': {
        header: headerLandingPage,
        intro: introLandingPage,
        profits: profitsLandingPage,
        faq: faqLandingPage,
        packs: packsLandingPage,
        detailsPack: detailsPackLandingPage,
    },
    'site-vitrine': {
        header: headerSiteVitrine,
        intro: introSiteVitrine,
        profits: profitsSiteVitrine,
        faq: faqSiteVitrine,
        packs: packsSiteVitrine,
        detailsPack: detailsPackSiteVitrine,
    },
    'site-ecommerce': {
        header: headerSiteEcommerce,
        intro: introSiteEcommerce,
        profits: profitsSiteEcommerce,
        faq: faqSiteEcommerce,
        packs: packsSiteEcommerce,
        detailsPack: detailsPackSiteEcommerce,
    },
    maintenance: {
        header: headerMaintenance,
        intro: introMaintenance,
        profits: profitsMaintenance,
        faq: faqMaintenance,
        packs: packsMaintenance,
        detailsPack: detailsPackMaintenance,
    },
    seo: {
        header: headerSeo,
        intro: introSeo,
        profits: profitsSeo,
        faq: faqSeo,
        packs: packsSeo,
        detailsPack: detailsPackSeo,
    },
} satisfies Record<ServiceRouteItem['slug'], ServiceDetailIntroContent>
