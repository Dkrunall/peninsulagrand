"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Plane, Train, MapPin } from "lucide-react";

const COMMUTE_POINTS = [
  {
    icon: Plane,
    name: "International Airport",
    sub: "Chhatrapati Shivaji Maharaj",
    distance: "2.7",
    unit: "km",
    tag: "Airport",
  },
  {
    icon: MapPin,
    name: "Sakinaka Metro Station",
    sub: "Mumbai Metro Line 1",
    distance: "400",
    unit: "m",
    tag: "Metro",
  },
  {
    icon: Train,
    name: "Andheri Railway Station",
    sub: "Western & Harbour Line",
    distance: "5.3",
    unit: "km",
    tag: "Railway",
  },
];

export function NearbyCommute() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-16 md:py-32 px-6 md:px-12 bg-background relative overflow-hidden">
      {/* Decorative ring */}
      <div className="absolute -right-40 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-foreground/5 pointer-events-none hidden md:block" />
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-gold/8 pointer-events-none hidden md:block" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
          >
            <p className="text-[10px] uppercase tracking-[0.6em] font-black text-gold mb-5 md:mb-8 italic">Prime Location</p>
            <h2 className="text-3xl md:text-7xl font-serif text-foreground mb-6 md:mb-10 tracking-tighter leading-tight md:leading-none italic">
              Everything<br/> <span className="text-gold font-light">at your doorstep.</span>
            </h2>
            <p className="text-base md:text-xl text-foreground/60 font-serif italic leading-relaxed mb-8 md:mb-12 md:max-w-md">
              A five minutes' drive from the International Airport, situated right next to the Sakinaka Metro Station. The Peninsula Grand places the entire city within arm's reach.
            </p>
            <a
              href="https://www.google.com/maps/dir//Hotel+Peninsula+Grand,+Junction,+Lokmanya+Tilak+Nagar,+Saki+Naka,+Andheri,+Mumbai,+Maharashtra+400072"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-foreground text-background px-10 py-5 rounded-full font-black text-[10px] uppercase tracking-[0.4em] hover:bg-gold hover:text-foreground transition-all duration-700 shadow-xl group"
              data-cursor="pointer"
            >
              Get Directions
              <span className="group-hover:translate-x-2 transition-transform inline-block">→</span>
            </a>
          </motion.div>

          {/* Right: Distance Cards */}
          <div className="flex flex-col gap-4 md:gap-6">
            {COMMUTE_POINTS.map((point, i) => {
              const Icon = point.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: i * 0.15, ease: [0.23, 1, 0.32, 1] }}
                  className="flex items-center gap-5 md:gap-8 p-5 md:p-8 rounded-[24px] md:rounded-[32px] border border-foreground/8 hover:border-gold/30 hover:bg-gold/3 transition-all duration-700 group"
                >
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-foreground/5 group-hover:bg-gold group-hover:text-foreground flex items-center justify-center shrink-0 transition-all duration-700">
                    <Icon className="w-6 h-6 text-foreground group-hover:text-background transition-colors duration-700" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[9px] uppercase tracking-[0.5em] font-black text-gold mb-1">{point.tag}</p>
                    <p className="text-base md:text-xl font-serif text-foreground font-bold leading-tight">{point.name}</p>
                    <p className="text-xs text-foreground/40 italic mt-0.5">{point.sub}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-3xl md:text-5xl font-serif font-black text-foreground group-hover:text-gold transition-colors duration-700 leading-none">
                      {point.distance}
                    </span>
                    <span className="text-xs uppercase tracking-widest font-black text-foreground/40 ml-1">{point.unit}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
