import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, MapPin, MessageCircle } from 'lucide-react'
import { WHATSAPP_URL } from '../../lib/contact'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/coverage', label: 'Coverage' },
  { to: '/faq', label: 'FAQ' },
  { to: '/blog', label: 'Blog' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleToggleMenu = () => setIsMenuOpen((open) => !open)
  const handleCloseMenu = () => setIsMenuOpen(false)

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `rounded-lg px-3 py-2 text-sm font-medium transition ${
      isActive ? 'bg-teal-50 text-teal-700' : 'text-slate-700 hover:bg-slate-100'
    }`

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="border-b border-teal-100 bg-teal-50/80">
        <div className="section-container flex items-center justify-center gap-2 py-2 text-xs font-medium text-teal-800 sm:text-sm">
          <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span>Serving customers across the UK — nationwide removals</span>
        </div>
      </div>

      <div className="section-container flex h-16 items-center justify-between gap-4">
        <Link
          to="/"
          className="font-display text-lg font-bold text-slate-900 sm:text-xl"
          onClick={handleCloseMenu}
        >
          Trip En Route
          <span className="block text-xs font-medium text-teal-600">Removals</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="hidden rounded-full bg-[#25D366] p-2 text-white transition hover:opacity-90 sm:inline-flex"
          >
            <MessageCircle className="h-5 w-5" />
          </a>
          <Link to="/contact" className="btn-primary hidden text-sm sm:inline-flex">
            Free Quote
          </Link>
          <button
            type="button"
            className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 lg:hidden"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            onClick={handleToggleMenu}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav
          className="border-t border-slate-200 bg-white px-4 py-4 lg:hidden"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={linkClass}
                  onClick={handleCloseMenu}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li className="pt-2">
              <Link to="/contact" className="btn-primary w-full" onClick={handleCloseMenu}>
                Get Free Quote
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
