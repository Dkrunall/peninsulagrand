import { MapPin, BedDouble, UtensilsCrossed, Star, Building2, Award } from "lucide-react";

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

export function HotelOverview() {
  return (
    <section className="bg-background py-16 md:py-28 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">

        {/* H1 */}
        <div className="mb-14 md:mb-20">
          <p className="text-[10px] uppercase tracking-[0.8em] font-black text-gold mb-4 italic">About Peninsula Grand</p>
          <h1 className="text-2xl md:text-4xl font-serif text-foreground leading-snug mb-6 tracking-tight">
            Luxury Hotel Near Airport in Mumbai
          </h1>
          <p className="text-base md:text-lg text-foreground/60 font-serif italic leading-relaxed mb-4">
            Peninsula Grand is a premium hotel near airport in Mumbai offering the perfect blend of luxury, comfort, and convenience for business and leisure travellers. Strategically located in Sakinaka, Andheri East, our hotel is designed for guests seeking elegant accommodation, modern amenities, seamless connectivity, and exceptional hospitality in the heart of Mumbai.
          </p>
          <p className="text-base md:text-lg text-foreground/60 font-serif italic leading-relaxed mb-4">
            Recognized among the preferred hotels near Mumbai International Airport, Peninsula Grand delivers a refined hospitality experience with spacious rooms, contemporary interiors, fine dining, and sophisticated banquet venues. Whether you are travelling for business meetings, family vacations, weddings, or corporate events, our hotel ensures a memorable stay with personalized services and world-class comfort.
          </p>
          <p className="text-base md:text-lg text-foreground/60 font-serif italic leading-relaxed">
            Conveniently connected to Chhatrapati Shivaji Maharaj International Airport, metro stations, business hubs, and entertainment destinations, Peninsula Grand is an ideal hotel in Andheri East Mumbai for guests looking for accessibility combined with luxury.
          </p>
          <div className="mt-8 w-16 h-[1px] bg-gold" />
        </div>

        {/* H2: Premium Stay */}
        <div className="mb-14 md:mb-20">
          <h2 className="text-xl md:text-3xl font-serif text-foreground mb-4 tracking-tight">
            Premium Stay Experience at a 4 Star Hotel in Andheri
          </h2>
          <p className="text-base text-foreground/60 font-serif italic leading-relaxed mb-6">
            As a renowned 4 star hotel in Andheri, Peninsula Grand offers thoughtfully designed rooms and suites equipped with modern amenities to meet the expectations of today's travellers. Every room reflects a balance of elegance and comfort, creating a relaxing environment for guests visiting Mumbai for work or leisure.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            {[
              "Spacious luxury rooms and suites",
              "High-speed Wi-Fi connectivity",
              "Premium hospitality services",
              "Modern business and leisure amenities",
              "Convenient airport and metro access",
              "Fine dining and lounge experiences",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-foreground/70 font-sans text-sm">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-base text-foreground/60 font-serif italic leading-relaxed">
            Guests searching for a premium hotel in Andheri Mumbai can enjoy a comfortable stay experience close to key commercial and lifestyle destinations in the city.
          </p>
        </div>

        {/* H2: Location */}
        <div className="mb-14 md:mb-20">
          <h2 className="text-xl md:text-3xl font-serif text-foreground mb-4 tracking-tight">
            Convenient Location Near Mumbai International Airport
          </h2>
          <p className="text-base text-foreground/60 font-serif italic leading-relaxed mb-4">
            Peninsula Grand is one of the most conveniently located hotels near T2 Mumbai Airport, making it an ideal choice for domestic and international travellers. Situated just minutes away from the airport, our property offers effortless access to business districts, exhibition centres, shopping malls, and major transportation routes.
          </p>
          <p className="text-base text-foreground/60 font-serif italic leading-relaxed mb-4">
            For travellers looking for a comfortable stay near Mumbai airport, our location provides unmatched convenience while maintaining a luxurious and peaceful atmosphere. Whether it is a short business visit, transit stay, or extended trip, Peninsula Grand ensures easy travel connectivity and premium hospitality.
          </p>
          <p className="text-base text-foreground/60 font-serif italic leading-relaxed">
            Our central location also makes us a preferred hotel near Andheri East for corporate travellers and tourists exploring Mumbai.
          </p>
        </div>

        {/* H2: Banquet */}
        <div className="mb-14 md:mb-20">
          <h2 className="text-xl md:text-3xl font-serif text-foreground mb-4 tracking-tight">
            Luxury Banquet Hall in Andheri East for Weddings & Events
          </h2>
          <p className="text-base text-foreground/60 font-serif italic leading-relaxed mb-6">
            Peninsula Grand is also a leading destination for celebrations and events, offering elegant banquet halls in Andheri East designed for memorable occasions. From weddings and receptions to birthdays and corporate gatherings, our event spaces combine luxury ambience with professional event management services.
          </p>
          <p className="text-base text-foreground/60 font-serif italic leading-relaxed mb-4">
            Guests looking for a banquet hall for wedding, wedding reception venues, reception halls near me, banquet hall for birthday party, banquet halls near me for birthday party, or small banquet halls near me can experience customized event planning, curated dining menus, stylish décor arrangements, and exceptional hospitality at Peninsula Grand.
          </p>
          <p className="text-base text-foreground/60 font-serif italic leading-relaxed">
            Our banquet venues are ideal for both intimate celebrations and grand social events, making every occasion elegant and unforgettable.
          </p>
        </div>

        {/* H2: Fine Dining */}
        <div className="mb-14 md:mb-20">
          <h2 className="text-xl md:text-3xl font-serif text-foreground mb-4 tracking-tight">
            Fine Dining & Exceptional Hospitality in Mumbai
          </h2>
          <p className="text-base text-foreground/60 font-serif italic leading-relaxed mb-4">
            At Peninsula Grand, hospitality extends beyond luxurious stays. Our dining experiences are curated to offer guests a combination of flavour, ambience, and quality service. Whether you are enjoying a business lunch, family dinner, or casual gathering, our restaurants and lounge spaces provide a welcoming atmosphere for every occasion.
          </p>
          <p className="text-base text-foreground/60 font-serif italic leading-relaxed">
            With a commitment to guest satisfaction, personalized service, and premium comfort, Peninsula Grand continues to be recognized among the best hotels to stay in Mumbai for both business and leisure travellers.
          </p>
        </div>

        {/* H2: Why Choose — H3 cards */}
        <div className="mb-14 md:mb-20">
          <h2 className="text-xl md:text-3xl font-serif text-foreground mb-8 tracking-tight">
            Why Choose Peninsula Grand Hotel in Andheri East Mumbai
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {WHY_CHOOSE.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="border border-foreground/10 rounded-2xl p-6 hover:border-gold/30 transition-colors duration-500">
                <Icon className="w-5 h-5 text-gold mb-4" />
                <h3 className="text-base font-serif text-foreground mb-2">{title}</h3>
                <p className="text-sm text-foreground/55 font-serif italic leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* H2: Experience */}
        <div>
          <h2 className="text-xl md:text-3xl font-serif text-foreground mb-4 tracking-tight">
            Experience One of the Best Hotels Near Mumbai Airport
          </h2>
          <p className="text-base text-foreground/60 font-serif italic leading-relaxed">
            Whether you are planning a business trip, leisure stay, wedding celebration, or corporate event, Peninsula Grand offers a complete hospitality experience with luxury accommodation, premium banquet facilities, and exceptional service standards. Discover why Peninsula Grand is recognized among the best hotels in Mumbai and enjoy a sophisticated stay experience at one of the most preferred hotels near Mumbai International Airport.
          </p>
        </div>

      </div>
    </section>
  );
}
