import { Link } from 'react-router-dom'
import { MapPin, Phone } from 'lucide-react'
import { MotionSection } from '../ui/motion-section'
import { PHONE_DISPLAY, WHATSAPP_URL } from '../../lib/contact'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-stone-50 via-teal-50/30 to-amber-50/20">
      <div className="section-container grid items-center gap-10 py-14 lg:grid-cols-2 lg:py-20">
        <MotionSection>
          <span className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white px-4 py-1.5 text-sm font-medium text-teal-800 shadow-sm">
            <MapPin className="h-4 w-4" aria-hidden="true" />
            Nationwide UK removals
          </span>
          <h1 className="mt-6 font-display text-4xl font-bold leading-tight text-slate-900 md:text-5xl lg:text-6xl">
            Professional removals,{' '}
            <span className="text-teal-600">wherever you are</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-slate-600">
            Trip En Route Removals delivers affordable, honest moving services across the United
            Kingdom — house, office, student, piano, furniture, and man & van.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link to="/contact" className="btn-primary">
              Get a free estimate
            </Link>
            <Link to="/services" className="btn-secondary">
              Our services
            </Link>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            tabIndex={0}
            className="mt-8 inline-flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-5 py-3 shadow-sm transition hover:border-teal-300 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white">
              <Phone className="h-5 w-5" aria-hidden="true" />
            </span>
            <span>
              <span className="block text-xs font-medium text-slate-500">Message us on WhatsApp</span>
              <span className="font-semibold text-slate-900">{PHONE_DISPLAY}</span>
            </span>
          </a>
        </MotionSection>

        <MotionSection delay={0.15} className="relative">
          <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 shadow-xl">
            <img
              src="/images/hero.jpg"
              alt="Professional removal team loading a van for a nationwide move"
              className="h-full w-full object-cover"
              width={800}
              height={600}
            />
          </div>
          <div className="absolute -bottom-4 -left-4 hidden rounded-xl border border-slate-200 bg-white p-4 shadow-lg md:block">
            <p className="font-display text-2xl font-bold text-teal-600">UK Wide</p>
            <p className="text-sm text-slate-600">London base · nationwide service</p>
          </div>
        </MotionSection>
      </div>
    </section>
  )
}
