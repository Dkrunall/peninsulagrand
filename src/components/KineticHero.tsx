"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { Star } from "lucide-react";

export function KineticHero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const ctx = gsap.context(() => {
        gsap.fromTo(".hero-badge", { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.2 });
        gsap.fromTo(".hero-title", { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1.4, ease: "power3.out", delay: 0.4 });
        gsap.fromTo(".hero-sub",   { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, ease: "power3.out", delay: 0.8 });
        gsap.fromTo(".hero-cta",   { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1,   ease: "power3.out", delay: 1.1 });
        gsap.fromTo(".hero-strip", { opacity: 0 },        { opacity: 1,        duration: 1,   ease: "power3.out", delay: 1.4 });
      }, heroRef);
      return () => ctx.revert();
    });

    mm.add("(max-width: 767px)", () => {
      const ctx = gsap.context(() => {
        gsap.fromTo(".hero-title", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.2 });
        gsap.fromTo(".hero-sub",   { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: "power3.out", delay: 0.5 });
        gsap.fromTo(".hero-cta",   { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.7 });
      }, heroRef);
      return () => ctx.revert();
    });

    return () => mm.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black">

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/new/DSC03915.jpg"
          alt="Peninsula Grand Hotel"
          fill
          className="object-cover opacity-55"
          priority
          loading="eager"
        />
        {/* Dark gradient — heavier at top and bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
      </div>

      {/* Centre content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl mx-auto">

        {/* Star + label */}
        <div className="hero-badge flex items-center gap-2 mb-6">
          <div className="flex items-center gap-1">
            {[...Array(4)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-gold text-gold" />
            ))}
          </div>
          <span className="text-xs font-bold text-gold tracking-widest">4-Star Luxury Hotel · Mumbai</span>
        </div>

        {/* Hotel name */}
        <h1 className="hero-title font-serif italic text-white leading-tight tracking-tight mb-6
          text-4xl sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-2xl">
          Peninsula Grand Hotel
        </h1>

        {/* Tagline */}
        <p className="hero-sub text-white leading-relaxed mb-10
          text-base sm:text-lg md:text-xl max-w-xl font-medium drop-shadow-lg">
          Mumbai's finest luxury address — 5 minutes from T2 Airport, right next to Sakinaka Metro.
        </p>

      </div>

      {/* Bottom trust strip */}
      <div className="hero-strip absolute bottom-0 left-0 right-0 z-10 border-t border-white/15 bg-black/60 backdrop-blur-md">
        <div className="flex items-center justify-center md:justify-around flex-wrap gap-x-8 gap-y-2 px-6 py-4">
          {[
            "✓ Free High-Speed WiFi",
            "✓ Free Parking",
            "✓ Complimentary Breakfast",
            "✓ 4 Restaurants On-Site",
            "✓ 24/7 Concierge",
          ].map((item, i) => (
            <span key={i} className="text-xs font-semibold text-white/70 whitespace-nowrap">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 opacity-20">
        <div className="w-px h-10 bg-gold animate-pulse" />
      </div>
    </section>
  );
}
