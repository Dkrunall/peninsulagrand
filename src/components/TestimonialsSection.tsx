"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Hanan Azad",
    role: "Business Traveler",
    text: "The buffet menu has a wide choice of assorted savouries. Though I was running late, Mr. Jagdish (The Restaurant Manager) was very helpful and courteous to keep the buffet running for us. Exceptional service.",
    rating: 5
  },
  {
    name: "Annette Black",
    role: "Leisure Guest",
    text: "I had lunch buffet—it was a great time for me. The staff is very friendly, great service, and highly recommend. A true gem in Mumbai.",
    rating: 5
  },
  {
    name: "Jacob Jones",
    role: "Club Enthusiast",
    text: "Excellent Hotel! This property also accommodates two impact-creating Clubs: Mitron and Opa. Even the buffet is amazing and finger-licking good. Best place for nightlife and stay.",
    rating: 5
  },
  {
    name: "Peek Thakul",
    role: "Corporate Client",
    text: "We had our office party at this location. Good hangout, DJ music, awesome experience, and the food was incredible. I really like this place for group events.",
    rating: 5
  }
];

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, []);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95
    })
  };

  return (
    <section className="py-24 md:py-40 bg-foreground relative overflow-hidden">
      {/* Decorative large quote */}
      <Quote className="absolute -top-10 -left-10 w-[30vw] h-[30vw] text-background/[0.03] rotate-12" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">
        <div className="text-center mb-16 md:mb-24">
          <p className="text-[10px] uppercase tracking-[0.8em] font-black text-gold mb-6 italic">Voices of Excellence</p>
          <h2 className="text-2xl md:text-5xl font-serif text-background tracking-tighter italic">
            Our guests <span className="text-gold font-light">love us.</span>
          </h2>
        </div>

        <div className="relative w-full max-w-4xl min-h-[480px] md:min-h-[400px] flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.6 },
                scale: { duration: 0.6 }
              }}
              className="absolute w-full flex flex-col items-center text-center px-4"
            >
              <div className="flex gap-1 mb-10">
                {[...Array(TESTIMONIALS[index].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>
              
              <p className="text-xl md:text-4xl font-serif text-background italic leading-tight mb-12 md:mb-16">
                "{TESTIMONIALS[index].text}"
              </p>
              
              <div className="space-y-2">
                <h4 className="text-xl md:text-2xl font-serif text-gold italic">{TESTIMONIALS[index].name}</h4>
                <p className="text-[10px] uppercase tracking-[0.4em] font-black text-background/40">{TESTIMONIALS[index].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex gap-8 mt-16 md:mt-24">
          <button 
            onClick={prev}
            className="w-14 h-14 rounded-full border border-background/10 flex items-center justify-center text-background hover:bg-gold hover:text-foreground hover:border-gold transition-all duration-500"
            data-cursor="pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={next}
            className="w-14 h-14 rounded-full border border-background/10 flex items-center justify-center text-background hover:bg-gold hover:text-foreground hover:border-gold transition-all duration-500"
            data-cursor="pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
