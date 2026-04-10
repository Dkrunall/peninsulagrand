"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Send, Instagram, Facebook, Twitter, MapPin, Phone, Mail } from "lucide-react";

export function ModernFooter() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer id="footer" className="bg-foreground text-background py-16 md:py-24 px-6 md:px-12 relative overflow-hidden">
      {/* Background Kinetic Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-serif font-black text-[#ffffff03] select-none pointer-events-none uppercase">
        Grand
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-20 mb-14 md:mb-32">
          {/* Main Statement */}
          <div className="md:col-span-6">
            <h2 className="text-2xl md:text-5xl font-serif text-background mb-8 md:mb-12 leading-tight md:leading-[1.05] tracking-tight">
              Crafting <br className="hidden md:block" /> the future of <br className="hidden md:block" /> <span className="text-gold italic">hospitality</span> in Mumbai.
            </h2>
            <div className="flex gap-4 md:gap-6">
              <a
                href="https://www.facebook.com/PeninsulaGrandHotel/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 md:w-14 md:h-14 rounded-full border border-background/10 flex items-center justify-center hover:bg-gold hover:text-foreground hover:border-gold transition-all duration-700 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]"
                data-cursor="pointer"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <a
                href="https://www.instagram.com/hotelpeninsulagrand/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 md:w-14 md:h-14 rounded-full border border-background/10 flex items-center justify-center hover:bg-gold hover:text-foreground hover:border-gold transition-all duration-700 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]"
                data-cursor="pointer"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 md:w-6 md:h-6" />
              </a>
            </div>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-3 space-y-10 pt-4">
            <h3 className="text-[10px] uppercase tracking-[0.6em] font-black text-background/30 border-l border-gold/50 pl-4">Inquiries</h3>
            <div className="space-y-6">
              <a href="mailto:reservations@peninsulagrand.co.in" className="flex items-center gap-4 group" data-cursor="pointer">
                 <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center shrink-0 group-hover:bg-gold transition-all duration-700 shadow-xl">
                   <Mail className="w-4 h-4 text-foreground group-hover:text-background transition-colors" />
                 </div>
                 <span className="font-bold text-sm tracking-wide group-hover:text-gold transition-colors duration-500 underline underline-offset-8 decoration-gold/0 group-hover:decoration-gold/100">reservations@peninsulagrand.co.in</span>
              </a>
              <a href="tel:02228519191" className="flex items-center gap-4 group" data-cursor="pointer">
                 <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center shrink-0 group-hover:bg-gold transition-all duration-700 shadow-xl">
                   <Phone className="w-4 h-4 text-foreground group-hover:text-background transition-colors" />
                 </div>
                 <span className="font-bold text-sm tracking-wide group-hover:text-gold transition-colors duration-500 underline underline-offset-8 decoration-gold/0 group-hover:decoration-gold/100">022 2851 9191</span>
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="md:col-span-3 space-y-10 pt-4">
            <h3 className="text-[10px] uppercase tracking-[0.6em] font-black text-background/30 border-l border-gold/50 pl-4">Sanctuary</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center shrink-0 shadow-lg">
                  <MapPin className="w-4 h-4 text-foreground" />
                </div>
                <span className="font-medium opacity-60 text-sm leading-relaxed">
                  Junction of LBS & Andheri-Kurla Road, Saki Naka, Mumbai 400072
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 md:pt-20 border-t border-background/5 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-12 text-center md:text-left">
          <div className="flex items-center justify-center p-4 bg-background rounded-full shadow-2xl group cursor-pointer hover:bg-gold transition-all duration-700" data-cursor="pointer">
            <Image 
              src="/pgh.png" 
              alt="Peninsula Grand Logo" 
              width={60} 
              height={60}
              style={{ width: '60px', height: 'auto' }}
              className="object-contain group-hover:scale-110 transition-transform duration-700" 
            />
          </div>
          <p className="text-[10px] tracking-[0.5em] uppercase font-black opacity-20">
            © {currentYear} Peninsula Grand Hotel. Managed by Peninsula Hospitality Group.
          </p>
          <div className="flex gap-16 text-[10px] uppercase tracking-[0.4em] font-black opacity-40">
            <a href="#" className="hover:text-gold transition-colors" data-cursor="pointer">Privacy</a>
            <a href="#" className="hover:text-gold transition-colors" data-cursor="pointer">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
