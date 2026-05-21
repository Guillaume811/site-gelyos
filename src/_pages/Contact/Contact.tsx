'use client'

import type { ReactElement } from 'react'
import HeaderSection from '@/components/HeaderSection/HeaderSection'
import PageIntro from '@/components/PageIntro/PageIntro'
import TwoColumnSection from '@/components/TwoColumnSection/TwoColumnSection'
import { contactContent } from '@/ressources/content/contact/contactContent'
import ContactForm from './ContactForm/ContactForm'
import ContactInfo from './ContactInfo/ContactInfo'

/* Component Contact
 * Render logic:
 * - Reuses existing contact page composition with shared layout components.
 * - Keeps the same content source and section ordering as the legacy page.
 *
 * View TSX:
 * - Renders header and intro, then a two-column block with info and form.
 * - Delegates client-side form behavior to ContactForm section.
 */
export default function Contact(): ReactElement {
  const { header, intro, textForm } = contactContent

  return (
    <>
      <HeaderSection title={header.title} image={header.image} />
      <PageIntro text={intro.text} />
      <TwoColumnSection left={<ContactInfo />} right={<ContactForm textUnderForm={textForm} />} />
    </>
  )
}
