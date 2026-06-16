import PageContainer from '../../components/Layout/PageContainer'
import HeroContent from './HeroContent'
import TestExecutionDashboard from './TestExecutionDashboard'
import ProfessionalHighlights from './ProfessionalHighlights'
import BugLifecycle from './BugLifecycle'

export default function Hero() {
  return (
    <section id="home" className="hero-section pb-8 lg:pb-12" aria-label="Hero">
      <PageContainer className="flex flex-col gap-8 lg:gap-10">
        <div className="hero-primary-grid grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <HeroContent />
          <TestExecutionDashboard />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-8 lg:gap-10 items-stretch">
          <ProfessionalHighlights />
          <BugLifecycle />
        </div>
      </PageContainer>
    </section>
  )
}
