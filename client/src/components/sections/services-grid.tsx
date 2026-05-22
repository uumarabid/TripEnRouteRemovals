import { Link } from 'react-router-dom'
import { MotionSection } from '../ui/motion-section'
import { ServiceCard } from './service-card'
import { services } from '../../data/services'

interface ServicesGridProps {
  limit?: number
  showViewAll?: boolean
}

export function ServicesGrid({ limit, showViewAll = false }: ServicesGridProps) {
  const displayed = limit ? services.slice(0, limit) : services

  return (
    <MotionSection className="section-container py-16 md:py-20">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <h2 className="font-display text-3xl font-bold text-slate-900 md:text-4xl">
            Our removal services
          </h2>
          <p className="mt-3 max-w-2xl text-slate-600">
            From full house moves to specialist piano transport — professional help across the UK.
          </p>
        </div>
        {showViewAll && (
          <Link to="/services" className="btn-secondary shrink-0 text-sm">
            View all services
          </Link>
        )}
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {displayed.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>
    </MotionSection>
  )
}
