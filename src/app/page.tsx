"use client";

import Image from "next/image";
import { KineticHero } from "@/components/KineticHero";
import { BentoSection } from "@/components/BentoSection";
import { HorizontalRooms } from "@/components/HorizontalRooms";
import { DiningSection } from "@/components/DiningSection";
import { ModernFooter } from "@/components/ModernFooter";
import { StatsSection } from "@/components/StatsSection";
import { NearbyCommute } from "@/components/NearbyCommute";
import { TestimonialsSection } from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <main className="flex flex-col relative">
      {/* Absolute Logo Top Center */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 z-[101] w-24 md:w-32 pointer-events-none">
        <Image 
          src="/pgh.png"
          alt="Peninsula Grand Logo"
          width={200}
          height={100}
          className="w-full h-auto drop-shadow-2xl"
          priority
        />
      </div>
      
      {/* Hero Entrance */}
      <KineticHero />

      {/* Stats Counter Section */}
      <StatsSection />

      {/* About / Amenities Bento */}
      <section id="amenities">
        <BentoSection />
      </section>

      {/* Horizontal Scroll Showcase for Suites */}
      <section id="suites">
        <HorizontalRooms />
      </section>

      {/* Culinary Experiences */}
      <section id="dining">
        <DiningSection />
      </section>

      {/* Location / Commute Section */}
      <NearbyCommute />

      {/* Guest Testimonials */}
      <TestimonialsSection />

      <section className="py-24 px-6 md:px-12 bg-background flex flex-col items-center justify-center text-center">
        <div className="max-w-4xl">
          <h2 className="text-sm uppercase tracking-widest font-bold text-gold mb-8 italic">The Finest Luxury Hotel</h2>
          <h3 className="text-3xl md:text-7xl font-serif text-foreground leading-[1.2] md:leading-[1.1] mb-6">
            An oasis of isolation in the heart of <span className="italic">Mumbai.</span>
          </h3>
          <p className="text-base md:text-xl text-foreground/60 font-serif italic leading-relaxed max-w-2xl mx-auto mb-12">
            Ideal for both business and leisure travelers — Peninsula Grand exemplifies sophisticated hospitality and exceptional comfort. Every detail is thoughtfully curated to meet your needs.
          </p>
          <a 
            href="https://bookings.peninsulagrand.com/?propertyId=8984"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto bg-foreground text-background px-12 md:px-16 py-5 md:py-6 rounded-full uppercase tracking-widest font-black text-xs hover:bg-gold hover:text-foreground transition-all duration-700 shadow-2xl hover:scale-105 active:scale-95 inline-block"
          >
            Book Your Stay — Upto 31% Off
          </a>
        </div>
      </section>

      <ModernFooter />
    </main>
  );
}
