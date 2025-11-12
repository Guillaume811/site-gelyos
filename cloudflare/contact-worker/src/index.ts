const RECAPTCHA_URL = 'https://www.google.com/recaptcha/api/siteverify'

interface Env {
  RECAPTCHA_SECRET: string
  ALLOWED_ORIGINS?: string
  MAILCHANNELS_FROM_EMAIL: string
  MAILCHANNELS_FROM_NAME: string
  MAILCHANNELS_TO: string
  MAILCHANNELS_SUBJECT_PREFIX?: string
}

function buildCorsHeaders(origin: string, env: Env) {
  const allowed = (env.ALLOWED_ORIGINS ?? '').split(',').map((s) => s.trim()).filter(Boolean)
  const allowOrigin = allowed.length === 0 ? origin || '*' : allowed.includes(origin) ? origin : allowed[0]

  return {
    'Access-Control-Allow-Origin': allowOrigin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  }
}

async function verifyRecaptcha(token: string, secret: string, remoteIp?: string) {
  const body = new URLSearchParams({ secret, response: token })
  if (remoteIp) body.set('remoteip', remoteIp)

  const response = await fetch(RECAPTCHA_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body,
  })

  return (await response.json()) as { success: boolean; score?: number; action?: string; 'error-codes'?: string[] }
}

function buildMailChannelsPayload(formData: Record<string, string>, env: Env) {
  const toList = env.MAILCHANNELS_TO.split(',').map((email) => email.trim()).filter(Boolean)
  if (toList.length === 0) {
    throw new Error('MAILCHANNELS_TO must contain at least one recipient.')
  }

  const fullName = `${formData.firstName ?? ''} ${formData.lastName ?? ''}`.trim() || 'Contact'
  const replyIsValid = formData.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
  const replyEmail = replyIsValid ? formData.email : env.MAILCHANNELS_FROM_EMAIL
  const replyName = replyIsValid ? fullName : env.MAILCHANNELS_FROM_NAME

  const subjectPrefix = env.MAILCHANNELS_SUBJECT_PREFIX?.trim() || '[Contact]'
  const subject = `${subjectPrefix} ${formData.need || ''} - ${fullName}`.trim()

  const plainContent = [
    `Nom: ${fullName}`,
    `Email: ${formData.email ?? ''}`,
    `Telephone: ${formData.phone ?? ''}`,
    `Besoin: ${formData.need ?? ''}`,
    '',
    formData.message ?? '',
  ].join('\n')

  const htmlContent = [
    `<p><strong>Nom:</strong> ${fullName}</p>`,
    `<p><strong>Email:</strong> ${formData.email ?? ''}</p>`,
    `<p><strong>Telephone:</strong> ${formData.phone ?? ''}</p>`,
    `<p><strong>Besoin:</strong> ${formData.need ?? ''}</p>`,
    '<p><strong>Message:</strong></p>',
    `<p>${(formData.message ?? '').replace(/\n/g, '<br/>')}</p>`,
  ].join('')

  return {
    personalizations: [
      {
        to: toList.map((email) => ({ email })),
        subject,
      },
    ],
    from: {
      email: env.MAILCHANNELS_FROM_EMAIL,
      name: env.MAILCHANNELS_FROM_NAME,
    },
    reply_to: {
      email: replyEmail,
      name: replyName,
    },
    content: [
      { type: 'text/plain', value: plainContent },
      { type: 'text/html', value: htmlContent },
    ],
  }
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const origin = request.headers.get('Origin') ?? ''
    const corsHeaders = buildCorsHeaders(origin, env)

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders })
    }

    if (request.method !== 'POST') {
      return new Response('Method Not Allowed', { status: 405, headers: corsHeaders })
    }

    let payload: { token?: string; payload?: unknown }
    try {
      payload = await request.json()
    } catch {
      return new Response(JSON.stringify({ success: false, message: 'Corps JSON invalide.' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    const token = payload.token
    if (!token) {
      return new Response(JSON.stringify({ success: false, message: 'reCAPTCHA token manquant.' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    const verification = await verifyRecaptcha(token, env.RECAPTCHA_SECRET, request.headers.get('cf-connecting-ip') ?? undefined)
    console.log('reCAPTCHA verification result:', verification)

    if (!verification.success || (verification.score ?? 0) < 0.5) {
      return new Response(
        JSON.stringify({ success: false, message: 'Echec de la verification reCAPTCHA.', details: verification }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
      )
    }

    const formData = (payload.payload ?? {}) as Record<string, unknown>
    const templateParams = {
      firstName: String(formData.firstName ?? ''),
      lastName: String(formData.lastName ?? ''),
      email: String(formData.email ?? ''),
      phone: String(formData.phone ?? ''),
      need: String(formData.need ?? ''),
      message: String(formData.message ?? ''),
    }

    let mailPayload: Record<string, unknown>
    try {
      mailPayload = buildMailChannelsPayload(templateParams, env)
      console.log('MailChannels payload:', mailPayload)
    } catch (err) {
      console.error('MailChannels payload error:', err)
      return new Response(
        JSON.stringify({ success: false, message: 'Configuration MailChannels invalide.' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
      )
    }

    const emailResponse = await fetch('https://api.mailchannels.net/tx/v1/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(mailPayload),
    })

    if (!emailResponse.ok) {
      const details = await emailResponse.text()
      console.error('MailChannels error:', details)
      return new Response(
        JSON.stringify({ success: false, message: "Impossible d'envoyer l'e-mail pour le moment.", details }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
      )
    }

    return new Response(JSON.stringify({ success: true, score: verification.score }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  },
}
