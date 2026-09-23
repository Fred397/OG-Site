import { InsightArticle } from "@/lib/types";

export const insightsData: InsightArticle[] = [
  {
    id: "rendering-high-performance-3d-web",
    slug: "rendering-high-performance-3d-web",
    title: "Engineering 60FPS Three.js Experiences Without Draining Client Battery",
    category: "Engineering",
    readTime: "6 min read",
    publishedAt: "Oct 2024",
    excerpt:
      "A deep dive into GPU compositing, Draco compression, selective render loops, and memory cleanup for heavy WebGL scenes.",
    author: {
      name: "Engineering Core",
      role: "Graphics & Performance Lab",
    },
  },
  {
    id: "designing-tactile-interfaces",
    slug: "designing-tactile-interfaces",
    title: "The Architecture of Tactile UX: Physics, Spacing & Intentional Motion",
    category: "Design",
    readTime: "5 min read",
    publishedAt: "Sep 2024",
    excerpt:
      "Why modern interfaces often feel sterile, and how we leverage micro-feedback, spring dynamics, and spatial hierarchy to restore tactile satisfaction.",
    author: {
      name: "Studio Design Lead",
      role: "Creative Direction",
    },
  },
  {
    id: "nextjs-server-actions-enterprise",
    slug: "nextjs-server-actions-enterprise",
    title: "Architecting Next.js App Router for Zero Client-Side Bloat",
    category: "Architecture",
    readTime: "7 min read",
    publishedAt: "Aug 2024",
    excerpt:
      "How to balance React Server Components, server-side data streaming, and tiny interactive islands for instantaneous time-to-interactive.",
    author: {
      name: "Platform Architect",
      role: "Systems & Cloud",
    },
  },
];
