"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

export function AboutHero() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    // Mobile: simple fade — 3D rotateX kills mobile performance
    mm.add("(max-width: 767px)", () => {
      const ctx = gsap.context(() => {
        gsap.fromTo(".hero-bg", { opacity: 0, scale: 1.05 }, { opacity: 1, scale: 1, duration: 1.5, ease: "power3.out" });
        gsap.fromTo(".char", { y: 30, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.025, duration: 0.8, ease: "power3.out", delay: 0.3 });
        gsap.fromTo(".subtitle", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 1, delay: 0.6, ease: "power3.out" });
      }, containerRef);
      return () => ctx.revert();
    });

    // Desktop: full cinematic 3D entrance
    mm.add("(min-width: 768px)", () => {
      const ctx = gsap.context(() => {
        gsap.fromTo(".hero-bg", { opacity: 0, scale: 1.2 }, { opacity: 1, scale: 1, duration: 2.5, ease: "power3.out" });
        gsap.fromTo(".char", { y: 100, opacity: 0, rotateX: -90 }, { y: 0, opacity: 1, rotateX: 0, stagger: 0.05, duration: 1.5, ease: "expo.out", delay: 0.5 });
        gsap.fromTo(".subtitle", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1.5, delay: 1.2, ease: "power3.out" });
      }, containerRef);
      return () => ctx.revert();
    });

    return () => mm.revert();
  }, []);

  const title = "THE LEGACY";

  return (
    <section ref={containerRef} className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-foreground">
      {/* Background Cinematic Image */}
      <div className="hero-bg absolute inset-0 z-0">
        <Image
          src="/new/DSC03979.jpg"
          alt="Peninsula Grand Heritage"
          fill
          className="object-cover opacity-60 grayscale-[0.5]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground via-transparent to-foreground/80"></div>
      </div>

      <div className="relative z-10 text-center px-6">
        <p className="subtitle text-[10px] uppercase tracking-[0.8em] font-black text-gold mb-3 md:mb-8 pl-1">Since 1994</p>
        <h1
          className="text-2xl sm:text-4xl lg:text-[6.5vw] font-serif text-background tracking-tighter leading-tight lg:leading-none perspective-1000 flex flex-nowrap justify-center"
        >
          {title.split("").map((char, i) => (
            <span key={i} className="char inline-block origin-bottom text-glow-white">
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>
        <div className="subtitle max-w-2xl mx-auto mt-6 md:mt-12">
          <p className="text-lg md:text-2xl font-serif text-background/70 italic leading-relaxed">
            "Where Mumbai's history meets the pinnacle of modern luxury."
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-40">
        <div className="w-[1px] h-16 bg-gold animate-scroll-vertical"></div>
        <span className="text-[10px] uppercase tracking-[0.5em] font-black text-background">Scroll</span>
      </div>
    </section>
  );
}
