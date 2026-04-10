"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Trees, Utensils, Wifi, Car, Waves, Martini } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const AMENITIES = [
  { icon: Wifi, title: "Free Internet", desc: "High-speed gigabit connectivity throughout the entire estate.", span: "md:col-span-2 md:row-span-1", image: "/new/DSC03915.jpg" },
  { icon: Car, title: "Free Parking", desc: "Complimentary, secure on-site parking for all our guests.", span: "md:col-span-1 md:row-span-1", image: "/new/DSC05946.jpg" },
  { icon: Utensils, title: "On-Site Restaurant", desc: "World-class dining destinations right within the hotel premises.", span: "md:col-span-1 md:row-span-2", image: "/new/DSC05707.jpg" },
  { icon: Waves, title: "Room Service", desc: "Exquisite culinary experiences delivered directly to your door.", span: "md:col-span-2 md:row-span-1", image: "/new/DSC03976.jpg" },
  { icon: Trees, title: "Laundry Service", desc: "Professional garment care to keep you looking your absolute best.", span: "md:col-span-1 md:row-span-1", image: "/new/DSC05866.jpg" },
  { icon: Martini, title: "Concierge & Meeting", desc: "Expert assistance and state-of-the-art corporate facilities.", span: "md:col-span-2 md:row-span-1", image: "/new/DSC05998.jpg" },
];

export function BentoSection() {
  const containerRef = useRef<HTMLElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    const ctx = gsap.context(() => {
      if (!isMounted) return;

      gsap.fromTo(".bento-item", 
        { scale: 0.9, opacity: 0, y: 40 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          stagger: 0.05,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, [isMounted]);

  return (
    <section ref={containerRef} className="py-16 md:py-32 px-6 md:px-12 bg-background-secondary min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-gold/5 rounded-full blur-[100px] -z-0"></div>
      
      <div className="max-w-7xl w-full relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-8 md:gap-12">
          <div className="max-w-2xl">
            <p className="text-[10px] uppercase tracking-[0.5em] font-black text-gold mb-4 md:mb-6 border-l-2 border-gold pl-4 ml-1">Elite Experience</p>
            <h3 className="text-3xl md:text-7xl font-serif text-foreground leading-[1.1] md:leading-[1] tracking-tight">
              Unparalleled comfort <br/> <span className="italic">reimagined.</span>
            </h3>
          </div>
          <div className="max-w-xs space-y-4">
             <div className="w-12 h-[1px] bg-gold"></div>
             <p className="text-foreground/60 italic text-base md:text-xl leading-relaxed">
              "Our amenities and exceptional dining options create the perfect environment for both business and leisure."
             </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-7 p-2 md:p-3 rounded-[32px] md:rounded-[40px] bg-foreground/[0.01] border border-foreground/5 items-stretch">
          {AMENITIES.map((item, i) => (
            <div 
              key={i} 
              className={`bento-item glass group relative p-8 md:p-10 rounded-[28px] md:rounded-[36px] flex flex-col justify-between overflow-hidden cursor-default transition-all duration-[800ms] hover:shadow-[0_40px_80px_-20px_rgba(212,175,55,0.2)] hover:-translate-y-2 border border-white/10 ${item.span}`}
              data-cursor="pointer"
            >
              {/* Refined Cinematic Background Image */}
              <div className="absolute inset-0 -z-10 bg-background overflow-hidden">
                <Image 
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[1500ms] ease-out"
                />
                {/* Subtle dark vignette for text contrast instead of white fog */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60"></div>
              </div>

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-10 group-hover:bg-gold/20 transition-all duration-700 border border-white/10">
                  <item.icon className="w-7 h-7 text-gold drop-shadow-[0_0_8px_rgba(212,175,55,0.4)] group-hover:scale-110 transition-transform duration-700" />
                </div>
                <h4 className="text-2xl md:text-3xl font-serif text-white mb-4 group-hover:text-gold transition-colors duration-500 text-glow-white">
                  {item.title}
                </h4>
              </div>
              <p className="text-sm md:text-base text-white/80 leading-relaxed font-serif italic group-hover:text-white transition-colors duration-500 relative z-10">
                {item.desc}
              </p>
              
              {/* Internal border for depth */}
              <div className="absolute inset-4 border border-white/5 rounded-[24px] pointer-events-none group-hover:border-white/10 transition-colors duration-700"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
