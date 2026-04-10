"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function AboutStory() {
  const containerRef = useRef<HTMLElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    const ctx = gsap.context(() => {
      if (!isMounted) return;

      // Horizontal scrub for timeline images
      const sections = gsap.utils.toArray(".story-panel");
      
      sections.forEach((section: any) => {
        gsap.fromTo(section.querySelector(".story-image"), 
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.5,
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );

        gsap.fromTo(section.querySelector(".story-text"), 
          { 
            x: section.classList.contains("flex-row-reverse") ? 100 : -100,
            opacity: 0 
          },
          {
            x: 0,
            opacity: 1,
            duration: 1.5,
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    }, containerRef);
    return () => ctx.revert();
  }, [isMounted]);

  return (
    <section ref={containerRef} className="py-20 md:py-40 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Panel 1: The Founding */}
        <div className="story-panel flex flex-col md:flex-row items-center gap-10 md:gap-20 mb-20 md:mb-60">
          <div className="story-image relative w-full md:w-1/2 aspect-[4/5] rounded-[32px] md:rounded-[48px] overflow-hidden shadow-2xl">
            <Image 
              src="/new/DSC03979.jpg"
              alt="The Founding in 1994"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="story-text w-full md:w-1/2">
            <p className="text-[10px] uppercase tracking-[0.5em] font-black text-gold mb-4 md:mb-6 italic">MCMXCIV — 1994</p>
            <h3 className="text-3xl md:text-7xl font-serif text-foreground mb-6 md:mb-10 leading-tight md:leading-none tracking-tighter">
              The Genesis of <br/> <span className="italic">Grace.</span>
            </h3>
            <p className="text-base md:text-xl text-foreground/60 font-serif leading-relaxed italic md:pr-12">
              A five minutes' drive from the International Airport, situated right next to the Sakinaka Metro Station, the Peninsula Grand is one of the finest luxury hotels in Mumbai — an oasis of isolation replete with four-star facilities.
            </p>
            <div className="mt-8 md:mt-12 w-20 h-[1px] bg-gold"></div>
          </div>
        </div>

        {/* Panel 2: The Service */}
        <div className="story-panel flex flex-col md:flex-row-reverse items-center gap-10 md:gap-20 mb-20 md:mb-60">
          <div className="story-image relative w-full md:w-1/2 aspect-[4/5] rounded-[32px] md:rounded-[48px] overflow-hidden shadow-2xl">
            <Image 
              src="/new/DSC03955.jpg"
              alt="Bespoke Luxury Service"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="story-text w-full md:w-1/2">
            <p className="text-[10px] uppercase tracking-[0.5em] font-black text-gold mb-4 md:mb-6 italic">The Philosophy</p>
            <h3 className="text-3xl md:text-7xl font-serif text-foreground mb-6 md:mb-10 leading-tight md:leading-none tracking-tighter">
               Human <br/> <span className="italic">Touch.</span>
            </h3>
            <p className="text-base md:text-xl text-foreground/60 font-serif leading-relaxed italic md:pl-12">
               Experience contemporary comfort, world class dining and modern amenities that ensure Business continues as Usual, while you stay nestled right in the heart of the city's bustling Central Business District.
            </p>
            <div className="mt-8 md:mt-12 w-20 h-[1px] bg-gold"></div>
          </div>
        </div>

        {/* Panel 3: The Future */}
        <div className="story-panel flex flex-col md:flex-row items-center gap-10 md:gap-20">
          <div className="story-image relative w-full md:w-1/2 aspect-[4/5] rounded-[32px] md:rounded-[48px] overflow-hidden shadow-2xl">
            <Image 
              src="/new/DSC04109.jpg"
              alt="The 2026 Future Modern Redesign"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="story-text w-full md:w-1/2">
            <p className="text-[10px] uppercase tracking-[0.5em] font-black text-gold mb-4 md:mb-6 italic">MMXXVI — 2026</p>
            <h3 className="text-3xl md:text-7xl font-serif text-foreground mb-6 md:mb-10 leading-tight md:leading-none tracking-tighter">
              Bespoke <br/> <span className="italic">Futures.</span>
            </h3>
            <p className="text-base md:text-xl text-foreground/60 font-serif leading-relaxed italic md:pr-12">
              Ideal for both business and leisure travelers, Peninsula Grand exemplifies sophisticated hospitality and exceptional comfort. Experience a stay where every detail is thoughtfully curated to meet your needs — where Business continues as usual, nestled in Mumbai's CBD.
            </p>
            <div className="mt-8 md:mt-12 w-20 h-[1px] bg-gold"></div>
          </div>
        </div>

      </div>
    </section>
  );
}
