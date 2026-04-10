"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function KineticHero() {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    // Mobile: lightweight fade-in only — 3D transforms and pinned scroll kill mobile GPUs
    mm.add("(max-width: 767px)", () => {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          ".char",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.025, ease: "power3.out" }
        );
        gsap.fromTo(
          subtitleRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 1.2, delay: 0.5, ease: "power3.out" }
        );
      }, heroRef);
      return () => ctx.revert();
    });

    // Desktop: full cinematic animation suite
    mm.add("(min-width: 768px)", () => {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          ".char",
          { y: 120, rotateX: -90, opacity: 0 },
          { y: 0, rotateX: 0, opacity: 1, duration: 1.8, stagger: 0.04, ease: "power4.out" }
        );

        gsap.fromTo(
          subtitleRef.current,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 2.5, delay: 0.8, ease: "power4.out" }
        );

        gsap.to(titleRef.current, {
          scale: 1.15,
          y: 80,
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 2,
          },
        });

        gsap.to(".glass-hero", {
          y: -150,
          rotateX: 5,
          scale: 1.08,
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.5,
          },
        });

        gsap.to(".blob", {
          x: "random(-50, 50)",
          y: "random(-50, 50)",
          duration: 8,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          stagger: 2,
        });
      }, heroRef);
      return () => ctx.revert();
    });

    return () => mm.revert();
  }, []);

  const title = "PENINSULA GRAND";

  return (
    <section
      ref={heroRef}
      className="relative min-h-[115vh] flex flex-col items-center justify-center bg-background overflow-hidden pt-20"
    >
      {/* Refined Background Blobs */}
      <div className="blob absolute top-1/4 left-1/4 w-[60vw] h-[60vw] bg-sand/30 rounded-full blur-[140px] -z-10" />
      <div className="blob absolute bottom-1/4 right-1/4 w-[50vw] h-[50vw] bg-slate/10 rounded-full blur-[120px] -z-10" />

      {/* Main Kinetic Typography */}
      <div className="w-full relative h-[20vh] flex items-center justify-center overflow-visible pointer-events-none">
        <h1
          ref={titleRef}
          className="text-2xl sm:text-4xl lg:text-[5.5vw] font-serif leading-none tracking-tight md:tracking-normal select-none perspective-1000 flex flex-row flex-nowrap w-max"
        >
          {title.split("").map((char, i) => (
            <span
              key={i}
              className="char inline-block origin-bottom hover:text-gold text-glow shrink-0 pointer-events-auto"
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>
      </div>

      {/* Description Overlay - Polished Hierarchy */}
      <div
        ref={subtitleRef}
        className="mt-8 md:mt-0 md:absolute md:bottom-24 md:right-32 max-w-sm text-center md:text-right z-10 px-6"
      >
        <p className="text-[10px] uppercase tracking-[0.5em] font-black text-gold mb-4 border-b border-gold/20 pb-2 inline-block">Established 1994</p>
        <p className="text-xl md:text-2xl font-serif leading-tight text-foreground/90 italic">
          Five minutes from the airport. Right next to Sakinaka Metro. Mumbai's finest luxury address.
        </p>
      </div>

      {/* Interactive Glass Reveal - Polished */}
      <div
        className="glass-hero glass mt-20 w-full max-w-6xl aspect-[21/9] rounded-bento shadow-2xl overflow-hidden flex items-center justify-center group cursor-pointer relative"
        data-cursor="pointer"
      >
        <Image
          src="/new/DSC03915.jpg"
          alt="Luxury Lobby"
          fill
          className="object-cover opacity-80 group-hover:opacity-100 scale-105 group-hover:scale-100 transition-all duration-[2s] ease-out -z-10"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60"></div>
        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-1000"></div>

        <div className="z-10 flex flex-col items-center gap-6">
          <span className="text-xs uppercase tracking-[0.3em] font-black opacity-30 group-hover:opacity-100 transition-all duration-1000 group-hover:translate-y-0 translate-y-2 text-white">
            The Sanctuary Experience
          </span>
          <div className="w-16 h-[1.5px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-in-out"></div>
        </div>

        {/* Subtle internal border for depth */}
        <div className="absolute inset-4 border border-white/5 rounded-[24px] pointer-events-none"></div>
      </div>
    </section>
  );
}
