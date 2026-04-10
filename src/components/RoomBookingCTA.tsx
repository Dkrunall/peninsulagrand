"use client";

import { ArrowRight } from "lucide-react";
import { Room } from "@/data/rooms";

export function RoomBookingCTA({ room }: { room: Room }) {
  return (
    <section className="py-40 bg-foreground relative overflow-hidden">
      {/* Background Kinetic Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
        <span className="text-[30vw] md:text-[20vw] font-serif font-black text-background/[0.03] uppercase tracking-tighter whitespace-nowrap">
           {room.name.split(" ")[0]}
        </span>
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <p className="text-[10px] uppercase tracking-[0.8em] font-black text-gold mb-10 italic pl-1">Final Discovery</p>
        <h2 className="text-2xl md:text-5xl font-serif text-background mb-12 md:mb-16 tracking-tighter leading-tight italic">
           Experience the <span className="text-gold font-light">Elegance</span> of {room.name}.
        </h2>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mt-12">
           <a 
             href="https://bookings.peninsulagrand.com/?propertyId=8984"
             target="_blank"
             rel="noopener noreferrer"
             className="w-full md:w-auto group flex items-center justify-center gap-8 bg-background text-foreground px-12 md:px-16 py-5 md:py-6 rounded-full font-black text-[10px] md:text-xs uppercase tracking-[0.4em] md:tracking-[0.6em] hover:bg-gold hover:text-foreground transition-all duration-700 shadow-2xl"
           >
             Reserve Now
             <ArrowRight className="w-4 h-4 group-hover:translate-x-3 transition-transform" />
           </a>
           
           <button className="w-full md:w-auto border border-background/20 text-background px-12 md:px-16 py-5 md:py-6 rounded-full font-black text-[10px] md:text-xs uppercase tracking-[0.4em] md:tracking-[0.6em] hover:bg-background/10 transition-all duration-700">
             Contact Concierge
           </button>
        </div>

        <div className="mt-20 pt-12 opacity-30">
           <p className="text-[9px] uppercase tracking-[0.3em] font-black text-background pl-1">Subject to availability • Bespoke services included</p>
        </div>
      </div>
    </section>
  );
}
