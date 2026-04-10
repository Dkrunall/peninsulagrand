"use client";

import { ModernFooter } from "@/components/ModernFooter";
import { AboutHero } from "@/components/AboutHero";
import { AboutStory } from "@/components/AboutStory";
import { AboutPhilosophy } from "@/components/AboutPhilosophy";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-background">
      
      <AboutHero />
      
      <div id="story">
        <AboutStory />
      </div>
      
      <div id="philosophy">
        <AboutPhilosophy />
      </div>

      {/* Legacy Call to Action */}
      <section className="py-40 bg-background text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-serif text-foreground mb-12 leading-tight">
            Be part of our <span className="italic text-gold">continuing</span> story.
          </h2>
          <a 
            href="https://bookings.peninsulagrand.com/?propertyId=8984"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-foreground text-background px-16 py-5 rounded-full font-black text-xs uppercase tracking-[0.4em] hover:bg-gold hover:text-foreground transition-all duration-700 shadow-2xl inline-block"
          >
            Book Your Residency
          </a>
        </div>
      </section>

      <ModernFooter />
    </main>
  );
}
