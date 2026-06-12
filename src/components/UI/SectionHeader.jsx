import { motion } from 'framer-motion'

export default function SectionHeader({ label, title, subtitle, align = 'left' }) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start'

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45 }}
      className={`flex flex-col gap-2 mb-6 lg:mb-8 ${alignClass}`}
    >
      {label && (
        <span className="section-label">{label}</span>
      )}
      <h2 className="section-title">{title}</h2>
      {subtitle && (
        <p className="section-subtitle max-w-2xl">{subtitle}</p>
      )}
    </motion.div>
  )
}
