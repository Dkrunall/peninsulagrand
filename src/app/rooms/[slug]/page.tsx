import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ROOMS_DATA } from "@/data/rooms";
import { RoomDetailHero } from "@/components/RoomDetailHero";
import { RoomAmenities } from "@/components/RoomAmenities";
import { RoomBookingCTA } from "@/components/RoomBookingCTA";
import { ModernFooter } from "@/components/ModernFooter";

interface RoomPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: RoomPageProps): Promise<Metadata> {
  const { slug } = await params;
  const room = ROOM_CATEGORIES_INTERNAL.find((r) => r.slug === slug);
  
  if (!room) return { title: "Room Not Found" };

  return {
    title: room.seoTitle,
    description: room.seoDescription,
    alternates: { canonical: `https://www.peninsulagrand.com/rooms/${room.slug}` },
    openGraph: {
      title: room.seoTitle,
      description: room.seoDescription,
      images: [{ url: room.image, alt: room.name }],
    },
  };
}

// Internal reference for metadata as we can't export ROOMS_DATA as CATEGORIES directly in this file pattern easily if we want to keep it clean
const ROOM_CATEGORIES_INTERNAL = ROOMS_DATA;

export default async function RoomSinglePage({ params }: RoomPageProps) {
  const { slug } = await params;
  const room = ROOMS_DATA.find((r) => r.slug === slug);

  if (!room) {
    notFound();
  }

  return (
    <main className="relative min-h-screen bg-background">
      {/* Cinematic Detail Hero */}
      <RoomDetailHero room={room} />

      {/* Narrative & Provisions */}
      <RoomAmenities room={room} />

      {/* Presidential Suite SEO Content */}
      {slug === "presidential-suite" && (
        <section className="bg-background py-12 md:py-20 px-6 md:px-12 border-t border-foreground/5">
          <div className="max-w-4xl mx-auto">
            <div className="mb-10 md:mb-14">
              <p className="text-[10px] uppercase tracking-[0.8em] font-black text-gold mb-4 italic">The Suite</p>
              <h2 className="text-xl md:text-3xl font-serif text-foreground mb-4 tracking-tight">
                Spacious Presidential Suite in Andheri East Mumbai
              </h2>
              <p className="text-base text-foreground/60 font-serif italic leading-relaxed mb-6">
                The Presidential Suite at Peninsula Grand is crafted for guests who appreciate sophisticated luxury and unmatched comfort. Featuring expansive living spaces and premium amenities, the suite creates a private sanctuary in the middle of the city.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {[
                  "Spacious 900 sq. ft. luxury suite",
                  "Separate living and seating area",
                  "Elegant in-room bar counter",
                  "Fully stocked mini bar with international spirits",
                  "Premium king-size bedding",
                  "High-speed Wi-Fi connectivity",
                  "Contemporary interiors with refined décor",
                  "Luxury bathroom amenities",
                  "Personalized hospitality services",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-foreground/70 font-sans text-sm">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-base text-foreground/60 font-serif italic leading-relaxed">
                For travellers looking for a premium hotel in Andheri East Mumbai, the Presidential Suite offers a seamless combination of comfort, style, and exclusivity.
              </p>
            </div>

            <div className="border-t border-foreground/5 pt-10">
              <h2 className="text-xl md:text-3xl font-serif text-foreground mb-4 tracking-tight">
                Book the Presidential Suite at Peninsula Grand
              </h2>
              <p className="text-base text-foreground/60 font-serif italic leading-relaxed mb-6">
                Indulge in refined luxury and sophisticated comfort at the Presidential Suite at Peninsula Grand. Whether you are travelling for business or leisure, enjoy an exceptional stay experience at one of the finest luxury hotels in Mumbai.
              </p>
              <a
                href="https://bookings.peninsulagrand.com/?propertyId=8984"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-foreground text-background px-10 py-4 rounded-full font-black text-xs uppercase tracking-widest hover:bg-gold hover:text-foreground transition-all duration-700 shadow-lg"
              >
                Book Your Luxury Stay
              </a>
            </div>
          </div>
        </section>
      )}

      {/* Deluxe Room SEO Content */}
      {slug === "deluxe-room" && (
        <section className="bg-background py-12 md:py-20 px-6 md:px-12 border-t border-foreground/5">
          <div className="max-w-4xl mx-auto">
            <div className="mb-10 md:mb-14">
              <p className="text-[10px] uppercase tracking-[0.8em] font-black text-gold mb-4 italic">The Room</p>
              <h2 className="text-xl md:text-3xl font-serif text-foreground mb-4 tracking-tight">
                Smart & Comfortable Deluxe Room for Modern Travellers
              </h2>
              <p className="text-base text-foreground/60 font-serif italic leading-relaxed mb-6">
                The Deluxe Room at Peninsula Grand is designed to meet the needs of today's travelling professionals who value convenience, comfort, and productivity. Featuring contemporary interiors and thoughtfully selected amenities, the room creates the perfect environment for both work and relaxation.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {[
                  "Twin or king-size bed options",
                  "Laptop-compatible electronic safe",
                  "High-speed Wi-Fi connectivity",
                  "Tea and coffee maker",
                  "Smart key card access",
                  "Modern bathroom amenities",
                  "Comfortable work-friendly environment",
                  "Personalized hospitality services",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-foreground/70 font-sans text-sm">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-base text-foreground/60 font-serif italic leading-relaxed">
                For guests looking for a premium hotel near Mumbai airport, the Deluxe Room offers the ideal balance of comfort and practicality.
              </p>
            </div>

            <div className="mb-10 md:mb-14">
              <h2 className="text-xl md:text-3xl font-serif text-foreground mb-4 tracking-tight">
                Premium Accommodation Near Mumbai International Airport
              </h2>
              <p className="text-base text-foreground/60 font-serif italic leading-relaxed mb-6">
                Conveniently located in Andheri East, Peninsula Grand is among the preferred hotels near airport in Mumbai for corporate travellers, transit guests, and business professionals. The Deluxe Room provides easy access to Mumbai International Airport, metro stations, business parks, and major commercial areas.
              </p>
              <p className="text-base text-foreground/60 font-serif italic leading-relaxed mb-4">
                Guests searching for:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {[
                  "Hotels near T2 Mumbai Airport",
                  "Comfortable business accommodation",
                  "Premium stay near Mumbai airport",
                  "Convenient hotel access in Andheri East",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-foreground/70 font-sans text-sm">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-base text-foreground/60 font-serif italic leading-relaxed">
                Can enjoy excellent connectivity along with premium hospitality services at Peninsula Grand.
              </p>
            </div>

            <div className="border-t border-foreground/5 pt-10">
              <h2 className="text-xl md:text-3xl font-serif text-foreground mb-4 tracking-tight">
                Book Your Deluxe Room Stay in Mumbai
              </h2>
              <p className="text-base text-foreground/60 font-serif italic leading-relaxed mb-6">
                Enjoy comfort, convenience, and professional hospitality with the Deluxe Room at Peninsula Grand. Whether you are travelling for work, meetings, or a quick city visit, the room offers everything needed for a productive and relaxing stay.
              </p>
              <a
                href="https://bookings.peninsulagrand.com/?propertyId=8984"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-foreground text-background px-10 py-4 rounded-full font-black text-xs uppercase tracking-widest hover:bg-gold hover:text-foreground transition-all duration-700 shadow-lg"
              >
                Book Your Stay
              </a>
            </div>
          </div>
        </section>
      )}

      {/* Executive Room SEO Content */}
      {slug === "executive-room" && (
        <section className="bg-background py-12 md:py-20 px-6 md:px-12 border-t border-foreground/5">
          <div className="max-w-4xl mx-auto">
            <div className="mb-10 md:mb-14">
              <p className="text-[10px] uppercase tracking-[0.8em] font-black text-gold mb-4 italic">The Room</p>
              <h2 className="text-xl md:text-3xl font-serif text-foreground mb-4 tracking-tight">
                Smart & Comfortable Executive Accommodation in Mumbai
              </h2>
              <p className="text-base text-foreground/60 font-serif italic leading-relaxed mb-6">
                The Executive Rooms at Peninsula Grand are crafted to meet the expectations of today's high-performing travellers. Featuring contemporary interiors and functional amenities, the rooms offer a balanced environment for work, relaxation, and comfort.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {[
                  "Twin bed or king-size bed options",
                  "Smart key card access",
                  "Safe deposit locker",
                  "Tea and coffee maker",
                  "High-speed Wi-Fi connectivity",
                  "Elegant workspace and seating area",
                  "Stunning city views",
                  "Premium room amenities",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-foreground/70 font-sans text-sm">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-base text-foreground/60 font-serif italic leading-relaxed">
                Guests looking for a comfortable hotel near Mumbai airport can enjoy a seamless stay experience with modern comforts and personalized hospitality.
              </p>
            </div>

            <div className="border-t border-foreground/5 pt-10">
              <h2 className="text-xl md:text-3xl font-serif text-foreground mb-4 tracking-tight">
                Book Executive Rooms at Peninsula Grand Mumbai
              </h2>
              <p className="text-base text-foreground/60 font-serif italic leading-relaxed mb-6">
                Discover modern comfort and business-friendly hospitality with the Executive Rooms at Peninsula Grand. Whether you are travelling for work or leisure, enjoy a seamless stay experience with premium amenities and exceptional service in one of Mumbai's most connected locations.
              </p>
              <a
                href="https://bookings.peninsulagrand.com/?propertyId=8984"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-foreground text-background px-10 py-4 rounded-full font-black text-xs uppercase tracking-widest hover:bg-gold hover:text-foreground transition-all duration-700 shadow-lg"
              >
                Book Your Stay
              </a>
            </div>
          </div>
        </section>
      )}

      {/* Amor Suite SEO Content */}
      {slug === "amor-suite" && (
        <section className="bg-background py-12 md:py-20 px-6 md:px-12 border-t border-foreground/5">
          <div className="max-w-4xl mx-auto">
            <div className="mb-10 md:mb-14">
              <p className="text-[10px] uppercase tracking-[0.8em] font-black text-gold mb-4 italic">The Suite</p>
              <h2 className="text-xl md:text-3xl font-serif text-foreground mb-4 tracking-tight">
                Romantic Luxury Suite Near Mumbai Airport
              </h2>
              <p className="text-base text-foreground/60 font-serif italic leading-relaxed mb-6">
                The Amor Suite at Peninsula Grand is crafted to create an intimate and comfortable retreat for couples seeking relaxation and luxury. With elegant interiors, warm lighting, and thoughtfully curated amenities, the suite provides an elevated stay experience in Mumbai.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {[
                  "Spacious 550 sq. ft. luxury suite",
                  "Comfortable king-size bed",
                  "Signature massaging chair",
                  "Fully stocked mini bar",
                  "Warm ambient interiors",
                  "High-speed Wi-Fi connectivity",
                  "Premium in-room amenities",
                  "Personalized hospitality services",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-foreground/70 font-sans text-sm">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-base text-foreground/60 font-serif italic leading-relaxed">
                For travellers searching for a premium stay near Mumbai airport, the Amor Suite offers the perfect blend of privacy, comfort, and convenience.
              </p>
            </div>

            <div className="border-t border-foreground/5 pt-10">
              <h2 className="text-xl md:text-3xl font-serif text-foreground mb-4 tracking-tight">
                Book Your Romantic Stay at Peninsula Grand
              </h2>
              <p className="text-base text-foreground/60 font-serif italic leading-relaxed mb-6">
                Experience refined comfort and intimate luxury with the Amor Suite at Peninsula Grand. Combining elegant hospitality, modern amenities, and a romantic atmosphere, the suite offers the perfect escape for couples in Mumbai.
              </p>
              <a
                href="https://bookings.peninsulagrand.com/?propertyId=8984"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-foreground text-background px-10 py-4 rounded-full font-black text-xs uppercase tracking-widest hover:bg-gold hover:text-foreground transition-all duration-700 shadow-lg"
              >
                Book Your Luxury Stay
              </a>
            </div>
          </div>
        </section>
      )}

      {/* Platinum Suite SEO Content */}
      {slug === "platinum-suite" && (
        <section className="bg-background py-12 md:py-20 px-6 md:px-12 border-t border-foreground/5">
          <div className="max-w-4xl mx-auto">
            <div className="mb-10 md:mb-14">
              <p className="text-[10px] uppercase tracking-[0.8em] font-black text-gold mb-4 italic">The Suite</p>
              <h2 className="text-xl md:text-3xl font-serif text-foreground mb-4 tracking-tight">
                Luxury Accommodation Near Mumbai International Airport
              </h2>
              <p className="text-base text-foreground/60 font-serif italic leading-relaxed mb-6">
                Conveniently located close to the airport, Peninsula Grand is among the most preferred hotels near T2 Mumbai Airport for business executives, international travellers, and leisure guests. The Platinum Suite offers a premium stay near Mumbai airport with easy access to key commercial hubs, metro stations, shopping destinations, and entertainment centres.
              </p>
              <p className="text-base text-foreground/60 font-serif italic leading-relaxed mb-4">
                Our strategic location makes us a preferred:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {[
                  "Hotel near Andheri East",
                  "Hotel near airport for business travellers",
                  "Luxury stay option near Mumbai International Airport",
                  "Premium accommodation for corporate and leisure stays",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-foreground/70 font-sans text-sm">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-base text-foreground/60 font-serif italic leading-relaxed">
                Guests can enjoy a seamless combination of accessibility, luxury, and personalized hospitality throughout their stay.
              </p>
            </div>

            <div className="border-t border-foreground/5 pt-10">
              <h2 className="text-xl md:text-3xl font-serif text-foreground mb-4 tracking-tight">
                Book the Platinum Suite at Peninsula Grand
              </h2>
              <p className="text-base text-foreground/60 font-serif italic leading-relaxed mb-6">
                Discover a refined stay experience with the Platinum Suite at Peninsula Grand. Combining contemporary luxury, warm hospitality, and exceptional convenience, the suite is ideal for guests seeking premium accommodation near Mumbai airport.
              </p>
              <a
                href="https://bookings.peninsulagrand.com/?propertyId=8984"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-foreground text-background px-10 py-4 rounded-full font-black text-xs uppercase tracking-widest hover:bg-gold hover:text-foreground transition-all duration-700 shadow-lg"
              >
                Book Your Luxury Stay
              </a>
            </div>
          </div>
        </section>
      )}

      {/* Booking Conversion */}
      <RoomBookingCTA room={room} />

      <ModernFooter />
    </main>
  );
}

export async function generateStaticParams() {
  return ROOMS_DATA.map((room) => ({
    slug: room.slug,
  }));
}
