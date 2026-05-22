import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

interface PageHeroProps {
  title: string
  subtitle?: string
  breadcrumb?: { label: string; to?: string }[]
}

export function PageHero({ title, subtitle, breadcrumb }: PageHeroProps) {
  return (
    <section className="border-b border-slate-200 bg-gradient-to-br from-teal-50 via-stone-50 to-amber-50/40">
      <div className="section-container py-12 md:py-16">
        {breadcrumb && breadcrumb.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-4 flex flex-wrap items-center gap-1 text-sm text-slate-600">
            {breadcrumb.map((item, index) => (
              <span key={item.label} className="flex items-center gap-1">
                {index > 0 && <ChevronRight className="h-4 w-4" aria-hidden="true" />}
                {item.to ? (
                  <Link to={item.to} className="hover:text-teal-700">
                    {item.label}
                  </Link>
                ) : (
                  <span className="font-medium text-slate-800">{item.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <h1 className="font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-lg text-slate-600">{subtitle}</p>
        )}
      </div>
    </section>
  )
}
