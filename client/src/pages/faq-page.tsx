import { PageHero } from '../components/layout/page-hero'
import { FaqAccordion } from '../components/sections/faq-accordion'
import { QuoteCta } from '../components/sections/quote-cta'
import { faqItems } from '../data/faq'

export function FaqPage() {
  return (
    <>
      <PageHero
        title="Frequently asked questions"
        subtitle="Answers about nationwide removals, quotes, insurance, and booking."
        breadcrumb={[
          { label: 'Home', to: '/' },
          { label: 'FAQ' },
        ]}
      />
      <section className="section-container max-w-3xl py-12 md:py-16">
        <FaqAccordion items={faqItems} />
      </section>
      <QuoteCta />
    </>
  )
}
