import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  runtimeConfig: {
    resendApiKey: process.env.RESEND_KEY,
    contactEmail: process.env.EMAIL_TO || 'hello@thehalia.com',
    resendFrom: process.env.EMAIL_FROM || 'onboarding@resend.dev',
  },
  app: {
    head: {
      htmlAttrs: { lang: 'es' },
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    },
  },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
})
