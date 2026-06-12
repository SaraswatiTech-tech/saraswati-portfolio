import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiLoader, FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi'
import Section from '../../components/Layout/Section'
import SectionHeader from '../../components/UI/SectionHeader'
import Toast from '../../components/UI/Toast'
import { contactInfo, socialLinks } from '../../data/portfolioData'
import {
  EmailjsConfigError,
  getContactErrorMessage,
  isEmailjsConfigured,
  logEmailjsConfig,
  sendContactEmail,
  validateContactForm,
} from '../../utils/contactForm'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const socialIcons = { linkedin: FaLinkedin, github: FaGithub, email: FiMail }

const contactCards = [
  { icon: FiMail, label: 'Email', value: contactInfo.email, href: `mailto:${contactInfo.email}` },
  {
    icon: FiPhone,
    label: 'Phone',
    value: contactInfo.phone,
    href: `tel:${contactInfo.phone.replace(/\s/g, '')}`,
  },
  { icon: FiMapPin, label: 'Location', value: contactInfo.location },
]

const SUCCESS_MESSAGE = 'Thank you for reaching out. Your message has been sent successfully.'

const emptyForm = { name: '', email: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(emptyForm)
  const [fieldErrors, setFieldErrors] = useState({})
  const [isSending, setIsSending] = useState(false)
  const [toast, setToast] = useState(null)

  const showToast = useCallback((type, message) => {
    setToast({ type, message })
  }, [])

  useEffect(() => {
    if (import.meta.env.DEV) {
      logEmailjsConfig()
    }
  }, [])

  useEffect(() => {
    if (!toast) return undefined

    const timer = setTimeout(() => setToast(null), 5000)
    return () => clearTimeout(timer)
  }, [toast])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const { errors, isValid, values } = validateContactForm(form)
    setFieldErrors(errors)

    if (!isValid) return

    if (!isEmailjsConfigured()) {
      showToast('error', getContactErrorMessage(new EmailjsConfigError()))
      return
    }

    setIsSending(true)

    try {
      await sendContactEmail(values)
      setForm(emptyForm)
      setFieldErrors({})
      showToast('success', SUCCESS_MESSAGE)
    } catch (error) {
      showToast('error', getContactErrorMessage(error))
    } finally {
      setIsSending(false)
    }
  }

  const updateField = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (fieldErrors[field]) {
      setFieldErrors((prev) => {
        const next = { ...prev }
        delete next[field]
        return next
      })
    }
  }

  return (
    <Section id="contact" containerClass="contact-container">
      <SectionHeader
        label="Get in Touch"
        title="Let's Connect"
        subtitle="Open to full-time roles, contract engagements, and QA consulting opportunities"
        align="center"
      />

      <div className="contact-grid">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="contact-info-column"
        >
          <div className="contact-info-cards">
            {contactCards.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="contact-info-card">
                <div className="contact-info-card__icon" aria-hidden="true">
                  <Icon className="w-5 h-5 text-blue-400" />
                </div>
                <p className="contact-info-card__label">{label}</p>
                {href ? (
                  <a href={href} className="contact-info-card__value">
                    {value}
                  </a>
                ) : (
                  <p className="contact-info-card__value">{value}</p>
                )}
              </div>
            ))}
          </div>

          <p className="contact-availability">{contactInfo.availability}</p>

          <div className="contact-social">
            {socialLinks.map(({ label, href, icon }) => {
              const Icon = socialIcons[icon]
              return (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="social-icon-btn contact-social__btn"
                >
                  <Icon className="w-4 h-4" />
                </a>
              )
            })}
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="contact-form"
          aria-label="Contact form"
          aria-busy={isSending}
          noValidate
        >
          <div className="contact-form-fields">
            <div className="contact-form-field">
              <label htmlFor="name" className="form-label">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                value={form.name}
                onChange={(e) => updateField('name', e.target.value)}
                className={`form-input${fieldErrors.name ? ' form-input--error' : ''}`}
                placeholder="Your name"
                autoComplete="name"
                aria-invalid={Boolean(fieldErrors.name)}
                aria-describedby={fieldErrors.name ? 'name-error' : undefined}
                disabled={isSending}
              />
              {fieldErrors.name ? (
                <p id="name-error" className="form-field-error" role="alert">
                  {fieldErrors.name}
                </p>
              ) : null}
            </div>
            <div className="contact-form-field">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => updateField('email', e.target.value)}
                className={`form-input${fieldErrors.email ? ' form-input--error' : ''}`}
                placeholder="you@email.com"
                autoComplete="email"
                aria-invalid={Boolean(fieldErrors.email)}
                aria-describedby={fieldErrors.email ? 'email-error' : undefined}
                disabled={isSending}
              />
              {fieldErrors.email ? (
                <p id="email-error" className="form-field-error" role="alert">
                  {fieldErrors.email}
                </p>
              ) : null}
            </div>
            <div className="contact-form-field contact-form-message">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                id="message"
                value={form.message}
                onChange={(e) => updateField('message', e.target.value)}
                className={`form-input contact-form-textarea${fieldErrors.message ? ' form-input--error' : ''}`}
                placeholder="Tell me about the opportunity..."
                aria-invalid={Boolean(fieldErrors.message)}
                aria-describedby={fieldErrors.message ? 'message-error' : undefined}
                disabled={isSending}
              />
              {fieldErrors.message ? (
                <p id="message-error" className="form-field-error" role="alert">
                  {fieldErrors.message}
                </p>
              ) : null}
            </div>
          </div>

          <motion.button
            type="submit"
            whileHover={isSending ? undefined : { scale: 1.02 }}
            whileTap={isSending ? undefined : { scale: 0.98 }}
            className="btn-primary contact-form-submit"
            disabled={isSending}
          >
            {isSending ? (
              <>
                <FiLoader className="w-4 h-4 animate-spin" aria-hidden="true" />
                Sending...
              </>
            ) : (
              <>
                <FiSend className="w-4 h-4" aria-hidden="true" />
                Send Message
              </>
            )}
          </motion.button>
        </motion.form>
      </div>

      <AnimatePresence>
        {toast ? (
          <Toast type={toast.type} message={toast.message} onClose={() => setToast(null)} />
        ) : null}
      </AnimatePresence>
    </Section>
  )
}
