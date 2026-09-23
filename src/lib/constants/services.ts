import { ServiceDetail } from "@/lib/types";

export const servicesData: ServiceDetail[] = [
  {
    id: "web-development",
    slug: "web-development",
    title: "Web Development",
    tagline: "High-throughput, scalable web architectures & custom platforms",
    description:
      "We design and build bespoke web applications, headless commerce systems, enterprise portals, and real-time platforms engineered for lightning speed, airtight security, and seamless scalability.",
    capabilities: [
      "Custom Full-Stack Web Applications",
      "Next.js, React & TypeScript Architecture",
      "Headless CMS & High-Volume E-Commerce",
      "API Engineering, GraphQL & Microservices",
      "Cloud Infrastructure, CI/CD & DevOps",
      "Database Optimization & Real-Time Sync",
    ],
    deliverables: [
      "Production-ready Next.js / React codebase",
      "Automated testing & CI/CD pipelines",
      "Cloud architecture & deployment setup",
      "Technical documentation & API schemas",
    ],
    techStack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Redis", "Docker", "AWS", "Vercel"],
    stats: [
      { label: "Lighthouse Score Target", value: "95+" },
      { label: "Uptime Reliability", value: "99.9%" },
    ],
  },
  {
    id: "app-development",
    slug: "app-development",
    title: "App Development",
    tagline: "Fluid, high-performance iOS and Android mobile experiences",
    description:
      "From native Swift & Kotlin powerhouses to versatile Flutter & React Native architectures, we build mobile apps that feel instantaneous, responsive, and tactile on every screen.",
    capabilities: [
      "iOS (Swift) & Android (Kotlin) Native Development",
      "Cross-Platform React Native & Flutter Apps",
      "Offline-First Data Architecture & Local Caching",
      "Biometrics, Push Notifications & Device APIs",
      "App Store & Google Play Launch Management",
      "In-App Purchases, Subscriptions & Payment Integrations",
    ],
    deliverables: [
      "Tested iOS & Android application binaries",
      "App Store & Play Store deployment configuration",
      "Real-time analytics & crash reporting integration",
      "Backend sync & webhook endpoints",
    ],
    techStack: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "GraphQL", "Fastlane"],
    stats: [
      { label: "Average Frame Rate", value: "60-120 FPS" },
      { label: "Store Compliance Rate", value: "100%" },
    ],
  },
  {
    id: "ui-ux-design",
    slug: "ui-ux-design",
    title: "UI/UX Design",
    tagline: "Art-directed digital identities, rigorous UX, and design systems",
    description:
      "We blend visual storytelling, behavioral psychology, and systematic component architecture to craft interfaces that users love to touch, explore, and convert on.",
    capabilities: [
      "User Research & Journey Architecture",
      "Figma Design Systems & Token Systems",
      "Interactive Wireframing & Rapid Prototyping",
      "High-Fidelity Interface & Art Direction",
      "Micro-Interactions & Motion Choreography",
      "Accessibility (WCAG 2.1 AA) Compliance",
    ],
    deliverables: [
      "Modular Figma token design system",
      "Interactive micro-prototype flows",
      "Developer handoff documentation & specs",
      "Brand identity guidelines & asset kits",
    ],
    techStack: ["Figma", "Design Tokens", "Spline", "Principle", "After Effects", "Style Dictionary"],
    stats: [
      { label: "Design System Reusability", value: "90%+" },
      { label: "Usability Rating", value: "4.9/5" },
    ],
  },
];
