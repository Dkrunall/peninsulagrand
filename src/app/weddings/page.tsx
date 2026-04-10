import { ExperienceHero } from "@/components/ExperienceHero";
import { CinematicGallery } from "@/components/CinematicGallery";
import { ModernFooter } from "@/components/ModernFooter";
import Image from "next/image";

const WEDDING_GALLERY = [
  { src: "/new/DSC05347.jpg", alt: "Floral Marquee Detail", span: "md:col-span-2 md:row-span-2" },
  { src: "/new/DSC05532.jpg", alt: "Lush Lawns Wide", span: "md:col-span-2 md:row-span-1" },
  { src: "/new/DSC05986.jpg", alt: "Bridal Preparation Sanctuary", span: "md:col-span-1 md:row-span-1" },
  { src: "/new/DSC03955.jpg", alt: "Bespoke Hospitality Detail", span: "md:col-span-1 md:row-span-1" },
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
                 src="/new/DSC05532.jpg"
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

      <ModernFooter />
    </main>
  );
}
