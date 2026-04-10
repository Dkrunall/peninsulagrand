"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Phone } from "lucide-react";

const ROOMS = [
  {
    title: "Deluxe Room",
    images: ["/new/DSC04040.jpg", "/new/DSC04050.jpg", "/new/DSC04076.jpg"],
    slug: "deluxe-room",
    size: "250 sq.ft.",
    price: 8000,
    bed: "Twin / King Bed",
    tag: "Most Popular",
    tagColor: "bg-gold text-black",
    description: "Well-appointed comfort for the always-on-the-move traveller.",
    amenities: ["Hi-Speed WiFi", "Tea / Coffee Maker", "Laptop Safe", "Smart Key Card"],
  },
  {
    title: "Executive Room",
    images: ["/new/DSC05908.jpg", "/new/DSC05913.jpg", "/new/DSC05919.jpg"],
    slug: "executive-room",
    size: "Stunning View",
    price: 9000,
    bed: "King Bed",
    tag: "Business Favourite",
    tagColor: "bg-white/15 text-white",
    description: "Ideal for business & leisure. Stunning views, functional luxury.",
    amenities: ["Hi-Speed WiFi", "Tea / Coffee Maker", "Laptop Safe", "Smart Key Card"],
  },
  {
    title: "Amor Suite",
    images: ["/new/DSC05986.jpg", "/new/DSC05983.jpg", "/new/DSC05980.jpg"],
    slug: "amor-suite",
    size: "550 sq.ft.",
    price: 11000,
    bed: "King Bed",
    tag: "Romantic Getaway",
    tagColor: "bg-rose-500/20 text-rose-300",
    description: "Unwind on a massaging chair. Spacious, romantic, utterly indulgent.",
    amenities: ["Massaging Chair", "Hi-Speed WiFi", "Tea / Coffee Maker", "Smart Key Card"],
  },
  {
    title: "Platinum Suite",
    images: ["/rooms-platinum.png", "/new/DSC05961.jpg", "/new/DSC05957.jpg"],
    slug: "platinum-suite",
    size: "700 sq.ft.",
    price: 12000,
    bed: "King Bed",
    tag: "Premium",
    tagColor: "bg-slate-300/20 text-slate-200",
    description: "Bespoke luxury for the jet-set elite. Revive before your next big meeting.",
    amenities: ["Living Area", "Hi-Speed WiFi", "Mini Bar", "Smart Key Card"],
  },
  {
    title: "Presidential Suite",
    images: ["/rooms-presidential.png", "/new/DSC05993.jpg", "/new/DSC05998.jpg"],
    slug: "presidential-suite",
    size: "900 sq.ft.",
    price: 15000,
    bed: "King Bed",
    tag: "Finest Suite",
    tagColor: "bg-gold/20 text-gold",
    description: "The ultimate address. In-room bar, fully stocked mini bar, pure opulence.",
    amenities: ["In-Room Bar", "Mini Bar", "Living Room", "Smart Key Card"],
  },
];

