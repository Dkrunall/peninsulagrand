import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Peninsula Grand Hotel | 4-Star Luxury Hotel Near Mumbai Airport | Andheri East",
  description: "Peninsula Grand — 4-star luxury hotel in Andheri East, Mumbai. 5 minutes from T2 International Airport & Sakinaka Metro. Premium rooms, 5 restaurants, banquet halls for weddings & corporate events. Book now.",
  keywords: [
    "hotel near airport in mumbai", "hotel near airport", "hotels near mumbai international airport",
    "hotel in andheri east", "hotel in andheri east mumbai", "hotel in andheri mumbai",
    "best hotels in mumbai", "luxury hotels in mumbai", "4 star hotel in andheri",
    "luxury hotels in andheri", "finest luxury hotels in andheri", "luxury stay in andheri",
    "luxury rooms in andheri", "best hotels to stay in mumbai", "best hotels near mumbai airport",
    "hotels near t2 mumbai airport", "stay near mumbai airport", "hotel near andheri east",
    "business hotel in andheri mumbai", "business hotel in andheri", "corporate stay in andheri",
    "hotel for corporate meeting in andheri", "business lunch hotels in andheri",
    "business meeting hotels in andheri", "corporate dining restaurants",
    "marriage hall near me", "banquet hall for wedding", "banquet hall for wedding in andheri",
    "banquets in andheri east", "banquet halls in andheri east", "banquet hall in andheri east",
    "small banquet halls near me", "banquet halls near me for birthday party",
    "party banquet halls near me", "party hall in andheri east", "small party halls in andheri east",
    "event banquet hall in andheri east", "banquet in andheri east",
    "hall for corporate events", "banquet hall for corporate event near me",
    "banquet hall for corporate event in andheri", "venues for corporate events in andheri",
    "banquet hall for office party", "banquet hall for birthday party",
    "reception halls near me", "reception halls in andheri", "wedding reception venues",
    "small wedding reception venues", "wedding and reception venues",
    "marriage halls in andheri east",
    "buffet restaurants in andheri", "asian cuisine restaurant near me",
    "special room for handicap hotels", "special room for handicap hotels in andheri",
  ],
  authors: [{ name: "Peninsula Grand Hotel" }],
  creator: "Peninsula Grand Hotel",
  publisher: "Peninsula Grand Hotel",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.peninsulagrand.com",
    siteName: "Peninsula Grand Hotel",
    title: "Peninsula Grand Hotel | 4-Star Luxury Hotel Near Mumbai Airport",
    description: "4-star luxury hotel in Andheri East, 5 min from T2 Airport. Premium rooms, 5 restaurants, grand banquet halls for weddings & corporate events.",
    images: [{ url: "/new/DSC03915.jpg", width: 1200, height: 630, alt: "Peninsula Grand Hotel Mumbai" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Peninsula Grand Hotel | Luxury Hotel Near Mumbai Airport",
    description: "4-star luxury hotel in Andheri East. 5 minutes from T2 Airport. Rooms, dining, weddings & corporate events.",
    images: ["/new/DSC03915.jpg"],
  },
  alternates: {
    canonical: "https://www.peninsulagrand.com",
  },
};

import { SmoothScroll } from "@/components/SmoothScroll";
import { PremiumCursor } from "@/components/PremiumCursor";
import { FloatingNav } from "@/components/FloatingNav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${cormorant.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground grain overflow-x-hidden cursor-auto md:cursor-none">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Hotel",
            "name": "Peninsula Grand Hotel",
            "description": "4-star luxury hotel in Andheri East, Mumbai. 5 minutes from T2 International Airport and Sakinaka Metro Station. Premium rooms, suites, 5 restaurants, banquet halls for weddings and corporate events.",
            "url": "https://www.peninsulagrand.com",
            "telephone": "+912266249100",
            "email": "reservations@peninsulagrand.co.in",
            "starRating": { "@type": "Rating", "ratingValue": "4" },
            "priceRange": "₹₹₹",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Junction of LBS & Andheri-Kurla Road, Saki Naka",
              "addressLocality": "Andheri East",
              "addressRegion": "Mumbai",
              "postalCode": "400072",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "19.1009167",
              "longitude": "72.8872225"
            },
            "amenityFeature": [
              { "@type": "LocationFeatureSpecification", "name": "Free WiFi", "value": true },
              { "@type": "LocationFeatureSpecification", "name": "Parking", "value": true },
              { "@type": "LocationFeatureSpecification", "name": "Restaurant", "value": true },
              { "@type": "LocationFeatureSpecification", "name": "Fitness Centre", "value": true },
              { "@type": "LocationFeatureSpecification", "name": "24-hour Front Desk", "value": true },
              { "@type": "LocationFeatureSpecification", "name": "Airport Shuttle", "value": true },
              { "@type": "LocationFeatureSpecification", "name": "Banquet Hall", "value": true },
              { "@type": "LocationFeatureSpecification", "name": "Accessible Rooms", "value": true }
            ],
            "numberOfRooms": "150",
            "checkinTime": "14:00",
            "checkoutTime": "12:00",
            "image": [
              "https://www.peninsulagrand.com/new/DSC03915.jpg",
              "https://www.peninsulagrand.com/new/DSC05924.jpg"
            ],
            "sameAs": [
              "https://www.facebook.com/PeninsulaGrandHotel/",
              "https://www.instagram.com/hotelpeninsulagrand/"
            ]
          })}}
        />
        <PremiumCursor />
        <SmoothScroll>
          <FloatingNav />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
