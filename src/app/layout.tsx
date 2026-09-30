import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Custom 77 — Handcrafted Metal & Wood Furniture · Denver, CO",
  description:
    "Custom 77 blends metalwork with woodwork to create durable, built-to-fit furniture and architectural pieces for Denver-area homes and small businesses. Hardwood, raw steel, honest craft.",
  keywords: [
    "custom furniture",
    "metal and wood furniture",
    "Denver furniture maker",
    "welded steel furniture",
    "walnut table",
    "floating shelves Denver",
    "custom steel handrail",
    "handmade Colorado",
  ],
  openGraph: {
    title: "Custom 77 — Handcrafted Metal & Wood Furniture · Denver, CO",
    description:
      "Sleek, modern furniture and architectural pieces built to last. Hardwood, raw steel, and durable finishes. Serving Denver and beyond.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom 77",
    description: "Handcrafted Metal & Wood Furniture · Denver, CO",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased pb-14 md:pb-0">{children}</body>
    </html>
  );
}
