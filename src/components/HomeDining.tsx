"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { Clock, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const OUTLETS = [
  {
    id: "01",
    name: "OPA!",
    category: "Mediterranean Bar & Café",
    tagline: "Award-winning cocktails, live energy and rooftop elegance — where Mumbai's nights begin.",
    hours: "5:00 pm – 3:00 am",
    images: ["/opa1.jpg", "/opa2.jpg"],
    badge: "Rooftop",
  },
  {
    id: "02",
    name: "M.I.T.R.O.N",
    category: "Bar & Kitchen",
    tagline: "Pan-Asian to continental — full menus, great music, always packed with good company.",
    hours: "2:00 pm – 1:30 am",
    images: ["/mitron1.webp", "/mitron2.webp", "/new/DSC05707.jpg"],
    badge: "Most Popular",
  },
  {
    id: "03",
    name: "Waikiki",
    category: "Tropical Island Dining",
    tagline: "Hawaiian and Polynesian flavours blended with Asian and Mediterranean influences.",
    hours: "6:00 pm – 3:00 am",
    images: ["/waikiki1.webp", "/waikiki2.webp"],
    badge: "Island Vibes",
  },
  {
    id: "04",
    name: "The Nest",
    category: "Rooftop Bar",
    tagline: "Elevated dining under the Mumbai skyline — cocktails, views, and island-inspired bites.",
    hours: "6:00 pm – 3:00 am",
    images: ["/nest1.avif", "/nest2.avif"],
    badge: "Sky Bar",
  },
  {
    id: "05",
    name: "Cocoamaya",
    category: "24-Hour Bakery",
    tagline: "Artisanal coffee, fresh pastries and bespoke bakes — indulgence with no curfew.",
    hours: "Open 24 Hours",
    images: ["/new/DSC04009.jpg", "/new/DSC03995.jpg"],
    badge: "Always Open",
  },
];

function OutletImageSlider({ images, name }: { images: string[]; name: string }) {
  const [current, setCurrent] = useState(0);

  // Auto-advance every 3 seconds
  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  const prev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  };
  const next = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));
  };

  return (
    <div className="relative w-full aspect-[4/3] overflow-hidden flex-shrink-0 group/slider">
      {images.map((src, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-500 ${i === current ? "opacity-100" : "opacity-0"}`}
        >
          <Image
            src={src}
            alt={`${name} ${i + 1}`}
            fill
            sizes="(max-width: 640px) 82vw, 380px"
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            priority={i === 0}
          />
        </div>
      ))}

      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-black/55 flex items-center justify-center opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300"
          >
            <ChevronLeft className="w-4 h-4 text-white" />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-black/55 flex items-center justify-center opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300"
          >
            <ChevronRight className="w-4 h-4 text-white" />
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); setCurrent(i); }}
                className={`rounded-full transition-all duration-300 ${i === current ? "w-4 h-1.5 bg-gold" : "w-1.5 h-1.5 bg-white/50"}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export function HomeDining() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.pageX - (sliderRef.current?.offsetLeft || 0);
    scrollLeft.current = sliderRef.current?.scrollLeft || 0;
    if (sliderRef.current) sliderRef.current.style.cursor = "grabbing";
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    sliderRef.current.scrollLeft = scrollLeft.current - (x - startX.current);
  };
  const onMouseUp = () => {
    isDragging.current = false;
    if (sliderRef.current) sliderRef.current.style.cursor = "grab";
  };

  return (
    <section className="bg-background py-20 md:py-28 overflow-hidden" id="dining">

      {/* Header */}
      <div className="px-6 md:px-16 mb-10 md:mb-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p className="text-[9px] uppercase tracking-[0.8em] font-black text-gold mb-3 italic">Signature Experiences</p>
            <h2 className="text-2xl md:text-4xl font-serif text-foreground tracking-tighter leading-tight">
              Culinary <span className="italic text-gold font-light">Alchemy.</span>
            </h2>
            <p className="text-sm text-foreground/40 italic mt-2">Drag to explore · 5 restaurants in-house</p>
          </div>
          <Link
            href="/dining"
            className="hidden md:flex items-center gap-2 text-[10px] uppercase tracking-[0.4em] font-black text-foreground/35 hover:text-gold transition-colors duration-300"
          >
            All Outlets <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>

      {/* Draggable Slider */}
      <div
        ref={sliderRef}
        className="flex gap-4 overflow-x-auto px-6 md:px-16 pb-2 scrollbar-hide cursor-grab select-none"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
      >
        {OUTLETS.map((outlet) => (
          <div
            key={outlet.id}
            className="group flex-shrink-0 w-[82vw] sm:w-[380px] md:w-[360px] rounded-2xl overflow-hidden border border-foreground/8 hover:border-gold/30 hover:shadow-xl transition-all duration-500 flex flex-col bg-white"
          >
            {/* Image Slider */}
            <div className="relative">
              <OutletImageSlider images={outlet.images} name={outlet.name} />
              {/* Badge */}
              <span className="absolute top-3 left-3 z-10 bg-gold text-black text-[8px] uppercase tracking-[0.35em] font-black px-2.5 py-1 rounded-full pointer-events-none">
                {outlet.badge}
              </span>
              <span className="absolute top-3 right-3 z-10 text-[9px] font-black text-white/55 bg-black/30 backdrop-blur-sm px-2 py-0.5 rounded-full tracking-widest pointer-events-none">
                {outlet.id}
              </span>
            </div>

            {/* Info */}
            <div className="flex flex-col flex-1 p-5">
              <p className="text-[8px] uppercase tracking-[0.45em] font-black text-gold mb-1.5">{outlet.category}</p>
              <h3 className="text-lg font-serif text-foreground italic tracking-tight mb-2 group-hover:text-gold transition-colors duration-300">
                {outlet.name}
              </h3>
              <p className="text-xs text-foreground/45 leading-relaxed flex-1 mb-4">{outlet.tagline}</p>

              <div className="flex items-center justify-between pt-3 border-t border-foreground/5">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3 h-3 text-gold flex-shrink-0" />
                  <span className="text-[9px] font-bold text-foreground/40">{outlet.hours}</span>
                </div>
                <div className="flex items-center gap-1 text-[9px] font-black uppercase tracking-wide text-foreground/20 group-hover:text-gold transition-colors duration-300">
                  In-House <ArrowRight className="w-2.5 h-2.5" />
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Trailing space */}
        <div className="flex-shrink-0 w-4 md:w-8" />
      </div>

      {/* Drag hint */}
      <div className="flex items-center justify-center gap-3 mt-6 opacity-30">
        <ChevronLeft className="w-3.5 h-3.5 text-foreground" />
        <span className="text-[9px] uppercase tracking-[0.5em] font-black text-foreground">Drag to explore</span>
        <ChevronRight className="w-3.5 h-3.5 text-foreground" />
      </div>

      {/* Bottom strip */}
      <div className="px-6 md:px-16 mt-8 pt-6 border-t border-foreground/5 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-5 md:gap-8">
          {["5 On-Site Restaurants", "Bakery Open 24×7", "Rooftop Bar", "In-Room Dining"].map((t, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-gold" />
              <span className="text-[10px] font-semibold text-foreground/35 uppercase tracking-wide">{t}</span>
            </div>
          ))}
        </div>
        <Link
          href="/dining"
          className="flex md:hidden items-center gap-1.5 text-[10px] uppercase tracking-[0.4em] font-black text-foreground/35 hover:text-gold transition-colors duration-300"
        >
          All Outlets <ArrowRight className="w-3 h-3" />
        </Link>
      </div>

    </section>
  );
}
