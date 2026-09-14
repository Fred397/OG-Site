export interface CaseStudy {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  impactMetric: string;
  impactLabel: string;
  tags: string[];
  gradient: string;
  image: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  capabilities: string[];
  techStack: string[];
  accentColor: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const METRICS = [
  { value: '40+', label: 'Global Clients', detail: 'From Seed Stage to Fortune 500' },
  { value: '340+', label: 'Shipped Products', detail: 'High-Impact Web & Mobile Systems' },
  { value: '99.98%', label: 'Infrastructure Uptime', detail: 'Mission-Critical Cloud SLA' },
  { value: '25+', label: 'Design & Tech Awards', detail: 'Recognized for Engineering Mastery' }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'product-design',
    number: '01',
    title: 'Product Design & UI/UX',
    tagline: 'Interfaces engineered for cognitive ease and high conversion.',
    description: 'We craft bespoke design systems, interactive prototypes, and behavioral user journeys that turn casual visitors into loyal power users.',
    capabilities: ['User Research & Persona Mapping', 'Interactive Figma Prototyping', 'Custom Design Systems', 'Usability Audits & Heuristics'],
    techStack: ['Figma', 'Tokens Studio', 'Framer', 'Protopie'],
    accentColor: '#00F0FF'
  },
  {
    id: 'web-engineering',
    number: '02',
    title: 'Full-Stack Web Systems',
    tagline: 'High-concurrency web apps, SaaS platforms, and enterprise portals.',
    description: 'Bespoke web architectures optimized for sub-second load times, global edge caching, and scalable multi-tenant infrastructure.',
    capabilities: ['Custom SaaS Platforms', 'Headless E-Commerce', 'Real-Time Data Dashboards', 'Micro-Frontends & APIs'],
    techStack: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'GraphQL'],
    accentColor: '#046BD2'
  },
  {
    id: 'mobile-apps',
    number: '03',
    title: 'Native & Cross-Platform Mobile',
    tagline: '60–120 FPS buttery smooth iOS and Android mobile experiences.',
    description: 'From native Swift/Kotlin to universal Flutter/React Native solutions, we deliver high-retention mobile software designed for app store dominance.',
    capabilities: ['iOS & Android Native Apps', 'Flutter Cross-Platform', 'IoT & Smart Device Sync', 'Offline-First Architecture'],
    techStack: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'Firebase'],
    accentColor: '#7928CA'
  },
  {
    id: 'ai-automation',
    number: '04',
    title: 'AI Systems & Automation',
    tagline: 'Generative AI integrations and automated intelligence pipelines.',
    description: 'Supercharge your operations by integrating custom LLM agents, predictive workflows, and automated computer vision into your core product.',
    capabilities: ['Custom LLM Fine-Tuning', 'Autonomous Agent Workflows', 'Semantic Vector Search', 'Predictive ML Models'],
    techStack: ['Python', 'LangChain', 'OpenAI', 'Pinecone', 'PyTorch'],
    accentColor: '#00FF88'
  },
  {
    id: 'cloud-devops',
    number: '05',
    title: 'Cloud Architecture & DevOps',
    tagline: 'Resilient cloud infrastructure engineered for zero downtime.',
    description: 'Automated CI/CD pipelines, containerized microservices, and multi-region failover deployments built for hyper-growth scale.',
    capabilities: ['AWS / GCP Cloud Architecture', 'Kubernetes & Docker Clusters', 'Zero-Downtime CI/CD', 'HIPAA / SOC2 Compliance'],
    techStack: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Cloudflare'],
    accentColor: '#FF9900'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'lecavalier-cellars',
    category: 'E-Commerce / Mobile App',
    title: 'Lecavalier Cellars',
    subtitle: 'Luxury Vineyard Concierge & Private Membership Ecosystem',
    description: 'Engineered a bespoke mobile and web commerce platform with sommelier recommendation algorithms and real-time private vintage cellar tracking.',
    impactMetric: '+184%',
    impactLabel: 'Increase in Repeat Member Orders',
    tags: ['Mobile App', 'UI/UX', 'Stripe Payments', 'React Native'],
    gradient: 'from-purple-900/40 via-purple-600/20 to-transparent',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'vstream-aviation',
    category: 'Enterprise SaaS / Web',
    title: 'V-Stream Aviation',
    subtitle: 'Private Jet Charter Quoting & Fleet Dispatch Engine',
    description: 'Built a real-time flight calculation engine that reduced charter booking latency from 4 hours to under 90 seconds with automated fleet tracking.',
    impactMetric: '3.4x',
    impactLabel: 'Booking Velocity Multiplier',
    tags: ['Next.js', 'Real-time WebSocket', 'Tailwind', 'PostgreSQL'],
    gradient: 'from-cyan-900/40 via-blue-600/20 to-transparent',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'restaurant-techs',
    category: 'Fintech / POS Systems',
    title: 'Restaurant Techs Platform',
    subtitle: 'Unified Kitchen Display & Multi-Location Point of Sale',
    description: 'Developed an offline-first POS and kitchen telemetry platform processing thousands of live table orders across multi-branch hospitality groups.',
    impactMetric: '99.99%',
    impactLabel: 'Uptime Across 120+ Locations',
    tags: ['Offline-First', 'TypeScript', 'Node.js', 'GraphQL'],
    gradient: 'from-emerald-900/40 via-teal-600/20 to-transparent',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'mind-nourishment',
    category: 'HealthTech / Mobile App',
    title: 'Mind Nourishment for the Soul',
    subtitle: 'Audio Mindfulness, Daily Reflection & Biometric Tracking',
    description: 'An emotionally resonant wellness app featuring spatial audio meditations, mood journals, and smart sleep pattern telemetry.',
    impactMetric: '4.9 ★',
    impactLabel: 'Rating with 50K+ Monthly Active Users',
    tags: ['Flutter', 'Spatial Audio', 'Firebase', 'UX Design'],
    gradient: 'from-indigo-900/40 via-purple-600/20 to-transparent',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1000&auto=format&fit=crop'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    author: 'Christineh',
    role: 'Product Lead',
    company: 'Venture Studio',
    content: 'I had a wonderful experience with Opus Geeks. They are deeply knowledgeable, responsive, and were able to get exactly what I was going for with both design and complex backend features.',
    rating: 5
  },
  {
    id: '2',
    author: 'Neptali Martinez',
    role: 'Founder & CEO',
    company: 'Nexus Digital',
    content: 'These guys are awesome, professional, accurate and fast. Peter and the engineering team are responsive, and our web platform looks phenomenal. I recommend them 100%!',
    rating: 5
  },
  {
    id: '3',
    author: 'Vanessa Soto',
    role: 'Operations Director',
    company: 'Savanne Holdings',
    content: 'Both Eric & Peter are great to work with! They provide high-value technical feedback, incorporate stakeholder inputs effortlessly, and delivered ahead of schedule.',
    rating: 5
  },
  {
    id: '4',
    author: 'Gabrielle Johnson',
    role: 'Managing Partner',
    company: 'Elevate Media',
    content: 'After a disastrous debacle with another agency, Opus Geeks took over and within days delivered EXACTLY what our brand needed. Professionalism and efficiency at its highest level.',
    rating: 5
  }
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Discover & Deconstruct',
    description: 'We audit your technical constraints, analyze user psychology, and architect a strategic roadmap before writing a single line of code.'
  },
  {
    step: '02',
    title: 'Architect & Prototype',
    description: 'Interactive wireframes and design systems are tested against real user feedback to validate mechanics and eliminate friction.'
  },
  {
    step: '03',
    title: 'Engineer & Accelerate',
    description: 'Modular, test-driven full-stack engineering in rapid two-week sprints with weekly live staging demonstrations.'
  },
  {
    step: '04',
    title: 'Launch & Hyper-Scale',
    description: 'Zero-downtime deployment to global edge CDN with continuous telemetry, performance tuning, and 24/7 SLA maintenance.'
  }
];

