import { MapPin, BedDouble, Building2, Star, Award } from "lucide-react";

const PILLARS = [
  {
    icon: MapPin,
    title: "Prime Location",
    desc: "Minutes from Mumbai International Airport, Sakinaka Metro, and Andheri East business hubs — connectivity without compromise.",
  },
  {
    icon: BedDouble,
    title: "4 Star Luxury Rooms",
    desc: "Spacious suites and rooms with premium bedding, high-speed Wi-Fi, and thoughtfully curated modern amenities.",
  },
  {
    icon: Building2,
    title: "Banquet & Event Venues",
    desc: "Elegant banquet halls in Andheri East for weddings, receptions, birthday celebrations, and corporate gatherings.",
  },
  {
    icon: Star,
    title: "Fine Dining",
    desc: "Multi-cuisine restaurants and rooftop dining experiences curated for business lunches and celebratory evenings.",
  },
  {
    icon: Award,
    title: "Business & Leisure",
    desc: "Seamless hospitality for corporate stays, family vacations, destination weddings, and social events in Mumbai.",
  },
];

export function HotelOverview() {
  return (
    <section className="bg-foreground py-20 md:py-40 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[40vw] h-[40vw] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        <div className="text-center mb-16 md:mb-28">
          <p className="text-[10px] uppercase tracking-[0.8em] font-black text-gold mb-4 md:mb-8 italic">
            Luxury Hotel Near Airport in Mumbai
          </p>
          <h2 className="text-3xl md:text-6xl font-serif text-background tracking-tighter leading-tight md:leading-none mb-8">
            Why Choose <span className="italic">Peninsula Grand</span>
          </h2>
          <p className="text-base md:text-xl text-background/50 font-serif italic leading-relaxed max-w-3xl mx-auto">
            A preferred 4 star hotel in Andheri East Mumbai — where elegant accommodation, refined dining, premium banquet venues, and exceptional hospitality come together near Mumbai International Airport.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
          {PILLARS.slice(0, 3).map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="glass p-8 md:p-12 rounded-[32px] md:rounded-[48px] border border-white/5 group hover:bg-white/5 transition-all duration-700"
            >
              <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-700">
                <Icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-2xl font-serif text-background mb-4 group-hover:text-gold transition-colors duration-500">
                {title}
              </h3>
              <p className="text-background/45 font-serif italic leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {PILLARS.slice(3).map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="glass p-8 md:p-12 rounded-[32px] md:rounded-[48px] border border-white/5 group hover:bg-white/5 transition-all duration-700"
            >
              <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-700">
                <Icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-2xl font-serif text-background mb-4 group-hover:text-gold transition-colors duration-500">
                {title}
              </h3>
              <p className="text-background/45 font-serif italic leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-background/25 font-serif italic text-sm mt-16 md:mt-24 max-w-2xl mx-auto">
          Recognized among the best hotels near T2 Mumbai Airport for business stays, wedding venues, corporate events, and luxury leisure experiences in Andheri East.
        </p>

      </div>
    </section>
  );
}
