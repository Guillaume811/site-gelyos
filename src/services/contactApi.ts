import type { ContactFormData } from '@/pages/Contact/ContactForm/ContactForm'

const CONTACT_ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT

export async function submitContactRequest(data: ContactFormData, token: string) {
  if (!CONTACT_ENDPOINT) {
    throw new Error('Aucun endpoint de formulaire configuré (VITE_CONTACT_ENDPOINT).')
  }

  const response = await fetch(CONTACT_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ token, payload: data }),
  })

  const result = await response.json().catch(() => null)

  if (!response.ok || !result?.success) {
    const message = result?.message ?? 'Impossible d’envoyer le message pour le moment.'
    throw new Error(message)
  }

  return result as { success: true; score?: number }
}
