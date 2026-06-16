import { motion } from 'framer-motion'
import {
  FiSearch, FiFileText, FiUser, FiTool, FiRefreshCw, FiCheckCircle, FiRepeat,
} from 'react-icons/fi'
import Card, { CardHeader, CardTitle, CardBody } from '../../components/UI/Card'
import { bugLifecycle } from '../../data/portfolioData'

const iconMap = {
  search: FiSearch, report: FiFileText, assign: FiUser,
  fix: FiTool, retest: FiRefreshCw, closed: FiCheckCircle,
}

function TimelineStep({ label, desc, color, icon, index, isLast }) {
  const Icon = iconMap[icon]
  return (
    <motion.li
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07 }}
      className="flex flex-col items-center flex-1 min-w-0 relative group"
    >
      <div className="flex items-center w-full">
        {!isLast && (
          <div
            className="absolute top-5 left-[calc(50%+20px)] right-[calc(-50%+20px)] h-px hidden lg:block"
            aria-hidden="true"
          >
            <div className="h-full bg-gradient-to-r from-slate-600/80 via-blue-500/30 to-slate-600/80" />
          </div>
        )}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="relative z-10 w-10 h-10 rounded-full flex items-center justify-center border border-theme-border mx-auto shrink-0"
          style={{
            background: `linear-gradient(135deg, ${color}30, ${color}10)`,
            color,
            boxShadow: `0 0 20px ${color}20`,
          }}
        >
          <Icon className="w-4 h-4" aria-hidden="true" />
        </motion.div>
      </div>
      <p className="text-[11px] font-semibold text-theme-primary mt-2 leading-tight text-center">{label}</p>
      <p className="text-[9px] text-theme-muted leading-snug text-center mt-0.5 px-0.5 hidden sm:block">{desc}</p>
    </motion.li>
  )
}

export default function BugLifecycle() {
  return (
    <Card hover={false} className="h-full">
      <CardHeader className="!justify-start">
        <CardTitle icon={FiRepeat} iconColor="text-purple-400">Bug Life Cycle</CardTitle>
      </CardHeader>
      <CardBody className="py-5">
        <ol className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-0 w-full list-none" aria-label="Bug life cycle stages">
          {bugLifecycle.map((step, i) => (
            <TimelineStep key={step.label} {...step} index={i} isLast={i === bugLifecycle.length - 1} />
          ))}
        </ol>
        <div className="sm:hidden mt-2 flex flex-col gap-1">
          {bugLifecycle.map((step) => (
            <p key={step.label} className="text-[10px] text-theme-muted">
              <span className="text-theme-secondary font-medium">{step.label}:</span> {step.desc}
            </p>
          ))}
        </div>
      </CardBody>
    </Card>
  )
}
