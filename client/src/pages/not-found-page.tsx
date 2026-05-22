import { Link } from 'react-router-dom'
import { PageHero } from '../components/layout/page-hero'

export function NotFoundPage() {
  return (
    <>
      <PageHero title="Page not found" subtitle="The page you are looking for does not exist." />
      <section className="section-container py-12 text-center">
        <Link to="/" className="btn-primary">
          Back to home
        </Link>
      </section>
    </>
  )
}
