"use client";

import { Check, Star, Wind, Wifi, Tv, Coffee } from "lucide-react";
import { Room } from "@/data/rooms";

export function RoomAmenities({ room }: { room: Room }) {
  return (
    <section className="py-40 bg-background px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32">
        
        {/* Narrative Side */}
        <div>
          <p className="text-[10px] uppercase tracking-[0.6em] font-black text-gold mb-10 italic pl-1">The Sanctuary</p>
          <h2 className="text-3xl md:text-6xl font-serif text-foreground mb-8 md:mb-12 tracking-tighter leading-tight italic">
            Architectural <span className="text-gold font-light">Serenity.</span>
          </h2>
          <p className="text-lg md:text-2xl text-foreground/70 font-serif leading-relaxed italic mb-12">
            {room.longDesc}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {room.features.map((feature, i) => (
              <div key={i} className="flex items-center gap-4 group">
                 <div className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center group-hover:bg-gold transition-colors duration-500">
                    <Star className="w-4 h-4 text-gold group-hover:text-background transition-colors" />
                 </div>
                 <span className="text-sm font-bold text-foreground/80 italic">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Global Directory Side (Amenities) */}
        <div className="bg-slate/5 rounded-[64px] p-12 md:p-20 border border-foreground/5 relative overflow-hidden">
           <div className="absolute top-0 right-0 p-12 opacity-5">
              <Star className="w-40 h-40 text-foreground" />
           </div>
           
           <h3 className="text-[10px] uppercase tracking-[0.8em] font-black text-gold mb-16 italic">Curated Provisions</h3>
           
           <div className="grid grid-cols-1 gap-12 relative z-10">
              {room.amenities.map((amenity, i) => (
                <div key={i} className="flex items-center gap-8 group">
                   <div className="w-px h-12 bg-gold/30 group-hover:h-16 group-hover:bg-gold transition-all duration-700"></div>
                   <div>
                      <span className="text-2xl font-serif text-foreground group-hover:text-gold transition-colors duration-500 italic">
                        {amenity}
                      </span>
                   </div>
                </div>
              ))}
           </div>

           <div className="mt-20 pt-12 border-t border-foreground/5 flex items-center gap-8">
              <div className="flex gap-4">
                 <Wifi className="w-5 h-5 text-gold/40" />
                 <Tv className="w-5 h-5 text-gold/40" />
                 <Coffee className="w-5 h-5 text-gold/40" />
                 <Wind className="w-5 h-5 text-gold/40" />
              </div>
              <span className="text-[9px] uppercase tracking-[0.4em] font-black text-foreground/40 italic">Signature standards in every room</span>
           </div>
        </div>

      </div>
    </section>
  );
}
