"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Clock, ArrowUpRight, Music, Coffee, Wine, Utensils } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const DINING_OUTLETS = [
  {
    id: "01",
    name: "M.I.T.R.O.N",
    type: "Bar & Kitchen",
    icon: Music,
    timing: "2:00 pm to 1:30 am",
    desc: "A high-energy urban sanctuary where mixology meets mystery. Experience the pulse of Mumbai's elite nightlife.",
    image: "/new/DSC05707.jpg",
    color: "from-purple-900/40"
  },
  {
    id: "02",
    name: "OPA!",
    type: "Bar & Cafe",
    icon: Wine,
    timing: "5:00 pm to 3:00 am",
    desc: "Vibrant Mediterranean spirit captured in a glass. Rooftop elegance meeting sunset cocktails.",
    image: "/new/DSC05913.jpg",
    color: "from-blue-900/40"
  },
  {
    id: "03",
    name: "CAFE CREMA",
    type: "Brew & Bake",
    icon: Coffee,
    timing: "Open 24 Hours",
    desc: "Artisanal coffee and delicate pastries in a Zen-minimalist setting. The sanctuary for early birds and night owls.",
    image: "/new/DSC04009.jpg",
    color: "from-amber-900/40"
  },
  {
    id: "04",
    name: "CARAIBES",
    type: "Tiki Bar",
    icon: Utensils,
    timing: "6:00 pm to 3:00 am",
    desc: "Exotic island vibes and tropical elixirs. A vacation within the city, crafted for the curious palate.",
    image: "/new/DSC03995.jpg",
    color: "from-emerald-900/40"
  }
];

export function DiningSection() {
  const containerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    const ctx = gsap.context(() => {
      if (!isMounted) return;

      // Title Animation
      gsap.fromTo(titleRef.current, 
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.8,
          ease: "expo.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 90%",
          }
        }
      );

      // Outlets Animation
      gsap.fromTo(".outlet-card", 
        { y: 120, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".outlet-grid",
            start: "top 75%",
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, [isMounted]);

  return (
    <section ref={containerRef} className="py-16 md:py-40 px-6 md:px-12 bg-background relative overflow-hidden">
      {/* Background Subtle Text */}
      <div className="absolute top-20 right-0 text-[20vw] font-serif font-black text-foreground/[0.02] select-none pointer-events-none uppercase leading-none">
        Dining
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-12 md:mb-28 max-w-4xl">
          <p className="text-[10px] uppercase tracking-[0.8em] font-black text-gold mb-5 md:mb-8 pl-1">Signature Experiences</p>
          <h2 
            ref={titleRef}
            className="text-4xl md:text-9xl font-serif text-foreground tracking-tighter leading-[1] md:leading-[0.9]"
          >
            Culinary <span className="italic text-gold block md:inline">Alchemy.</span>
          </h2>
        </div>

        <div className="outlet-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DINING_OUTLETS.map((outlet, i) => (
            <div 
              key={i}
              className="outlet-card glass group relative aspect-[3/5] rounded-[48px] overflow-hidden transition-all duration-1000 hover:shadow-[0_40px_1000px_-20px_rgba(212,175,55,0.3)] cursor-pointer"
              data-cursor="reserve"
            >
              {/* Background Image with Cinematic Hover */}
              <div className="absolute inset-0 z-0">
                <Image 
                  src={outlet.image}
                  alt={outlet.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-all duration-[2s] ease-out opacity-80 group-hover:opacity-100"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${outlet.color} via-black/20 to-transparent group-hover:opacity-40 transition-opacity duration-1000`}></div>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-1000"></div>
              </div>

              {/* Museum Style Index */}
              <div className="absolute top-8 left-8 text-xs font-black tracking-[0.4em] text-white/50 group-hover:text-gold transition-colors duration-700">
                {outlet.id}
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 p-10 flex flex-col justify-end z-10">
                <div className="transform translate-y-24 group-hover:translate-y-0 transition-transform duration-1000 ease-in-out">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md group-hover:border-gold group-hover:bg-gold transition-all duration-700">
                      <outlet.icon className="w-4 h-4 text-white group-hover:text-foreground" />
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.3em] font-black text-white/60">{outlet.type}</span>
                  </div>

                  <h3 className="text-4xl font-serif text-white mb-6 group-hover:text-gold transition-colors duration-500 uppercase">
                    {outlet.name}
                  </h3>

                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-1000 delay-100">
                    <p className="text-sm text-white/80 leading-relaxed mb-8 font-medium italic">
                      {outlet.desc}
                    </p>
                    
                    <div className="flex items-center justify-between pt-6 border-t border-white/10">
                      <div className="flex flex-col">
                        <span className="text-[9px] uppercase tracking-widest text-white/40 mb-1">Status</span>
                        <span className="text-xs font-bold text-white flex items-center gap-2">
                           <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                           {outlet.timing.includes("24") ? "Always Serving" : outlet.timing}
                        </span>
                      </div>
                      <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group/btn hover:bg-white hover:text-foreground transition-all duration-500">
                         <ArrowUpRight className="w-5 h-5 group-hover/btn:rotate-45 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Branded Subtle Reveal on top */}
              <div className="absolute top-8 right-8 w-1 h-8 bg-gold scale-y-0 group-hover:scale-y-100 transition-transform duration-1000 origin-top"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
