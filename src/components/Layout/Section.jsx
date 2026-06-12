import PageContainer from './PageContainer'

export default function Section({ id, children, className = '', containerClass = '' }) {
  return (
    <section id={id} className={`section-block ${className}`.trim()} aria-labelledby={id ? `${id}-heading` : undefined}>
      <PageContainer className={containerClass}>{children}</PageContainer>
    </section>
  )
}
