import { MapPinned } from 'lucide-react'
import { PageHero } from '../components/layout/page-hero'
import { MotionSection } from '../components/ui/motion-section'
import { QuoteCta } from '../components/sections/quote-cta'
import { coverageRegions } from '../data/coverage'

export function CoveragePage() {
  return (
    <>
      <PageHero
        title="Nationwide UK coverage"
        subtitle="Trip En Route Removals serves customers across the United Kingdom — from our London base to every major region."
        breadcrumb={[
          { label: 'Home', to: '/' },
          { label: 'Coverage' },
        ]}
      />
      <section className="section-container py-12 md:py-16">
        <div className="mb-10 overflow-hidden rounded-2xl border border-slate-200 shadow-lg">
          <img
            src="/images/coverage-uk.jpg"
            alt="Map of the United Kingdom representing nationwide removal coverage"
            className="aspect-[21/9] w-full object-cover"
            width={1200}
            height={514}
          />
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {coverageRegions.map((region, index) => (
            <MotionSection key={region.id} delay={index * 0.05} className="card-surface">
              <div className="flex items-start gap-3">
                <MapPinned className="h-6 w-6 shrink-0 text-teal-600" aria-hidden="true" />
                <div>
                  <h2 className="font-display text-xl font-semibold text-slate-900">
                    {region.name}
                  </h2>
                  <p className="mt-2 text-slate-600">{region.description}</p>
                  <p className="mt-3 text-sm text-slate-500">
                    Including: {region.areas.join(', ')}
                  </p>
                </div>
              </div>
            </MotionSection>
          ))}
        </div>
      </section>
      <QuoteCta
        title="Moving anywhere in the UK?"
        description="Share your from and to addresses for a tailored nationwide quote."
      />
    </>
  )
}
