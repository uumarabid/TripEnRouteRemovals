import { MessageCircle } from 'lucide-react'
import { WHATSAPP_URL } from '../../lib/contact'

export function WhatsAppFab() {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLAnchorElement>) => {
    if (event.key !== 'Enter' && event.key !== ' ') return
    event.currentTarget.click()
  }

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className="group fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-lg transition hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
    >
      <MessageCircle className="h-6 w-6 shrink-0" aria-hidden="true" />
      <span className="relative flex min-w-[5.5rem] flex-col items-start text-sm font-semibold leading-tight">
        <span className="transition-opacity duration-200 group-hover:opacity-0 group-focus-visible:opacity-0">
          Contact us
        </span>
        <span className="absolute left-0 top-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
          WhatsApp
        </span>
      </span>
    </a>
  )
}
