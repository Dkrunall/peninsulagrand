"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { Star, ChevronLeft, ChevronRight, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const HERO_IMAGES = [
  "/new/DSC04109.jpg",
  "/new/DSC05283.jpg",
  "/new/DSC05961.jpg",
  "/new/DSC05986.jpg",
];

export function KineticHero() {
  const heroRef = useRef<HTMLElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const ctx = gsap.context(() => {
        gsap.fromTo(".hero-badge", { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.2 });
        gsap.fromTo(".hero-title", { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1.4, ease: "power3.out", delay: 0.4 });
        gsap.fromTo(".hero-sub",   { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, ease: "power3.out", delay: 0.8 });
        gsap.fromTo(".hero-cta",   { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1,   ease: "power3.out", delay: 1.1 });
        gsap.fromTo(".hero-strip", { opacity: 0 },        { opacity: 1,        duration: 1,   ease: "power3.out", delay: 1.4 });
      }, heroRef);
      return () => ctx.revert();
    });

    mm.add("(max-width: 767px)", () => {
      const ctx = gsap.context(() => {
        gsap.fromTo(".hero-title", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.2 });
        gsap.fromTo(".hero-sub",   { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: "power3.out", delay: 0.5 });
        gsap.fromTo(".hero-cta",   { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.7 });
      }, heroRef);
      return () => ctx.revert();
    });

    return () => mm.revert();
  }, []);

  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length);

  return (
    <section ref={heroRef} className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black">

      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <motion.div
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 6, ease: "linear" }}
              className="absolute inset-0"
            >
              <Image
                src={HERO_IMAGES[currentImageIndex]}
                alt="Hotel Peninsula Grand"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>
        
        {/* Extremely subtle vignette for text readability */}
        <div className="absolute inset-0 bg-black/5 z-10" />
      </div>

      {/* Centre content */}
      <div className="relative z-20 flex flex-col items-center text-center px-6 max-w-4xl mx-auto">

        {/* Star + label */}
        <div className="hero-badge flex items-center gap-2 mb-6">
          <div className="flex items-center gap-1">
            {[...Array(4)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-gold text-gold" />
            ))}
          </div>
          <span className="text-xs font-bold text-gold tracking-widest">4-Star Luxury Hotel · Mumbai</span>
        </div>

        {/* Hotel name */}
        <h1 className="hero-title font-serif italic text-white leading-tight tracking-tight mb-6
          text-4xl sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-2xl">
          Hotel Peninsula Grand
        </h1>

        {/* Tagline */}
        <p className="hero-sub text-white/90 leading-relaxed mb-6
          text-base sm:text-lg md:text-xl max-w-2xl font-medium drop-shadow-lg font-serif italic">
          "Mumbai's finest luxury address — An oasis of isolation in the heart of the city."
        </p>

        {/* Reservation Call Button */}
        <div className="hero-cta flex items-center justify-center gap-3">
          <a
            href="tel:+918828243222"
            className="group flex items-center gap-2.5 bg-black/50 hover:bg-gold backdrop-blur-md text-white hover:text-black border border-gold/40 hover:border-gold px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-500 shadow-2xl"
          >
            <Phone className="w-4 h-4 text-gold group-hover:text-black transition-colors" />
            <span>Reservations: +91 88282 43222</span>
          </a>
        </div>
      </div>

      {/* Bottom trust strip */}
      <div className="hero-strip absolute bottom-0 left-0 right-0 z-20 border-t border-white/15 bg-black/60 backdrop-blur-md">
        <div className="flex items-center justify-center md:justify-around flex-wrap gap-x-8 gap-y-2 px-6 py-4">
          {[
            "✓ Free High-Speed WiFi",
            "✓ Parking Available",
            "✓ Complimentary Breakfast",
            "✓ 5 Restaurants On-Site",
            "✓ 24/7 Concierge",
          ].map((item, i) => (
            <span key={i} className="text-xs font-semibold text-white/70 whitespace-nowrap tracking-wider">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 opacity-20">
        <div className="w-px h-10 bg-gold animate-pulse" />
      </div>
    </section>
  );
}
