"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Mail } from "lucide-react";

export function TopBar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-[200] bg-black/60 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">

        {/* Left — Phone */}
        <a
          href="tel:+912267347777"
          className="flex items-center gap-2 group"
        >
          <Phone className="w-3.5 h-3.5 text-gold flex-shrink-0" />
          <span className="text-[10px] md:text-xs font-black text-white/60 group-hover:text-gold transition-colors duration-300 tracking-wide">
            +91 22 6734 7777
          </span>
        </a>

        {/* Centre — Logo */}
        <Link href="/" className="absolute left-1/2 -translate-x-1/2">
          <Image
            src="/pgh.png"
            alt="Peninsula Grand Hotel"
            width={110}
            height={48}
            className="h-9 w-auto object-contain brightness-150"
            priority
          />
        </Link>

        {/* Right — Email */}
        <a
          href="mailto:reservations@peninsulagrand.com"
          className="flex items-center gap-2 group"
        >
          <Mail className="w-3.5 h-3.5 text-gold flex-shrink-0" />
          <span className="hidden sm:block text-[10px] md:text-xs font-black text-white/60 group-hover:text-gold transition-colors duration-300 tracking-wide">
            reservations@peninsulagrand.com
          </span>
          <span className="sm:hidden text-[10px] font-black text-white/60 group-hover:text-gold transition-colors duration-300">
            Email Us
          </span>
        </a>

      </div>
    </header>
  );
}
