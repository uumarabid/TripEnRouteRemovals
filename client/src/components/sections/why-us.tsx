import { CheckCircle2 } from 'lucide-react'
import { MotionSection } from '../ui/motion-section'

const points = [
  'Nationwide coverage from our London base',
  'House, office, student, and specialist removals',
  'Transparent quotes with no hidden fees',
  'Responsive team — WhatsApp and email support',
  'Fully trained, safety-focused crews',
  'Affordable packages for every budget',
]

export function WhyUs() {
  return (
    <MotionSection className="section-container py-16 md:py-20">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 shadow-lg">
          <img
            src="/images/about-team.jpg"
            alt="Happy customers relaxing at home after a safe and stress-free Shifting Solutions removal"
            className="h-full w-full object-cover"
            width={700}
            height={525}
          />
        </div>
        <div>
          <h2 className="font-display text-3xl font-bold text-slate-900 md:text-4xl">
            Removals done properly, nationwide
          </h2>
          <p className="mt-4 text-slate-600">
            Whether you are moving locally or cross-country, Shifting Solutions brings
            experience, care, and honest pricing to every job. We plan with you from the first box
            to the final unload.
          </p>
          <ul className="mt-8 space-y-3">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-slate-700">
                <CheckCircle2
                  className="mt-0.5 h-5 w-5 shrink-0 text-teal-600"
                  aria-hidden="true"
                />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </MotionSection>
  )
}
