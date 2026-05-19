"use client";

import { MapPin, BedDouble, Building2, Star, Award } from "lucide-react";

const WHY_CHOOSE = [
  {
    icon: MapPin,
    title: "Prime Location",
    desc: "Located close to Mumbai International Airport, metro connectivity, and business districts.",
  },
  {
    icon: BedDouble,
    title: "Luxury Accommodation",
    desc: "Elegant rooms and suites designed for maximum comfort and convenience.",
  },
  {
    icon: Building2,
    title: "Premium Event Venues",
    desc: "Stylish banquet hall in Andheri East for weddings, birthdays, receptions, and corporate events.",
  },
  {
    icon: Star,
    title: "Exceptional Guest Services",
    desc: "Professional hospitality with personalized attention for every guest.",
  },
  {
    icon: Award,
    title: "Business & Leisure Friendly",
    desc: "Ideal for corporate stays, family vacations, destination weddings, and social celebrations.",
  },
];

const STAY_FEATURES = [
  "Spacious luxury rooms and suites",
  "High-speed Wi-Fi connectivity",
  "Premium hospitality services",
  "Modern business and leisure amenities",
  "Convenient airport and metro access",
  "Fine dining and lounge experiences",
];

export function HotelOverview() {
  return (
    <div>

      {/* H1 Intro — light */}
      <section className="bg-background py-16 md:py-28 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <p className="text-[10px] uppercase tracking-[0.8em] font-black text-gold mb-4 md:mb-6 italic">About Peninsula Grand</p>
          <h1 className="text-2xl md:text-5xl font-serif text-foreground tracking-tighter leading-tight mb-8 md:mb-12">
            Luxury Hotel Near Airport in Mumbai
          </h1>
          <div className="space-y-5 border-l-2 border-gold/20 pl-8">
            <p className="text-base md:text-lg text-foreground/60 font-serif italic leading-relaxed">
              Peninsula Grand is a premium hotel near airport in Mumbai offering the perfect blend of luxury, comfort, and convenience for business and leisure travellers. Strategically located in Sakinaka, Andheri East, our hotel is designed for guests seeking elegant accommodation, modern amenities, seamless connectivity, and exceptional hospitality in the heart of Mumbai.
            </p>
            <p className="text-base md:text-lg text-foreground/60 font-serif italic leading-relaxed">
              Recognized among the preferred hotels near Mumbai International Airport, Peninsula Grand delivers a refined hospitality experience with spacious rooms, contemporary interiors, fine dining, and sophisticated banquet venues. Whether you are travelling for business meetings, family vacations, weddings, or corporate events, our hotel ensures a memorable stay with personalized services and world-class comfort.
            </p>
            <p className="text-base md:text-lg text-foreground/60 font-serif italic leading-relaxed">
              Conveniently connected to Chhatrapati Shivaji Maharaj International Airport, metro stations, business hubs, and entertainment destinations, Peninsula Grand is an ideal hotel in Andheri East Mumbai for guests looking for accessibility combined with luxury.
            </p>
          </div>
        </div>
      </section>

      {/* H2: Premium Stay — dark */}
      <section className="bg-foreground py-16 md:py-28 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] bg-gold/5 rounded-full blur-[80px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            <div>
              <p className="text-[10px] uppercase tracking-[0.8em] font-black text-gold mb-4 italic">The Residency</p>
              <h2 className="text-2xl md:text-4xl font-serif text-background tracking-tighter leading-tight mb-6">
                Premium Stay Experience at a <span className="italic">4 Star Hotel</span> in Andheri
              </h2>
              <p className="text-base text-background/50 font-serif italic leading-relaxed">
                As a renowned 4 star hotel in Andheri, Peninsula Grand offers thoughtfully designed rooms and suites equipped with modern amenities to meet the expectations of today's travellers. Every room reflects a balance of elegance and comfort, creating a relaxing environment for guests visiting Mumbai for work or leisure.
              </p>
              <p className="text-base text-background/50 font-serif italic leading-relaxed mt-4">
                Guests searching for a premium hotel in Andheri Mumbai can enjoy a comfortable stay experience close to key commercial and lifestyle destinations in the city.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:pt-14">
              {STAY_FEATURES.map((item) => (
                <div key={item} className="flex items-start gap-4 border border-white/5 rounded-2xl px-5 py-4 hover:border-gold/20 transition-colors duration-500">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                  <span className="text-sm text-background/60 font-serif italic leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* H2: Location + Banquet — light, two-col */}
      <section className="bg-background py-16 md:py-28 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <div>
            <p className="text-[10px] uppercase tracking-[0.8em] font-black text-gold mb-4 italic">Connectivity</p>
            <h2 className="text-xl md:text-3xl font-serif text-foreground tracking-tighter leading-tight mb-6">
              Convenient Location Near Mumbai International Airport
            </h2>
            <div className="w-12 h-[1px] bg-gold mb-6" />
            <div className="space-y-4 text-base text-foreground/60 font-serif italic leading-relaxed">
              <p>Peninsula Grand is one of the most conveniently located hotels near T2 Mumbai Airport, making it an ideal choice for domestic and international travellers. Situated just minutes away from the airport, our property offers effortless access to business districts, exhibition centres, shopping malls, and major transportation routes.</p>
              <p>For travellers looking for a comfortable stay near Mumbai airport, our location provides unmatched convenience while maintaining a luxurious and peaceful atmosphere. Whether it is a short business visit, transit stay, or extended trip, Peninsula Grand ensures easy travel connectivity and premium hospitality.</p>
              <p>Our central location also makes us a preferred hotel near Andheri East for corporate travellers and tourists exploring Mumbai.</p>
            </div>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.8em] font-black text-gold mb-4 italic">Celebrations</p>
            <h2 className="text-xl md:text-3xl font-serif text-foreground tracking-tighter leading-tight mb-6">
              Luxury Banquet Hall in Andheri East for Weddings & Events
            </h2>
            <div className="w-12 h-[1px] bg-gold mb-6" />
            <div className="space-y-4 text-base text-foreground/60 font-serif italic leading-relaxed">
              <p>Peninsula Grand is also a leading destination for celebrations and events, offering elegant banquet halls in Andheri East designed for memorable occasions. From weddings and receptions to birthdays and corporate gatherings, our event spaces combine luxury ambience with professional event management services.</p>
              <p>Guests looking for a banquet hall for wedding, wedding reception venues, reception halls near me, banquet hall for birthday party, banquet halls near me for birthday party, or small banquet halls near me can experience customized event planning, curated dining menus, stylish décor arrangements, and exceptional hospitality at Peninsula Grand.</p>
              <p>Our banquet venues are ideal for both intimate celebrations and grand social events, making every occasion elegant and unforgettable.</p>
            </div>
          </div>
        </div>
      </section>

      {/* H2: Fine Dining — dark strip */}
      <section className="bg-foreground py-14 md:py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[10px] uppercase tracking-[0.8em] font-black text-gold mb-4 italic">Culinary Experiences</p>
          <h2 className="text-2xl md:text-4xl font-serif text-background tracking-tighter leading-tight mb-6">
            Fine Dining & Exceptional <span className="italic">Hospitality</span> in Mumbai
          </h2>
          <div className="w-12 h-[1px] bg-gold mx-auto mb-8" />
          <p className="text-base md:text-lg text-background/50 font-serif italic leading-relaxed mb-4">
            At Peninsula Grand, hospitality extends beyond luxurious stays. Our dining experiences are curated to offer guests a combination of flavour, ambience, and quality service. Whether you are enjoying a business lunch, family dinner, or casual gathering, our restaurants and lounge spaces provide a welcoming atmosphere for every occasion.
          </p>
          <p className="text-base md:text-lg text-background/50 font-serif italic leading-relaxed">
            With a commitment to guest satisfaction, personalized service, and premium comfort, Peninsula Grand continues to be recognized among the best hotels to stay in Mumbai for both business and leisure travellers.
          </p>
        </div>
      </section>

      {/* H2: Why Choose — card grid */}
      <section className="bg-background py-16 md:py-28 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-20">
            <p className="text-[10px] uppercase tracking-[0.8em] font-black text-gold mb-4 italic">The Pillars</p>
            <h2 className="text-2xl md:text-5xl font-serif text-foreground tracking-tighter leading-tight">
              Why Choose Peninsula Grand <span className="italic">Hotel</span> in Andheri East Mumbai
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {WHY_CHOOSE.slice(0, 3).map(({ icon: Icon, title, desc }) => (
              <div key={title} className="border border-foreground/8 rounded-[32px] p-8 md:p-10 group hover:border-gold/30 transition-colors duration-700">
                <div className="w-12 h-12 rounded-2xl bg-gold/8 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-700">
                  <Icon className="w-5 h-5 text-gold" />
                </div>
                <h3 className="text-xl font-serif text-foreground mb-3 group-hover:text-gold transition-colors duration-500">{title}</h3>
                <p className="text-sm text-foreground/55 font-serif italic leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {WHY_CHOOSE.slice(3).map(({ icon: Icon, title, desc }) => (
              <div key={title} className="border border-foreground/8 rounded-[32px] p-8 md:p-10 group hover:border-gold/30 transition-colors duration-700">
                <div className="w-12 h-12 rounded-2xl bg-gold/8 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-700">
                  <Icon className="w-5 h-5 text-gold" />
                </div>
                <h3 className="text-xl font-serif text-foreground mb-3 group-hover:text-gold transition-colors duration-500">{title}</h3>
                <p className="text-sm text-foreground/55 font-serif italic leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* H2: Experience — closing */}
      <section className="bg-background pb-16 md:pb-28 px-6 md:px-12">
        <div className="max-w-4xl mx-auto border-t border-foreground/8 pt-12 md:pt-20">
          <h2 className="text-xl md:text-3xl font-serif text-foreground tracking-tighter leading-tight mb-6">
            Experience One of the Best Hotels Near Mumbai Airport
          </h2>
          <p className="text-base md:text-lg text-foreground/60 font-serif italic leading-relaxed">
            Whether you are planning a business trip, leisure stay, wedding celebration, or corporate event, Peninsula Grand offers a complete hospitality experience with luxury accommodation, premium banquet facilities, and exceptional service standards. Discover why Peninsula Grand is recognized among the best hotels in Mumbai and enjoy a sophisticated stay experience at one of the most preferred hotels near Mumbai International Airport.
          </p>
        </div>
      </section>

    </div>
  );
}
