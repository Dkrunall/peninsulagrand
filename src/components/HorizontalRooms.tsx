"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const ROOMS = [
  { title: "Amor Suite", category: "Romance & Art", image: "/new/DSC05986.jpg", slug: "amor-suite" },
  { title: "Deluxe Room", category: "Classic Sophistication", image: "/new/DSC04040.jpg", slug: "deluxe-room" },
  { title: "Executive Room", category: "Business Elegance", image: "/new/DSC05908.jpg", slug: "executive-room" },
  { title: "Platinum Suite", category: "Modern / Elite", image: "/new/DSC05961.jpg", slug: "platinum-suite" },
  { title: "Presidential Suite", category: "Iconic Opulence", image: "/new/DSC05993.jpg", slug: "presidential-suite" },
];

export function HorizontalRooms() {
  const sectionRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only enable horizontal scroll pinning on desktop — pinning crashes mobile browsers
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          triggerRef.current,
          { x: 0 },
          {
            x: "-400vw",
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              pin: true,
              scrub: 1.5,
              start: "top top",
              end: () =>
                `+=${triggerRef.current?.offsetWidth ? triggerRef.current.offsetWidth * 1.5 : 2500}`,
            },
          }
        );
      }, sectionRef);

      // Cleanup returned to mm.add — NOT inside gsap.context callback
      return () => {
        ScrollTrigger.getAll().forEach((t) => t.kill());
        ctx.revert();
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <section ref={sectionRef} className="md:overflow-hidden bg-[#0A0A0A]">

      {/* ── MOBILE: snap-scroll card carousel ── */}
      <div className="md:hidden">
        {/* Section header */}
        <div className="px-6 pt-14 pb-6">
          <p className="text-[9px] uppercase tracking-[0.6em] font-black text-gold mb-3 italic">The Collection</p>
          <h2 className="text-3xl font-serif text-white tracking-tighter italic leading-tight">
            Our <span className="text-gold font-light">Residencies</span>
          </h2>
        </div>

        {/* Horizontally scrollable card strip */}
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-6 pb-4 scrollbar-hide">
          {ROOMS.map((room, index) => (
            <Link
              href={`/rooms/${room.slug}`}
              key={index}
              className="snap-center flex-shrink-0 w-[76vw] h-[58vh] rounded-[24px] overflow-hidden relative block"
            >
              <Image
                src={room.image}
                alt={room.title}
                fill
                sizes="76vw"
                className="object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              {/* Card content — always visible on mobile */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className="text-gold uppercase tracking-[0.5em] text-[8px] font-black block mb-2">
                  {room.category}
                </span>
                <h3 className="text-xl font-serif text-white italic tracking-tight leading-tight mb-3">
                  {room.title}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-[8px] uppercase tracking-[0.3em] font-black text-white/30">
                    0{index + 1} / 05
                  </span>
                  <div className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center">
                    <ArrowUpRight className="w-3 h-3 text-gold" />
                  </div>
                </div>
              </div>
            </Link>
          ))}

          {/* Trailing padding card */}
          <div className="flex-shrink-0 w-4" />
        </div>

        {/* Swipe hint */}
        <div className="flex items-center justify-center gap-3 pt-3 pb-6 opacity-25">
          <div className="w-6 h-px bg-white" />
          <span className="text-[8px] uppercase tracking-[0.4em] font-black text-white">Swipe</span>
          <div className="w-6 h-px bg-white" />
        </div>

        {/* View all rooms link */}
        <div className="px-6 pb-12">
          <Link
            href="/rooms"
            className="flex items-center justify-between w-full py-5 border-y border-white/10 group"
          >
            <span className="text-xs font-black uppercase tracking-[0.3em] text-white group-hover:text-gold transition-colors duration-500">
              View All Rooms
            </span>
            <ArrowUpRight className="w-4 h-4 text-gold" />
          </Link>
        </div>
      </div>

      {/* ── DESKTOP: GSAP pinned horizontal scroll ── */}
      <div
        ref={triggerRef}
        className="hidden md:flex md:h-screen md:w-[500vw] md:items-center"
      >
        {ROOMS.map((room, index) => (
          <div
            key={index}
            className="h-screen w-screen flex-shrink-0 flex flex-col justify-center items-center px-24 relative group cursor-none"
            data-cursor="pointer"
          >
            <div className="absolute inset-0 z-0 overflow-hidden">
              <Image
                src={room.image}
                alt={room.title}
                fill
                sizes="100vw"
                className="w-full h-full object-cover opacity-60 group-hover:opacity-85 transition-all duration-[2000ms] ease-out scale-110 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/20 to-transparent opacity-80" />
            </div>

            <div className="z-10 text-center perspective-1000">
              <span className="text-gold uppercase tracking-[0.6em] text-[10px] font-black mb-8 block opacity-0 translate-y-12 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-1000 ease-expo">
                {room.category}
              </span>
              <h2 className="text-[8vw] font-serif tracking-tighter text-background leading-none select-none group-hover:text-glow transition-all duration-1000">
                {room.title.split(" ").map((word, i) => (
                  <span key={i} className="inline-block mr-6 italic group-hover:not-italic transition-all duration-700">
                    {word}
                  </span>
                ))}
              </h2>
              <div className="mt-16 flex flex-col items-center gap-6 opacity-0 translate-y-12 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-1000 delay-300">
                <Link
                  href={`/rooms/${room.slug}`}
                  className="glass border-background/20 text-background px-16 py-4 rounded-full uppercase tracking-[0.3em] font-black text-xs hover:bg-background hover:text-foreground transition-all duration-700"
                >
                  Discover
                </Link>
                <div className="w-[1px] h-12 bg-gold/50" />
              </div>
            </div>

            <div className="absolute bottom-12 right-12 text-background/5 text-[15vw] font-serif font-black select-none pointer-events-none">
              0{index + 1}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
