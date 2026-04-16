import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Banquet Halls & Corporate Event Venues | Peninsula Grand Andheri East Mumbai",
  description: "Premium banquet halls & corporate event venues at Peninsula Grand, Andheri East. Concorde Hall (270 guests), The Lawn (400 guests), Rooftop (200 guests). Ideal for conferences, corporate events, office parties & product launches near Mumbai Airport.",
  keywords: [
    "banquet hall for corporate event in andheri", "banquet hall for corporate event near me",
    "corporate event venues in andheri", "venues for corporate events in andheri",
    "hall for corporate events", "banquet halls in andheri east", "banquet hall in andheri east",
    "banquets in andheri east", "event banquet hall in andheri east", "banquet in andheri east",
    "small banquet halls near me", "party banquet halls near me", "party hall in andheri east",
    "small party halls in andheri east", "banquet hall for office party",
    "banquet hall for birthday party", "banquet halls near me for birthday party",
    "reception halls near me", "reception halls in andheri",
    "conference hall andheri east", "corporate meeting room mumbai airport",
    "hotel for corporate meeting in andheri", "business meeting hotels in andheri",
    "product launch venue mumbai", "seminar hall andheri east",
    "concorde hall mumbai", "banquet hall near t2 airport mumbai",
    "event venue near mumbai airport", "corporate hospitality mumbai",
  ],
  openGraph: {
    title: "Banquet Halls & Corporate Venues | Peninsula Grand Andheri East",
    description: "Concorde Hall 270 guests · The Lawn 400 guests · Rooftop 200 guests. Premier corporate & event venue in Andheri East, near Mumbai T2 Airport.",
    images: [{ url: "/new/DSC05924.jpg", width: 1200, height: 630, alt: "Banquet Hall Peninsula Grand Mumbai" }],
  },
};

export default function EventsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
