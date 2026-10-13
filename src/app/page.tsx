"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { Phone, Mail } from "lucide-react";
import { KineticHero } from "@/components/KineticHero";

const HorizontalRooms = dynamic(() => import("@/components/HorizontalRooms").then((m) => m.HorizontalRooms));
const BanquetSection = dynamic(() => import("@/components/BanquetSection").then((m) => m.BanquetSection));
const HomeDining = dynamic(() => import("@/components/HomeDining").then((m) => m.HomeDining));
const ModernFooter = dynamic(() => import("@/components/ModernFooter").then((m) => m.ModernFooter));
const StatsSection = dynamic(() => import("@/components/StatsSection").then((m) => m.StatsSection));
const NearbyCommute = dynamic(() => import("@/components/NearbyCommute").then((m) => m.NearbyCommute));
const TestimonialsSection = dynamic(() => import("@/components/TestimonialsSection").then((m) => m.TestimonialsSection));

export default function Home() {
  return (
    <main className="flex flex-col relative">

      {/* Left — Phone pill */}
      <a
        href="tel:+912266249100"
        aria-label="Call +91 22 6624 9100"
        className="fixed top-6 left-6 z-[200] flex items-center gap-2 bg-[#1a1a1a] border border-white/10 rounded-full px-4 py-2.5 group pointer-events-auto shadow-xl hover:border-gold/40 transition-all duration-300"
      >
        <Phone className="w-4 h-4 text-gold flex-shrink-0" />
        <span className="hidden sm:block text-sm font-bold text-white group-hover:text-gold transition-colors duration-300 whitespace-nowrap">
          +91 22 6624 9100
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
        href="mailto:reservations@peninsulagrand.co.in"
        aria-label="Email reservations@peninsulagrand.co.in"
        className="fixed top-6 right-6 z-[200] flex items-center gap-2 bg-[#1a1a1a] border border-white/10 rounded-full px-4 py-2.5 group pointer-events-auto shadow-xl hover:border-gold/40 transition-all duration-300"
      >
        <span className="hidden sm:block text-sm font-bold text-white group-hover:text-gold transition-colors duration-300 whitespace-nowrap">
          reservations@peninsulagrand.co.in
        </span>
        <Mail className="w-3.5 h-3.5 text-gold flex-shrink-0" />
      </a>

      {/* Hero Entrance */}
      <KineticHero />

      {/* Stats Counter Section */}
      <div className="cv-auto"><StatsSection /></div>

      {/* Culinary Experiences */}
      <div className="cv-auto"><HomeDining /></div>

      {/* Horizontal Scroll Showcase for Suites */}
      <section id="suites" className="cv-auto">
        <HorizontalRooms />
      </section>

      {/* Banquet & Events */}
      <div className="cv-auto"><BanquetSection /></div>

      {/* Location / Commute Section */}
      <div className="cv-auto"><NearbyCommute /></div>

      {/* Guest Testimonials */}
      <div className="cv-auto"><TestimonialsSection /></div>

      <section className="cv-auto py-16 md:py-24 px-6 md:px-12 bg-background flex flex-col items-center justify-center text-center">
        <div className="max-w-4xl">
          <h2 className="text-sm uppercase tracking-widest font-bold text-gold-dark mb-8 italic">The Finest Luxury Hotel</h2>
          <h3 className="text-2xl md:text-5xl font-serif text-foreground leading-[1.2] md:leading-[1.1] mb-6">
            An oasis of isolation in the heart of <span className="italic">Mumbai.</span>
          </h3>
          <p className="text-base md:text-xl text-foreground/75 font-serif italic leading-relaxed max-w-2xl mx-auto mb-12">
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
