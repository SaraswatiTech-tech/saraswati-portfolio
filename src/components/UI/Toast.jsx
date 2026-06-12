import { motion } from 'framer-motion'
import { FiAlertCircle, FiCheckCircle, FiX } from 'react-icons/fi'

const icons = {
  success: FiCheckCircle,
  error: FiAlertCircle,
}

export default function Toast({ message, type = 'success', onClose }) {
  const Icon = icons[type] ?? FiCheckCircle

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 24, scale: 0.96 }}
      transition={{ duration: 0.25 }}
      className={`contact-toast contact-toast--${type}`}
      role="status"
      aria-live="polite"
    >
      <Icon className="contact-toast__icon" aria-hidden="true" />
      <p className="contact-toast__message">{message}</p>
      <button type="button" className="contact-toast__close" onClick={onClose} aria-label="Dismiss notification">
        <FiX className="w-4 h-4" />
      </button>
    </motion.div>
  )
}