export const TECH_ECOSYSTEM = [
  { name: 'TypeScript', category: 'Language', icon: '⚡' },
  { name: 'React', category: 'Frontend', icon: '⚛️' },
  { name: 'Next.js', category: 'Framework', icon: '▲' },
  { name: 'Node.js', category: 'Backend', icon: '🟢' },
  { name: 'Flutter', category: 'Mobile', icon: '📱' },
  { name: 'Python', category: 'AI/Data', icon: '🐍' },
  { name: 'PostgreSQL', category: 'Database', icon: '🐘' },
  { name: 'GraphQL', category: 'API', icon: '🕸️' },
  { name: 'Docker', category: 'DevOps', icon: '🐳' },
  { name: 'AWS Cloud', category: 'Cloud', icon: '☁️' },
  { name: 'Three.js', category: 'WebGL/3D', icon: '✨' },
  { name: 'Tailwind CSS', category: 'Styling', icon: '🎨' }
];

export const FAQS: FAQItem[] = [
  {
    question: 'How quickly can Opus Geeks kick off a new project?',
    answer: 'Once we align on scope during our initial consultation, our sprint team can initiate discovery, architecture modeling, and design prototyping within 48 to 72 hours.',
    category: 'Process'
  },
  {
    question: 'Who owns the intellectual property and codebase?',
    answer: 'You own 100% of the intellectual property, design tokens, source code, and cloud infrastructure upon project milestone completion. Zero vendor lock-in.',
    category: 'Ownership'
  },
  {
    question: 'How do you ensure 60–120 FPS performance on complex web apps?',
    answer: 'We build with GPU-composited CSS transforms, code-split dynamic bundles, throttle off-screen WebGL shaders, and leverage edge CDN caching to ensure sub-100ms response times.',
    category: 'Engineering'
  },
  {
    question: 'Do you provide post-launch maintenance and continuous support?',
    answer: 'Yes. We offer continuous SLA agreements covering 24/7 uptime monitoring, critical security patching, operating system updates, and iterative feature development.',
    category: 'Support'
  }
];
