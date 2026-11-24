interface ContactMessage {
  name?: unknown
  email?: unknown
  message?: unknown
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  })[character]!)
}

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)
  const body = await readBody<ContactMessage>(event)
  const name = typeof body?.name === 'string' ? body.name.trim() : ''
  const email = typeof body?.email === 'string' ? body.email.trim() : ''
  const message = typeof body?.message === 'string' ? body.message.trim() : ''

  if (!name || name.length > 100 || !email || email.length > 254 || !/^\S+@\S+\.\S+$/.test(email) || !message || message.length > 5000) {
    throw createError({ statusCode: 400, statusMessage: 'Please provide a valid name, email, and message.' })
  }

  const apiKey = config.resendApiKey
  if (!apiKey) {
    throw createError({ statusCode: 503, statusMessage: 'Email service is not configured.' })
  }

  const recipient = config.contactEmail
  const sender = config.resendFrom

  try {
    const response = await $fetch<{ id?: string }>('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}` },
      body: {
        from: sender,
        to: [recipient],
        reply_to: email,
        subject: `Website message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
        html: `<p><strong>Name:</strong> ${escapeHtml(name)}</p><p><strong>Email:</strong> ${escapeHtml(email)}</p><p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>`,
      },
    })

    return { ok: true, id: response.id }
  } catch (error) {
    const resendError = error as {
      statusCode?: number
      status?: number
      data?: { name?: string; message?: string }
      message?: string
    }
    const reason = resendError.data?.message || resendError.message || 'Unknown Resend error'
    console.error('[contact] Resend request failed', {
      status: resendError.statusCode || resendError.status,
      name: resendError.data?.name,
      reason: reason.replace(/[\w.+-]+@[\w.-]+\.[A-Za-z]{2,}/g, '[email]'),
    })
    throw createError({ statusCode: 502, statusMessage: 'The email could not be sent. Please try again later.' })
  }
})
