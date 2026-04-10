"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { Room } from "@/data/rooms";

export function RoomDetailHero({ room }: { room: Room }) {
  const containerRef = useRef<HTMLElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    const ctx = gsap.context(() => {
      if (!isMounted) return;

      // Cinematic image entrance
      gsap.fromTo(".hero-img", 
        { scale: 1.1, opacity: 0 },
        { scale: 1, opacity: 1, duration: 2, ease: "power2.out" }
      );

      // Typography reveal
      gsap.fromTo(".hero-text", 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5, delay: 0.5, ease: "power3.out" }
      );
    }, containerRef);
    return () => ctx.revert();
  }, [isMounted, room]);

  return (
    <section ref={containerRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-foreground">
      <div className="hero-img absolute inset-0 z-0">
        <Image 
          src={room.image}
          alt={room.name}
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-transparent to-foreground"></div>
      </div>

      <div className="relative z-10 text-center px-6">
        <div className="hero-text">
          <p className="text-[10px] uppercase tracking-[0.8em] font-black text-gold mb-3 md:mb-8 italic">Residency Detail</p>
          <h1 className="text-4xl md:text-[10vw] font-serif text-background tracking-tighter leading-[1.1] md:leading-none italic mb-6 md:mb-12 uppercase">
            {room.name.split(" ").map((word, i) => (
              <span key={i} className={i % 2 === 0 ? "" : "text-gold font-light"}>{word} </span>
            ))}
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 mt-8 md:mt-12">
             <div className="flex flex-col items-center">
                <span className="text-[8px] md:text-[9px] uppercase tracking-widest text-background/40 mb-2">Scale</span>
                <span className="text-xs md:text-sm font-bold text-background italic">{room.size}</span>
             </div>
             <div className="w-px h-6 md:h-8 bg-background/10"></div>
             <div className="flex flex-col items-center">
                <span className="text-[8px] md:text-[9px] uppercase tracking-widest text-background/40 mb-2">Heritage</span>
                <span className="text-xs md:text-sm font-bold text-background italic">{room.adults} Adults / {room.children} Child</span>
             </div>
          </div>

          <div className="mt-16">
             <a 
               href="https://bookings.peninsulagrand.com/?propertyId=8984"
               target="_blank"
               rel="noopener noreferrer"
               className="bg-gold text-background px-12 py-5 rounded-full font-black text-[10px] uppercase tracking-[0.4em] hover:bg-background hover:text-foreground transition-all duration-700 shadow-2xl inline-block"
             >
               Reserve Now
             </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 opacity-30">
        <div className="w-[1px] h-16 bg-gold animate-scroll-vertical"></div>
        <span className="text-[10px] uppercase tracking-[0.6em] font-black text-background">Discover</span>
      </div>
    </section>
  );
}
