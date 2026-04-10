"use client";

import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";

export function ContactGrid() {
  return (
    <section className="py-16 md:py-40 bg-background px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
        
        {/* Left Side: Directory */}
        <div className="flex flex-col justify-center">
          <p className="text-[10px] uppercase tracking-[0.6em] font-black text-gold mb-5 md:mb-8 italic">The Address</p>
          <h2 className="text-2xl md:text-5xl font-serif text-foreground mb-8 md:mb-12 tracking-tighter leading-tight md:leading-none italic">
            Sakinaka <span className="text-gold font-light">Junction.</span>
          </h2>
          
          <div className="space-y-10 md:space-y-16 mt-6 md:mt-10">
            {/* Address */}
            <div className="flex gap-6 md:gap-8 group">
              <div className="w-11 h-11 md:w-12 md:h-12 rounded-full border border-foreground/10 flex items-center justify-center shrink-0 group-hover:bg-gold group-hover:border-gold transition-all duration-700">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-foreground group-hover:text-background" />
              </div>
              <p className="text-base md:text-3xl font-serif text-foreground/70 leading-relaxed italic">
                Andheri East, Mumbai — 400072,<br/>
                Maharashtra, India.
              </p>
            </div>

            {/* Lines */}
            <div className="flex gap-6 md:gap-8 group">
              <div className="w-11 h-11 md:w-12 md:h-12 rounded-full border border-foreground/10 flex items-center justify-center shrink-0 group-hover:bg-gold group-hover:border-gold transition-all duration-700">
                <Phone className="w-4 h-4 md:w-5 md:h-5 text-foreground group-hover:text-background" />
              </div>
              <div>
                 <p className="text-base md:text-3xl font-serif text-foreground/70 leading-relaxed italic mb-2 md:mb-4">
                  +91 22 2851 9191
                </p>
                <p className="text-base md:text-3xl font-serif text-foreground/70 leading-relaxed italic">
                  +91 22 6624 9100
                </p>
              </div>
            </div>

            {/* Emails */}
            <div className="flex gap-6 md:gap-8 group">
              <div className="w-11 h-11 md:w-12 md:h-12 rounded-full border border-foreground/10 flex items-center justify-center shrink-0 group-hover:bg-gold group-hover:border-gold transition-all duration-700">
                <Mail className="w-4 h-4 md:w-5 md:h-5 text-foreground group-hover:text-background" />
              </div>
              <div>
                <p className="text-sm md:text-2xl font-serif text-foreground/70 leading-relaxed italic mb-2 md:mb-4 hover:text-gold transition-colors cursor-pointer break-all md:break-words">
                  reservations@peninsulagrand.co.in
                </p>
                <p className="text-sm md:text-2xl font-serif text-foreground/70 leading-relaxed italic hover:text-gold transition-colors cursor-pointer break-all md:break-words">
                  fomanager@peninsulagrand.co.in
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Interactive Map & Social */}
        <div className="relative aspect-[4/3] md:aspect-square lg:aspect-auto min-h-[300px] lg:min-h-0 rounded-[32px] md:rounded-[64px] overflow-hidden group shadow-2xl border border-foreground/5 bg-slate/10">
          {/* Interactive Google Map with Cinematic Filter */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.1601007898!2d72.8872225!3d19.1009167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c87400000001%3A0xe7448d3d99e3199e!2sHotel%20Peninsula%20Grand!5e0!3m2!1sen!2sin!4v1712658000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: 'grayscale(0.4) contrast(1.1) brightness(1)' }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-700"
          ></iframe>
          
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background/40 via-transparent to-transparent"></div>
          
          {/* Social Pills */}
          <div className="absolute bottom-6 left-6 flex gap-4 z-10">
             <div className="glass p-5 rounded-full border-white/10 hover:bg-gold group/social transition-all duration-500 cursor-pointer shadow-2xl">
                <Instagram className="w-6 h-6 text-foreground group-hover/social:text-background" />
             </div>
             <div className="glass p-5 rounded-full border-white/10 hover:bg-gold group/social transition-all duration-500 cursor-pointer shadow-2xl">
                <Facebook className="w-6 h-6 text-foreground group-hover/social:text-background" />
             </div>
          </div>

          {/* Map branding tag */}
          <div className="absolute top-10 right-10 glass py-3 px-6 rounded-full border-white/10 z-10 pointer-events-none">
             <p className="text-[9px] uppercase tracking-[0.4em] font-black text-gold">Live Navigation</p>
          </div>
        </div>

      </div>
    </section>
  );
}
