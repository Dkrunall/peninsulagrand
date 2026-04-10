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
  title: "Peninsula Grand | The Finest Luxury Hotel",
  description: "Located in the heart of Mumbai, Peninsula Grand offers a serene retreat with four-star amenities designed to enhance every aspect of your stay.",
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
        <PremiumCursor />
        <SmoothScroll>
          <FloatingNav />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
