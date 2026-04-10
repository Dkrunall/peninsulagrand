"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";

export function InquiryForm() {
  return (
    <section className="py-20 md:py-40 bg-foreground relative overflow-hidden">
      {/* Decorative background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
        <span className="text-[30vw] font-serif font-black text-white/[0.02] uppercase tracking-tighter">Inquiry</span>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12 md:mb-24">
           <p className="text-[10px] uppercase tracking-[0.8em] font-black text-gold mb-4 md:mb-8 italic">The Digital Atrium</p>
           <h2 className="text-3xl md:text-9xl font-serif text-background tracking-tighter leading-tight md:leading-none italic">
             Leave a <span className="text-gold font-light">Message.</span>
           </h2>
        </div>

        <form className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Name */}
            <div className="group relative">
              <label className="text-[10px] uppercase tracking-widest text-gold font-black mb-4 block opacity-60 group-focus-within:opacity-100 transition-opacity">Full Name</label>
              <input 
                type="text" 
                placeholder="Johnathan Doe" 
                className="w-full bg-transparent border-b border-white/10 py-6 text-xl text-background focus:outline-none focus:border-gold transition-colors font-serif italic"
              />
            </div>

            {/* Email */}
            <div className="group relative">
              <label className="text-[10px] uppercase tracking-widest text-gold font-black mb-4 block opacity-60 group-focus-within:opacity-100 transition-opacity">Email Address</label>
              <input 
                type="email" 
                placeholder="doe@luxury.com" 
                className="w-full bg-transparent border-b border-white/10 py-6 text-xl text-background focus:outline-none focus:border-gold transition-colors font-serif italic"
              />
            </div>
          </div>

          {/* Subject */}
          <div className="group relative">
            <label className="text-[10px] uppercase tracking-widest text-gold font-black mb-4 block opacity-60 group-focus-within:opacity-100 transition-opacity">Subject</label>
            <input 
              type="text" 
              placeholder="Inquiry regarding Presidential Suite" 
              className="w-full bg-transparent border-b border-white/10 py-6 text-xl text-background focus:outline-none focus:border-gold transition-colors font-serif italic"
            />
          </div>

          {/* Message */}
          <div className="group relative">
            <label className="text-[10px] uppercase tracking-widest text-gold font-black mb-4 block opacity-60 group-focus-within:opacity-100 transition-opacity">Your Message</label>
            <textarea 
              rows={4}
              placeholder="Tell us about your requirements..." 
              className="w-full bg-transparent border-b border-white/10 py-6 text-xl text-background focus:outline-none focus:border-gold transition-colors font-serif italic resize-none"
            />
          </div>

          <div className="pt-8 md:pt-12 flex justify-center">
            <button 
              type="submit"
              className="w-full md:w-auto group flex items-center justify-center gap-6 bg-background text-foreground px-8 md:px-16 py-5 md:py-6 rounded-full font-black text-xs uppercase tracking-[0.5em] hover:bg-gold hover:text-background transition-all duration-700 shadow-2xl"
            >
              Send Message
              <Send className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
