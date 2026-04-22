"use client";

import Link from "next/link";
import { ArrowRight, Users, Maximize } from "lucide-react";

const VENUES = [
  {
    index: "01",
    name: "Concorde Hall",
    sub: "Concorde 1 · 2 · 3 · Combined",
    area: "3,641 sq m",
    badge: "Signature Hall",
    stats: [
      { label: "U-Shape",   value: "100" },
      { label: "Classroom", value: "120" },
      { label: "Cocktail",  value: "270" },
      { label: "Formal",    value: "200" },
    ],
    featured: true,
  },
  {
    index: "02",
    name: "The Lawn",
    sub: "Open-Air · Outdoor",
    area: "3,950 sq m",
    badge: "Grand Lawn",
    stats: [
      { label: "Theatre",  value: "100" },
      { label: "Cocktail", value: "400" },
      { label: "Formal",   value: "250" },
    ],
    featured: false,
  },
  {
    index: "03",
    name: "Rooftop",
    sub: "Rooftop 1 · Sky Venue",
    area: "1,395 sq m",
    badge: "Sky Venue",
    stats: [
      { label: "Theatre", value: "200" },
      { label: "Formal",  value: "150" },
    ],
    featured: false,
  },
  {
    index: "04",
    name: "Garnet Hall",
    sub: "Garnet 1 · 2 · 3 · Combined",
    area: "993 sq m",
    badge: "Intimate",
    stats: [
      { label: "U-Shape",  value: "36" },
      { label: "Cocktail", value: "70" },
      { label: "Formal",   value: "60" },
    ],
    featured: false,
  },
];

const SETUPS = ["U-Shape", "Classroom", "Theatre", "Formal Sit-Down", "Cocktail", "Boardroom", "Floor Plan"];

function getMaxGuests(stats: { value: string }[]) {
  return Math.max(...stats.map((s) => parseInt(s.value, 10)));
}

function LayoutVisualizer({ area, stats, isFeatured }: { area: string, stats: { value: string }[], isFeatured?: boolean }) {
  const maxGuests = getMaxGuests(stats);
  const areaNum = parseInt(area.replace(/,/g, ''), 10);
  
  // Constrain visual dimension based on max area (3,950 sq m)
  const scale = Math.max(Math.min((areaNum / 4000) * 100, 100), 40);
  
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0a0a0a] overflow-hidden group">
       {/* Architectural grid background */}
       <div className="absolute inset-0 opacity-[0.03] transition-opacity duration-1000 group-hover:opacity-[0.08]" 
            style={{ backgroundImage: 'radial-gradient(#ffffff 1.5px, transparent 1.5px)', backgroundSize: isFeatured ? '24px 24px' : '16px 16px' }} />
       
       {/* Bounding box mimicking floorplan size */}
       <div 
         className="relative border border-dashed border-gold/30 flex flex-wrap content-center justify-center gap-1.5 p-4 transition-all duration-700 group-hover:border-gold/70 group-hover:scale-[1.02]"
         style={{ width: `${scale}%`, height: `${scale * 0.7}%`, minHeight: '120px' }}
       >
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0a0a0a] px-2 text-[8px] text-gold/60 font-mono tracking-widest">{area}</div>
          
          {/* Individual seats plotted entirely from data */}
          {Array.from({ length: maxGuests }).map((_, i) => (
             <div key={i} className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-gold/50 transition-colors duration-500 group-hover:bg-gold" />
          ))}
          
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#0a0a0a] px-2 text-[8px] text-gold/60 font-mono tracking-widest uppercase">{maxGuests} Pax</div>
       </div>
       
       {/* Blueprint Corner Markers */}
       <div className="absolute top-6 left-6 w-6 h-6 border-l border-t border-gold/20" />
       <div className="absolute top-6 right-6 w-6 h-6 border-r border-t border-gold/20" />
       <div className="absolute bottom-6 left-6 w-6 h-6 border-l border-b border-gold/20" />
       <div className="absolute bottom-6 right-6 w-6 h-6 border-r border-b border-gold/20" />
    </div>
  );
}

