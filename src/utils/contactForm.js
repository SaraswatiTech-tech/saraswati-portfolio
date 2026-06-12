import emailjs, { EmailJSResponseStatus } from '@emailjs/browser'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const isDev = import.meta.env.DEV
const FALLBACK_EMAIL = 'shingesaraswati1@gmail.com'

let emailjsInitialized = false

export class EmailjsConfigError extends Error {
  constructor() {
    super('EMAILJS_NOT_CONFIGURED')
    this.name = 'EmailjsConfigError'
  }
}

function maskValue(value) {
  if (!value) return '(missing)'
  if (value.length <= 6) return '***'
  return `${value.slice(0, 4)}...${value.slice(-2)}`
}

const PLACEHOLDER_VALUES = new Set([
  'your_service_id',
  'your_template_id',
  'your_public_key',
  'service_xxxxx',
  'template_xxxxx',
])

function normalizeEnvValue(value) {
  return (value ?? '').trim().replace(/^['"]|['"]$/g, '')
}

export function getEmailjsConfig() {
  return {
    serviceId: normalizeEnvValue(import.meta.env.VITE_EMAILJS_SERVICE_ID),
    templateId: normalizeEnvValue(import.meta.env.VITE_EMAILJS_TEMPLATE_ID),
    publicKey: normalizeEnvValue(import.meta.env.VITE_EMAILJS_PUBLIC_KEY),
  }
}

export function getEmailjsConfigIssues() {
  const { serviceId, templateId, publicKey } = getEmailjsConfig()
  const issues = []

  if (!serviceId) {
    issues.push('VITE_EMAILJS_SERVICE_ID is missing')
  } else if (PLACEHOLDER_VALUES.has(serviceId) || !serviceId.startsWith('service_')) {
    issues.push('VITE_EMAILJS_SERVICE_ID must be your real EmailJS service ID (starts with service_)')
  }

  if (!templateId) {
    issues.push('VITE_EMAILJS_TEMPLATE_ID is missing')
  } else if (PLACEHOLDER_VALUES.has(templateId) || !templateId.startsWith('template_')) {
    issues.push('VITE_EMAILJS_TEMPLATE_ID must be your real EmailJS template ID (starts with template_)')
  }

  if (!publicKey) {
    issues.push('VITE_EMAILJS_PUBLIC_KEY is missing')
  } else if (PLACEHOLDER_VALUES.has(publicKey) || publicKey.length < 8) {
    issues.push('VITE_EMAILJS_PUBLIC_KEY must be your real Public Key from EmailJS Account settings')
  }

  return issues
}

export function isEmailjsConfigured() {
  return getEmailjsConfigIssues().length === 0
}

export function getMissingConfigMessage() {
  const issues = getEmailjsConfigIssues()

  if (isDev && issues.length) {
    return (
      `EmailJS is not set up correctly: ${issues.join('. ')}. ` +
      'Update your .env file with real values from https://dashboard.emailjs.com, then restart npm run dev.'
    )
  }

  return `The contact form is temporarily unavailable. Please email me directly at ${FALLBACK_EMAIL}.`
}

export function logEmailjsConfig() {
  const { serviceId, templateId, publicKey } = getEmailjsConfig()

  console.group('[Contact Form] EmailJS configuration')
  console.log('VITE_EMAILJS_SERVICE_ID:', maskValue(serviceId), serviceId.trim() ? 'loaded' : 'MISSING')
  console.log('VITE_EMAILJS_TEMPLATE_ID:', maskValue(templateId), templateId.trim() ? 'loaded' : 'MISSING')
  console.log('VITE_EMAILJS_PUBLIC_KEY:', maskValue(publicKey), publicKey.trim() ? 'loaded' : 'MISSING')
  console.log('Fully configured:', isEmailjsConfigured())
  if (!isEmailjsConfigured()) {
    console.warn(getMissingConfigMessage())
  }
  console.groupEnd()
}

function ensureEmailjsInit(publicKey) {
  if (emailjsInitialized) return

  emailjs.init({ publicKey })
  emailjsInitialized = true

  if (isDev) {
    console.log('[Contact Form] EmailJS initialized')
  }
}

export function validateContactForm({ name, email, message }) {
  const errors = {}
  const trimmedName = name.trim()
  const trimmedEmail = email.trim()
  const trimmedMessage = message.trim()

  if (!trimmedName) {
    errors.name = 'Name is required'
  }

  if (!trimmedEmail) {
    errors.email = 'Email is required'
  } else if (!EMAIL_REGEX.test(trimmedEmail)) {
    errors.email = 'Enter a valid email address'
  }

  if (!trimmedMessage) {
    errors.message = 'Message is required'
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
    values: {
      name: trimmedName,
      email: trimmedEmail,
      message: trimmedMessage,
    },
  }
}

export function formatEmailjsError(error) {
  if (error instanceof EmailjsConfigError) {
    return getMissingConfigMessage()
  }

  if (error instanceof EmailJSResponseStatus) {
    return `EmailJS error ${error.status}: ${error.text}`
  }

  if (typeof error === 'string') {
    return error
  }

  if (error instanceof Error) {
    return error.message
  }

  if (error?.status && error?.text) {
    return `EmailJS error ${error.status}: ${error.text}`
  }

  return 'Unknown error while sending email'
}

export function getContactErrorMessage(error) {
  if (error instanceof EmailjsConfigError) {
    return getMissingConfigMessage()
  }

  const detail = formatEmailjsError(error)

  if (detail.toLowerCase().includes('not configured') || detail.toLowerCase().includes('is required')) {
    return getMissingConfigMessage()
  }

  if (isDev) {
    return detail
  }

  if (detail.includes('403')) {
    return `Email request was blocked. Please email me directly at ${FALLBACK_EMAIL}.`
  }

  if (detail.includes('401') || detail.toLowerCase().includes('public key')) {
    if (isDev) {
      return (
        'Invalid EmailJS Public Key. Copy the Public Key from ' +
        'https://dashboard.emailjs.com/admin/account into VITE_EMAILJS_PUBLIC_KEY in .env, then restart the dev server.'
      )
    }

    return `Email service authentication failed. Please email me directly at ${FALLBACK_EMAIL}.`
  }

  return `Unable to send your message. Please try again or email me directly at ${FALLBACK_EMAIL}.`
}

export async function sendContactEmail({ name, email, message }) {
  const { serviceId, templateId, publicKey } = getEmailjsConfig()

  if (isDev) {
    logEmailjsConfig()
  }

  if (!isEmailjsConfigured()) {
    console.error('[Contact Form]', getMissingConfigMessage())
    throw new EmailjsConfigError()
  }

  ensureEmailjsInit(publicKey)

  const templateParams = {
    from_name: name,
    from_email: email,
    message,
    reply_to: email,
  }

  if (isDev) {
    console.log('[Contact Form] Request payload:', templateParams)
    console.log('[Contact Form] Using service:', maskValue(serviceId), 'template:', maskValue(templateId))
  }

  try {
    const response = await emailjs.send(serviceId, templateId, templateParams, { publicKey })

    if (isDev) {
      console.log('[Contact Form] EmailJS response:', {
        status: response.status,
        text: response.text,
      })
    }

    return response
  } catch (error) {
    console.error('[Contact Form] EmailJS error:', error)

    if (error instanceof EmailJSResponseStatus) {
      console.error('[Contact Form] EmailJS status:', error.status)
      console.error('[Contact Form] EmailJS message:', error.text)
    }

    throw error
  }
}
