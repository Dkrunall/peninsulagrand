"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const VENUES = [
  {
    index: "01",
    name: "Concorde Hall",
    sub: "Concorde 1 · 2 · 3 · Combined",
    area: "3,641 sq m",
    image: "/new/DSC05924.jpg",
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
    image: "/new/DSC05905.jpg",
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
    image: "/new/DSC05948.jpg",
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
    image: "/new/DSC05930.jpg",
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

            {/* Image */}
            <div className="relative w-full md:w-3/5 aspect-[16/9] md:aspect-auto overflow-hidden" style={{ minHeight: "320px" }}>
              <Image
                src={featured.image}
                alt={featured.name}
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              {/* Subtle vignette only */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/20 hidden md:block" />
              <div className="absolute top-5 left-5">
                <span className="bg-gold text-black text-[8px] uppercase tracking-[0.35em] font-black px-3 py-1.5 rounded-full shadow-md">
                  {featured.badge}
                </span>
              </div>
              <div className="absolute bottom-5 left-5">
                <span className="text-[9px] font-black text-white/50 tracking-[0.4em] uppercase bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
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
                <p className="text-[9px] uppercase tracking-[0.4em] font-black text-foreground/25">Up to 270 guests</p>
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
              className="group rounded-2xl overflow-hidden border border-foreground/8 hover:border-gold/25 hover:shadow-xl transition-all duration-500 flex flex-col"
            >
              {/* Image */}
              <div className="relative w-full aspect-[16/10] overflow-hidden">
                <Image
                  src={venue.image}
                  alt={venue.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="text-[9px] font-black text-white/50 tracking-widest bg-black/30 backdrop-blur-sm px-2.5 py-1 rounded-full">
                    {venue.index}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-black/40 backdrop-blur-sm text-white/80 text-[8px] uppercase tracking-[0.3em] font-black px-2.5 py-1 rounded-full">
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
