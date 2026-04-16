import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Peninsula Grand Hotel Andheri East Mumbai | +91 22 6624 9100",
  description: "Contact Peninsula Grand Hotel, Andheri East Mumbai. Call +91 22 6624 9100, email reservations@peninsulagrand.co.in. Located at Junction of LBS & Andheri-Kurla Road, Saki Naka, Mumbai 400072. 5 minutes from T2 Airport & Sakinaka Metro.",
  keywords: [
    "peninsula grand hotel contact", "hotel contact andheri east", "hotel phone number andheri",
    "hotel near sakinaka metro contact", "hotels near mumbai airport contact",
    "peninsula grand reservations", "hotel booking andheri east mumbai",
    "hotel address andheri east", "peninsula grand hotel address mumbai",
    "hotel near t2 airport phone", "banquet enquiry andheri east",
    "wedding enquiry mumbai hotel", "corporate booking andheri hotel",
    "hotel directions andheri east", "hotel near lbs road saki naka",
  ],
  openGraph: {
    title: "Contact Peninsula Grand Hotel | Andheri East Mumbai",
    description: "Call +91 22 6624 9100 · reservations@peninsulagrand.co.in · Junction LBS & Andheri-Kurla Road, Saki Naka, Mumbai 400072.",
    images: [{ url: "/new/DSC03915.jpg", width: 1200, height: 630, alt: "Peninsula Grand Hotel Mumbai Contact" }],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
