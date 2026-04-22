import { ExperienceHero } from "@/components/ExperienceHero";
import { CinematicGallery } from "@/components/CinematicGallery";
import { ModernFooter } from "@/components/ModernFooter";
import Image from "next/image";

const WEDDING_GALLERY = [
  { src: "/wedding/PHOTO-2023-05-07-01-13-14.jpeg", alt: "Wedding Celebration", span: "md:col-span-2 md:row-span-2" },
  { src: "/wedding/ef3cedcc-1a8e-408f-8d1e-45966918be48.jpeg", alt: "Elegant Ceremony", span: "md:col-span-2 md:row-span-1" },
  { src: "/wedding/IMG_0518.jpeg", alt: "Bridal Preparation", span: "md:col-span-1 md:row-span-1" },
  { src: "/wedding/f5b8e2d1-f8c0-450b-a64c-6d752585c12d-2.jpeg", alt: "Grand Reception", span: "md:col-span-1 md:row-span-1" },
];

const PHOTO_GRID = [
  "/wedding/61398772-5ca7-4a3a-ba18-c57cb39a2fef.jpeg",
  "/wedding/IMG_1636.jpeg",
  "/wedding/IMG_3378-2.jpeg",
  "/wedding/IMG_2102.jpeg",
  "/wedding/IMG_1518.jpeg",
  "/wedding/5ac75768-5110-4481-8ce9-cfe1665db2ac.jpeg",
  "/wedding/936EB62C-8FC3-4021-BAE9-5567FEA7C296-2-rotated.jpg",
  "/wedding/1d63446d-9c3b-45bf-bfb5-15e9c0b54a46.jpg",
  "/wedding/00603a4b-0a40-4338-b283-1850661e19cf.jpeg",
  "/wedding/IMG_1523.jpeg",
  "/wedding/36f73bc9-a44e-4f82-9381-198b798b94b5.jpeg",
  "/wedding/9E709637-404A-41A3-9F54-07871DC97E86-rotated.jpg",
  "/wedding/3f1795d5-9be1-4677-be57-4cd985c89690-2.jpg",
];

export default function WeddingsPage() {
  return (
    <main className="relative min-h-screen bg-background">
      <ExperienceHero 
        title="Unforgettable"
        subtitle="Vows"
        highlight="Sacred"
        image="/new/DSC05532.jpg"
        tagline="Grand Celebrations"
      />

      {/* Romantic Celebrations Section */}
      <section className="py-16 md:py-40 bg-background px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 opacity-[0.02] pointer-events-none overflow-hidden">
           <span className="text-[40vw] font-serif font-black uppercase italic">Vows</span>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-32 items-center">
            <div className="order-2 lg:order-1 relative aspect-[4/5] rounded-[32px] md:rounded-[64px] overflow-hidden shadow-2xl">
               <Image
                 src="/wedding/IMG_1636.jpeg"
                 alt="Wedding Romance"
                 fill
                 sizes="(max-width: 768px) 100vw, 50vw"
                 className="object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent"></div>
            </div>

            <div className="order-1 lg:order-2">
               <p className="text-[10px] uppercase tracking-[0.8em] font-black text-gold mb-6 md:mb-10 italic">Sacred Spaces</p>
               <h2 className="text-2xl md:text-5xl font-serif text-foreground mb-6 md:mb-12 tracking-tighter leading-tight italic">
                 An <span className="text-gold font-light">Odyssey</span> of love.
               </h2>
               <p className="text-base md:text-xl text-foreground/60 font-serif leading-relaxed italic mb-6 md:mb-12">
                 From lush open-air lawns capable of hosting 1500 guests to intimate preparation suites, we orchestrate every detail so your story unfolds in absolute splendor.
               </p>

               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-12">
                  <div className="space-y-4">
                     <h3 className="text-xl font-bold text-gold uppercase tracking-widest text-[10px]">The Lawn</h3>
                     <p className="text-sm text-foreground/60 leading-relaxed italic">A 1200-capacity emerald sanctuary under the Mumbai stars.</p>
                  </div>
                  <div className="space-y-4">
                     <h3 className="text-xl font-bold text-gold uppercase tracking-widest text-[10px]">Bridal Atriums</h3>
                     <p className="text-sm text-foreground/60 leading-relaxed italic">Private sanctuaries designed for the calm before the celebration.</p>
                  </div>
                  <div className="space-y-4">
                     <h3 className="text-xl font-bold text-gold uppercase tracking-widest text-[10px]">The Ballroom</h3>
                     <p className="text-sm text-foreground/60 leading-relaxed italic">Indoor grandeur with bespoke floral architecture.</p>
                  </div>
                  <div className="space-y-4">
                     <h3 className="text-xl font-bold text-gold uppercase tracking-widest text-[10px]">Curated Menu</h3>
                     <p className="text-sm text-foreground/60 leading-relaxed italic">A culinary journey tailored to your lineage and legacy.</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cinematic Bento Gallery */}
      <CinematicGallery
        title="Odyssey of Romance"
        subtitle="Celebratory Details"
        images={WEDDING_GALLERY}
      />

      {/* Wedding Photo Gallery */}
      <section className="py-16 md:py-32 bg-background px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-20">
            <p className="text-[10px] uppercase tracking-[0.8em] font-black text-gold mb-4 italic">Captured Moments</p>
            <h2 className="text-2xl md:text-5xl font-serif text-foreground tracking-tighter leading-tight italic">
              Your Story, <span className="text-gold font-light">Beautifully Told</span>
            </h2>
          </div>
          <div className="columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4 space-y-3 md:space-y-4">
            {PHOTO_GRID.map((src, i) => (
              <div key={i} className="break-inside-avoid overflow-hidden rounded-2xl relative group">
                <Image
                  src={src}
                  alt={`Wedding moment ${i + 1}`}
                  width={600}
                  height={800}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/10 transition-colors duration-500 rounded-2xl" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ModernFooter />
    </main>
  );
}
