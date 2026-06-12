import { motion } from 'framer-motion'

export default function Card({
  children,
  className = '',
  hover = true,
  delay = 0,
  as: Tag = motion.div,
  ...props
}) {
  const Component = Tag
  return (
    <Component
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay }}
      whileHover={hover ? { y: -4, transition: { duration: 0.2 } } : undefined}
      className={`dash-card ${className}`.trim()}
      {...props}
    >
      {children}
    </Component>
  )
}

export function CardHeader({ children, className = '' }) {
  return <div className={`card-header ${className}`.trim()}>{children}</div>
}

export function CardTitle({ icon: Icon, children, iconColor = 'text-blue-400' }) {
  return (
    <div className="card-header-title">
      {Icon && <Icon className={`w-4 h-4 shrink-0 ${iconColor}`} aria-hidden="true" />}
      <span>{children}</span>
    </div>
  )
}

export function CardBody({ children, className = '' }) {
  return <div className={`card-body ${className}`.trim()}>{children}</div>
}
