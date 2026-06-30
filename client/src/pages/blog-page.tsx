import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import { PageHero } from "../components/layout/page-hero";
import { MotionSection } from "../components/ui/motion-section";
import { blogPosts } from "../data/blog";

export function BlogPage() {
  return (
    <>
      <PageHero
        title="Removals blog"
        subtitle="Practical tips for house moves, office relocations, and specialist removals across the UK."
        breadcrumb={[{ label: "Home", to: "/" }, { label: "Blog" }]}
      />
      <section className="section-container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2">
          {blogPosts.map((post, index) => (
            <MotionSection key={post.slug} delay={index * 0.06}>
              <article className="card-surface group overflow-hidden p-0">
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.imageAlt}
                    className="h-full w-full object-cover transition group-hover:scale-105"
                    loading="lazy"
                    width={600}
                    height={338}
                  />
                </div>
                <div className="p-6">
                  <time dateTime={post.date} className="flex items-center gap-2 text-sm text-slate-500">
                    <Calendar className="h-4 w-4" aria-hidden="true" />
                    {new Date(post.date).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </time>
                  <h2 className="mt-3 font-display text-xl font-semibold text-slate-900">
                    <Link to={`/blog/${post.slug}`} className="transition hover:text-teal-700">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-2 text-slate-600">{post.excerpt}</p>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="mt-4 inline-block text-sm font-semibold text-teal-700 hover:underline"
                  >
                    Read more
                  </Link>
                </div>
              </article>
            </MotionSection>
          ))}
        </div>
      </section>
    </>
  );
}
