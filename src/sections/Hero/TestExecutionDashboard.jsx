import { motion } from 'framer-motion'
import {
  FiBarChart2, FiClipboard, FiCheckCircle, FiXCircle, FiMinusCircle, FiClock,
} from 'react-icons/fi'
import { FaJava } from 'react-icons/fa6'
import { SiSelenium, SiPostman, SiMysql, SiGit } from 'react-icons/si'
import Card, { CardHeader, CardTitle, CardBody } from '../../components/UI/Card'
import AnimatedCounter from '../../components/UI/AnimatedCounter'
import { dashboardMetrics, dashboardStats, techTools } from '../../data/portfolioData'

const statIcons = { clipboard: FiClipboard, check: FiCheckCircle, x: FiXCircle, minus: FiMinusCircle, clock: FiClock }
const toolIcons = { java: FaJava, selenium: SiSelenium, postman: SiPostman, mysql: SiMysql, git: SiGit }

function ToolItem({ name, icon }) {
  const Icon = toolIcons[icon]
  return (
    <motion.div
      whileHover={{ y: -2 }}
      className="flex flex-col items-center gap-1.5 min-w-[48px]"
    >
      <div className="tool-chip tool-chip-hover">
        {icon === 'testng' ? (
          <span className="text-[9px] font-bold text-purple-400">TNG</span>
        ) : icon === 'sql' ? (
          <span className="text-[9px] font-bold text-teal-400">SQL</span>
        ) : icon === 'playwright' ? (
          <span className="text-[9px] font-bold text-green-400">PW</span>
        ) : (
          Icon && <Icon className="w-4 h-4 text-theme-secondary" />
        )}
      </div>
      <span className="text-[9px] text-theme-muted whitespace-nowrap">{name}</span>
    </motion.div>
  )
}

export default function TestExecutionDashboard() {
  const rate = dashboardMetrics.successRate

  return (
    <Card hover className="dashboard-glow">
      <CardHeader>
        <CardTitle icon={FiBarChart2}>Test Execution Dashboard</CardTitle>
      </CardHeader>

      <CardBody className="flex flex-col gap-5">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
          {dashboardStats.map(({ key, label, color, icon }, i) => {
            const Icon = statIcons[icon]
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ y: -2 }}
                className="dash-stat-box stat-card p-3 text-center"
              >
                <div
                  className="w-9 h-9 rounded-xl mx-auto mb-2 flex items-center justify-center"
                  style={{ background: `${color}18`, color, boxShadow: `0 0 20px ${color}15` }}
                >
                  <Icon className="w-4 h-4" aria-hidden="true" />
                </div>
                <p className="text-[9px] text-theme-muted mb-1 leading-tight uppercase tracking-wide">{label}</p>
                <p className="text-base font-bold leading-none" style={{ color: key === 'total' ? 'var(--theme-text-primary)' : color }}>
                  <AnimatedCounter value={dashboardMetrics[key]} />
                </p>
              </motion.div>
            )
          })}
        </div>

        <div className="rounded-xl dash-progress-panel p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-medium text-theme-secondary">Test Success Rate</span>
            <span className="text-sm font-bold text-green-400">
              <AnimatedCounter value={rate} suffix="%" duration={2} decimals={1} />
            </span>
          </div>
          <div className="h-2.5 rounded-full dash-progress-track overflow-hidden" role="progressbar" aria-valuenow={rate} aria-valuemin={0} aria-valuemax={100}>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${rate}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: 'easeOut', delay: 0.3 }}
              className="h-full rounded-full bg-gradient-to-r from-green-500 via-emerald-400 to-teal-400 progress-glow"
            />
          </div>
          <div className="flex justify-between mt-2 text-[10px] text-theme-muted">
            <span>0%</span>
            <span>Target: 95%</span>
            <span>100%</span>
          </div>
        </div>

        <div className="pt-1 border-t border-theme-border">
          <p className="text-[10px] font-semibold text-theme-muted uppercase tracking-wider mb-3">Tools &amp; Technologies</p>
          <div className="flex flex-wrap items-start justify-between gap-y-2 gap-x-1">
            {techTools.slice(0, 7).map((tool) => (
              <ToolItem key={tool.name} {...tool} />
            ))}
          </div>
        </div>
      </CardBody>
    </Card>
  )
}
