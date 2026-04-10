"use client";

import Image from "next/image";
import { Wifi, Car, Utensils, Coffee, Phone, Users, Dumbbell, Waves } from "lucide-react";

const AMENITIES = [
  { icon: Wifi,     title: "Free High-Speed WiFi",  desc: "Gigabit internet throughout the hotel.",             image: "/new/DSC03915.jpg" },
  { icon: Car,      title: "Free Parking",           desc: "Complimentary secure on-site parking.",             image: "/new/DSC05946.jpg" },
  { icon: Utensils, title: "4 Restaurants",          desc: "Indian, Continental & more — all on-site.",         image: "/new/DSC05707.jpg" },
  { icon: Coffee,   title: "24/7 Room Service",      desc: "Food & beverages delivered anytime to your door.",  image: "/new/DSC03976.jpg" },
  { icon: Dumbbell, title: "Fitness Centre",         desc: "Fully equipped gym, open all day.",                 image: "/new/DSC05866.jpg" },
  { icon: Users,    title: "Banquet & Events",       desc: "Halls for weddings, conferences & private events.", image: "/new/DSC05998.jpg" },
  { icon: Phone,    title: "24/7 Concierge",         desc: "Our team handles travel, bookings & more.",         image: "/new/DSC04025.jpg" },
  { icon: Waves,    title: "Laundry Service",        desc: "Professional garment care on request.",             image: "/new/DSC04050.jpg" },
];

export function BentoSection() {
  return (
    <section className="bg-background py-20 md:py-28 px-6 md:px-16" id="amenities">

      {/* Header */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12 md:mb-16">
          <div>
            <p className="text-[9px] uppercase tracking-[0.8em] font-black text-gold mb-3 italic">What's Included</p>
            <h2 className="text-2xl md:text-4xl font-serif text-foreground tracking-tighter leading-tight">
              Everything You Need, <br className="hidden md:block" />
              <span className="italic text-gold font-light">Already Here</span>
            </h2>
          </div>
          <p className="text-sm text-foreground/45 leading-relaxed max-w-xs italic">
            All amenities are included with every booking — no hidden fees.
          </p>
        </div>

        {/* Modern card grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {AMENITIES.map((item, i) => (
            <div
              key={i}
              className="group relative rounded-2xl overflow-hidden cursor-default"
              style={{ aspectRatio: "1 / 1.1" }}
            >
              {/* Background image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />

              {/* Always-on dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />

              {/* Hover tint */}
              <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/10 transition-colors duration-500" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-between p-4 md:p-5">
                {/* Icon top-left */}
                <div className="w-9 h-9 md:w-11 md:h-11 rounded-xl bg-gold flex items-center justify-center shadow-lg flex-shrink-0">
                  <item.icon className="w-4 h-4 md:w-5 md:h-5 text-black" />
                </div>

                {/* Text bottom */}
                <div>
                  <h4 className="text-sm md:text-base font-bold text-white leading-snug mb-1 group-hover:text-gold transition-colors duration-300">
                    {item.title}
                  </h4>
                  <p className="text-xs text-white/55 leading-relaxed hidden sm:block group-hover:text-white/80 transition-colors duration-300">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom strip */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 md:gap-10 py-6 border-t border-foreground/5">
          {["Free WiFi", "Free Parking", "Breakfast Included", "24/7 Service", "No Hidden Charges"].map((t, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-gold" />
              <span className="text-xs font-semibold text-foreground/45 uppercase tracking-wide">{t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
