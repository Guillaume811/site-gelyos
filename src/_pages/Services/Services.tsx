/* Component Services
 * Render logic:
 * - Reuses structured services content and keeps the same section ordering.
 * - Preserves the alternating two-column layout through reverse index logic.
 *
 * View TSX:
 * - Renders page header, intro text, then one ServicesSection per service item.
 * - Keeps legacy shared components to avoid visual regressions during migration.
 */
'use client'

import HeaderSection from '@/components/HeaderSection/HeaderSection'
import PageIntro from '@/components/PageIntro/PageIntro'
import { servicesPageContent } from '@/ressources/content/services'
import ServicesSection from './ServicesSection/ServicesSection'

export default function Services() {
  const { header, intro, services } = servicesPageContent

  return (
    <>
      <HeaderSection title={header.title} image={header.image} />
      <PageIntro text={intro.text} />

      {services.map((service, index) => (
        <ServicesSection key={service.id} {...service} reverse={index % 2 === 1} />
      ))}
    </>
  )
}
