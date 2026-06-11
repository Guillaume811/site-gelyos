import type { ServiceDetailPageContent } from '@/ressources/content/contentTypes'
import { detailsPackSiteVitrine } from './detailsPack'
import { faqSiteVitrine } from './faq'
import { headerSiteVitrine, introSiteVitrine } from './headerIntro'
import { packsSiteVitrine } from './packs'
import { profitsSiteVitrine } from './profits'

export const siteVitrineDetailContent: ServiceDetailPageContent = {
    header: headerSiteVitrine,
    intro: introSiteVitrine,
    profits: profitsSiteVitrine,
    faq: faqSiteVitrine,
    packs: packsSiteVitrine,
    detailsPack: detailsPackSiteVitrine,
}
