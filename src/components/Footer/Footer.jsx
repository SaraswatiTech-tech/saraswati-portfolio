import { FiHeart } from 'react-icons/fi'
import PageContainer from '../Layout/PageContainer'
import { navLinks } from '../../data/portfolioData'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer border-t border-white/5 bg-slate-950/50 py-10" role="contentinfo">
      <PageContainer>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm font-semibold text-white mb-1">Saraswati</p>
            <p className="text-xs text-slate-500">Software Test Engineer · Quality Assurance</p>
          </div>
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-6">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-xs text-slate-400 hover:text-blue-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <p className="text-xs text-slate-500 flex items-center gap-1">
            © {year} · Built with <FiHeart className="w-3 h-3 text-red-400" aria-label="love" /> & React
          </p>
        </div>
      </PageContainer>
    </footer>
  )
}
