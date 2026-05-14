'use client'

import HeaderSection from '~/components/HeaderSection/HeaderSection'
import { aboutPageContent } from '~/ressources/content/about'
import AboutSection from './AboutSection/AboutSection'

/* Component About
 * Render logic:
 * - Reuses structured about-page content and preserves section ordering.
 * - Keeps alternating left/right layout by index parity as in legacy page.
 *
 * View TSX:
 * - Renders page header first, then one AboutSection per content block.
 * - Keeps shared components to avoid visual regression during migration.
 */
export default function About() {
  const { header, sections } = aboutPageContent

  return (
    <>
      <HeaderSection title={header.title} image={header.image} />

      {sections.map((section, index) => (
        <AboutSection key={section.id} {...section} reverse={index % 2 === 1} />
      ))}
    </>
  )
}
