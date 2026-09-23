export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
  children?: {
    label: string;
    description?: string;
    href: string;
    badge?: string;
  }[];
}

export interface ServiceDetail {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  capabilities: string[];
  deliverables: string[];
  techStack: string[];
  stats?: {
    label: string;
    value: string;
  }[];
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  client: string;
  category: string;
  year: string;
  summary: string;
  challenge: string;
  solution: string;
  results: {
    label: string;
    metric: string;
  }[];
  tags: string[];
  heroImage: string;
  featured?: boolean;
}

export interface InsightArticle {
  id: string;
  slug: string;
  title: string;
  category: string;
  readTime: string;
  publishedAt: string;
  excerpt: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
}
