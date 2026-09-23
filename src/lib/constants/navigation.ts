import { NavItem } from "@/lib/types";

export const navigationItems: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Services",
    href: "/services",
    children: [
      {
        label: "Web Development",
        description: "Custom web applications, modern architectures, and headless platforms.",
        href: "/services/web-development",
      },
      {
        label: "App Development",
        description: "Native & cross-platform iOS & Android mobile applications.",
        href: "/services/app-development",
      },
      {
        label: "UI/UX Design",
        description: "Design systems, interactive prototypes, and conversion-focused product design.",
        href: "/services/ui-ux-design",
      },
    ],
  },
  {
    label: "Work",
    href: "/work",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Insights",
    href: "/insights",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];
