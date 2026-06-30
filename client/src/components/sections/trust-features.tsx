import { Award, Calendar, Shield, Wallet } from 'lucide-react'
import { MotionSection } from '../ui/motion-section'

const features = [
  {
    icon: Award,
    title: 'Qualified Experts',
    description:
      'Our staff are fully trained to carry out house and business removals to the highest standards.',
  },
  {
    icon: Calendar,
    title: 'Flexible Schedule',
    description:
      'We work around your timeline — including evenings and weekends for office moves when needed.',
  },
  {
    icon: Shield,
    title: 'Health & Safety',
    description:
      'Safety is central to every job. We follow rigorous standards to protect you, your property, and our team.',
  },
  {
    icon: Wallet,
    title: 'Affordable Packages',
    description:
      'Competitive pricing without cutting corners — clear quotes and no hidden surprises.',
  },
]

export function TrustFeatures() {
  return (
    <MotionSection className="section-container py-16 md:py-20">
      <div className="text-center">
        <h2 className="font-display text-3xl font-bold text-slate-900 md:text-4xl">
          Why choose Shifting Solutions
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-600">
          Nationwide coverage backed by professional crews, flexible booking, and honest pricing.
        </p>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <MotionSection
            key={feature.title}
            delay={index * 0.08}
            className="card-surface text-center"
          >
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100 text-teal-700">
              <feature.icon className="h-6 w-6" aria-hidden="true" />
            </div>
            <h3 className="mt-4 font-display text-lg font-semibold text-slate-900">
              {feature.title}
            </h3>
            <p className="mt-2 text-sm text-slate-600">{feature.description}</p>
          </MotionSection>
        ))}
      </div>
    </MotionSection>
  )
}
