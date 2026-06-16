import { motion } from 'framer-motion'
import { FiArrowRight, FiMessageCircle, FiDownload } from 'react-icons/fi'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'
import { heroData, socialLinks, resumeFile } from '../../data/portfolioData'

const socialIcons = { linkedin: FaLinkedin, github: FaGithub, email: FaEnvelope }

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
})

export default function HeroContent() {
  const skillsLine = heroData.skills.join(' · ')

  return (
    <div className="flex flex-col justify-start w-full min-w-0">
      <motion.span {...fadeUp(0)} className="qa-badge inline-flex items-center gap-2 w-fit mb-5">
        <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_#22c55e] animate-pulse" aria-hidden="true" />
        {heroData.badge}
      </motion.span>

      <motion.h1 {...fadeUp(0.08)} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold gradient-text leading-[1.1] mb-3">
        {heroData.title}
      </motion.h1>

      <motion.div {...fadeUp(0.14)} className="flex items-center gap-3 mb-4">
        <span className="experience-pill">
          <span className="font-bold text-blue-400">{heroData.yearsExperience}+</span>
          <span className="text-theme-secondary"> Years Experience</span>
        </span>
      </motion.div>

      <motion.p {...fadeUp(0.2)} className="text-sm sm:text-base text-theme-secondary mb-3 leading-relaxed font-medium">
        {skillsLine}
      </motion.p>

      <motion.p {...fadeUp(0.26)} className="text-sm text-theme-secondary leading-relaxed mb-4 max-w-lg">
        {heroData.summary}
      </motion.p>

      <motion.p {...fadeUp(0.32)} className="text-xs text-theme-muted leading-relaxed mb-8 max-w-md">
        {heroData.bio}
      </motion.p>

      <motion.div {...fadeUp(0.38)} className="flex flex-wrap items-center gap-3 mb-8">
        <motion.a
          href="#projects"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="btn-primary flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-sm"
        >
          View Projects
          <FiArrowRight className="w-4 h-4" aria-hidden="true" />
        </motion.a>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="btn-outline flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm"
        >
          <FiMessageCircle className="w-4 h-4" aria-hidden="true" />
          Contact Me
        </motion.a>
        <motion.a
          href={resumeFile.path}
          download={resumeFile.downloadName}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="btn-ghost flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm"
        >
          <FiDownload className="w-4 h-4" aria-hidden="true" />
          Resume
        </motion.a>
      </motion.div>

      <motion.div {...fadeUp(0.44)} className="flex items-center gap-3" role="list" aria-label="Social links">
        {socialLinks.map(({ label, href, icon }) => {
          const Icon = socialIcons[icon]
          return (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              role="listitem"
              whileHover={{ y: -3, scale: 1.05 }}
              className="social-icon-btn w-11 h-11 rounded-xl flex items-center justify-center"
            >
              <Icon className="w-4 h-4" />
            </motion.a>
          )
        })}
      </motion.div>
    </div>
  )
}
