"use client";

import { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Home, Info, Bed, Utensils, Phone, Sparkles, Briefcase, Heart } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: Info },
  { name: "Rooms", href: "/rooms", icon: Bed },
  {
    name: "Experience",
    href: "/events",
    icon: Sparkles,
    subItems: [
      { name: "Events", href: "/events", icon: Briefcase },
      { name: "Weddings", href: "/weddings", icon: Heart },
    ]
  },
  { name: "Dining", href: "/dining", icon: Utensils },
  { name: "Contact", href: "/contact", icon: Phone },
];

export function FloatingNav() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(true);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setVisible(false);
      setHoveredItem(null);
    } else {
      setVisible(true);
    }
  });

  const isActive = (item: typeof NAV_ITEMS[number]) => {
    if (item.href === "/") return pathname === "/";
    if (item.subItems) return item.subItems.some((sub) => pathname.startsWith(sub.href));
    return pathname.startsWith(item.href);
  };

  return (
    <AnimatePresence mode="wait">
      <motion.nav
        initial={{ y: 100, opacity: 0, x: "-50%" }}
        animate={{ 
          y: visible ? 0 : 100, 
          opacity: visible ? 1 : 0,
          x: "-50%"
        }}
        transition={{ duration: 0.6, ease: [0.165, 0.84, 0.44, 1] }}
        className="fixed bottom-10 left-1/2 z-[100] flex items-center justify-center pointer-events-none w-full px-6"
      >
        <div className="glass shadow-2xl rounded-full p-1.5 md:p-2 flex items-center gap-0.5 border border-white/10 pointer-events-auto backdrop-blur-3xl bg-background/40">
          <div className="flex items-center gap-0.5 md:gap-2 px-1 md:px-2">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item);
              return (
                <div
                  key={item.name}
                  onMouseEnter={() => setHoveredItem(item.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className="relative"
                >
                  {item.subItems ? (
                    // Items with a submenu: button that toggles on tap (mobile) and hover (desktop)
                    <button
                      onClick={() => setHoveredItem(hoveredItem === item.name ? null : item.name)}
                      className="group relative p-2.5 md:px-5 md:py-3 rounded-full transition-all duration-500 overflow-hidden block outline-none hover:bg-foreground/5"
                      data-cursor="pointer"
                    >
                      <div className="relative z-10 flex items-center gap-3">
                        <item.icon
                          className={`w-4 h-4 md:w-5 md:h-5 transition-colors duration-500 ${
                            active ? "text-gold" : "text-foreground/50 group-hover:text-gold"
                          }`}
                        />
                        <span className={`hidden md:block text-[10px] font-black uppercase tracking-[0.2em] transition-colors duration-500 ${
                          active ? "text-foreground font-extrabold" : "text-foreground/50 group-hover:text-foreground"
                        }`}>
                          {item.name}
                        </span>
                      </div>
                      {active && (
                        <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gold" />
                      )}
                    </button>
                  ) : (
                  <Link
                    href={item.href}
                    className="group relative p-2.5 md:px-5 md:py-3 rounded-full transition-all duration-500 overflow-hidden block outline-none hover:bg-foreground/5"
                    data-cursor="pointer"
                  >
                    <div className="relative z-10 flex items-center gap-3">
                      <item.icon
                        className={`w-4 h-4 md:w-5 md:h-5 transition-colors duration-500 ${
                          active ? "text-gold" : "text-foreground/50 group-hover:text-gold"
                        }`}
                      />
                      <span className={`hidden md:block text-[10px] font-black uppercase tracking-[0.2em] transition-colors duration-500 ${
                        active ? "text-foreground font-extrabold" : "text-foreground/50 group-hover:text-foreground"
                      }`}>
                        {item.name}
                      </span>
                    </div>
                    {/* Active gold dot indicator */}
                    {active && (
                      <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gold" />
                    )}
                  </Link>
                  )}

                  {/* Upward Dropdown */}
                  <AnimatePresence>
                    {item.subItems && hoveredItem === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: -10, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-48 md:w-56 glass rounded-[32px] p-3 md:p-4 border border-white/10 shadow-2xl overflow-hidden"
                      >
                        <div className="flex flex-col gap-1.5 md:gap-2 relative z-10">
                          {item.subItems.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-2xl hover:bg-gold hover:text-background transition-all duration-500 group/sub outline-none"
                            >
                              <sub.icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-gold group-hover/sub:text-background transition-colors" />
                              <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em]">
                                {sub.name}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          <div className="w-px h-6 bg-foreground/10 mx-1 hidden md:block"></div>

          <a 
            href="https://bookings.peninsulagrand.com/?propertyId=8984" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-foreground text-background px-5 md:px-8 py-2.5 md:py-3 rounded-full font-black text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] hover:bg-gold hover:text-foreground transition-all duration-700 shadow-xl ml-1 md:ml-2 block outline-none" 
            data-cursor="pointer"
          >
            Reserve
          </a>
        </div>
      </motion.nav>
    </AnimatePresence>
  );
}
