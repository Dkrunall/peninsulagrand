import { ExperienceHero } from "@/components/ExperienceHero";
import { CinematicGallery } from "@/components/CinematicGallery";
import { ModernFooter } from "@/components/ModernFooter";
import Image from "next/image";

const EVENT_GALLERY = [
  { src: "/new/DSC05905.jpg", alt: "Concorde Hall Entrance", span: "md:col-span-2 md:row-span-2" },
  { src: "/new/DSC03980.jpg", alt: "Gala Table Detail", span: "md:col-span-2 md:row-span-1" },
  { src: "/new/DSC05948.jpg", alt: "Digital Stage Setup", span: "md:col-span-1 md:row-span-1" },
  { src: "/new/DSC05924.jpg", alt: "Pavillion Grandeur", span: "md:col-span-1 md:row-span-1" },
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
      <section className="py-40 bg-background px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-40 opacity-[0.02] pointer-events-none">
           <span className="text-[40vw] font-serif font-black uppercase">Events</span>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <div>
               <p className="text-[10px] uppercase tracking-[0.8em] font-black text-gold mb-10 italic">Venue Portfolio</p>
               <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-12 tracking-tighter leading-tight italic">
                 Where <span className="text-gold font-light">Ambition</span> meets its match.
               </h2>
               <p className="text-xl text-foreground/60 font-serif leading-relaxed italic mb-12 pr-10">
                 From global summits in the Concorde Hall to strategic boardroom sessions, Peninsula Grand provides the architectural gravitas and technological infrastructure to elevate every corporate milestone.
               </p>
               
               <div className="space-y-12">
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

            <div className="relative aspect-[4/5] rounded-[64px] overflow-hidden shadow-2xl">
               <Image 
                 src="/new/DSC05924.jpg"
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

      <ModernFooter />
    </main>
  );
}
