import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ROOMS_DATA } from "@/data/rooms";
import { RoomDetailHero } from "@/components/RoomDetailHero";
import { RoomAmenities } from "@/components/RoomAmenities";
import { RoomBookingCTA } from "@/components/RoomBookingCTA";
import { ModernFooter } from "@/components/ModernFooter";

interface RoomPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: RoomPageProps): Promise<Metadata> {
  const { slug } = await params;
  const room = ROOM_CATEGORIES_INTERNAL.find((r) => r.slug === slug);
  
  if (!room) return { title: "Room Not Found" };

  return {
    title: `${room.name} | Peninsula Grand`,
    description: room.desc,
  };
}

// Internal reference for metadata as we can't export ROOMS_DATA as CATEGORIES directly in this file pattern easily if we want to keep it clean
const ROOM_CATEGORIES_INTERNAL = ROOMS_DATA;

export default async function RoomSinglePage({ params }: RoomPageProps) {
  const { slug } = await params;
  const room = ROOMS_DATA.find((r) => r.slug === slug);

  if (!room) {
    notFound();
  }

  return (
    <main className="relative min-h-screen bg-background">
      {/* Cinematic Detail Hero */}
      <RoomDetailHero room={room} />

      {/* Narrative & Provisions */}
      <RoomAmenities room={room} />

      {/* Booking Conversion */}
      <RoomBookingCTA room={room} />

      <ModernFooter />
    </main>
  );
}

export async function generateStaticParams() {
  return ROOMS_DATA.map((room) => ({
    slug: room.slug,
  }));
}
