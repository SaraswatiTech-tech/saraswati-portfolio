import PageContainer from '../Layout/PageContainer'
import { navLinks } from '../../data/portfolioData'

export default function Footer() {
  return (
    <footer className="site-footer border-t border-theme-border bg-theme-footer py-10" role="contentinfo">
      <PageContainer>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm font-semibold text-theme-primary mb-1">Saraswati</p>
            <p className="text-xs text-theme-muted">Software Test Engineer · Quality Assurance</p>
          </div>
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-6">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-xs text-theme-secondary hover:text-blue-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </PageContainer>
    </footer>
  )
}
