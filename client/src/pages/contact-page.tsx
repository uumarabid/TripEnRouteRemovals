import { Mail, MapPin, Phone } from 'lucide-react'
import { PageHero } from '../components/layout/page-hero'
import { ContactForm } from '../components/forms/contact-form'
import {
  ADDRESS_LINES,
  EMAIL,
  MAILTO_URL,
  PHONE_DISPLAY,
  WHATSAPP_URL,
} from '../lib/contact'

export function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact us"
        subtitle="Experience professional removals nationwide. Request a quote or reach us on WhatsApp."
        breadcrumb={[
          { label: 'Home', to: '/' },
          { label: 'Contact' },
        ]}
      />
      <section className="section-container py-12 md:py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-bold text-slate-900">Get in touch</h2>
            <p className="mt-3 text-slate-600">
              Whether you need assistance or have questions about a nationwide move, we are here
              to help.
            </p>
            <ul className="mt-8 space-y-6">
              <li className="flex gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-100 text-teal-700">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-sm font-medium text-slate-500">Phone / WhatsApp</span>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-slate-900 hover:text-teal-700"
                    aria-label="Chat on WhatsApp"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </span>
              </li>
              <li className="flex gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-100 text-teal-700">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-sm font-medium text-slate-500">Email</span>
                  <a
                    href={MAILTO_URL}
                    className="font-semibold text-slate-900 hover:text-teal-700"
                  >
                    {EMAIL}
                  </a>
                </span>
              </li>
              <li className="flex gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-100 text-teal-700">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-sm font-medium text-slate-500">Address</span>
                  {ADDRESS_LINES.map((line) => (
                    <span key={line} className="block font-semibold text-slate-900">
                      {line}
                    </span>
                  ))}
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold text-slate-900">Message us</h2>
            <p className="mt-3 text-slate-600">Request your free quote using the form below.</p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
