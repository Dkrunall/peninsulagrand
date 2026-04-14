"use client";

import Image from "next/image";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";

const OUTLETS = [
  {
    id: "01",
    name: "OPA!",
    category: "Mediterranean Bar & Café",
    tagline: "Where Mumbai's elite nights begin. Award-winning cocktails, live energy, rooftop ambiance.",
    hours: "5:00 pm – 3:00 am",
    image: "/new/DSC05913.jpg",
    badge: "Rooftop",
  },
  {
    id: "02",
    name: "M.I.T.R.O.N",
    category: "Bar & Kitchen",
    tagline: "Pan-Asian to continental — full menus, great music, always packed with good company.",
    hours: "2:00 pm – 1:30 am",
    image: "/new/DSC05707.jpg",
    badge: "Most Popular",
  },
  {
    id: "03",
    name: "Cafe Crema",
    category: "Artisanal Café",
    tagline: "Artisanal coffee, indulgent brunch spreads and pastries — any hour, any mood.",
    hours: "Open 24 Hours",
    image: "/new/DSC04009.jpg",
    badge: "24×7",
  },
  {
    id: "04",
    name: "Waikiki & The Nest",
    category: "Tropical Island Bar",
    tagline: "Hawaiian flavours meet Mumbai skyline. Rooftop dining under the stars — opened 2024.",
    hours: "6:00 pm – 3:00 am",
    image: "/new/DSC03995.jpg",
    badge: "New",
  },
];

export function HomeDining() {
  return (
    <section className="bg-background py-20 md:py-28 px-6 md:px-16" id="dining">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12 md:mb-16">
          <div>
            <p className="text-[9px] uppercase tracking-[0.8em] font-black text-gold mb-3 italic">Signature Experiences</p>
            <h2 className="text-2xl md:text-4xl font-serif text-foreground tracking-tighter leading-tight">
              Culinary <span className="italic text-gold font-light">Alchemy.</span>
            </h2>
          </div>
          <p className="text-sm text-foreground/45 italic font-serif leading-relaxed max-w-xs">
            4 world-class restaurants in-house — steps from your room, every night of your stay.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {OUTLETS.map((outlet) => (
            <div
              key={outlet.id}
              className="group flex flex-col rounded-2xl overflow-hidden border border-foreground/8 hover:border-gold/40 hover:shadow-xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <Image
                  src={outlet.image}
                  alt={outlet.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Badge */}
                <span className="absolute top-3 left-3 bg-gold text-black text-[8px] uppercase tracking-[0.35em] font-black px-2.5 py-1 rounded-full">
                  {outlet.badge}
                </span>
                {/* Index */}
                <span className="absolute top-3 right-3 text-[10px] font-black tracking-widest text-white/50">
                  {outlet.id}
                </span>
              </div>

              {/* Info */}
              <div className="flex flex-col flex-1 p-5 bg-white">
                <p className="text-[9px] uppercase tracking-[0.4em] font-black text-gold mb-2">{outlet.category}</p>
                <h3 className="text-xl font-serif text-foreground italic tracking-tight mb-2 group-hover:text-gold transition-colors duration-300">
                  {outlet.name}
                </h3>
                <p className="text-xs text-foreground/50 leading-relaxed mb-4 flex-1">{outlet.tagline}</p>

                <div className="flex items-center justify-between pt-4 border-t border-foreground/5">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3 h-3 text-gold flex-shrink-0" />
                    <span className="text-[10px] font-bold text-foreground/50">{outlet.hours}</span>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] font-black uppercase tracking-wide text-foreground/30 group-hover:text-gold transition-colors duration-300">
                    <span>In-House</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom strip */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 py-6 border-t border-foreground/5">
          <div className="flex flex-wrap items-center gap-6 md:gap-10">
            {["4 On-Site Restaurants", "Café Open 24×7", "Rooftop Bar", "In-Room Dining"].map((t, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                <span className="text-[10px] font-semibold text-foreground/40 uppercase tracking-wide">{t}</span>
              </div>
            ))}
          </div>
          <Link
            href="/dining"
            className="text-[10px] uppercase tracking-[0.4em] font-black text-foreground/40 hover:text-gold transition-colors duration-300 flex items-center gap-1.5"
          >
            View Full Menu <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

      </div>
    </section>
  );
}
