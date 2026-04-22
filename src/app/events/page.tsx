import { ExperienceHero } from "@/components/ExperienceHero";
import { CinematicGallery } from "@/components/CinematicGallery";
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
        subtitle="Institutions"
        highlight="Corporate"
        image="/new/DSC05924.jpg"
        tagline="Bespoke Business"
      />

      {/* Corporate Excellence Section */}
      <section className="py-16 md:py-40 bg-background px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-[0.02] pointer-events-none overflow-hidden">
           <span className="text-[40vw] font-serif font-black uppercase">Events</span>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-32 items-center">
            <div>
               <p className="text-[10px] uppercase tracking-[0.8em] font-black text-gold mb-6 md:mb-10 italic">Venue Portfolio</p>
               <h2 className="text-2xl md:text-5xl font-serif text-foreground mb-6 md:mb-12 tracking-tighter leading-tight italic">
                 Where <span className="text-gold font-light">Ambition</span> meets its match.
               </h2>
               <p className="text-base md:text-xl text-foreground/60 font-serif leading-relaxed italic mb-6 md:mb-12 md:pr-10">
                 From global summits in the Concorde Hall to strategic boardroom sessions, Peninsula Grand provides the architectural gravitas and technological infrastructure to elevate every corporate milestone.
               </p>

               <div className="space-y-6 md:space-y-12">
                  <div className="group border-l border-foreground/5 pl-8 hover:border-gold transition-colors duration-700">
                     <h3 className="text-2xl font-serif text-foreground mb-4 italic group-hover:text-gold transition-colors">Concorde & Grand Pavillion</h3>
                     <p className="text-sm text-foreground/40 leading-relaxed max-w-md">Our signature halls designed for up to 800 guests, featuring state-of-the-art acoustics and flexible configurations.</p>
                  </div>
                  <div className="group border-l border-foreground/5 pl-8 hover:border-gold transition-colors duration-700">
                     <h3 className="text-2xl font-serif text-foreground mb-4 italic group-hover:text-gold transition-colors">The Boardroom Suites</h3>
                     <p className="text-sm text-foreground/40 leading-relaxed max-w-md">Intimate, secure environments for strategic decisions, equipped with high-fidelity AV and private secretariat services.</p>
                  </div>
               </div>
            </div>

            <div className="relative aspect-[4/5] rounded-[32px] md:rounded-[64px] overflow-hidden shadow-2xl">
               <Image
                 src="/events/926d589d-e536-45ad-a969-d35d9c655c82.jpg"
                 alt="Event Grandeur"
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

      {/* Event Photo Gallery */}
      <section className="py-16 md:py-32 bg-background px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-20">
            <p className="text-[10px] uppercase tracking-[0.8em] font-black text-gold mb-4 italic">Live Moments</p>
            <h2 className="text-2xl md:text-5xl font-serif text-foreground tracking-tighter leading-tight italic">
              Events, <span className="text-gold font-light">As They Happen</span>
            </h2>
          </div>
          <div className="columns-2 md:columns-4 gap-3 md:gap-4 space-y-3 md:space-y-4">
            {PHOTO_GRID.map((src, i) => (
              <div key={i} className="break-inside-avoid overflow-hidden rounded-2xl relative group">
                <Image
                  src={src}
                  alt={`Event moment ${i + 1}`}
                  width={600}
                  height={800}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
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
