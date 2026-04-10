"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShieldCheck, Heart, Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const PHILOSOPHIES = [
  {
    icon: ShieldCheck,
    title: "Heritage",
    desc: "Preserving the architectural grace of 1994 while embracing modern rebirth.",
  },
  {
    icon: Heart,
    title: "Harmony",
    desc: "A balanced ecosystem where guests, staff, and design exist in perfect symphonic flow.",
  },
  {
    icon: Sparkles,
    title: "Hospitality",
    desc: "Bespoke service that anticipates desires with a silent, strictly elegant signature.",
  }
];

export function AboutPhilosophy() {
  const containerRef = useRef<HTMLElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    const ctx = gsap.context(() => {
      if (!isMounted) return;

      gsap.fromTo(".phi-card", 
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".phi-grid",
            start: "top 80%",
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, [isMounted]);

  return (
    <section ref={containerRef} className="py-20 md:py-40 bg-foreground relative overflow-hidden">
      {/* Background Decorative */}
      <div className="absolute top-1/2 left-0 w-[50vw] h-[50vw] bg-gold/5 rounded-full blur-[120px] -z-0"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-28">
           <p className="text-[10px] uppercase tracking-[0.8em] font-black text-gold mb-4 md:mb-8 italic">The Three Pillars</p>
           <h2 className="text-3xl md:text-6xl font-serif text-background tracking-tighter leading-tight md:leading-none">
             Our <span className="italic">Soul.</span>
           </h2>
        </div>

        <div className="phi-grid grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
          {PHILOSOPHIES.map((phi, i) => (
            <div 
              key={i}
              className="phi-card glass p-8 md:p-16 rounded-[32px] md:rounded-[48px] border-white/5 group hover:bg-white/5 transition-all duration-700"
            >
              <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-700">
                <phi.icon className="w-8 h-8 text-gold" />
              </div>
              <h4 className="text-3xl font-serif text-background mb-6 group-hover:text-gold transition-colors duration-500">{phi.title}</h4>
              <p className="text-background/50 leading-relaxed font-serif italic text-lg pr-4">
                {phi.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