function RoomImageSlider({ images, title }: { images: string[]; title: string }) {
  const [current, setCurrent] = useState(0);

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
    <div className="relative w-full h-56 overflow-hidden group/slider flex-shrink-0">
      {images.map((src, i) => (
        <div key={i} className={`absolute inset-0 transition-opacity duration-500 ${i === current ? "opacity-100" : "opacity-0"}`}>
          <Image src={src} alt={`${title} ${i + 1}`} fill sizes="400px" className="object-cover" priority={i === 0} />
        </div>
      ))}
      {images.length > 1 && (
        <>
          <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-black/60 flex items-center justify-center opacity-0 group-hover/slider:opacity-100 transition-opacity">
            <ChevronLeft className="w-4 h-4 text-white" />
          </button>
          <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-black/60 flex items-center justify-center opacity-0 group-hover/slider:opacity-100 transition-opacity">
            <ChevronRight className="w-4 h-4 text-white" />
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {images.map((_, i) => (
              <button key={i} onClick={(e) => { e.preventDefault(); e.stopPropagation(); setCurrent(i); }}
                className={`rounded-full transition-all duration-300 ${i === current ? "w-4 h-1.5 bg-gold" : "w-1.5 h-1.5 bg-white/50"}`} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export function HorizontalRooms() {
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
    <section className="bg-foreground py-14 md:py-20" id="suites">

      {/* Header */}
      <div className="px-6 md:px-16 mb-8 md:mb-12">
        <p className="text-[9px] uppercase tracking-[0.8em] font-black text-gold mb-3 italic">Choose Your Stay</p>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-4xl font-serif text-white tracking-tighter leading-tight mb-1">
              Find Your Perfect <span className="text-gold italic font-light">Room</span>
            </h2>
            <p className="text-sm text-white/40 italic">Drag to explore all rooms · Tap to book</p>
          </div>
          <a href="tel:+912267347777" className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-2xl px-4 py-3 hover:bg-white/10 transition-all duration-300 w-fit">
            <div className="w-7 h-7 rounded-full bg-gold flex items-center justify-center flex-shrink-0">
              <Phone className="w-3 h-3 text-black" />
            </div>
            <div>
              <p className="text-[8px] uppercase tracking-[0.3em] font-black text-white/40">Call to Book</p>
              <p className="text-sm font-bold text-white">+91 22 6734 7777</p>
            </div>
          </a>
        </div>
      </div>

      {/* Drag Slider */}
      <div
        ref={sliderRef}
        className="flex gap-5 overflow-x-auto px-6 md:px-16 pb-4 scrollbar-hide cursor-grab select-none"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
      >
        {ROOMS.map((room, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[80vw] sm:w-[340px] md:w-[360px] bg-white/5 rounded-[20px] overflow-hidden border border-white/10 hover:border-gold/30 transition-all duration-500 flex flex-col"
          >
            {/* Image slider */}
            <div className="relative">
              <RoomImageSlider images={room.images} title={room.title} />
              <div className="absolute top-3 left-3 z-10">
                <span className={`${room.tagColor} text-[8px] uppercase tracking-[0.3em] font-black px-3 py-1.5 rounded-full`}>
                  {room.tag}
                </span>
              </div>
              <div className="absolute top-3 right-3 z-10 bg-black/70 rounded-xl px-3 py-1.5 text-right">
                <p className="text-[7px] text-white/50 font-bold uppercase">From</p>
                <p className="text-base font-black text-gold leading-none">₹{room.price.toLocaleString("en-IN")}</p>
                <p className="text-[7px] text-white/40 font-bold uppercase">/ night</p>
              </div>
            </div>

            {/* Card info */}
            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-lg font-serif text-white italic tracking-tight mb-1">{room.title}</h3>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-semibold text-white/40">{room.bed}</span>
                <span className="text-white/20">·</span>
                <span className="text-xs font-semibold text-white/40">{room.size}</span>
              </div>
              <p className="text-xs text-white/50 italic leading-relaxed mb-4">{room.description}</p>

              <div className="grid grid-cols-2 gap-1.5 mb-5">
                {room.amenities.map((a, j) => (
                  <div key={j} className="flex items-center gap-1.5">
                    <div className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                    <span className="text-[10px] font-semibold text-white/35">{a}</span>
                  </div>
                ))}
              </div>

              <div className="h-px bg-white/5 mb-4 mt-auto" />

              {/* Buttons — one row */}
              <div className="flex gap-2">
                <a
                  href="https://bookings.peninsulagrand.com/?propertyId=8984"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gold text-black py-3 rounded-xl font-black text-xs uppercase tracking-wide text-center hover:bg-white transition-all duration-400 active:scale-95 flex items-center justify-center gap-1"
                >
                  Book Now
                  <ArrowRight className="w-3 h-3" />
                </a>
                <Link
                  href={`/rooms/${room.slug}`}
                  className="flex-1 border border-white/20 text-white py-3 rounded-xl font-bold text-xs uppercase tracking-wide text-center hover:border-gold hover:text-gold transition-all duration-400"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}

        {/* Trailing space */}
        <div className="flex-shrink-0 w-2 md:w-10" />
      </div>

      {/* Drag hint */}
      <div className="flex items-center justify-center gap-3 mt-6 opacity-40">
        <ChevronLeft className="w-3.5 h-3.5 text-white" />
        <span className="text-[9px] uppercase tracking-[0.5em] font-black text-white">Drag to explore</span>
        <ChevronRight className="w-3.5 h-3.5 text-white" />
      </div>
    </section>
  );
}
