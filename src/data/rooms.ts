export interface ProjectRequirement {
  name: string;
  icon?: string;
}

export interface Room {
  slug: string;
  name: string;
  type: string;
  image: string;
  adults: number;
  children: number;
  size: string;
  desc: string;
  longDesc: string;
  amenities: string[];
  features: string[];
  reversed?: boolean;
}

export const ROOMS_DATA: Room[] = [
  {
    slug: "presidential-suite",
    name: "Presidential Suite",
    type: "Iconic Opulence",
    image: "/new/DSC05993.jpg",
    adults: 3,
    children: 1,
    size: "1200 sq.ft",
    desc: "A sanctuary of unparalleled grandeur. The finest luxury for those who demand the absolute best in Mumbai.",
    longDesc: "The Presidential Suite at Peninsula Grand is our most prestigious residency. Spanning a generous layout with separate living areas and master boudouir, it exemplfies sophisticated hospitality and exceptional comfort. Experience a stay where every detail, from the hand-picked furnishings to the panoramic city views, is thoughtfully curated to meet your highest needs.",
    amenities: [
      "Master Lounge",
      "Private Dining Area",
      "Rainforest Shower",
      "Pillow Menu",
      "24/7 Butler Service",
      "Integrated Smart Home Controls"
    ],
    features: [
      "Panoramic City Views",
      "Artisanal Furnishings",
      "High-Speed Connectivity",
      "Sound-Insulated Walls"
    ],
    reversed: false
  },
  {
    slug: "platinum-suite",
    name: "Platinum Suite",
    type: "Elite Residency",
    image: "/new/DSC05961.jpg",
    adults: 3,
    children: 1,
    size: "800 sq.ft",
    desc: "Modern luxury meeting artisanal craftsmanship. An elite environment perfectly crafted for both business and leisure.",
    longDesc: "The Platinum Suite offers unparalleled comfort at Peninsula Grand Hotel. Designed with a perfect balance of contemporary style and warm hospitalty, it features open-plan living and premium amenities that create the ideal sanctuary for the modern global traveler.",
    amenities: [
      "Designer Workstation",
      "Spa-Style Bathroom",
      "Nespresso Machine",
      "High-Fidelity Audio System",
      "Premium Mini-Bar",
      "Walk-in Closet"
    ],
    features: [
      "Modern Minimalist Aesthetic",
      "Natural Stone Finishes",
      "Intelligent Lighting",
      "Executive Access"
    ],
    reversed: true
  },
  {
    slug: "amor-suite",
    name: "Amor Suite",
    type: "Romance & Art",
    image: "/new/DSC05986.jpg",
    adults: 3,
    children: 1,
    size: "650 sq.ft",
    desc: "A boutique escape crafted for connection. Soft ambient lighting and elegant furnishings create a sanctuary of romantic serenity.",
    longDesc: "The Amor Suite is a celebration of connection and intimacy. Soft textures, curved architectural lines, and a warm palette of rose gold and slate create a cocoon of serenity. Ideal for couples seeking a boutique atmosphere within the grand setting of our hotel, it offers an curated experience of romantic luxury.",
    amenities: [
      "Ambient Mood Lighting",
      "Plush Velvet Seating",
      "Deep Soaking Tub",
      "Complimentary Champagne on Arrival",
      "Curated Art Pieces",
      "Floral Concierge"
    ],
    features: [
      "Intimate Layout",
      "Sophisticated Color Palette",
      "Bespoke Fragrance",
      "Premium Soundscapes"
    ],
    reversed: false
  },
  {
    slug: "executive-room",
    name: "Executive Room",
    type: "Business Elegance",
    image: "/new/DSC05908.jpg",
    adults: 3,
    children: 1,
    size: "450 sq.ft",
    desc: "Efficiency meets luxury. An ergonomic masterpiece designed for the modern business nomad who demands comfort.",
    longDesc: "Our Executive Rooms are thoughtfully curated to meet the needs of high-performing professionals. Combining a prime location near Mumbai's CBD with exceptional comfort, these rooms ensure your business stay is as productive as it is relaxing.",
    amenities: [
      "Ergonomic Chair",
      "Universal Power Hubs",
      "4K Ultra-HD Display",
      "Steam Iron & Board",
      "Evening Turndown Service",
      "Express Laundry Service"
    ],
    features: [
      "Quiet Luxury Design",
      "Optimized Workflow Space",
      "Sustainable Materials",
      "City View Options"
    ],
    reversed: true
  },
  {
    slug: "deluxe-room",
    name: "Deluxe Room",
    type: "Classic Sophistication",
    image: "/new/DSC04040.jpg",
    adults: 3,
    children: 1,
    size: "400 sq.ft",
    desc: "A timeless blend of comfort and style. The perfect sanctuary for the global traveler seeking Mumbai's warmest hospitality.",
    longDesc: "The Deluxe Room exemplifies our commitment to sophisticated hospitality. Ideal for both leisure and business travelers, it offers a serene retreat with four-star amenities designed to enhance every aspect of your stay in the heart of the city.",
    amenities: [
      "King / Twin Bed Options",
      "Marble Finished Bath",
      "In-Room Safety Vault",
      "Bottled Mineral Water",
      "Dressing Vanity",
      "Tea & Coffee Maker"
    ],
    features: [
      "Timeless Interior Design",
      "Spacious Layout",
      "Premium Bedding",
      "Centralized Climate Control"
    ],
    reversed: false
  }
];
