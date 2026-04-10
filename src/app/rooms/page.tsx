"use client";

import { ModernFooter } from "@/components/ModernFooter";
import { RoomsHero } from "@/components/RoomsHero";
import { RoomShowcase } from "@/components/RoomShowcase";

export default function RoomsPage() {
  return (
    <main className="relative min-h-screen bg-background">
      {/* Cinematic Residencies Hero */}
      <RoomsHero />
      
      {/* Detailed Room Portfolio */}
      <div id="portfolio">
        <RoomShowcase />
      </div>

      {/* Booking CTA Section */}
      <section className="py-40 bg-background text-center px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[10px] uppercase tracking-[0.8em] font-black text-gold mb-8 italic pl-1">The Experience</p>
          <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-16 leading-tight">
             Your <span className="italic text-gold">sanctuary</span> in the <br/> heart of Mumbai.
          </h2>
          <a 
            href="https://bookings.peninsulagrand.com/?propertyId=8984"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-foreground text-background px-16 py-6 rounded-full font-black text-xs uppercase tracking-[0.4em] hover:bg-gold hover:text-foreground transition-all duration-700 shadow-2xl inline-block"
          >
            Check Availability
          </a>
        </div>
      </section>

      <ModernFooter />
    </main>
  );
}
