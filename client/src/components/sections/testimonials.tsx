import { Star } from 'lucide-react'
import { MotionSection } from '../ui/motion-section'

const testimonials = [
  {
    name: 'Sarah M.',
    location: 'Birmingham → London',
    text: 'Fantastic nationwide move. The team was punctual, careful with our furniture, and kept us updated throughout.',
  },
  {
    name: 'James T.',
    location: 'Office relocation, Manchester',
    text: 'Our office move happened over a weekend with zero drama. Professional crew and very competitive pricing.',
  },
  {
    name: 'Priya K.',
    location: 'Student move, Bristol',
    text: 'Quick WhatsApp quote and a smooth student move. Would definitely use Trip En Route again.',
  },
]

export function Testimonials() {
  return (
    <MotionSection className="bg-white py-16 md:py-20">
      <div className="section-container">
        <h2 className="text-center font-display text-3xl font-bold text-slate-900">
          Trusted by customers across the UK
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <blockquote key={item.name} className="card-surface">
              <div className="flex gap-1 text-amber-500" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-slate-600">&ldquo;{item.text}&rdquo;</p>
              <footer className="mt-4 border-t border-slate-100 pt-4">
                <cite className="not-italic font-semibold text-slate-900">{item.name}</cite>
                <p className="text-sm text-slate-500">{item.location}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </MotionSection>
  )
}
