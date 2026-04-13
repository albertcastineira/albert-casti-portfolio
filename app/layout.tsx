import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { siteUrl, siteUrlObject } from "../lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: siteUrlObject,
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
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Albert Castineira Portfolio",
    title: "Albert Castineira | Full Stack Developer",
    description:
      "Portfolio de Albert Castineira, Full Stack Developer en Barcelona especializado en React, Next.js y aplicaciones web modernas.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Albert Castineira portfolio preview",
      },
    ],
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Albert Castineira | Full Stack Developer",
    description:
      "Portfolio de Albert Castineira, Full Stack Developer en Barcelona especializado en React, Next.js y aplicaciones web modernas.",
    images: ["/opengraph-image"],
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
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#131313]">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
