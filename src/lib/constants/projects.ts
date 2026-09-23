import { CaseStudy } from "@/lib/types";

export const projectsData: CaseStudy[] = [
  {
    id: "wedstimate",
    slug: "wedstimate",
    title: "Wedstimate",
    client: "Wedstimate",
    category: "Mobile Apps",
    year: "2025",
    summary:
      "Smart wedding cost calculator, vendor estimation, and real-time budgeting ecosystem built with React Native & React.",
    challenge:
      "Couples and event planners struggled with fragmented spreadsheets and inaccurate vendor estimates leading to budget overruns.",
    solution:
      "Engineered an intuitive mobile and web platform with predictive vendor calculators, category-based spend tracking, and collaborative planning.",
    results: [
      { label: "Planning Accuracy", metric: "99%" },
      { label: "Couples Planned", metric: "150K+" },
      { label: "App Store Rating", metric: "4.9 ★" },
    ],
    tags: ["React Native", "React", "Mobile App", "Fintech", "UX Design"],
    heroImage: "https://koderspedia.com/wp-content/uploads/2025/10/21.png",
    featured: true,
  },
  {
    id: "vote-america",
    slug: "vote-america",
    title: "Vote America",
    client: "Vote America",
    category: "Mobile Apps",
    year: "2025",
    summary:
      "High-concurrency civic engagement platform offering interactive polling station lookup, candidate guides, and voter verification.",
    challenge:
      "Handling massive concurrent traffic surges during election periods while maintaining sub-second query response times on mobile networks.",
    solution:
      "Engineered a resilient React & React Native architecture with edge-cached polling district geocoding and state voter requirement lookups.",
    results: [
      { label: "Voters Guided", metric: "2.4M+" },
      { label: "Response Time", metric: "< 100ms" },
      { label: "Peak Uptime", metric: "100%" },
    ],
    tags: ["React", "React Native", "Web App", "Civic Tech", "GeoJSON"],
    heroImage: "https://koderspedia.com/wp-content/uploads/2025/10/4.png",
    featured: true,
  },
  {
    id: "calm-now",
    slug: "calm-now",
    title: "Calm Now",
    client: "Calm Now",
    category: "Mobile Apps",
    year: "2025",
    summary:
      "Mindfulness, biofeedback breathing guides, and mental wellness companion with real-time biometric state synchronization.",
    challenge:
      "Delivering smooth 60–120 FPS audio-visual breathing choreography and haptic feedback without draining mobile device battery.",
    solution:
      "Engineered an offline-first React Native application with hardware-accelerated audio synthesis and personalized habit metrics.",
    results: [
      { label: "Daily Active Users", metric: "300K+" },
      { label: "Session Completion", metric: "95%" },
      { label: "User Rating", metric: "4.95 ★" },
    ],
    tags: ["Mobile App", "React Native", "React", "HealthTech", "Haptics"],
    heroImage: "https://koderspedia.com/wp-content/uploads/2025/10/3-1.png",
    featured: true,
  },
  {
    id: "doslogistics",
    slug: "doslogistics",
    title: "Doslogistics",
    client: "Doslogistics Global",
    category: "Websites",
    year: "2025",
    summary:
      "Modern freight forwarding, dispatch telematics, and high-capacity global supply chain coordination platform.",
    challenge:
      "Legacy logistics systems were slow to parse freight manifests, difficult to navigate, and lacked real-time route visibility.",
    solution:
      "Crafted an art-directed Webflow and custom web application with interactive freight rate calculators and live fleet tracking vectors.",
    results: [
      { label: "Fleet Efficiency", metric: "+45%" },
      { label: "Freight Managed", metric: "$80M+" },
      { label: "Route Optimization", metric: "35%" },
    ],
    tags: ["Webflow", "Web Development", "Logistics", "Supply Chain", "UI/UX"],
    heroImage: "https://koderspedia.com/wp-content/uploads/2025/10/8434.png",
    featured: true,
  },
  {
    id: "your-nyc-experience",
    slug: "your-nyc-experience",
    title: "Your Nyc Experience",
    client: "Your NYC Experience",
    category: "Websites",
    year: "2025",
    summary:
      "Premier New York City luxury concierge portal, VIP booking engine, and curated urban exploration platform.",
    challenge:
      "Creating an ultra-luxurious, dynamic digital brand identity that converts international travelers into high-ticket excursion clients.",
    solution:
      "Designed a sleek, high-performing Webflow web application with bespoke micro-interactions, itinerary planners, and instant booking hooks.",
    results: [
      { label: "Booking Conversion", metric: "+58%" },
      { label: "Monthly Visitors", metric: "420K+" },
      { label: "Satisfaction", metric: "99%" },
    ],
    tags: ["Webflow", "Web Development", "Luxury Concierge", "Interactive UI"],
    heroImage: "https://koderspedia.com/wp-content/uploads/2025/10/14-1.png",
    featured: true,
  },
  {
    id: "organic-produce-finder",
    slug: "organic-produce-finder",
    title: "Organic Produce Finder",
    client: "Organic Produce Finder",
    category: "Mobile Apps",
    year: "2025",
    summary:
      "Direct farm-to-table hyperlocal marketplace connecting conscious consumers with organic growers.",
    challenge:
      "Managing perishable dynamic inventory and route-optimized local farm pickup scheduling across hundreds of independent growers.",
    solution:
      "Engineered a reactive React Native mobile app with map-based inventory discovery, farmer profiles, and seamless one-tap checkouts.",
    results: [
      { label: "Local Farms", metric: "600+" },
      { label: "Repeat Orders", metric: "78%" },
      { label: "Delivery Time", metric: "< 24h" },
    ],
    tags: ["React Native", "Mobile App", "Marketplace", "E-Commerce"],
    heroImage: "https://koderspedia.com/wp-content/uploads/2025/10/18661.png",
    featured: true,
  },
  {
    id: "mind-nourishment",
    slug: "mind-nourishment",
    title: "Mind Nourishment",
    client: "Mind Nourishment",
    category: "Mobile Apps",
    year: "2025",
    summary:
      "Mental wellness, cognitive habit reinforcement, and structured psychology routines with interactive progress tracking.",
    challenge:
      "Designing psychology-backed mood exercises that feel calming, welcoming, and frictionless rather than clinical.",
    solution:
      "Formulated a tactile React Native mobile experience with fluid card interactions and mood analytics.",
    results: [
      { label: "User Retention", metric: "65%" },
      { label: "Sessions Completed", metric: "1.2M+" },
      { label: "Rating", metric: "4.8 ★" },
    ],
    tags: ["Mobile App", "React Native", "UI/UX Design", "Mental Health"],
    heroImage: "https://koderspedia.com/wp-content/uploads/2025/10/11.png",
    featured: true,
  },
  {
    id: "queen-of-diamond",
    slug: "queen-of-diamond",
    title: "Queen of Diamond",
    client: "Queen of Diamond",
    category: "Mobile Apps",
    year: "2025",
    summary:
      "High-energy casino gaming app and interactive digital entertainment web experience with multiplayer tables.",
    challenge:
      "Achieving fluid 60 FPS table animations, real-time multiplayer networking, and crisp visual design on low-bandwidth connections.",
    solution:
      "Built a gaming app and companion website with lightweight WebSocket synchronization and rich audio-visual mechanics.",
    results: [
      { label: "Active Players", metric: "500K+" },
      { label: "Average Session", metric: "38 min" },
      { label: "Render Target", metric: "60 FPS" },
    ],
    tags: ["Gaming App", "Website", "Interactive", "Entertainment"],
    heroImage: "https://koderspedia.com/wp-content/uploads/2025/10/5.png",
    featured: true,
  },
  {
    id: "sofi",
    slug: "sofi",
    title: "Sofi",
    client: "Sofi",
    category: "Shopify",
    year: "2025",
    summary:
      "Luxury lifestyle brand store with high-conversion product showcases and frictionless headless checkout flows.",
    challenge:
      "Reducing mobile cart abandonment and highlighting premium craftsmanship with ultra-fast page speeds.",
    solution:
      "Architected a custom Shopify theme with instant variant previewing, interactive lookbooks, and accelerated payment gateways.",
    results: [
      { label: "Conversion Lift", metric: "+42%" },
      { label: "Average Order Value", metric: "+28%" },
      { label: "Checkout Speed", metric: "1.4s" },
    ],
    tags: ["Shopify", "E-Commerce", "Luxury Brand", "Mobile Optimization"],
    heroImage: "https://koderspedia.com/wp-content/uploads/2025/10/1930.png",
    featured: false,
  },
  {
    id: "lavish-elegance-design",
    slug: "lavish-elegance-design",
    title: "Lavish Elegance Design",
    client: "Lavish Elegance Design",
    category: "Shopify",
    year: "2025",
    summary:
      "High-end custom interior and couture product commerce experience with bespoke product configuration.",
    challenge:
      "Translating tactile luxury fabrics and interior customization into an engaging online purchasing journey.",
    solution:
      "Designed a custom Shopify store with high-res material zoom, room visualizer embeds, and concierge order flows.",
    results: [
      { label: "Revenue Growth", metric: "+115%" },
      { label: "Mobile Share", metric: "82%" },
      { label: "Store Rating", metric: "5.0 ★" },
    ],
    tags: ["Shopify", "E-Commerce", "Art Direction", "Luxury Couture"],
    heroImage: "https://koderspedia.com/wp-content/uploads/2025/10/1.png",
    featured: false,
  },
];

