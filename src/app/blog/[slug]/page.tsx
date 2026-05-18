import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ModernFooter } from "@/components/ModernFooter";
import { BLOGS_DATA, BlogSection } from "@/data/blogs";

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOGS_DATA.find((p) => p.slug === slug);
  if (!post) return { title: "Not Found" };
  return {
    title: post.seoTitle,
    description: post.description,
    alternates: { canonical: `https://www.peninsulagrand.com/blog/${post.slug}` },
    openGraph: {
      title: post.seoTitle,
      description: post.description,
      images: [{ url: post.image, alt: post.imageAlt }],
    },
  };
}

export async function generateStaticParams() {
  return BLOGS_DATA.map((post) => ({ slug: post.slug }));
}

function renderSection(section: BlogSection, index: number) {
  switch (section.type) {
    case "heading":
      return (
        <h2
          key={index}
          className="text-3xl md:text-5xl font-serif italic text-foreground tracking-tighter leading-tight mt-16 md:mt-24 mb-8"
        >
          {section.text}
        </h2>
      );

    case "subheading":
      return (
        <h3
          key={index}
          className="text-xl md:text-2xl font-serif italic text-gold mt-12 mb-6 tracking-tight"
        >
          {section.text}
        </h3>
      );

    case "paragraph":
      return (
        <p
          key={index}
          className="text-lg md:text-xl text-foreground/70 font-serif italic leading-relaxed mb-8"
        >
          {section.text}
        </p>
      );

    case "list":
      return (
        <ul key={index} className="mb-10 flex flex-col gap-4 pl-2">
          {section.items.map((item, i) => (
            <li key={i} className="flex items-start gap-5">
              <span className="mt-3 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0 shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
              <span className="text-lg md:text-xl text-foreground/70 font-serif italic leading-relaxed">
                {item}
              </span>
            </li>
          ))}
        </ul>
      );

    case "numbered":
      return (
        <ol key={index} className="mb-10 flex flex-col gap-8 pl-2">
          {section.items.map((item, i) => (
            <li key={i} className="flex items-start gap-6">
              <span className="mt-1 text-[10px] font-black text-gold bg-gold/10 border border-gold/20 rounded-full w-9 h-9 flex-shrink-0 flex items-center justify-center">
                {i + 1}
              </span>
              <div className="flex-1">
                <p className="text-[10px] uppercase tracking-[0.4em] font-black text-foreground mb-3">
                  {item.title}
                </p>
                <p className="text-lg md:text-xl text-foreground/70 font-serif italic leading-relaxed">
                  {item.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      );

    case "image":
      return (
        <div key={index} className="my-16 md:my-24 relative aspect-video overflow-hidden rounded-[40px] shadow-2xl border border-foreground/5 group">
          <Image
            src={section.src}
            alt={section.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 1200px"
            className="object-cover group-hover:scale-105 transition-transform duration-[3s] ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          {section.caption && (
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-[10px] uppercase tracking-[0.4em] font-black text-white italic drop-shadow-lg">
                {section.caption}
              </p>
            </div>
          )}
        </div>
      );

    case "cta":
      return (
        <div
          key={index}
          className="mt-24 md:mt-32 rounded-[48px] bg-foreground p-12 md:p-24 text-center relative overflow-hidden shadow-3xl"
        >
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
            <span className="text-[25vw] font-serif font-black text-white/[0.02] uppercase italic tracking-tighter">
              Legacy
            </span>
          </div>
          <div className="relative z-10">
            <p className="text-[9px] uppercase tracking-[0.8em] font-black text-gold mb-8 italic">
              Craft Your Story
            </p>
            <h3 className="text-3xl md:text-5xl font-serif italic text-background mb-8 tracking-tighter leading-tight">
              {section.title}
            </h3>
            <p className="text-lg text-background/60 font-serif italic leading-relaxed mb-12 max-w-xl mx-auto">
              {section.body}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="bg-gold text-background px-12 py-5 rounded-full font-black text-[10px] uppercase tracking-[0.4em] hover:bg-white transition-all duration-700 shadow-2xl"
              >
                Connect With Us
              </Link>
              <a
                href="https://bookings.peninsulagrand.com/?propertyId=8984"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/20 text-white px-12 py-5 rounded-full font-black text-[10px] uppercase tracking-[0.4em] hover:border-gold hover:text-gold transition-all duration-700"
              >
                Reserve Now
              </a>
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = BLOGS_DATA.find((p) => p.slug === slug);
  if (!post) notFound();

  const otherPosts = BLOGS_DATA.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <main className="relative min-h-screen bg-background grain">
      {/* Cinematic Hero */}
      <section className="relative h-[70vh] md:h-[85vh] w-full flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover scale-105 animate-fade-in"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-transparent to-background" />
          <div className="absolute inset-0 hero-vignette opacity-60" />
        </div>

        <div className="relative z-10 text-center px-6 mt-20">
          <div className="overflow-hidden mb-6">
            <span className="inline-block bg-gold text-background text-[9px] font-black uppercase tracking-[0.4em] px-6 py-2.5 rounded-full shadow-2xl animate-fade-in">
              {post.category}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-serif text-white tracking-tighter leading-[1.1] italic max-w-5xl mx-auto drop-shadow-2xl animate-fade-in delay-300">
            {post.title}
          </h1>

          <div className="flex items-center justify-center gap-6 mt-12 animate-fade-in delay-500">
            <div className="h-px w-12 bg-white/30" />
            <p className="text-[10px] uppercase tracking-[0.5em] text-white/80 font-black">
              {new Date(post.date).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
            <div className="h-px w-12 bg-white/30" />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-40">
          <div className="w-[1px] h-16 bg-gold animate-scroll-vertical"></div>
        </div>
      </section>

      {/* Article Content */}
      <article className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 py-24 md:py-40">
        <div className="relative">
          {/* Subtle Side Label */}
          <div className="absolute -left-24 top-0 hidden xl:block vertical-text opacity-10">
             <span className="text-[6vw] font-serif font-black italic tracking-tighter text-foreground uppercase select-none">
               Article
             </span>
          </div>

          <div className="prose-container">
            {post.content.map((section, i) => renderSection(section, i))}
          </div>

          {/* Share/Meta Footer */}
          <div className="mt-24 pt-12 border-t border-foreground/10 flex flex-col md:flex-row items-center justify-between gap-8">
            <Link
              href="/blog"
              className="group flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-foreground/40 hover:text-gold transition-all duration-500"
            >
              <div className="w-8 h-px bg-foreground/10 group-hover:w-12 group-hover:bg-gold transition-all duration-500" />
              Return to Journal
            </Link>

            <div className="flex items-center gap-6">
              <span className="text-[9px] uppercase tracking-[0.3em] text-foreground/30 font-black italic">Sharing the Legacy</span>
              {/* Share icons placeholder/simple */}
              <div className="h-px w-12 bg-foreground/10" />
            </div>
          </div>
        </div>
      </article>

      {/* More Stories Section */}
      <section className="py-24 md:py-40 px-6 md:px-12 bg-foreground/[0.02] border-t border-foreground/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <p className="text-[10px] uppercase tracking-[0.8em] font-black text-gold mb-6 italic">Further Reading</p>
              <h2 className="text-3xl md:text-6xl font-serif text-foreground tracking-tighter leading-tight italic">
                More <span className="text-gold font-light">Stories</span>
              </h2>
            </div>
            <Link 
              href="/blog"
              className="text-[10px] font-black uppercase tracking-[0.4em] text-gold border-b border-gold/20 pb-2 hover:border-gold transition-all duration-500"
            >
              View Full Journal
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {otherPosts.map((other) => (
              <Link
                key={other.slug}
                href={`/blog/${other.slug}`}
                className="group flex flex-col md:flex-row items-center gap-8 md:gap-12"
              >
                <div className="relative aspect-[16/11] md:aspect-square w-full md:w-64 flex-shrink-0 overflow-hidden rounded-[32px] shadow-xl border border-foreground/5">
                  <Image
                    src={other.image}
                    alt={other.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    className="object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[8px] uppercase tracking-[0.4em] text-gold font-black mb-3 italic">{other.category}</span>
                  <h3 className="text-2xl md:text-3xl font-serif text-foreground tracking-tighter leading-tight italic mb-4 group-hover:text-gold transition-colors duration-500">
                    {other.title}
                  </h3>
                  <p className="text-sm text-foreground/50 font-serif italic line-clamp-2">
                    {other.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ModernFooter />
    </main>
  );
}

