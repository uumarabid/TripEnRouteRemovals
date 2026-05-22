import { Link, useParams } from 'react-router-dom'
import { CheckCircle2 } from 'lucide-react'
import { PageHero } from '../components/layout/page-hero'
import { QuoteCta } from '../components/sections/quote-cta'
import { getServiceBySlug } from '../data/services'
import { NotFoundPage } from './not-found-page'

export function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const service = slug ? getServiceBySlug(slug) : undefined

  if (!service) {
    return <NotFoundPage />
  }

  return (
    <>
      <PageHero
        title={service.title}
        subtitle={service.shortDescription}
        breadcrumb={[
          { label: 'Home', to: '/' },
          { label: 'Services', to: '/services' },
          { label: service.title },
        ]}
      />
      <section className="section-container py-12 md:py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 shadow-lg">
            <img
              src={service.image}
              alt={service.imageAlt}
              className="h-full w-full object-cover"
              width={700}
              height={525}
            />
          </div>
          <div>
            <p className="text-lg leading-relaxed text-slate-600">{service.description}</p>
            <h2 className="mt-8 font-display text-xl font-semibold text-slate-900">
              What you get
            </h2>
            <ul className="mt-4 space-y-3">
              {service.highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-700">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-teal-600"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
            <Link to="/contact" className="btn-primary mt-8 inline-flex">
              Request a quote
            </Link>
          </div>
        </div>
      </section>
      <QuoteCta
        title={`Need ${service.title.toLowerCase()}?`}
        description="Get a free nationwide quote — we respond quickly via email and WhatsApp."
      />
    </>
  )
}
