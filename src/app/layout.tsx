import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
    <html lang="en" className={`${inter.variable} ${playfair.variable} h-full antialiased`}>
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
