import { motion } from 'framer-motion'
import { FaJava } from 'react-icons/fa6'
import { SiSelenium, SiPostman, SiMysql, SiGit, SiJenkins, SiJira } from 'react-icons/si'
import Section from '../../components/Layout/Section'
import SectionHeader from '../../components/UI/SectionHeader'
import { techTools } from '../../data/portfolioData'

const toolIcons = {
  java: FaJava, selenium: SiSelenium, postman: SiPostman,
  mysql: SiMysql, git: SiGit, jenkins: SiJenkins, jira: SiJira,
}

export default function Tools() {
  return (
    <Section id="tools" className="bg-section-alt">
      <SectionHeader
        label="Stack"
        title="Tools & Technologies"
        subtitle="The platforms and frameworks I use daily to deliver quality at scale"
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {techTools.map((tool, i) => {
          const Icon = toolIcons[tool.icon]
          return (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="dash-card p-5 flex flex-col items-center text-center group cursor-default"
            >
              <div className="tool-chip tool-chip-hover w-12 h-12 rounded-xl mb-3 group-hover:border-blue-500/30">
                {tool.icon === 'testng' ? (
                  <span className="text-xs font-bold text-purple-400">TNG</span>
                ) : tool.icon === 'sql' ? (
                  <span className="text-xs font-bold text-teal-400">SQL</span>
                ) : tool.icon === 'playwright' ? (
                  <span className="text-xs font-bold text-green-400">PW</span>
                ) : (
                  Icon && <Icon className="w-5 h-5 text-theme-secondary" />
                )}
              </div>
              <p className="text-sm font-semibold text-theme-primary">{tool.name}</p>
              <p className="text-[10px] text-theme-muted mt-1">{tool.category}</p>
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}
