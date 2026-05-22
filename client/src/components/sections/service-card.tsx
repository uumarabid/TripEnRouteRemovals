import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import type { Service } from '../../data/services'

interface ServiceCardProps {
  service: Service
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="card-surface group flex flex-col overflow-hidden p-0 transition hover:shadow-md">
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={service.image}
          alt={service.imageAlt}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          loading="lazy"
          width={400}
          height={250}
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-semibold text-slate-900">{service.title}</h3>
        <p className="mt-2 flex-1 text-sm text-slate-600">{service.shortDescription}</p>
        <Link
          to={`/services/${service.slug}`}
          className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-teal-700 transition hover:gap-2"
        >
          Learn more
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </article>
  )
}
