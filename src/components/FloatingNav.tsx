"use client";

import { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Home, Info, Bed, Utensils, Phone, Sparkles, Heart, Briefcase, ExternalLink, BookOpen } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type SubItem = {
  name: string;
  href: string;
  external?: boolean;
  icon?: React.ElementType;
};

type NavGroup = {
  label: string;
  items: SubItem[];
};

type NavItem = {
  name: string;
  href: string;
  icon: React.ElementType;
  mobileHidden?: boolean;
  subItems?: SubItem[];
  groups?: NavGroup[];
};

const NAV_ITEMS: NavItem[] = [
  { name: "Home", href: "/", icon: Home },
  { name: "About Us", href: "/about", icon: Info, mobileHidden: true },
  {
    name: "Dining",
    href: "/dining",
    icon: Utensils,
    subItems: [
      { name: "OPA", href: "#", external: true },
      { name: "Mitron", href: "#", external: true },
      { name: "Waikiki", href: "#", external: true },
      { name: "Cafe Crema", href: "#", external: true },
      { name: "The Nest", href: "#", external: true },
    ],
  },
  {
    name: "Rooms",
    href: "/rooms",
    icon: Bed,
    groups: [
      {
        label: "Suites",
        items: [
          { name: "Presidential Suite", href: "/rooms/presidential-suite" },
          { name: "Platinum Suite", href: "/rooms/platinum-suite" },
          { name: "Amor Suite", href: "/rooms/amor-suite" },
        ],
      },
      {
        label: "Rooms",
        items: [
          { name: "Executive Room", href: "/rooms/executive-room" },
          { name: "Deluxe Room", href: "/rooms/deluxe-room" },
        ],
      },
    ],
  },
  {
    name: "Events",
    href: "/events",
    icon: Sparkles,
    subItems: [
      { name: "Wedding", href: "/weddings", icon: Heart },
      { name: "Corporate Events", href: "/events", icon: Briefcase },
    ],
  },
  { name: "Blog", href: "/blog", icon: BookOpen, mobileHidden: true },
  { name: "Contact Us", href: "/contact", icon: Phone },
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

  const isActive = (item: NavItem) => {
    if (item.href === "/") return pathname === "/";
    if (item.subItems) return item.subItems.some((sub) => pathname.startsWith(sub.href));
    if (item.groups) return item.groups.some((g) => g.items.some((sub) => pathname.startsWith(sub.href)));
    return pathname.startsWith(item.href);
  };

  const hasDropdown = (item: NavItem) => !!(item.subItems || item.groups);

  return (
    <AnimatePresence mode="wait">
      <motion.nav
        initial={{ y: 100, opacity: 0, x: "-50%" }}
        animate={{
          y: visible ? 0 : 100,
          opacity: visible ? 1 : 0,
          x: "-50%",
        }}
        transition={{ duration: 0.6, ease: [0.165, 0.84, 0.44, 1] }}
        className="fixed bottom-10 left-1/2 z-[100] flex items-center justify-center pointer-events-none w-full px-4"
      >
        <div className="glass shadow-2xl rounded-full p-1.5 md:p-2 flex items-center border border-white/10 pointer-events-auto backdrop-blur-3xl bg-background/40">
          <div className="flex items-center gap-0 md:gap-0.5 px-0.5 md:px-1">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item);
              const isHovered = hoveredItem === item.name;

              return (
                <div
                  key={item.name}
                  onMouseEnter={() => setHoveredItem(item.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className={`relative flex-shrink-0 ${item.mobileHidden ? "hidden md:block" : ""}`}
                >
                  {hasDropdown(item) ? (
                    <button
                      onClick={() => setHoveredItem(isHovered ? null : item.name)}
                      className="group relative p-2.5 md:px-4 md:py-3 rounded-full transition-all duration-500 overflow-hidden flex items-center gap-2 outline-none hover:bg-foreground/5"
                      data-cursor="pointer"
                    >
                      <item.icon
                        className={`w-4 h-4 flex-shrink-0 transition-colors duration-500 ${
                          active ? "text-gold" : "text-foreground/50 group-hover:text-gold"
                        }`}
                      />
                      <span className={`hidden md:block text-[10px] font-black uppercase tracking-[0.18em] whitespace-nowrap transition-colors duration-500 ${
                        active ? "text-foreground font-extrabold" : "text-foreground/50 group-hover:text-foreground"
                      }`}>
                        {item.name}
                      </span>
                      {active && (
                        <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gold" />
                      )}
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="group relative p-2.5 md:px-4 md:py-3 rounded-full transition-all duration-500 overflow-hidden flex items-center gap-2 outline-none hover:bg-foreground/5"
                      data-cursor="pointer"
                    >
                      <item.icon
                        className={`w-4 h-4 flex-shrink-0 transition-colors duration-500 ${
                          active ? "text-gold" : "text-foreground/50 group-hover:text-gold"
                        }`}
                      />
                      <span className={`hidden md:block text-[10px] font-black uppercase tracking-[0.18em] whitespace-nowrap transition-colors duration-500 ${
                        active ? "text-foreground font-extrabold" : "text-foreground/50 group-hover:text-foreground"
                      }`}>
                        {item.name}
                      </span>
                      {active && (
                        <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gold" />
                      )}
                    </Link>
                  )}

                  {/* Upward Dropdown */}
                  <AnimatePresence>
                    {isHovered && hasDropdown(item) && (
                      <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: -10, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 glass rounded-[28px] border border-white/10 shadow-2xl overflow-hidden w-52 md:w-60 z-[200]"
                      >
                        {/* Grouped rooms layout */}
                        {item.groups ? (
                          <div className="p-3 md:p-4 flex flex-col gap-3">
                            {item.groups.map((group, gi) => (
                              <div key={group.label}>
                                {gi > 0 && <div className="h-px bg-foreground/8 mb-3" />}
                                <p className="text-[8px] font-black uppercase tracking-[0.35em] text-gold pl-3 mb-1.5">
                                  {group.label}
                                </p>
                                <div className="flex flex-col gap-0.5">
                                  {group.items.map((sub) => (
                                    <Link
                                      key={sub.name}
                                      href={sub.href}
                                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-gold/10 transition-all duration-300 group/sub outline-none"
                                      data-cursor="pointer"
                                    >
                                      <span className="w-1 h-1 rounded-full bg-foreground/20 group-hover/sub:bg-gold transition-colors flex-shrink-0" />
                                      <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.15em] text-foreground/70 group-hover/sub:text-foreground transition-colors whitespace-nowrap">
                                        {sub.name}
                                      </span>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          /* Standard flat dropdown (Dining, Events) */
                          <div className="p-3 md:p-4 flex flex-col gap-1.5">
                            {item.subItems!.map((sub) =>
                              sub.external ? (
                                <a
                                  key={sub.name}
                                  href={sub.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center justify-between gap-2 px-4 py-3 rounded-2xl hover:bg-gold hover:text-background transition-all duration-500 group/sub outline-none"
                                  data-cursor="pointer"
                                >
                                  <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] whitespace-nowrap">
                                    {sub.name}
                                  </span>
                                  <ExternalLink className="w-3 h-3 text-gold group-hover/sub:text-background transition-colors flex-shrink-0" />
                                </a>
                              ) : (
                                <Link
                                  key={sub.name}
                                  href={sub.href}
                                  className="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-gold hover:text-background transition-all duration-500 group/sub outline-none"
                                  data-cursor="pointer"
                                >
                                  {sub.icon && (() => { const Icon = sub.icon!; return <Icon className="w-3.5 h-3.5 text-gold group-hover/sub:text-background transition-colors flex-shrink-0" />; })()}
                                  <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] whitespace-nowrap">
                                    {sub.name}
                                  </span>
                                </Link>
                              )
                            )}
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          <div className="w-px h-6 bg-foreground/10 mx-1.5 hidden md:block flex-shrink-0" />

          <a
            href="https://bookings.peninsulagrand.com/?propertyId=8984"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-foreground text-background px-5 md:px-8 py-2.5 md:py-3 rounded-full font-black text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] hover:bg-gold hover:text-foreground transition-all duration-700 shadow-xl ml-1 md:ml-2 flex-shrink-0 outline-none whitespace-nowrap"
            data-cursor="pointer"
          >
            Reserve
          </a>
        </div>
      </motion.nav>
    </AnimatePresence>
  );
}
