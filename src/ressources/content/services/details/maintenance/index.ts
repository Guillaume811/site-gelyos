import type { ServiceDetailPageContent } from '@/ressources/content/contentTypes'
import { detailsPackMaintenance } from './detailsPack'
import { faqMaintenance } from './faq'
import { headerMaintenance, introMaintenance } from './headerIntro'
import { packsMaintenance } from './packs'
import { profitsMaintenance } from './profits'

export const maintenanceDetailContent: ServiceDetailPageContent = {
    header: headerMaintenance,
    intro: introMaintenance,
    profits: profitsMaintenance,
    faq: faqMaintenance,
    packs: packsMaintenance,
    detailsPack: detailsPackMaintenance,
}
