import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Peninsula Grand | Luxury Hotel Near Airport in Mumbai | Andheri East",
  description: "Discover Peninsula Grand – a premium 4 star hotel in Andheri East near Mumbai International Airport offering luxury stays, elegant banquet halls, fine dining, and exceptional hospitality.",
  keywords: [
    "about peninsula grand hotel", "luxury hotels in mumbai history", "4 star hotel andheri east",
    "best hotels in mumbai", "finest luxury hotels in andheri", "luxury hotels in andheri",
    "hotel in andheri east mumbai", "hotel near mumbai international airport",
    "premium hotel andheri east", "heritage hotel mumbai", "hospitality andheri east",
    "hotel near t2 airport since 1994", "peninsula grand mumbai about",
  ],
  openGraph: {
    title: "About Peninsula Grand Hotel | Luxury Since 1994 | Mumbai",
    description: "Established 1994. One of Mumbai's finest 4-star luxury hotels in Andheri East, 5 minutes from T2 Airport.",
    images: [{ url: "/new/DSC03979.jpg", width: 1200, height: 630, alt: "Peninsula Grand Hotel Heritage Mumbai" }],
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
