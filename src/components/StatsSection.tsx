"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Star, RefreshCw, Smile } from "lucide-react";

const STATS = [
  { value: 7892, label: "Happy Guests", suffix: "+", icon: Users },
  { value: 415, label: "Celebrity Stays", suffix: "+", icon: Star },
  { value: 6781, label: "Return Visits", suffix: "+", icon: RefreshCw },
  { value: 6123, label: "5-Star Reviews", suffix: "+", icon: Smile },
];

function useCountUp(target: number, inView: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return count;
}

function StatCard({ stat, index }: { stat: typeof STATS[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const count = useCountUp(stat.value, inView);
  const Icon = stat.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.23, 1, 0.32, 1] }}
      className="flex flex-col items-center text-center group"
    >
      <div className="w-16 h-16 rounded-full border border-gold/20 flex items-center justify-center mb-6 group-hover:bg-gold group-hover:border-gold transition-all duration-700">
        <Icon className="w-6 h-6 text-gold group-hover:text-foreground transition-colors duration-700" />
      </div>
      <div className="text-4xl md:text-6xl font-serif text-background tracking-tight leading-none mb-3">
        {count.toLocaleString()}<span className="text-gold">{stat.suffix}</span>
      </div>
      <p className="text-[10px] uppercase tracking-[0.5em] font-black text-background/40">
        {stat.label}
      </p>
    </motion.div>
  );
}

export function StatsSection() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-12 bg-foreground relative overflow-hidden">
      {/* BG decorative */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[25vw] font-serif font-black text-white/[0.02] select-none pointer-events-none uppercase">
        Grand
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <p className="text-[10px] uppercase tracking-[0.8em] font-black text-gold mb-4 italic">By the Numbers</p>
          <h2 className="text-2xl md:text-4xl font-serif text-background tracking-tighter leading-tight italic">
            Trusted by <span className="text-gold font-light">Mumbai's finest.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 text-background">
          {STATS.map((stat, i) => (
            <StatCard key={i} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
