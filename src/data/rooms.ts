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
  seoTitle: string;
  seoDescription: string;
  reversed?: boolean;
}

export const ROOMS_DATA: Room[] = [
  {
    slug: "presidential-suite",
    name: "Presidential Suite",
    type: "Iconic Opulence",
    image: "/rooms/presidential-suite.jpg",
    adults: 3,
    children: 1,
    size: "900 sq.ft",
    desc: "The ultimate abode for the travelling king. In-room bar counter, fully stocked mini bar with international spirits, and pure opulence at every turn.",
    longDesc: "Experience elevated comfort and refined hospitality in the Presidential Suite at Peninsula Grand — the most prestigious accommodation designed for guests seeking luxury, privacy, and sophistication in the heart of Mumbai. Located at a premium hotel near airport in Mumbai, this exclusive suite offers a perfect blend of spacious interiors, modern amenities, and personalized hospitality for business and leisure travellers. Spanning across 900 sq. ft., the Presidential Suite is thoughtfully designed to deliver an exceptional stay experience with elegant interiors, premium furnishings, and world-class comforts.",
    amenities: [
      "In-Room Bar Counter",
      "Fully Stocked Mini Bar",
      "Complimentary Breakfast",
      "LCD TV",
      "Hi-Speed WiFi",
      "Safe Locker",
      "Tea & Coffee Maker",
      "Smart Key Card Locks",
      "24-Hour Room Service",
      "Hairdryer"
    ],
    features: [
      "Separate Living & Seating Area",
      "Panoramic City Views",
      "Premium King-Size Bedding",
      "Luxury Bathroom Amenities"
    ],
    seoTitle: "Presidential Suite – Luxury Suite Near Mumbai Airport | Hotel Peninsula Grand",
    seoDescription: "Experience elevated comfort in the Presidential Suite at Peninsula Grand. A 900 sq. ft. luxury suite near Mumbai International Airport with premium amenities, in-room bar, and personalized hospitality.",
    reversed: false
  },
  {
    slug: "platinum-suite",
    name: "Platinum Suite",
    type: "Elite Residency",
    image: "/rooms/platinum-suite.jpg",
    adults: 3,
    children: 1,
    size: "700 sq.ft",
    desc: "A perfect setting for the jet-set elite. Revive and recharge in 700 sq.ft. of refined luxury before your next big moment.",
    longDesc: "Experience contemporary elegance and exceptional comfort in the Platinum Suite at Peninsula Grand, thoughtfully designed for modern business and leisure travellers. Located at a premium hotel near airport in Mumbai, the Platinum Suite offers the perfect combination of spacious interiors, refined hospitality, and modern amenities for guests seeking a luxurious stay experience in Mumbai. Spanning 700 sq. ft., the Platinum Suite is crafted to deliver sophistication, relaxation, and convenience — whether you are travelling for corporate meetings, airport transit stays, or leisure experiences.",
    amenities: [
      "King-Size Bed",
      "Fully Stocked Mini Bar",
      "Complimentary Breakfast",
      "LCD TV",
      "Hi-Speed WiFi",
      "Safe Locker",
      "Tea & Coffee Maker",
      "Smart Key Card Locks",
      "24-Hour Room Service",
      "Hairdryer"
    ],
    features: [
      "King Bed",
      "700 sq.ft. Living Space",
      "Premium Bedding",
      "High-Speed Connectivity"
    ],
    seoTitle: "Platinum Suite – Premium Luxury Stay Near Mumbai Airport | Hotel Peninsula Grand",
    seoDescription: "Experience contemporary elegance in the Platinum Suite at Peninsula Grand. A 700 sq. ft. luxury suite near Mumbai International Airport with premium amenities and refined hospitality.",
    reversed: true
  },
  {
    slug: "amor-suite",
    name: "Amor Suite",
    type: "Romance & Art",
    image: "/rooms/amor-suite.jpg",
    adults: 3,
    children: 1,
    size: "550 sq.ft",
    desc: "550 sq.ft. of personal space that pampers you. Massaging chair, premium bedding, and modern connectivity for pure romantic indulgence.",
    longDesc: "Escape into a world of comfort, intimacy, and elegance with the Amor Suite at Peninsula Grand. Thoughtfully designed for couples and leisure travellers, this luxurious suite offers a warm and relaxing atmosphere in the heart of Mumbai. Located at a premium hotel in Andheri East, the Amor Suite blends modern comforts with romantic ambience, creating the perfect destination for memorable stays and special moments. Spread across 550 sq. ft., the suite is designed to offer indulgent personal space with premium amenities, stylish interiors, and a peaceful environment ideal for relaxation and connection.",
    amenities: [
      "Massaging Chair",
      "King-Size Bed",
      "Fully Stocked Mini Bar",
      "Complimentary Breakfast",
      "LCD TV",
      "Hi-Speed WiFi",
      "Safe Locker",
      "Tea & Coffee Maker",
      "Smart Key Card Locks",
      "24-Hour Room Service"
    ],
    features: [
      "Signature Massaging Chair",
      "550 sq.ft. Personal Space",
      "Warm Ambient Interiors",
      "Premium King-Size Bedding"
    ],
    seoTitle: "Amor Suite – Romantic Luxury Stay in Andheri East Mumbai | Hotel Peninsula Grand",
    seoDescription: "Experience romantic luxury in the Amor Suite at Peninsula Grand. A 550 sq. ft. suite in Andheri East near Mumbai Airport with a signature massaging chair, premium amenities, and intimate hospitality.",
    reversed: false
  },
  {
    slug: "executive-room",
    name: "Executive Room",
    type: "Business Elegance",
    image: "/rooms/executive-room.jpg",
    adults: 3,
    children: 1,
    size: "City View",
    desc: "Suited for business and leisure alike. Stunning city views, functional luxury, and every amenity the modern traveller needs.",
    longDesc: "Experience comfort, convenience, and contemporary hospitality with the Executive Rooms at Peninsula Grand. Thoughtfully designed for corporate travellers and modern leisure guests, these premium rooms combine elegant interiors with smart amenities to create a productive and relaxing stay experience in Mumbai. Located at a leading business hotel near Mumbai airport, our Executive Rooms are ideal for professionals attending meetings, conferences, or business events, while also offering the perfect retreat for leisure travellers exploring the city.",
    amenities: [
      "Twin / King Bed Options",
      "Safe Deposit Locker",
      "Complimentary Breakfast",
      "LCD TV",
      "Hi-Speed WiFi",
      "Tea & Coffee Maker",
      "Smart Key Card Locks",
      "24-Hour Room Service",
      "Hairdryer",
      "Fully Stocked Mini Bar"
    ],
    features: [
      "Twin / King Bed Options",
      "Stunning City Views",
      "Elegant Workspace & Seating",
      "High-Speed Connectivity"
    ],
    seoTitle: "Executive Rooms – Business Hotel Rooms in Andheri East Mumbai | Hotel Peninsula Grand",
    seoDescription: "Stay in Executive Rooms at Peninsula Grand — a business hotel near Mumbai airport in Andheri East. Smart amenities, city views, and premium hospitality for corporate and leisure travellers.",
    reversed: true
  },
  {
    slug: "deluxe-room",
    name: "Deluxe Room",
    type: "Classic Sophistication",
    image: "/rooms/deluxe-room.jpg",
    adults: 3,
    children: 1,
    size: "250 sq.ft",
    desc: "Designed for the always-on-the-move traveller. Uninterrupted hi-speed WiFi, laptop-compatible safe, and direct dial for seamless connectivity.",
    longDesc: "Experience smart comfort and modern convenience with the Deluxe Room at Peninsula Grand, thoughtfully designed for business travellers and modern professionals. Located at a premium business hotel in Mumbai, the Deluxe Room offers a seamless combination of functionality, comfort, and accessibility for guests travelling for work or leisure. Whether you are visiting the city for corporate meetings, short business trips, airport transit stays, or weekend travel, our Deluxe Room provides a relaxing and efficient stay experience close to Mumbai International Airport and key commercial hubs.",
    amenities: [
      "Twin / King Bed Options",
      "Laptop-Compatible Safe",
      "Complimentary Breakfast",
      "LCD TV",
      "Hi-Speed WiFi",
      "Tea & Coffee Maker",
      "Smart Key Card Locks",
      "24-Hour Room Service",
      "Hairdryer",
      "Direct Dial Facility"
    ],
    features: [
      "Twin / King Bed Options",
      "Laptop-Compatible Safe",
      "Work-Friendly Environment",
      "High-Speed Connectivity"
    ],
    seoTitle: "Deluxe Room – Business Hotel Stay in Andheri East Mumbai | Hotel Peninsula Grand",
    seoDescription: "Book the Deluxe Room at Peninsula Grand — a business hotel near Mumbai airport in Andheri East. Smart amenities, laptop-compatible safe, and comfortable hospitality for corporate and leisure travellers.",
    reversed: false
  }
];
