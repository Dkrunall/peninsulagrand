import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Restaurants & Dining | OPA!, MITRON, Waikiki, The Nest, Cocoamaya | Peninsula Grand Mumbai",
  description: "5 world-class restaurants at Peninsula Grand Andheri East — OPA! Mediterranean rooftop bar, MITRON Bar & Kitchen, Waikiki tropical dining, The Nest sky bar & Cocoamaya 24-hour bakery. Best dining near Mumbai Airport.",
  keywords: [
    "buffet restaurants in andheri", "restaurants in andheri east", "best restaurants near mumbai airport",
    "asian cuisine restaurant near me", "mediterranean restaurant mumbai", "rooftop restaurant andheri",
    "rooftop bar andheri east", "bar and restaurant andheri", "restaurants near t2 airport mumbai",
    "corporate dining restaurants", "business lunch hotels in andheri", "business lunch restaurant andheri east",
    "24 hour restaurant mumbai", "bakery near andheri east", "tropical restaurant mumbai",
    "best nightlife in andheri", "cocktail bar andheri east", "fine dining andheri",
    "hotel restaurant andheri east mumbai", "OPA restaurant mumbai", "MITRON bar kitchen andheri",
    "Waikiki restaurant mumbai", "in-house dining hotel andheri", "5 restaurants hotel mumbai",
  ],
  openGraph: {
    title: "5 Restaurants & Bars | Peninsula Grand Hotel Mumbai",
    description: "OPA! Mediterranean, MITRON Bar & Kitchen, Waikiki Tropical, The Nest Rooftop Bar & Cocoamaya 24hr Bakery — all under one roof in Andheri East.",
    images: [{ url: "/opa1.jpg", width: 1200, height: 630, alt: "OPA Restaurant Peninsula Grand Mumbai" }],
  },
};

export default function DiningLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
