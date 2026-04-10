"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BedDouble, Users } from "lucide-react";

const ROOMS = [
  {
    title: "Deluxe Room",
    category: "Classic Sophistication",
    image: "/new/DSC04040.jpg",
    slug: "deluxe-room",
    size: "250 sq.ft.",
    price: "Rs. 8,000",
    guests: "Twin / King",
    description:
      "The Deluxe rooms offer 250 sq.ft. of well-appointed space for the always-on-the-move traveller with a Twin / King size bed, uninterrupted hi-speed Wifi, a laptop-compatible safe, Tea / Coffee maker, smart key card locks and Direct Dial facility.",
  },
  {
    title: "Executive Room",
    category: "Business Elegance",
    image: "/new/DSC05908.jpg",
    slug: "executive-room",
    size: "Stunning Views",
    price: "Rs. 9,000",
    guests: "King",
    description:
      "Executive room is ideal for both business and leisure travelers, functional yet luxurious, with the most stunning view of the beach — making every stay both productive and deeply satisfying.",
  },
  {
    title: "Amor Suite",
    category: "Romance & Art",
    image: "/new/DSC05986.jpg",
    slug: "amor-suite",
    size: "550 sq.ft.",
    price: "Rs. 11,000",
    guests: "King",
    description:
      "Indulge in 550 sq.ft. of personal space that pampers you. Unwind on the massaging chair with a King size bed, uninterrupted hi-speed Wifi, laptop compatible safe, in-room Tea / Coffee maker, and smart key.",
  },
  {
    title: "Platinum Suite",
    category: "Modern / Elite",
    image: "/new/DSC05961.jpg",
    slug: "platinum-suite",
    size: "700 sq.ft.",
    price: "Rs. 12,000",
    guests: "King",
    description:
      "A perfect setting for the jet-set elite. Experience 700 sq.ft. of bespoke luxury that spools and revives the energies within for that important meeting the next day.",
  },
  {
    title: "Presidential Suite",
    category: "Iconic Opulence",
    image: "/new/DSC05993.jpg",
    slug: "presidential-suite",
    size: "900 sq.ft.",
    price: "Rs. 15,000",
    guests: "King",
    description:
      "The ultimate abode for the travelling king. Experience 900 sq.ft. of opulence, equipped with an in-room bar counter and a mini bar — fully stocked with the finest spirits from across the world.",
  },
];

