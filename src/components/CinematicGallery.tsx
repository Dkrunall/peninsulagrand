"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface GalleryImage {
  src: string;
  alt: string;
  span?: string; // Tailwind span class: col-span-x row-span-x
}

interface CinematicGalleryProps {
  title: string;
  subtitle: string;
  images: GalleryImage[];
}

export function CinematicGallery({ title, subtitle, images }: CinematicGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    const ctx = gsap.context(() => {
      if (!isMounted) return;

      const items = gsap.utils.toArray(".gallery-item");
      items.forEach((item: any, i: number) => {
        gsap.fromTo(item, 
          { y: 100, opacity: 0, scale: 0.9 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.5,
            delay: i * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 90%",
            }
          }
        );
      });
    }, containerRef);
    return () => ctx.revert();
  }, [isMounted]);

  return (
    <section ref={containerRef} className="py-16 md:py-40 bg-background px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 md:mb-24 flex flex-col items-center text-center">
            <p className="text-[10px] uppercase tracking-[0.8em] font-black text-gold mb-4 md:mb-8 italic">{subtitle}</p>
            <h2 className="text-3xl md:text-7xl font-serif text-foreground leading-tight italic">
               {title.split(" ").map((word, i) => (
                  <span key={i} className={i % 2 === 1 ? "text-gold font-light" : ""}>{word} </span>
               ))}
            </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 h-full md:min-h-[1000px]">
           {images.map((img, i) => (
              <motion.div 
                key={i}
                className={cn(
                  "gallery-item relative aspect-square md:aspect-auto rounded-[32px] md:rounded-[48px] overflow-hidden group shadow-2xl bg-slate/5",
                  img.span || "col-span-1 row-span-1"
                )}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                 <Image 
                   src={img.src}
                   alt={img.alt}
                   fill
                   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                   className="object-cover group-hover:scale-110 transition-transform duration-[2s] opacity-90 group-hover:opacity-100"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent"></div>
                 
                 {/* Detail Tag */}
                 <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-[8px] uppercase tracking-widest font-black text-white/60">Detail View</span>
                 </div>
              </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
