import { motion } from 'framer-motion'
import {
  FiBriefcase,
  FiCalendar,
  FiCheckCircle,
  FiCode,
  FiLayers,
  FiTool,
} from 'react-icons/fi'
import Section from '../../components/Layout/Section'
import SectionHeader from '../../components/UI/SectionHeader'
import { experience } from '../../data/portfolioData'

const roleIcons = {
  qa: FiCheckCircle,
  automation: FiTool,
  fullstack: FiLayers,
}

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.45, delay },
})

function ExperienceCard({ job, index, isLast }) {
  const Icon = roleIcons[job.icon] || FiBriefcase

  return (
    <motion.li
      {...reveal(index * 0.1)}
      className={`relative pl-0 sm:pl-14 ${isLast ? '' : 'pb-10'}`}
    >
      <div
        className={`hidden sm:flex absolute left-0 top-1 w-10 h-10 rounded-xl items-center justify-center border shrink-0 ${
          job.current
            ? 'bg-blue-500/15 border-blue-500/40 shadow-[0_0_20px_rgba(59,130,246,0.2)]'
            : 'bg-blue-500/10 border-blue-500/20'
        }`}
        aria-hidden="true"
      >
        <Icon className="w-4 h-4 text-blue-400" />
      </div>

      <article
        className={`glass-card experience-card p-5 sm:p-6 ${
          job.current ? 'experience-card--current' : ''
        }`}
      >
        <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <h3 className="text-base sm:text-lg font-bold text-theme-primary">{job.role}</h3>
              {job.current && (
                <span className="current-role-badge">Current Role</span>
              )}
            </div>
            <p className="text-sm font-medium text-blue-400 leading-snug">{job.company}</p>
          </div>
          <div className="flex flex-col items-start sm:items-end gap-1 shrink-0">
            <span className="inline-flex items-center gap-1.5 text-xs text-theme-muted">
              <FiCalendar className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              {job.period}
            </span>
            <span className="text-[10px] uppercase tracking-wider text-theme-muted font-medium">
              {job.type}
            </span>
          </div>
        </div>

        <div className="mb-4">
          <h4 className="text-xs font-semibold text-theme-primary mb-2.5 flex items-center gap-1.5">
            <span className="w-1 h-3 rounded-full bg-blue-500" aria-hidden="true" />
            Key Responsibilities
          </h4>
          <ul className="space-y-2" role="list">
            {job.responsibilities.map((item) => (
              <li key={item} className="text-sm text-theme-secondary flex gap-2.5 leading-relaxed">
                <FiCheckCircle
                  className="w-3.5 h-3.5 shrink-0 mt-0.5"
                  style={{ color: job.color }}
                  aria-hidden="true"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold text-theme-primary mb-2.5 flex items-center gap-1.5">
            <FiCode className="w-3.5 h-3.5 text-purple-400" aria-hidden="true" />
            Technologies
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {job.technologies.map((tech) => (
              <span key={tech} className="skill-badge text-[11px] py-1 px-2.5">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </article>
    </motion.li>
  )
}

export default function Experience() {
  return (
    <Section id="experience" className="experience-section bg-section-alt">
      <SectionHeader
        label="Career"
        title="Experience"
        subtitle="My professional journey in QA Automation and Software Testing"
      />

      <ol className="relative list-none max-w-4xl" aria-label="Professional experience timeline">
        <div
          className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-blue-500/50 via-purple-500/25 to-transparent hidden sm:block"
          aria-hidden="true"
        />
        {experience.map((job, i) => (
          <ExperienceCard
            key={job.id}
            job={job}
            index={i}
            isLast={i === experience.length - 1}
          />
        ))}
      </ol>

      <p className="sr-only">
        {experience.map((job) =>
          `${job.role} at ${job.company}, ${job.period}. ${job.responsibilities.join(' ')} Technologies: ${job.technologies.join(', ')}`,
        ).join(' ')}
      </p>
    </Section>
  )
}
