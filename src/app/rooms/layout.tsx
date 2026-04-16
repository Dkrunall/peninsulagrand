import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luxury Rooms & Suites | Peninsula Grand Hotel Andheri East Mumbai",
  description: "Book luxury rooms & suites at Peninsula Grand, Andheri East. Deluxe Rooms, Executive Rooms, Amor Suite, Platinum Suite & Presidential Suite. 4-star luxury near Mumbai Airport. From ₹8,000/night.",
  keywords: [
    "luxury rooms in andheri", "luxury rooms near mumbai airport", "4 star hotel rooms andheri east",
    "hotel rooms near t2 airport mumbai", "best hotel rooms in mumbai", "hotel room in andheri east",
    "luxury suites in mumbai", "presidential suite mumbai", "platinum suite andheri",
    "deluxe room andheri east", "executive room mumbai airport", "hotel stay in andheri east",
    "rooms near mumbai international airport", "luxury stay in andheri", "stay near mumbai airport",
    "corporate stay in andheri", "business hotel rooms andheri", "special room for handicap hotels in andheri",
    "accessible hotel rooms mumbai", "hotel near sakinaka metro", "hotel near andheri east",
  ],
  openGraph: {
    title: "Luxury Rooms & Suites | Peninsula Grand Hotel Mumbai",
    description: "Deluxe, Executive, Amor, Platinum & Presidential Suites. 4-star luxury in Andheri East, 5 min from T2 Airport.",
    images: [{ url: "/new/DSC04040.jpg", width: 1200, height: 630, alt: "Luxury Hotel Rooms Mumbai" }],
  },
};

export default function RoomsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
