"use client";

import Image from "next/image";
import { Phone, Mail } from "lucide-react";
import { KineticHero } from "@/components/KineticHero";
import { HorizontalRooms } from "@/components/HorizontalRooms";
import { HomeDining } from "@/components/HomeDining";
import { ModernFooter } from "@/components/ModernFooter";
import { StatsSection } from "@/components/StatsSection";
import { NearbyCommute } from "@/components/NearbyCommute";
import { TestimonialsSection } from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <main className="flex flex-col relative">

      {/* Left — Phone pill */}
      <a
        href="tel:+912267347777"
        className="fixed top-6 left-6 z-[200] flex items-center gap-2 bg-[#1a1a1a] border border-white/10 rounded-full px-4 py-2.5 group pointer-events-auto shadow-xl hover:border-gold/40 transition-all duration-300"
      >
        <Phone className="w-4 h-4 text-gold flex-shrink-0" />
        <span className="hidden sm:block text-sm font-bold text-white group-hover:text-gold transition-colors duration-300 whitespace-nowrap">
          +91 22 6734 7777
        </span>
      </a>

      {/* Centre — Logo (unchanged) */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[200] pointer-events-none">
        <div className="bg-[#1a1a1a] px-3 py-2 rounded-[24px] border border-white/10 shadow-2xl flex items-center justify-center pointer-events-auto">
          <Image
            src="/pgh_white.png"
            alt="Peninsula Grand Hotel"
            width={120}
            height={120}
            className="w-14 md:w-20 h-auto object-contain"
            priority
          />
        </div>
      </div>

      {/* Right — Email pill */}
      <a
        href="mailto:reservations@peninsulagrand.com"
        className="fixed top-6 right-6 z-[200] flex items-center gap-2 bg-[#1a1a1a] border border-white/10 rounded-full px-4 py-2.5 group pointer-events-auto shadow-xl hover:border-gold/40 transition-all duration-300"
      >
        <span className="hidden sm:block text-sm font-bold text-white group-hover:text-gold transition-colors duration-300 whitespace-nowrap">
          reservations@peninsulagrand.com
        </span>
        <Mail className="w-3.5 h-3.5 text-gold flex-shrink-0" />
      </a>

      {/* Hero Entrance */}
      <KineticHero />

      {/* Stats Counter Section */}
      <StatsSection />

      {/* Culinary Experiences — where amenities used to be */}
      <HomeDining />

      {/* Horizontal Scroll Showcase for Suites */}
      <section id="suites">
        <HorizontalRooms />
      </section>

      {/* Location / Commute Section */}
      <NearbyCommute />

      {/* Guest Testimonials */}
      <TestimonialsSection />

      <section className="py-16 md:py-24 px-6 md:px-12 bg-background flex flex-col items-center justify-center text-center">
        <div className="max-w-4xl">
          <h2 className="text-sm uppercase tracking-widest font-bold text-gold mb-8 italic">The Finest Luxury Hotel</h2>
          <h3 className="text-2xl md:text-5xl font-serif text-foreground leading-[1.2] md:leading-[1.1] mb-6">
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
