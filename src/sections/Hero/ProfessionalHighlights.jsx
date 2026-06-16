import { motion } from 'framer-motion'
import { FiClipboard, FiFileText, FiAlertCircle, FiCode, FiStar } from 'react-icons/fi'
import Card, { CardHeader, CardTitle, CardBody } from '../../components/UI/Card'
import AnimatedCounter from '../../components/UI/AnimatedCounter'
import { highlights } from '../../data/portfolioData'

const iconMap = { clipboard: FiClipboard, document: FiFileText, bug: FiAlertCircle, code: FiCode }

function HighlightCard({ value, suffix, label, desc, color, icon, index }) {
  const Icon = iconMap[icon]

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
      className="stat-card dash-stat-box p-4 h-full group cursor-default"
    >
      <div
        className="w-10 h-10 rounded-xl mb-3 flex items-center justify-center transition-transform group-hover:scale-110"
        style={{ background: `${color}18`, color, boxShadow: `0 0 16px ${color}12` }}
      >
        <Icon className="w-4 h-4" aria-hidden="true" />
      </div>
      <p className="text-2xl font-bold text-theme-primary mb-0.5">
        <AnimatedCounter value={value} suffix={suffix} />
      </p>
      <p className="text-xs font-semibold text-theme-secondary mb-1">{label}</p>
      <p className="text-[10px] text-theme-muted leading-snug">{desc}</p>
    </motion.div>
  )
}

export default function ProfessionalHighlights() {
  return (
    <Card hover={false} className="h-full">
      <CardHeader className="!justify-start">
        <CardTitle icon={FiStar}>Professional Highlights</CardTitle>
      </CardHeader>
      <CardBody>
        <div className="grid grid-cols-2 gap-3 h-full">
          {highlights.map((item, i) => (
            <HighlightCard key={item.label} {...item} index={i} />
          ))}
        </div>
      </CardBody>
    </Card>
  )
}
