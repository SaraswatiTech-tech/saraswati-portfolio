import { motion } from 'framer-motion'
import {
  FiCheckCircle,
  FiTool,
  FiCode,
  FiGitBranch,
  FiLayers,
  FiCpu,
  FiStar,
} from 'react-icons/fi'
import Section from '../../components/Layout/Section'
import SectionHeader from '../../components/UI/SectionHeader'
import { skillsCategories, primarySkills } from '../../data/portfolioData'

const categoryIcons = {
  qa: FiCheckCircle,
  automation: FiTool,
  code: FiCode,
  devops: FiGitBranch,
  stack: FiLayers,
  ai: FiCpu,
}

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.4, delay },
})

function isPrimary(skill) {
  return primarySkills.includes(skill)
}

function SkillBadge({ name, index }) {
  const primary = isPrimary(name)

  return (
    <motion.li
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.03, duration: 0.3 }}
      whileHover={{ y: -2 }}
      className={`skill-badge ${primary ? 'skill-badge--primary' : ''}`}
    >
      {primary && <FiStar className="w-3 h-3 shrink-0 text-blue-400" aria-hidden="true" />}
      <span>{name}</span>
    </motion.li>
  )
}

function CategoryCard({ category, icon, skills, index }) {
  const Icon = categoryIcons[icon] || FiCheckCircle

  return (
    <motion.article
      {...reveal(index * 0.08)}
      className="glass-card skills-category-card p-5 sm:p-6 h-full"
      aria-labelledby={`skills-${category.replace(/\s+/g, '-').toLowerCase()}`}
    >
      <header className="flex items-center gap-3 mb-5 pb-4 border-b border-theme-border">
        <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/15 flex items-center justify-center shrink-0">
          <Icon className="w-4 h-4 text-blue-400" aria-hidden="true" />
        </div>
        <h3
          id={`skills-${category.replace(/\s+/g, '-').toLowerCase()}`}
          className="text-sm font-bold text-theme-primary tracking-tight"
        >
          {category}
        </h3>
      </header>
      <ul className="flex flex-wrap gap-2" role="list">
        {skills.map((name, i) => (
          <SkillBadge key={name} name={name} index={i} />
        ))}
      </ul>
    </motion.article>
  )
}

export default function Skills() {
  return (
    <Section id="skills" className="skills-section bg-section-alt">
      <SectionHeader
        label="Expertise"
        title="Technical Skills"
        subtitle="QA automation, testing frameworks, and modern tooling — organized for clarity and ATS visibility"
      />

      {/* Primary / core competencies */}
      <motion.div {...reveal(0)} className="glass-card p-5 sm:p-6 mb-8 lg:mb-10">
        <div className="flex items-center gap-2 mb-4">
          <FiStar className="w-4 h-4 text-blue-400" aria-hidden="true" />
          <h3 className="text-sm font-bold text-theme-primary">Core Competencies</h3>
        </div>
        <ul className="flex flex-wrap gap-2" role="list" aria-label="Primary skills">
          {primarySkills.map((name, i) => (
            <motion.li
              key={name}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              whileHover={{ y: -2 }}
              className="skill-badge skill-badge--primary"
            >
              <FiStar className="w-3 h-3 shrink-0 text-blue-400" aria-hidden="true" />
              <span>{name}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Category grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-6">
        {skillsCategories.map((group, i) => (
          <CategoryCard key={group.id} {...group} index={i} />
        ))}
      </div>

      {/* ATS-friendly hidden text for screen readers & crawlers */}
      <p className="sr-only">
        Skills: {skillsCategories.flatMap((g) => g.skills).join(', ')}
      </p>
    </Section>
  )
}
