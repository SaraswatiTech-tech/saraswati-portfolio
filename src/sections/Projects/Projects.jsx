import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub, FiCheck, FiLayers, FiCpu } from 'react-icons/fi'
import Section from '../../components/Layout/Section'
import SectionHeader from '../../components/UI/SectionHeader'
import { projects } from '../../data/portfolioData'

const projectIcons = {
  mern: FiLayers,
  ai: FiCpu,
}

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.45, delay },
})

function ProjectPlaceholder({ icon, color, title }) {
  const Icon = projectIcons[icon] || FiLayers

  return (
    <div
      className="project-image-placeholder relative h-44 sm:h-48 rounded-t-2xl overflow-hidden flex items-center justify-center"
      style={{ background: `linear-gradient(135deg, ${color}18 0%, ${color}08 50%, transparent 100%)` }}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 30% 40%, ${color}25 0%, transparent 50%), radial-gradient(circle at 70% 60%, ${color}15 0%, transparent 45%)`,
        }}
      />
      <div
        className="relative w-16 h-16 rounded-2xl flex items-center justify-center border border-white/10"
        style={{ background: `${color}20`, color }}
      >
        <Icon className="w-8 h-8" />
      </div>
      <span className="absolute bottom-3 left-4 text-[10px] font-medium text-theme-muted uppercase tracking-wider">
        {title.split(' ').slice(0, 2).join(' ')}
      </span>
    </div>
  )
}

function ProjectCard({ project, index }) {
  const hasLiveDemo = Boolean(project.liveDemoUrl)
  const hasGithub = Boolean(project.githubUrl)

  return (
    <motion.article
      {...reveal(index * 0.12)}
      whileHover={{ y: -6 }}
      className="glass-card project-card flex flex-col h-full overflow-hidden group"
    >
      <ProjectPlaceholder icon={project.icon} color={project.color} title={project.title} />

      <div className="p-5 sm:p-6 flex flex-col flex-1">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span
            className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md"
            style={{ background: `${project.color}15`, color: project.color }}
          >
            {project.role}
          </span>
        </div>

        <h3 className="text-lg font-bold text-theme-primary mb-3 leading-snug group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>

        <p className="text-sm text-theme-secondary leading-relaxed mb-4">
          {project.description}
        </p>

        <div className="mb-4">
          <h4 className="text-xs font-semibold text-theme-primary mb-2.5 flex items-center gap-1.5">
            <span className="w-1 h-3 rounded-full bg-blue-500" aria-hidden="true" />
            Key Features
          </h4>
          <ul className="space-y-1.5" role="list">
            {project.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-xs text-theme-secondary leading-relaxed">
                <FiCheck className="w-3.5 h-3.5 text-green-400 shrink-0 mt-0.5" aria-hidden="true" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-5">
          <h4 className="text-xs font-semibold text-theme-primary mb-2.5">Technologies Used</h4>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span key={tech} className="skill-badge text-[11px] py-1 px-2.5">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-auto flex flex-wrap gap-3 pt-4 border-t border-theme-border">
          {hasLiveDemo ? (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-2 px-4 py-2.5 rounded-xl text-white text-xs font-semibold"
            >
              <FiExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              Live Demo
            </a>
          ) : (
            <button
              type="button"
              disabled
              className="project-btn-disabled flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold"
              aria-label="Live demo coming soon"
            >
              <FiExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              Live Demo
              <span className="project-coming-soon">Coming Soon</span>
            </button>
          )}

          {hasGithub ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline flex items-center gap-2 px-4 py-2.5 rounded-xl text-theme-primary text-xs font-semibold"
            >
              <FiGithub className="w-3.5 h-3.5" aria-hidden="true" />
              GitHub
            </a>
          ) : (
            <button
              type="button"
              disabled
              className="project-btn-disabled flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold"
              aria-label="GitHub repository coming soon"
            >
              <FiGithub className="w-3.5 h-3.5" aria-hidden="true" />
              GitHub
              <span className="project-coming-soon">Coming Soon</span>
            </button>
          )}
        </div>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  return (
    <Section id="projects">
      <SectionHeader
        label="Portfolio"
        title="Featured Projects"
        subtitle="Full-stack applications and AI solutions built with modern technologies"
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </Section>
  )
}