export function BanquetSection() {
  const [featured, ...rest] = VENUES;

  return (
    <section className="bg-background py-20 md:py-28 px-6 md:px-16" id="banquet">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12 md:mb-16">
          <div>
            <p className="text-[9px] uppercase tracking-[0.8em] font-black text-gold mb-3 italic">Events & Celebrations</p>
            <h2 className="text-2xl md:text-4xl font-serif text-foreground tracking-tighter leading-tight">
              Grand <span className="italic text-gold font-light">Venues.</span>
            </h2>
          </div>
          <p className="text-sm text-foreground/40 italic font-serif leading-relaxed max-w-xs">
            5,345 sq m of premium event space — intimate boardrooms to 400-guest celebrations.
          </p>
        </div>

        {/* Featured card — Concorde Hall */}
        <div className="group rounded-3xl overflow-hidden border border-foreground/8 hover:border-gold/25 hover:shadow-2xl transition-all duration-700 mb-4 md:mb-5">
          <div className="flex flex-col md:flex-row">

            {/* Programmatic Graphic Block */}
            <div className="relative w-full md:w-3/5 overflow-hidden flex flex-col items-center justify-center p-0" style={{ minHeight: "320px" }}>
              <div className="relative w-full h-full min-h-[320px]">
                <LayoutVisualizer area={featured.area} stats={featured.stats!} isFeatured={true} />
              </div>
              
              <div className="absolute top-5 left-5 z-10">
                <span className="bg-gold text-black text-[8px] uppercase tracking-[0.35em] font-black px-3 py-1.5 rounded-full shadow-md">
                  {featured.badge}
                </span>
              </div>
              <div className="absolute bottom-5 left-5 z-10">
                <span className="text-[9px] font-black text-white/50 tracking-[0.4em] uppercase bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
                  {featured.index}
                </span>
              </div>
            </div>

            {/* Info panel — solid white */}
            <div className="w-full md:w-2/5 bg-white flex flex-col justify-between p-7 md:p-10">
              <div>
                <p className="text-[8px] uppercase tracking-[0.5em] font-black text-foreground/30 mb-2">{featured.sub}</p>
                <h3 className="text-2xl md:text-3xl font-serif text-foreground italic tracking-tight mb-1 group-hover:text-gold transition-colors duration-300">
                  {featured.name}
                </h3>
                <p className="text-xs text-foreground/35 font-medium mb-8">{featured.area}</p>

                {/* Capacity stats */}
                <div className="grid grid-cols-2 gap-5">
                  {featured.stats!.map((s, i) => (
                    <div key={i} className="border-l-2 border-gold/30 pl-4 group-hover:border-gold transition-colors duration-500">
                      <p className="text-2xl md:text-3xl font-serif font-black text-foreground leading-none">{s.value}</p>
                      <p className="text-[9px] uppercase tracking-[0.3em] font-black text-foreground/35 mt-1">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-foreground/5 flex items-center justify-between">
                <p className="text-[9px] uppercase tracking-[0.4em] font-black text-foreground/25">Up to {getMaxGuests(featured.stats)} guests</p>
                <ArrowRight className="w-4 h-4 text-foreground/20 group-hover:text-gold group-hover:translate-x-1 transition-all duration-300" />
              </div>
            </div>
          </div>
        </div>

        {/* 3 smaller venue cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 mb-10 md:mb-12">
          {rest.map((venue) => (
            <div
              key={venue.index}
              className="group rounded-2xl overflow-hidden border border-foreground/8 hover:border-gold/25 hover:shadow-xl transition-all duration-500 flex flex-col relative"
            >
              {/* Programmatic Graphic Block */}
              <div className="relative w-full aspect-[16/10] flex flex-col items-center justify-center overflow-hidden">
                <LayoutVisualizer area={venue.area} stats={venue.stats!} />

                <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                  <span className="text-[9px] font-black text-white/50 tracking-widest bg-black/60 border border-white/10 backdrop-blur-sm px-2.5 py-1 rounded-full">
                    {venue.index}
                  </span>
                </div>
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-black/60 backdrop-blur-sm text-white/80 text-[8px] uppercase tracking-[0.3em] font-black px-2.5 py-1 rounded-full border border-white/10">
                    {venue.badge}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="bg-white flex-1 p-5 md:p-6">
                <p className="text-[8px] uppercase tracking-[0.45em] font-black text-foreground/30 mb-1">{venue.sub}</p>
                <h3 className="text-lg font-serif text-foreground italic mb-1 group-hover:text-gold transition-colors duration-300">
                  {venue.name}
                </h3>
                <p className="text-[10px] text-foreground/30 font-medium mb-5">{venue.area}</p>

                {/* Inline stats */}
                <div className="flex items-center gap-5 flex-wrap">
                  {venue.stats!.map((s, i) => (
                    <div key={i} className="text-center">
                      <p className="text-xl font-serif font-black text-foreground leading-none">{s.value}</p>
                      <p className="text-[8px] uppercase tracking-[0.25em] font-black text-foreground/30 mt-0.5">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Seating + CTA strip */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-8 border-t border-foreground/5">
          <div>
            <p className="text-[9px] uppercase tracking-[0.5em] font-black text-foreground/30 mb-3">Seating Arrangements Available</p>
            <div className="flex flex-wrap gap-2">
              {SETUPS.map((s, i) => (
                <span key={i} className="text-[9px] font-bold uppercase tracking-[0.25em] text-foreground/40 border border-foreground/10 rounded-full px-3 py-1.5 hover:border-gold/50 hover:text-gold transition-colors duration-300 cursor-default">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <Link
            href="/events"
            className="flex-shrink-0 flex items-center gap-2 bg-foreground text-background px-7 py-3.5 rounded-full text-[10px] uppercase tracking-[0.4em] font-black hover:bg-gold hover:text-foreground transition-all duration-500"
          >
            Plan Your Event <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

      </div>
    </section>
  );
}
