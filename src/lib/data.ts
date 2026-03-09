export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
}

export interface PricingTier {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
}

export const services: Service[] = [
  {
    id: "residential",
    title: "Residential Cleaning",
    description:
      "Keep your home fresh and spotless with our thorough residential cleaning service. We handle every room with care.",
    icon: "Home",
    features: [
      "Kitchen & bathroom deep scrub",
      "Dusting & vacuuming all rooms",
      "Floor mopping & polishing",
      "Window sill & baseboard cleaning",
    ],
  },
  {
    id: "commercial",
    title: "Commercial Cleaning",
    description:
      "Create a clean and professional workspace for your team. We serve offices, retail spaces, and more.",
    icon: "Building2",
    features: [
      "Office & cubicle cleaning",
      "Restroom sanitation",
      "Break room & kitchen cleaning",
      "Trash removal & recycling",
    ],
  },
  {
    id: "deep-cleaning",
    title: "Deep Cleaning",
    description:
      "A thorough top-to-bottom clean that reaches every corner. Perfect for seasonal refreshes or special occasions.",
    icon: "Sparkles",
    features: [
      "Behind & under furniture",
      "Inside appliances & cabinets",
      "Grout & tile scrubbing",
      "Light fixture & fan cleaning",
    ],
  },
  {
    id: "move-in-out",
    title: "Move-In / Move-Out",
    description:
      "Starting fresh or leaving a place spotless? We make sure every surface is move-in ready.",
    icon: "Truck",
    features: [
      "Full property deep clean",
      "Closet & storage cleaning",
      "Appliance interior cleaning",
      "Wall spot cleaning & touch-ups",
    ],
  },
  {
    id: "recurring",
    title: "Recurring Service",
    description:
      "Set up weekly, bi-weekly, or monthly cleanings so your space always looks its best without the hassle.",
    icon: "CalendarCheck",
    features: [
      "Flexible scheduling options",
      "Consistent cleaning team",
      "Discounted recurring rates",
      "Priority booking",
    ],
  },
  {
    id: "post-construction",
    title: "Post-Construction",
    description:
      "After the build is done, we handle the dust and debris so you can enjoy your newly renovated space.",
    icon: "HardHat",
    features: [
      "Construction dust removal",
      "Surface polishing & wiping",
      "Debris & material cleanup",
      "Final detail cleaning",
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "Homeowner",
    quote:
      "fu transformed my home! The team was punctual, friendly, and incredibly thorough. I couldn't believe how sparkling everything looked.",
    rating: 5,
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "Office Manager",
    quote:
      "We've been using fu for our office for over a year now. The consistency and quality is outstanding. Our team loves coming to a clean workspace.",
    rating: 5,
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    role: "Homeowner",
    quote:
      "The deep cleaning service was exactly what we needed before the holidays. Every corner was spotless. Highly recommend to anyone!",
    rating: 5,
  },
  {
    id: "4",
    name: "David Thompson",
    role: "Property Manager",
    quote:
      "fu handles all our move-out cleanings. They're reliable, affordable, and always leave the units looking brand new.",
    rating: 4,
  },
];

export const pricingTiers: PricingTier[] = [
  {
    id: "basic",
    name: "Basic Clean",
    price: "$99",
    period: "per visit",
    description: "Essential cleaning for a tidy home",
    features: [
      "Kitchen & bathroom cleaning",
      "Vacuuming & mopping floors",
      "Dusting surfaces",
      "Trash removal",
      "Bed making",
    ],
    highlighted: false,
  },
  {
    id: "deep",
    name: "Deep Clean",
    price: "$179",
    period: "per visit",
    description: "Our most popular thorough cleaning package",
    features: [
      "Everything in Basic",
      "Inside appliance cleaning",
      "Baseboard & window sill cleaning",
      "Cabinet wipe-down",
      "Interior window cleaning",
      "Detailed bathroom scrub",
    ],
    highlighted: true,
  },
  {
    id: "premium",
    name: "Premium Clean",
    price: "$249",
    period: "per visit",
    description: "The ultimate top-to-bottom experience",
    features: [
      "Everything in Deep Clean",
      "Fridge & oven deep clean",
      "Closet & pantry organization",
      "Laundry wash & fold",
      "Same-day availability",
      "Eco-friendly products upgrade",
      "Satisfaction guarantee",
    ],
    highlighted: false,
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Maria Santos",
    role: "Founder & CEO",
    bio: "With 15 years in the cleaning industry, Maria founded fu with a mission to deliver happiness through spotless spaces.",
  },
  {
    id: "2",
    name: "James Wilson",
    role: "Operations Manager",
    bio: "James ensures every cleaning runs smoothly, coordinating our dedicated teams to deliver consistent quality every time.",
  },
  {
    id: "3",
    name: "Aisha Patel",
    role: "Head of Customer Experience",
    bio: "Aisha makes sure every client feels valued and heard, turning first-time customers into lifelong fans of fu.",
  },
];

export const companyInfo = {
  phone: "(555) 123-4567",
  email: "hello@sparkleclean.com",
  address: "123 Clean Street, Suite 100, Sparkle City, SC 12345",
  hours: "Mon–Fri: 7:00 AM – 7:00 PM | Sat: 8:00 AM – 5:00 PM",
};
