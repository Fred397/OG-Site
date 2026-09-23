import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/lib/constants/site-config";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Digital Product Studio",
    "Web Development",
    "App Development",
    "UI/UX Design",
    "Next.js Development",
    "Product Design",
    "Accessible Websites",
  ],
  authors: [{ name: "Opus Geeks" }],
  creator: "Opus Geeks",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" },
    ],
    apple: [
      { url: "/logo.png", type: "image/png" },
    ],
    shortcut: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${manrope.variable} font-sans antialiased min-h-screen flex flex-col bg-[#0b0f19] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200`}
      >
        <Navbar />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
