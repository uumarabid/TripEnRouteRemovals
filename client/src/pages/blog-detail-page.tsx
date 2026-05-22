import { Link, useParams } from 'react-router-dom'
import { Calendar, ArrowLeft } from 'lucide-react'
import { PageHero } from '../components/layout/page-hero'
import { QuoteCta } from '../components/sections/quote-cta'
import { getBlogPostBySlug } from '../data/blog'
import { NotFoundPage } from './not-found-page'

export function BlogDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? getBlogPostBySlug(slug) : undefined

  if (!post) {
    return <NotFoundPage />
  }

  return (
    <>
      <PageHero
        title={post.title}
        breadcrumb={[
          { label: 'Home', to: '/' },
          { label: 'Blog', to: '/blog' },
          { label: post.title },
        ]}
      />
      <article className="section-container max-w-3xl py-12 md:py-16">
        <div className="mb-8 overflow-hidden rounded-2xl border border-slate-200">
          <img
            src={post.image}
            alt={post.imageAlt}
            className="aspect-[16/9] w-full object-cover"
            width={900}
            height={506}
          />
        </div>
        <time
          dateTime={post.date}
          className="flex items-center gap-2 text-sm text-slate-500"
        >
          <Calendar className="h-4 w-4" aria-hidden="true" />
          {new Date(post.date).toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}
        </time>
        <div className="prose prose-slate mt-8 max-w-none space-y-4 text-slate-700">
          {post.content.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>
        <Link
          to="/blog"
          className="mt-10 inline-flex items-center gap-2 font-semibold text-teal-700 hover:underline"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to blog
        </Link>
      </article>
      <QuoteCta />
    </>
  )
}
