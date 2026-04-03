import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Albert Castineira | Full Stack Developer",
    template: "%s | Albert Castineira",
  },
  description:
    "Portfolio de Albert Castineira, Full Stack Developer en Barcelona especializado en React, Next.js y aplicaciones web modernas.",
  applicationName: "Albert Castineira Portfolio",
  keywords: [
    "Albert Castineira",
    "Albert Dev",
    "Full Stack Developer",
    "Desarrollador Full Stack",
    "React Developer",
    "Next.js",
    "Portfolio",
    "Barcelona",
  ],
  authors: [{ name: "Albert Castineira" }],
  creator: "Albert Castineira",
  publisher: "Albert Castineira",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Albert Castineira Portfolio",
    title: "Albert Castineira | Full Stack Developer",
    description:
      "Portfolio de Albert Castineira, Full Stack Developer en Barcelona especializado en React, Next.js y aplicaciones web modernas.",
    images: [
      {
        url: "/AlbertCastiñeira.jpg",
        width: 700,
        height: 700,
        alt: "Albert Castineira - Full Stack Developer",
      },
    ],
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Albert Castineira | Full Stack Developer",
    description:
      "Portfolio de Albert Castineira, Full Stack Developer en Barcelona especializado en React, Next.js y aplicaciones web modernas.",
    images: ["/AlbertCastiñeira.jpg"],
    creator: "@albertcastineira",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
