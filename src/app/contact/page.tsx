"use client";

import { ModernFooter } from "@/components/ModernFooter";
import { ContactHero } from "@/components/ContactHero";
import { ContactGrid } from "@/components/ContactGrid";
import { InquiryForm } from "@/components/InquiryForm";

export default function ContactPage() {
  return (
    <main className="relative min-h-screen bg-background">
      {/* Cinematic Contact Hero */}
      <ContactHero />
      
      {/* Global Directory Grid */}
      <ContactGrid />
      
      {/* Digital Atrium Form */}
      <InquiryForm />

      <ModernFooter />
    </main>
  );
}
