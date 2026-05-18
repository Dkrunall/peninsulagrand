import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ModernFooter } from "@/components/ModernFooter";
import { BlogHero } from "@/components/BlogHero";
import { BLOGS_DATA } from "@/data/blogs";

export const metadata: Metadata = {
  title: "Blog | Peninsula Grand Hotel Mumbai",
  description:
    "Explore the Peninsula Grand blog — insights on weddings, events, dining, and luxury hospitality in Mumbai.",
  alternates: { canonical: "https://www.peninsulagrand.com/blog" },
};

export default function BlogPage() {
  return (
    <main className="relative min-h-screen bg-background grain">
      {/* Cinematic Hero */}
      <BlogHero />

      {/* Posts grid */}
      <section className="py-24 md:py-40 px-6 md:px-12 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
          {BLOGS_DATA.map((post, index) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col relative"
            >
              {/* Image Container with Cinematic Reveal */}
              <div className="relative aspect-[16/11] overflow-hidden rounded-[40px] mb-8 shadow-2xl border border-foreground/5">
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-[2.5s] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                
                {/* Category Badge */}
                <div className="absolute top-6 left-6 overflow-hidden">
                  <span className="inline-block bg-gold text-background text-[8px] font-black uppercase tracking-[0.4em] px-5 py-2 rounded-full transform -translate-y-full group-hover:translate-y-0 transition-transform duration-700 delay-100">
                    {post.category}
                  </span>
                </div>

                {/* Number Indicator */}
                <div className="absolute bottom-6 right-8 pointer-events-none">
                  <span className="text-[5vw] font-serif font-black text-white/10 italic">
                    0{index + 1}
                  </span>
                </div>
              </div>

              {/* Content with Refined Typography */}
              <div className="flex flex-col px-2">
                <div className="flex items-center gap-4 mb-4">
                  <p className="text-[9px] uppercase tracking-[0.4em] text-gold font-black">
                    {new Date(post.date).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                  <div className="h-px w-8 bg-gold/30" />
                </div>

                <h2 className="text-2xl md:text-3xl font-serif text-foreground tracking-tighter leading-[1.1] italic mb-6 group-hover:text-gold transition-colors duration-500">
                  {post.title}
                </h2>
                
                <p className="text-base text-foreground/50 leading-relaxed line-clamp-2 font-serif italic mb-8">
                  {post.description}
                </p>

                <div className="flex items-center gap-3">
                  <span className="text-[9px] font-black uppercase tracking-[0.4em] text-foreground group-hover:text-gold transition-colors duration-500">
                    Explore Story
                  </span>
                  <div className="w-6 h-px bg-foreground/20 group-hover:w-12 group-hover:bg-gold transition-all duration-500" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <ModernFooter />
    </main>
  );
}

