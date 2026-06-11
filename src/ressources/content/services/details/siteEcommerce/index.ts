import type { ServiceDetailPageContent } from '@/ressources/content/contentTypes'
import { detailsPackSiteEcommerce } from './detailsPack'
import { faqSiteEcommerce } from './faq'
import { headerSiteEcommerce, introSiteEcommerce } from './headerIntro'
import { packsSiteEcommerce } from './packs'
import { profitsSiteEcommerce } from './profits'

export const siteEcommerceDetailContent: ServiceDetailPageContent = {
    header: headerSiteEcommerce,
    intro: introSiteEcommerce,
    profits: profitsSiteEcommerce,
    faq: faqSiteEcommerce,
    packs: packsSiteEcommerce,
    detailsPack: detailsPackSiteEcommerce,
}
