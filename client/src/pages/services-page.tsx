import { PageHero } from '../components/layout/page-hero'
import { ServicesGrid } from '../components/sections/services-grid'
import { QuoteCta } from '../components/sections/quote-cta'

export function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our removal services"
        subtitle="Professional nationwide removals for homes, businesses, students, and specialist items."
        breadcrumb={[
          { label: 'Home', to: '/' },
          { label: 'Services' },
        ]}
      />
      <ServicesGrid />
      <QuoteCta />
    </>
  )
}
