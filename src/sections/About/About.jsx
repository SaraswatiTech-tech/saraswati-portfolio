import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  FiDownload,
  FiMessageCircle,
  FiCheckSquare,
  FiLayers,
  FiRefreshCw,
  FiZap,
  FiMonitor,
  FiFileText,
  FiAlertCircle,
  FiUsers,
  FiBriefcase,
  FiFolder,
  FiTarget,
  FiUser,
} from 'react-icons/fi'
import Section from '../../components/Layout/Section'
import SectionHeader from '../../components/UI/SectionHeader'
import AnimatedCounter from '../../components/UI/AnimatedCounter'
import { aboutData, resumeFile } from '../../data/portfolioData'

const skillIconMap = {
  manual: FiCheckSquare,
  functional: FiLayers,
  regression: FiRefreshCw,
  smoke: FiZap,
  ui: FiMonitor,
  testcase: FiFileText,
  bug: FiAlertCircle,
  agile: FiUsers,
}

const statIconMap = {
  experience: FiBriefcase,
  bugs: FiAlertCircle,
  projects: FiFolder,
  detail: FiTarget,
}

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5, delay },
})

function ProfileCard() {
  const [imgError, setImgError] = useState(false)
  const showPlaceholder = imgError || !aboutData.profileImage

  return (
    <motion.div
      {...reveal(0)}
      className="glass-card about-profile-card p-6 sm:p-8 flex flex-col items-center text-center h-full"
    >
      <div className="flex flex-col items-center gap-y-4 w-full">
        <div className="relative">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/30 to-purple-500/30 blur-xl scale-110" aria-hidden="true" />
          <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl">
            {!showPlaceholder ? (
              <img
                src={aboutData.profileImage}
                alt={`${aboutData.name} — ${aboutData.role}`}
                className="w-full h-full object-cover"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900">
                <FiUser className="w-16 h-16 text-blue-400/60 mb-2" aria-hidden="true" />
                <span className="text-2xl font-bold gradient-text">SS</span>
              </div>
            )}
          </div>
        </div>

        <span className="qa-badge about-role-badge whitespace-nowrap">
          {aboutData.role}
        </span>

        <h3 className="text-xl font-bold text-theme-primary">{aboutData.name}</h3>
        <p className="text-sm text-theme-muted mb-4">{aboutData.yearsExperience} Year Experience</p>
      </div>

      <div className="w-full pt-4 border-t border-theme-border space-y-3">
        <div className="flex items-center justify-center gap-2 text-sm text-theme-muted">
          <FiBriefcase className="w-4 h-4 text-blue-400 shrink-0" aria-hidden="true" />
          <span>Software Quality Assurance</span>
        </div>
        <div className="flex items-center justify-center gap-2 text-sm text-theme-muted">
          <FiTarget className="w-4 h-4 text-purple-400 shrink-0" aria-hidden="true" />
          <span>Web Application Testing</span>
        </div>
      </div>
    </motion.div>
  )
}

function StatCard({ value, suffix, label, icon, color, index }) {
  const Icon = statIconMap[icon]
  const isPercent = suffix === '%'

  return (
    <motion.div
      {...reveal(index * 0.08)}
      whileHover={{ y: -4, scale: 1.02 }}
      className="glass-card stat-card p-4 sm:p-5 text-center group cursor-default"
    >
      <div
        className="w-10 h-10 rounded-xl mx-auto mb-3 flex items-center justify-center transition-transform group-hover:scale-110"
        style={{ background: `${color}18`, color, boxShadow: `0 0 20px ${color}15` }}
      >
        <Icon className="w-4 h-4" aria-hidden="true" />
      </div>
      <p className="text-xl sm:text-2xl font-bold text-theme-primary mb-1">
        {isPercent ? (
          <AnimatedCounter value={value} suffix={suffix} decimals={0} />
        ) : (
          <AnimatedCounter value={value} suffix={suffix} />
        )}
      </p>
      <p className="text-[11px] sm:text-xs text-theme-muted leading-snug">{label}</p>
    </motion.div>
  )
}

function SkillChip({ name, icon, index }) {
  const Icon = skillIconMap[icon]
  return (
    <motion.li
      {...reveal(index * 0.04)}
      whileHover={{ y: -2, scale: 1.03 }}
      className="about-skill-chip flex items-center gap-2"
    >
      <Icon className="w-3.5 h-3.5 text-blue-400 shrink-0" aria-hidden="true" />
      <span>{name}</span>
    </motion.li>
  )
}

export default function About() {
  return (
    <Section id="about" className="about-section">
      <SectionHeader
        label="About"
        title={aboutData.title}
        subtitle={aboutData.subtitle}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(280px,340px)_1fr] gap-8 lg:gap-12 items-start">
        <ProfileCard />

        <div className="flex flex-col gap-8 min-w-0">
          <motion.div {...reveal(0.1)} className="glass-card p-6 sm:p-8">
            <p className="text-base sm:text-lg text-theme-secondary leading-relaxed">
              {aboutData.intro}
            </p>
          </motion.div>

          <div>
            <motion.h3 {...reveal(0.15)} className="text-sm font-bold text-theme-primary mb-4 flex items-center gap-2">
              <span className="w-1 h-4 rounded-full bg-blue-500" aria-hidden="true" />
              Core Skills
            </motion.h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5" role="list">
              {aboutData.skills.map((skill, i) => (
                <SkillChip key={skill.name} {...skill} index={i} />
              ))}
            </ul>
          </div>

          <div>
            <motion.h3 {...reveal(0.2)} className="text-sm font-bold text-theme-primary mb-4 flex items-center gap-2">
              <span className="w-1 h-4 rounded-full bg-purple-500" aria-hidden="true" />
              Key Highlights
            </motion.h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {aboutData.stats.map((stat, i) => (
                <StatCard key={stat.label} {...stat} index={i} />
              ))}
            </div>
          </div>

          <motion.div {...reveal(0.3)} className="flex flex-wrap items-center gap-3 pt-2">
            <motion.a
              href={resumeFile.path}
              download={resumeFile.downloadName}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="btn-primary flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-sm"
            >
              <FiDownload className="w-4 h-4" aria-hidden="true" />
              Download Resume
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="btn-outline flex items-center gap-2 px-6 py-3 rounded-xl text-theme-primary font-semibold text-sm"
            >
              <FiMessageCircle className="w-4 h-4" aria-hidden="true" />
              Contact Me
            </motion.a>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}
