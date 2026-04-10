"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

export function RoomsHero() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(max-width: 767px)", () => {
      const ctx = gsap.context(() => {
        gsap.fromTo(".rooms-bg", { opacity: 0, scale: 1.05 }, { opacity: 1, scale: 1, duration: 1.5, ease: "power3.out" });
        gsap.fromTo(".char", { y: 30, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.025, duration: 0.8, ease: "power3.out", delay: 0.3 });
        gsap.fromTo(".rooms-sub", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 1, delay: 0.6, ease: "power3.out" });
      }, containerRef);
      return () => ctx.revert();
    });

    mm.add("(min-width: 768px)", () => {
      const ctx = gsap.context(() => {
        gsap.fromTo(".rooms-bg", { opacity: 0, scale: 1.1 }, { opacity: 1, scale: 1, duration: 2.5, ease: "power2.out" });
        gsap.fromTo(".char", { y: 100, opacity: 0, rotateX: -90 }, { y: 0, opacity: 1, rotateX: 0, stagger: 0.05, duration: 1.5, ease: "expo.out", delay: 0.5 });
        gsap.fromTo(".rooms-sub", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1.5, delay: 1.2, ease: "power3.out" });
      }, containerRef);
      return () => ctx.revert();
    });

    return () => mm.revert();
  }, []);

  const title = "THE RESIDENCIES";

  return (
    <section ref={containerRef} className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-foreground">
      {/* Immersive Background */}
      <div className="rooms-bg absolute inset-0 z-0">
        <Image 
          src="/new/DSC04031.jpg"
          alt="Peninsula Grand Interiors"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground via-transparent to-foreground"></div>
      </div>

      <div className="relative z-10 text-center px-6">
        <p className="rooms-sub text-[10px] uppercase tracking-[0.8em] font-black text-gold mb-3 md:mb-10 pl-1">The Collection</p>
        <h1 className="text-3xl sm:text-5xl lg:text-[11vw] font-serif text-background tracking-tighter leading-tight lg:leading-none perspective-1000 flex flex-nowrap justify-center">
          {title.split("").map((char, i) => (
            <span key={i} className="char inline-block origin-bottom text-glow-white">
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>
        <div className="rooms-sub max-w-2xl mx-auto mt-6 md:mt-16">
          <p className="text-xl md:text-3xl font-serif text-background/60 italic leading-relaxed">
            "Space, refined. Comfort, redefined."
          </p>
        </div>
      </div>

      {/* Down arrow indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 opacity-30">
        <div className="w-[1px] h-16 bg-gold animate-scroll-vertical"></div>
        <span className="text-[10px] uppercase tracking-[0.6em] font-black text-background">Explore</span>
      </div>
    </section>
  );
}
