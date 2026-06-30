import { PageHero } from "../components/layout/page-hero";
import { TrustFeatures } from "../components/sections/trust-features";
import { QuoteCta } from "../components/sections/quote-cta";
import { MotionSection } from "../components/ui/motion-section";

export function AboutPage() {
  return (
    <>
      <PageHero
        title="About Shifting Solutions"
        subtitle="Professional, affordable removals with a nationwide reach and a customer-first approach."
        breadcrumb={[{ label: "Home", to: "/" }, { label: "About" }]}
      />
      <MotionSection className="section-container py-12 md:py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-bold text-slate-900">Moving the UK with care</h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Shifting Solutions was built on a simple promise: make every move — big or small, local or long-distance — as
              smooth and stress-free as possible. From our base in Tooting, London, we support customers across the entire United
              Kingdom.
            </p>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Our trained teams handle house and office relocations, student moves, furniture deliveries, piano transport, and man
              & van jobs with the same attention to detail. We believe great service should be responsive, fairly priced, and
              backed by proper training and safety standards.
            </p>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Whether you are relocating for work, study, or a fresh start, we are here to help you get there — nationwide.
            </p>
          </div>
          <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 shadow-lg">
            <img
              src="/images/about-team.jpg"
              alt="Couple relaxing in their new home after a stress-free Shifting Solutions move"
              className="h-full w-full object-cover"
              width={700}
              height={525}
            />
          </div>
        </div>
      </MotionSection>
      <TrustFeatures />
      <QuoteCta />
    </>
  );
}
