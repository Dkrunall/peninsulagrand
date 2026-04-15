"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Clock, Wine, Utensils, Coffee, Music, Cake } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const DETAILED_OUTLETS = [
  {
    name: "OPA!",
    type: "Mediterranean Bar & Café",
    icon: Wine,
    timing: "5:00 pm to 3:00 am",
    desc: "One of the most sought-after restaurants in Mumbai, where exceptional culinary experiences meet the vibrant art of nightlife. Offering contemporary Mediterranean cuisine with a touch of elegance, Opa has been redefining fine dining in Mumbai since 2015.",
    image: "/opa1.jpg",
    detail: "Contemporary Mediterranean cuisine with award-winning cocktails.",
    reversed: false
  },
  {
    name: "M.I.T.R.O.N",
    type: "Bar & Kitchen · Global & Local Cuisines",
    icon: Music,
    timing: "2:00 pm to 1:30 am",
    desc: "Full-fledged menus across global and local cuisines, each crafted with the precision and passion of a speciality kitchen. From pan-Asian to Indian, Italian to continental — Mitron is more than a place to eat, it's a mood. A crowd favourite built for the people, by the people.",
    image: "/mitron1.webp",
    detail: "Where every meal comes with a side of good energy and great company.",
    reversed: true
  },
  {
    name: "Waikiki",
    type: "Tropical Island Dining",
    icon: Utensils,
    timing: "6:00 pm to 3:00 am",
    desc: "A tropical escape in the heart of Andheri East. Established in 2024 by Peninsula Hospitality Group, Waikiki brings the spirit of Hawaii to Mumbai. Blending Hawaiian and Polynesian flavours with Asian and Mediterranean influences for a truly unique dining experience.",
    image: "/waikiki1.webp",
    detail: "Sip, savour, and escape — where island vibes meet Mumbai's energy.",
    reversed: false
  },
  {
    name: "The Nest",
    type: "Rooftop Bar",
    icon: Wine,
    timing: "6:00 pm to 3:00 am",
    desc: "Your go-to rooftop destination for elevated dining under the stars. The Nest brings sky-high cocktails, stunning city views and island-inspired bites together in one unforgettable setting. The perfect spot to unwind after a long day.",
    image: "/nest1.avif",
    detail: "Elevated dining — where the city skyline meets island vibes.",
    reversed: true
  },
  {
    name: "Cocoamaya",
    type: "24-Hour Bakery",
    icon: Cake,
    timing: "Open 24 Hours",
    desc: "Artisanal coffee, freshly baked pastries and bespoke confections — Cocoamaya is your round-the-clock indulgence. A haven for early risers and late-night cravings alike, where every bite is crafted with care and every cup tells a story.",
    image: "/new/DSC04009.jpg",
    detail: "Indulgence with no curfew — baked fresh, served always.",
    reversed: false
  },
];

export function DiningOutletShowcase() {
  const containerRef = useRef<HTMLElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    const ctx = gsap.context(() => {
      if (!isMounted) return;

      const panels = gsap.utils.toArray(".outlet-panel");
      panels.forEach((panel: any) => {
        gsap.fromTo(panel.querySelector(".outlet-img-container"), 
          { y: 100, opacity: 0, scale: 0.9 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.8,
            ease: "expo.out",
            scrollTrigger: {
              trigger: panel,
              start: "top 80%",
            }
          }
        );

        gsap.fromTo(panel.querySelector(".outlet-text-content"), 
          { x: panel.classList.contains("md:flex-row-reverse") ? 100 : -100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: panel,
              start: "top 80%",
            }
          }
        );
      });
    }, containerRef);
    return () => ctx.revert();
  }, [isMounted]);

  return (
    <section ref={containerRef} className="py-16 md:py-20 bg-background overflow-hidden px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {DETAILED_OUTLETS.map((outlet, i) => (
          <div 
            key={i}
            className={`outlet-panel flex flex-col md:flex-row items-center gap-10 md:gap-20 mb-20 md:mb-60 last:mb-0 ${outlet.reversed ? "md:flex-row-reverse" : ""}`}
          >
            {/* Visual Container */}
            <div className="outlet-img-container relative w-full md:w-3/5 aspect-square md:aspect-[4/3] rounded-[32px] md:rounded-[64px] overflow-hidden shadow-2xl group">
              <Image 
                src={outlet.image}
                alt={outlet.name}
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-cover group-hover:scale-110 transition-transform duration-[2s]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent"></div>
              
              {/* Floating Tag */}
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-max max-w-[90%] bg-foreground/90 backdrop-blur-3xl py-3 px-8 rounded-full border border-white/10 shadow-2xl z-20">
                 <p className="text-[10px] uppercase tracking-[0.4em] font-black text-gold text-center">{outlet.detail}</p>
              </div>
            </div>

            {/* Text Content */}
            <div className="outlet-text-content w-full md:w-2/5">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center border border-gold/20">
                  <outlet.icon className="w-6 h-6 text-gold" />
                </div>
                <span className="text-[10px] uppercase tracking-[0.5em] font-black text-gold italic">{outlet.type}</span>
              </div>

              <h2 className="text-2xl md:text-5xl font-serif text-foreground mb-6 md:mb-10 tracking-tighter leading-tight italic uppercase">
                {outlet.name.split(" ").map((word, idx) => (
                    <span key={idx} className={idx % 2 === 0 ? "" : "text-gold font-light"}>{word} </span>
                ))}
              </h2>

              <p className="text-base md:text-xl text-foreground/60 font-serif leading-relaxed italic mb-8 md:mb-12 md:pr-10">
                {outlet.desc}
              </p>

              <div className="flex flex-col gap-8">
                <div className="flex items-center gap-4 py-6 border-y border-foreground/5">
                  <Clock className="w-5 h-5 text-gold" />
                  <div>
                    <p className="text-[9px] uppercase tracking-widest text-foreground/40 mb-1">Hours of Operation</p>
                    <p className="text-sm font-bold text-foreground uppercase">{outlet.timing}</p>
                  </div>
                </div>

                <button className="w-full md:w-max bg-foreground text-background px-8 md:px-12 py-4 md:py-5 rounded-full font-black text-[10px] uppercase tracking-[0.4em] hover:bg-gold hover:text-foreground transition-all duration-700 shadow-xl group">
                  Secure A Table <span className="inline-block group-hover:translate-x-2 transition-transform ml-2">→</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