export function HorizontalRooms() {
  const [active, setActive] = useState(0);
  const room = ROOMS[active];

  return (
    <section className="bg-[#0A0A0A]" id="suites">

      {/* Section header */}
      <div className="px-6 md:px-16 pt-14 md:pt-20 pb-8 md:pb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-3">
        <div>
          <p className="text-[9px] uppercase tracking-[0.8em] font-black text-gold mb-2 italic">The Collection</p>
          <h2 className="text-2xl md:text-4xl font-serif text-white tracking-tighter leading-tight">
            Our <span className="text-gold font-light italic">Residencies</span>
          </h2>
        </div>
        <Link
          href="/rooms"
          className="hidden md:flex items-center gap-2 text-[9px] uppercase tracking-[0.4em] font-black text-white/30 hover:text-gold transition-colors duration-500 group"
        >
          View all rooms
          <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
        </Link>
      </div>

      {/* ── DESKTOP: Featured + List ── */}
      <div className="hidden md:grid md:grid-cols-[1fr_360px] gap-0 px-16 pb-20 h-[80vh]">

        {/* Featured image panel */}
        <div className="relative rounded-[32px] overflow-hidden bg-black">
          {ROOMS.map((r, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${i === active ? "opacity-100" : "opacity-0"}`}
            >
              <Image
                src={r.image}
                alt={r.title}
                fill
                sizes="65vw"
                className="object-cover"
                priority={i === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            </div>
          ))}

          {/* Bottom overlay info */}
          <div className="absolute bottom-0 left-0 right-0 p-10 z-10">
            <p className="text-[9px] uppercase tracking-[0.6em] font-black text-gold mb-2 italic transition-all duration-500">
              {room.category}
            </p>
            <h3 className="text-4xl md:text-5xl font-serif text-white italic tracking-tighter mb-3 transition-all duration-500">
              {room.title}
            </h3>
            <p className="text-sm font-serif text-white/50 italic mb-6 max-w-lg leading-relaxed transition-all duration-500">
              {room.description}
            </p>

            {/* Stats row */}
            <div className="flex items-center gap-8 mb-8">
              <div className="flex items-center gap-2">
                <BedDouble className="w-3.5 h-3.5 text-gold" />
                <span className="text-[9px] uppercase tracking-[0.3em] font-black text-white/50">{room.size}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-3.5 h-3.5 text-gold" />
                <span className="text-[9px] uppercase tracking-[0.3em] font-black text-white/50">{room.guests}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[9px] uppercase tracking-[0.3em] font-black text-gold">{room.price}</span>
                <span className="text-[9px] uppercase tracking-[0.2em] font-black text-white/30">/ night</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex items-center gap-4">
              <a
                href="https://bookings.peninsulagrand.com/?propertyId=8984"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold text-black px-8 py-3.5 rounded-full font-black text-[9px] uppercase tracking-[0.3em] hover:bg-white transition-all duration-500"
              >
                Reserve Now
              </a>
              <Link
                href={`/rooms/${room.slug}`}
                className="border border-white/20 text-white px-8 py-3.5 rounded-full font-black text-[9px] uppercase tracking-[0.3em] hover:bg-white/10 transition-all duration-500"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>

        {/* Room list panel */}
        <div className="flex flex-col justify-center pl-8 gap-1">
          {ROOMS.map((r, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`group text-left px-6 py-5 rounded-2xl transition-all duration-400 border ${
                i === active
                  ? "bg-white/5 border-white/10"
                  : "border-transparent hover:bg-white/[0.03] hover:border-white/5"
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <span
                    className={`text-[8px] uppercase tracking-[0.5em] font-black block mb-1 transition-colors duration-300 ${
                      i === active ? "text-gold" : "text-white/20 group-hover:text-white/35"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h4
                    className={`text-base font-serif italic tracking-tight transition-colors duration-300 ${
                      i === active ? "text-white" : "text-white/40 group-hover:text-white/70"
                    }`}
                  >
                    {r.title}
                  </h4>
                  <div className="flex items-center gap-3 mt-1">
                    <span
                      className={`text-[8px] uppercase tracking-[0.2em] font-black transition-colors duration-300 ${
                        i === active ? "text-gold" : "text-white/15"
                      }`}
                    >
                      {r.price}
                    </span>
                    {i === active && (
                      <span className="text-[7px] uppercase tracking-[0.2em] font-black text-white/25">/ night</span>
                    )}
                  </div>
                </div>
                <ArrowUpRight
                  className={`w-4 h-4 mt-1 transition-all duration-300 flex-shrink-0 ${
                    i === active ? "text-gold opacity-100" : "text-white/20 opacity-0 group-hover:opacity-100"
                  }`}
                />
              </div>
              {i === active && <div className="mt-3 w-8 h-px bg-gold" />}
            </button>
          ))}

          <div className="px-6 mt-4">
            <Link
              href="/rooms"
              className="flex items-center justify-between w-full py-4 border-t border-white/10 group"
            >
              <span className="text-[8px] uppercase tracking-[0.4em] font-black text-white/30 group-hover:text-gold transition-colors duration-500">
                Explore all rooms
              </span>
              <ArrowUpRight className="w-3.5 h-3.5 text-gold" />
            </Link>
          </div>
        </div>
      </div>

      {/* ── MOBILE: Vertical card stack ── */}
      <div className="md:hidden px-6 flex flex-col gap-5 pb-12">
        {ROOMS.map((r, i) => (
          <Link
            href={`/rooms/${r.slug}`}
            key={i}
            className="block relative w-full rounded-[20px] overflow-hidden bg-black"
          >
            {/* Image */}
            <div className="relative w-full h-[55vw]">
              <Image
                src={r.image}
                alt={r.title}
                fill
                sizes="90vw"
                className="object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
            </div>

            {/* Info below image */}
            <div className="p-5 pt-0 -mt-10 relative z-10">
              <span className="text-[8px] uppercase tracking-[0.5em] font-black text-gold block mb-1.5">
                {r.category}
              </span>
              <h3 className="text-xl font-serif text-white italic tracking-tight leading-tight mb-2">
                {r.title}
              </h3>
              <p className="text-xs font-serif text-white/40 italic leading-relaxed mb-4 line-clamp-2">
                {r.description}
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-sm font-serif font-black text-gold">{r.price}</span>
                  <span className="text-[8px] uppercase tracking-[0.2em] font-black text-white/25 ml-1">/ night</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[8px] uppercase tracking-[0.2em] font-black text-white/30">{r.size}</span>
                  <div className="w-7 h-7 rounded-full bg-gold flex items-center justify-center">
                    <ArrowUpRight className="w-3 h-3 text-black" />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}

        {/* View all */}
        <Link
          href="/rooms"
          className="flex items-center justify-center gap-3 py-5 border border-white/10 rounded-2xl hover:border-gold/30 transition-all duration-500 group"
        >
          <span className="text-[9px] uppercase tracking-[0.4em] font-black text-white/30 group-hover:text-gold transition-colors duration-500">
            View All Rooms
          </span>
          <ArrowUpRight className="w-3.5 h-3.5 text-gold" />
        </Link>
      </div>
    </section>
  );
}
