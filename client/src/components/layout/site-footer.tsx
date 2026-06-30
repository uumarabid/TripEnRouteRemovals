import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import { ADDRESS_LINES, EMAIL, MAILTO_URL, PHONE_DISPLAY, WHATSAPP_URL } from '../../lib/contact'
import { COMPANY_LOGO_ALT, COMPANY_LOGO_SRC } from '../../lib/branding'
import { services } from '../../data/services'
import { coverageRegions } from '../../data/coverage'

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-300">
      <div className="section-container grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <img
            src={COMPANY_LOGO_SRC}
            alt={COMPANY_LOGO_ALT}
            className="h-20 w-auto max-w-[260px] rounded-lg bg-white p-2 object-contain sm:h-24 sm:max-w-[300px]"
            width={300}
            height={96}
          />
          <p className="mt-3 text-sm leading-relaxed">
            Professional, affordable removals nationwide. Based in London, trusted across the UK.
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-white">
            Services
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  to={`/services/${service.slug}`}
                  className="transition hover:text-teal-400"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-white">
            Coverage
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {coverageRegions.slice(0, 6).map((region) => (
              <li key={region.id}>
                <Link to="/coverage" className="transition hover:text-teal-400">
                  {region.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-white">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal-400" aria-hidden="true" />
              <span>
                {ADDRESS_LINES.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </span>
            </li>
            <li>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition hover:text-teal-400"
              >
                <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a
                href={MAILTO_URL}
                className="flex items-center gap-2 transition hover:text-teal-400"
              >
                <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                {EMAIL}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="section-container flex flex-col items-center justify-between gap-2 py-6 text-xs sm:flex-row">
          <p>© {new Date().getFullYear()} Shifting Solutions. All rights reserved.</p>
          <p>Nationwide UK removals — professional & affordable</p>
        </div>
      </div>
    </footer>
  )
}
