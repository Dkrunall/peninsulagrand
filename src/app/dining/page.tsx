"use client";

import { ModernFooter } from "@/components/ModernFooter";
import { DiningHero } from "@/components/DiningHero";
import { DiningOutletShowcase } from "@/components/DiningOutletShowcase";

export default function DiningPage() {
  return (
    <main className="relative min-h-screen bg-background">
      {/* Cinematic Dining Hero */}
      <DiningHero />
      
      {/* Detailed Outlet Showcase */}
      <div id="outlets">
        <DiningOutletShowcase />
      </div>
      
      {/* Global Culinary CTA */}
      <section className="py-40 bg-foreground text-center px-6 relative overflow-hidden">
        {/* Decorative background text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="text-[30vw] font-serif font-black text-white/[0.03] uppercase tracking-tighter">Alchemy</span>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <p className="text-[10px] uppercase tracking-[0.8em] font-black text-gold mb-10 pl-1 italic">Private Gatherings</p>
          <h2 className="text-4xl md:text-7xl font-serif text-background mb-16 leading-tight">
             Elevate your events with our <br/> <span className="italic text-gold">bespoke</span> culinary service.
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <button className="bg-background text-foreground px-16 py-6 rounded-full font-black text-xs uppercase tracking-[0.4em] hover:bg-gold hover:text-background transition-all duration-700 shadow-2xl">
              Inquire for Events
            </button>
            <button className="border border-white/20 text-background px-16 py-6 rounded-full font-black text-xs uppercase tracking-[0.4em] hover:bg-white/10 transition-all duration-700">
              Download All Menus
            </button>
          </div>
        </div>
      </section>

      <ModernFooter />
    </main>
  );
}
