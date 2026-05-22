import { Link } from 'react-router-dom'
import { MotionSection } from '../ui/motion-section'

interface QuoteCtaProps {
  title?: string
  description?: string
}

export function QuoteCta({
  title = 'Need a removals quote?',
  description = 'Tell us about your move and we will get back to you with a free, no-obligation estimate.',
}: QuoteCtaProps) {
  return (
    <MotionSection className="section-container py-12 md:py-16">
      <div className="overflow-hidden rounded-2xl bg-gradient-to-r from-teal-600 to-teal-700 px-8 py-10 text-center text-white shadow-lg md:px-12 md:py-14">
        <h2 className="font-display text-2xl font-bold md:text-3xl">{title}</h2>
        <p className="mx-auto mt-3 max-w-xl text-teal-50">{description}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/contact"
            className="inline-flex rounded-xl bg-brand-amber px-8 py-3 font-semibold text-white shadow-md transition hover:bg-brand-amber-light"
          >
            Get your free quote
          </Link>
          <Link
            to="/services"
            className="inline-flex rounded-xl border-2 border-white/80 px-8 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            View services
          </Link>
        </div>
      </div>
    </MotionSection>
  )
}
