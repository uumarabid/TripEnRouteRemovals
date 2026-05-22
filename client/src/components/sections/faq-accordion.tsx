import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import type { FaqItem } from '../../data/faq'

interface FaqAccordionProps {
  items: FaqItem[]
}

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null)

  const handleToggle = (id: string) => {
    setOpenId((current) => (current === id ? null : id))
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, id: string) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      handleToggle(id)
    }
  }

  return (
    <div className="space-y-3">
      {items.map((item) => {
        const isOpen = openId === item.id
        return (
          <div key={item.id} className="card-surface overflow-hidden p-0">
            <button
              type="button"
              id={`faq-${item.id}`}
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${item.id}`}
              className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left font-display font-semibold text-slate-900 transition hover:bg-slate-50"
              onClick={() => handleToggle(item.id)}
              onKeyDown={(e) => handleKeyDown(e, item.id)}
            >
              {item.question}
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-teal-600 transition ${isOpen ? 'rotate-180' : ''}`}
                aria-hidden="true"
              />
            </button>
            <div
              id={`faq-panel-${item.id}`}
              role="region"
              aria-labelledby={`faq-${item.id}`}
              hidden={!isOpen}
              className="border-t border-slate-100 px-6 py-4 text-slate-600"
            >
              {item.answer}
            </div>
          </div>
        )
      })}
    </div>
  )
}
