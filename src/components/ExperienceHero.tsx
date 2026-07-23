"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone as PhoneIcon } from "lucide-react";
import gsap from "gsap";

interface ExperienceHeroProps {
  title: string;
  subtitle: string;
  highlight: string;
  image: string;
  tagline: string;
  phone?: string;
}

export function ExperienceHero({ title, subtitle, highlight, image, tagline, phone }: ExperienceHeroProps) {
  const containerRef = useRef<HTMLElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const ctx = gsap.context(() => {
      if (!isMounted) return;

      gsap.fromTo(".hero-bg",
        { scale: 1.2, opacity: 0 },
        { scale: 1, opacity: 0.7, duration: 2.5, ease: "power2.out" }
      );

      gsap.fromTo(".hero-content",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.8, delay: 0.5, ease: "expo.out" }
      );
    }, containerRef);
    return () => ctx.revert();
  }, [isMounted]);

  return (
    <section ref={containerRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-foreground">
      <div className="hero-bg absolute inset-0 z-0">
        <Image
          src={image}
          alt={title}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/80 via-foreground/20 to-foreground"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div className="hero-content">
          <p className="text-[10px] uppercase tracking-[1em] font-black text-gold mb-4 md:mb-12 italic pl-2">{tagline}</p>
          <h1 className="text-2xl md:text-[5vw] font-serif text-background leading-[1.1] md:leading-[0.9] tracking-tighter mb-8 md:mb-12 italic text-center uppercase">
            {title} <br className="hidden md:block" /> <span className="text-gold font-light">{highlight}</span> {subtitle}
          </h1>

          {phone && (
            <div className="flex justify-center">
              <a
                href={`tel:${phone.replace(/\s+/g, '')}`}
                className="group inline-flex items-center gap-3.5 bg-gold text-black hover:bg-white border-2 border-gold hover:border-white px-10 py-5 md:px-12 md:py-6 rounded-full text-sm md:text-base font-black uppercase tracking-widest transition-all duration-300 shadow-[0_0_40px_rgba(212,175,55,0.5)]"
              >
                <PhoneIcon className="w-5 h-5 text-black group-hover:text-black transition-colors" />
                <span>Banquet Reservations: {phone}</span>
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 opacity-20">
        <div className="w-px h-20 bg-gold animate-pulse"></div>
        <span className="text-[8px] uppercase tracking-[0.8em] font-black text-background">Immerse</span>
      </div>
    </section>
  );
}
