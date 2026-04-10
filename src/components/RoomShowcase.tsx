"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Users, Bed, Square, ArrowUpRight } from "lucide-react";
import { ROOMS_DATA } from "@/data/rooms";

gsap.registerPlugin(ScrollTrigger);

export function RoomShowcase() {
  const containerRef = useRef<HTMLElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    const ctx = gsap.context(() => {
      if (!isMounted) return;

      const items = gsap.utils.toArray(".room-item");
      items.forEach((item: any) => {
        gsap.fromTo(item.querySelector(".room-image"), 
          { y: 80, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
            }
          }
        );

        gsap.fromTo(item.querySelector(".room-content"), 
          { x: item.classList.contains("md:flex-row-reverse") ? 50 : -50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
            }
          }
        );
      });
    }, containerRef);
    return () => ctx.revert();
  }, [isMounted]);

  return (
    <section ref={containerRef} className="py-16 md:py-20 bg-background px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {ROOMS_DATA.map((room, i) => (
          <div 
            key={i}
            className={`room-item flex flex-col md:flex-row items-center gap-8 md:gap-16 mb-16 md:mb-48 last:mb-0 ${room.reversed ? "md:flex-row-reverse" : ""}`}
          >
            {/* Image Section */}
            <div className="room-image relative w-full md:w-3/5 aspect-[16/10] rounded-[32px] md:rounded-[48px] overflow-hidden group shadow-2xl">
              <Image 
                src={room.image}
                alt={room.name}
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-cover group-hover:scale-105 transition-transform duration-[1.5s]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent"></div>
              
              {/* Category ID */}
              <div className="absolute top-10 left-10 text-[8px] font-black tracking-[0.6em] text-white/40 uppercase">
                Section 0{i+1}
              </div>
            </div>

            {/* Content Section */}
            <div className="room-content w-full md:w-2/5 p-2 md:p-4">
              <p className="text-[10px] uppercase tracking-[0.5em] font-black text-gold mb-4 md:mb-6 italic">{room.type}</p>
              <h2 className="text-3xl md:text-6xl font-serif text-foreground mb-6 md:mb-8 tracking-tighter leading-tight italic">
                 {room.name}
              </h2>
              <p className="text-base md:text-lg text-foreground/60 font-serif leading-relaxed italic mb-8 md:mb-10">
                {room.desc}
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 py-8 border-y border-foreground/5 mb-10">
                <div className="flex flex-col gap-2 items-start sm:items-center">
                  <span className="text-[9px] uppercase tracking-widest text-foreground/40">Capacity</span>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-gold" />
                    <span className="text-xs font-bold text-foreground italic">{room.adults} Adults</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 items-start sm:items-center sm:border-x border-foreground/5 sm:px-8">
                  <span className="text-[9px] uppercase tracking-widest text-foreground/40">Heritage</span>
                  <div className="flex items-center gap-2">
                    <Bed className="w-4 h-4 text-gold" />
                    <span className="text-xs font-bold text-foreground italic">{room.children} Child</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 items-start sm:items-end sm:text-right">
                  <span className="text-[9px] uppercase tracking-widest text-foreground/40">Scale</span>
                  <div className="flex items-center justify-end gap-2">
                    <Square className="w-4 h-4 text-gold" />
                    <span className="text-xs font-bold text-foreground italic">{room.size}</span>
                  </div>
                </div>
              </div>

              <Link 
                href={`/rooms/${room.slug}`}
                className="flex items-center gap-4 group"
              >
                 <span className="text-[10px] uppercase tracking-[0.4em] font-black text-foreground group-hover:text-gold transition-colors">Experience This Space</span>
                 <div className="w-10 h-10 rounded-full border border-foreground/10 flex items-center justify-center group-hover:bg-gold group-hover:border-gold transition-all duration-500">
                    <ArrowUpRight className="w-4 h-4 text-foreground group-hover:text-background transition-transform group-hover:rotate-45" />
                 </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
