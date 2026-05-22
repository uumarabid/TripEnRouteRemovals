import { HeroSection } from '../components/sections/hero-section'
import { ServicesGrid } from '../components/sections/services-grid'
import { WhyUs } from '../components/sections/why-us'
import { TrustFeatures } from '../components/sections/trust-features'
import { Testimonials } from '../components/sections/testimonials'
import { QuoteCta } from '../components/sections/quote-cta'

export function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesGrid limit={6} showViewAll />
      <WhyUs />
      <TrustFeatures />
      <Testimonials />
      <QuoteCta />
    </>
  )
}
