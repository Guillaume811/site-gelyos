import type { ServiceDetailPageContent } from '@/ressources/content/contentTypes'
import { detailsPackSeo } from './detailsPack'
import { faqSeo } from './faq'
import { headerSeo, introSeo } from './headerIntro'
import { packsSeo } from './packs'
import { profitsSeo } from './profits'

export const seoDetailContent: ServiceDetailPageContent = {
    header: headerSeo,
    intro: introSeo,
    profits: profitsSeo,
    faq: faqSeo,
    packs: packsSeo,
    detailsPack: detailsPackSeo,
}
