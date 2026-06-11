import type { ServiceDetailPageContent } from '@/ressources/content/contentTypes'
import { detailsPackLandingPage } from './detailsPack'
import { faqLandingPage } from './faq'
import { headerLandingPage, introLandingPage } from './headerIntro'
import { packsLandingPage } from './packs'
import { profitsLandingPage } from './profits'

export const landingPageDetailContent: ServiceDetailPageContent = {
    header: headerLandingPage,
    intro: introLandingPage,
    profits: profitsLandingPage,
    faq: faqLandingPage,
    packs: packsLandingPage,
    detailsPack: detailsPackLandingPage,
}
