import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wedding Venues & Marriage Halls | Peninsula Grand Hotel Andheri East Mumbai",
  description: "Celebrate your dream wedding at Peninsula Grand, Andheri East Mumbai. The Lawn (1,200 guests), Concorde Hall (270 guests) & Rooftop venues. Marriage halls, wedding reception venues & small wedding packages near Mumbai Airport.",
  keywords: [
    "marriage hall near me", "marriage halls in andheri east", "banquet hall for wedding",
    "banquet hall for wedding in andheri", "wedding reception venues", "small wedding reception venues",
    "wedding and reception venues", "reception halls near me", "reception halls in andheri",
    "wedding venues mumbai", "wedding hall andheri east", "wedding venue near mumbai airport",
    "luxury wedding venue mumbai", "outdoor wedding venue mumbai", "lawn wedding mumbai",
    "wedding banquet hall andheri", "destination wedding mumbai", "wedding planner andheri",
    "marriage hall andheri east", "best wedding venues in mumbai", "wedding reception andheri east",
    "rooftop wedding mumbai", "hotel wedding mumbai", "4 star wedding venue mumbai",
    "wedding catering andheri", "wedding packages mumbai hotel",
  ],
  openGraph: {
    title: "Wedding Venues & Marriage Halls | Peninsula Grand Mumbai",
    description: "The Lawn (1,200 guests) · Concorde Hall · Rooftop. Luxury wedding & marriage venues in Andheri East, Mumbai.",
    images: [{ url: "/new/DSC05532.jpg", width: 1200, height: 630, alt: "Wedding Venue Peninsula Grand Mumbai" }],
  },
};

export default function WeddingsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
