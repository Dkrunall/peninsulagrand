import { ExperienceHero } from "@/components/ExperienceHero";
import { CinematicGallery } from "@/components/CinematicGallery";
import { BanquetSection } from "@/components/BanquetSection";
import { ModernFooter } from "@/components/ModernFooter";
import Image from "next/image";

const EVENT_GALLERY = [
  { src: "/events/926d589d-e536-45ad-a969-d35d9c655c82.jpg", alt: "Grand Event Hall", span: "md:col-span-2 md:row-span-2" },
  { src: "/events/c96103ac-6d1a-4d21-abb0-d7dbf7a8c3ae-3.jpg", alt: "Corporate Gathering", span: "md:col-span-2 md:row-span-1" },
  { src: "/events/IMG_1534.jpeg", alt: "Gala Setup", span: "md:col-span-1 md:row-span-1" },
  { src: "/events/IMG_2762.jpg", alt: "Banquet Detail", span: "md:col-span-1 md:row-span-1" },
];

const PHOTO_GRID = [
  "/events/PHOTO-2024-04-24-12-58-52-8.jpeg",
  "/events/PHOTO-2024-04-24-12-58-52-3.jpeg",
  "/events/PHOTO-2023-08-28-16-58-24-6.jpeg",
  "/events/PHOTO-2023-08-06-13-08-59-6.jpeg",
];

export default function EventsPage() {
  return (
    <main className="relative min-h-screen bg-background">
      <ExperienceHero 
        title="Grand"
        subtitle="Halls & Venues"
        highlight="Banquet"
        image="/new/DSC05924.jpg"
        tagline="Bespoke Celebrations & Corporate Events"
        phone="+91 88282 43222"
      />

      {/* Banquet Halls & Venues Section */}
      <BanquetSection />

      {/* Corporate Excellence Section */}
      <section className="py-16 md:py-32 bg-background px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-[0.02] pointer-events-none overflow-hidden">
           <span className="text-[40vw] font-serif font-black uppercase">Banquets</span>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-32 items-center">
            <div>
               <p className="text-[10px] uppercase tracking-[0.8em] font-black text-gold mb-6 md:mb-10 italic">Banqueting Excellence</p>
               <h2 className="text-2xl md:text-5xl font-serif text-foreground mb-6 md:mb-12 tracking-tighter leading-tight italic">
                 Where <span className="text-gold font-light">Vision</span> meets Elegance.
               </h2>
               <p className="text-base md:text-xl text-foreground/60 font-serif leading-relaxed italic mb-6 md:mb-12 md:pr-10">
                 From lavish wedding receptions and milestone celebrations to corporate summits and executive gala dinners, Peninsula Grand offers premier banquet halls in Andheri East Mumbai. With over 5,300 sq. m of versatile event space, customized seating, state-of-the-art AV infrastructure, and award-winning culinary catering, we elevate every occasion into an unforgettable experience.
               </p>

               <div className="space-y-6 md:space-y-12">
                  <div className="group border-l border-foreground/5 pl-8 hover:border-gold transition-colors duration-700">
                     <h3 className="text-2xl font-serif text-foreground mb-4 italic group-hover:text-gold transition-colors">Concorde & Grand Pavilion</h3>
                     <p className="text-sm text-foreground/40 leading-relaxed max-w-md">Signature banquet halls designed for grand weddings, large-scale conferences, award ceremonies, and product launches with flexible partition options.</p>
                  </div>
                  <div className="group border-l border-foreground/5 pl-8 hover:border-gold transition-colors duration-700">
                     <h3 className="text-2xl font-serif text-foreground mb-4 italic group-hover:text-gold transition-colors">Garnet & Intimate Spaces</h3>
                     <p className="text-sm text-foreground/40 leading-relaxed max-w-md">Elegantly designed smaller banquet venues perfect for intimate family celebrations, engagement ceremonies, board meetings, and private dinners.</p>
                  </div>
                  <div className="group border-l border-foreground/5 pl-8 hover:border-gold transition-colors duration-700">
                     <h3 className="text-2xl font-serif text-foreground mb-4 italic group-hover:text-gold transition-colors">The Grand Lawn & Sky Venues</h3>
                     <p className="text-sm text-foreground/40 leading-relaxed max-w-md">Breathtaking open-air lawn and rooftop venues capable of hosting up to 400 guests for starlit cocktail receptions and outdoor wedding events.</p>
                  </div>
                  <div className="group border-l border-foreground/5 pl-8 hover:border-gold transition-colors duration-700">
                     <h3 className="text-2xl font-serif text-foreground mb-4 italic group-hover:text-gold transition-colors">Multi-Cuisine Catering & AV Support</h3>
                     <p className="text-sm text-foreground/40 leading-relaxed max-w-md">Customizable gourmet dining menus crafted by master chefs, accompanied by dedicated event planners and cutting-edge audio-visual setup.</p>
                  </div>
               </div>
            </div>

            <div className="relative aspect-[4/5] rounded-[32px] md:rounded-[64px] overflow-hidden shadow-2xl">
               <Image
                 src="/events/926d589d-e536-45ad-a969-d35d9c655c82.jpg"
                 alt="Banquet Grandeur"
                 fill
                 sizes="(max-width: 768px) 100vw, 50vw"
                 className="object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Cinematic Bento Gallery */}
      <CinematicGallery
        title="Institutional Grandeur"
        subtitle="The Visual Collection"
        images={EVENT_GALLERY}
      />



      <ModernFooter />
    </main>
  );
}
