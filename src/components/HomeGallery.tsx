"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const GALLERY = [
  { src: "/new/DSC03979.jpg", span: "md:col-span-2 md:row-span-2", label: "The Lobby" },
  { src: "/new/DSC03995.jpg", span: "",                             label: "Lounge" },
  { src: "/new/DSC04001.jpg", span: "",                             label: "Corridors" },
  { src: "/new/DSC04050.jpg", span: "",                             label: "Dining" },
  { src: "/new/DSC04070.jpg", span: "",                             label: "Banquet" },
  { src: "/new/DSC04076.jpg", span: "md:col-span-2",                label: "Grand Hall" },
  { src: "/new/DSC05275.jpg", span: "",                             label: "Pool" },
  { src: "/new/DSC05347.jpg", span: "",                             label: "Gym" },
];

export function HomeGallery() {
  return (
    <section className="bg-background py-16 md:py-24 px-6 md:px-16">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-14">
        <div>
          <p className="text-[9px] uppercase tracking-[0.8em] font-black text-gold mb-3 italic">A Glimpse Inside</p>
          <h2 className="text-2xl md:text-4xl font-serif text-foreground tracking-tighter leading-tight">
            Life at <span className="italic text-gold font-light">Peninsula Grand</span>
          </h2>
        </div>
        <Link
          href="/about"
          className="flex items-center gap-2 text-[9px] uppercase tracking-[0.4em] font-black text-foreground/30 hover:text-gold transition-colors duration-400 group w-fit"
        >
          Explore More
          <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-auto md:grid-rows-3 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[180px]">
        {GALLERY.map((item, i) => (
          <div
            key={i}
            className={`relative rounded-[16px] md:rounded-[20px] overflow-hidden bg-foreground/5 group cursor-pointer ${item.span}`}
          >
            <Image
              src={item.src}
              alt={item.label}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500" />
            <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
              <span className="text-[8px] uppercase tracking-[0.4em] font-black text-white bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full">
                {item.label}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-8 text-center">
        <Link
          href="/about"
          className="inline-flex items-center gap-2 border border-foreground/10 text-foreground/40 hover:text-gold hover:border-gold/30 px-8 py-4 rounded-full font-black text-[9px] uppercase tracking-[0.4em] transition-all duration-500"
        >
          View Full Gallery <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </section>
  );
}
